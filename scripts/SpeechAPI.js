let hasSpoken = false;
let newVoice = null;

export async function speachToText() {
    while (!hasSpoken) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    const blob = newVoice;
    const formData = new FormData();
    formData.append('audio', blob, 'voiceOut.webm');
    const response = await $fetch('/api/SpeechToTextAPI', {
        method: 'POST',
        body: formData,
    });
    hasSpoken = false;
    return response;
};
export function getUserMedia() {
    navigator.mediaDevices.getUserMedia({audio: true, type: 'audio/webm'})
    .then(function(mediaStreamObj) {
        
        let audio = document.getElementById('audio');

        audio.srcObject = mediaStreamObj;
        let audioSave = document.getElementById('audio-save');
        let mediaRecorder = new MediaRecorder(mediaStreamObj, {mimeType: 'audio/webm'});
        let chunks = [];
        
        let start = document.getElementById('audio-Btn');
        let stop = document.getElementById('audio-Btn');
        
        start.addEventListener('mousedown', (ev)=>{
            mediaRecorder.start();
            
        })
        stop.addEventListener('mouseout', (ev)=>{
            mediaRecorder.stop();
            
        })
        stop.addEventListener('mouseup', (ev)=>{
            mediaRecorder.stop();
            
        });
        mediaRecorder.ondataavailable = function(ev) {
            chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev)=>{
            let blob = new Blob(chunks, { 'type' : 'audio/webm;' });
            newVoice = blob
            chunks = [];
            let audioURL = window.URL.createObjectURL(blob);
            audioSave.src = audioURL;
            hasSpoken = true;
        }
    })
    .catch(error => {
        console.error(error);
    });
}



/**
 * @param {String} text
 * @param {String} languageCode
 * @param {String} voiceName
 * @param {String} audioEncoding
 * @param {Number} rateOfSpeech
 */
export async function textToSpeech(text, languageCode, voiceName, audioEncoding, rateOfSpeech) {
    const audioContext = new window.AudioContext();
    const response = await $fetch('/api/TextToSpeech', {
        method: 'POST',
        body: JSON.stringify({ text, languageCode, voiceName, audioEncoding, rateOfSpeech }),
      }).then(async data => {
            const { audioContent } = data;
            // Decode base64 audio data (assuming it's base64 encoded)
            const binaryString = atob(audioContent);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            await new Promise((resolve) => {
                audioContext.decodeAudioData(bytes.buffer, async (buffer) => {
                    const source = audioContext.createBufferSource();
                    source.buffer = buffer;
                    source.connect(audioContext.destination);
                    source.start(0);
                    source.onended = () => {
                        resolve();
                    };
                });
            });
        })
        .catch(error => console.error('Error processing audio context JSON:', error).then(() => {return "404"}));
    return "200";
}


    
