const DEEPINFRA_API_KEY = "93m4KBwYEIpDpmAZQwswvN2UM2bFQY6Z";
let hasSpoken = false;
let newVoice = null;
export async function curlDeepInfra() {
    while (!hasSpoken) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    const blob = newVoice;
    const formData = new FormData();
    formData.append('audio', blob, 'voiceOut.webm');

    const response = await fetch('https://api.deepinfra.com/v1/inference/openai/whisper-large-v3', {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${DEEPINFRA_API_KEY}`,
        },
        body: formData,
    });

    const data = await response.json();
    console.log(data.text);
    hasSpoken = false;
    return data.text;
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
            console.log(mediaRecorder.state);
        })
        stop.addEventListener('mouseup', (ev)=>{
            mediaRecorder.stop();
            console.log(mediaRecorder.state);
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

const GOOGLE_API_KEY = "ya29.a0AcM612xsUu1OeQJ-3r-0OAQmcqr1JYX_Z6JjO7Bg3v56Bq_SiiSgq-82gBYH5ogosbM_pDbbH24qzAsfbw6OJMDqeQ-1c50zzCLpqpVSQW-3S3k_OpBpWFmcf7n3mr6ivUf9u0RfuyiORJxqf4MWkhU2ZZ8m8zFmLRR3voqUMwaCgYKAYwSARMSFQHGX2MikC94npUlEYxF0JduyZi_Yg0177";
/**
 * @param {String} text
 * @param {String} languageCode
 * @param {String} voiceName
 * @param {String} audioEncoding
 * @param {Number} rateOfSpeech
 */
export async function textToSpeech(text, languageCode, voiceName, audioEncoding, rateOfSpeech) {
    const projectId = "zeta-dock-430723-p9";

    const headers = {
        "Authorization": `Bearer ${GOOGLE_API_KEY}`,
        "x-goog-user-project": projectId,
        "Content-Type": "application/json; charset=utf-8"
    };

    const body = {
        "input": {
            "text": `${text}`,
        },
        "voice": {
            "languageCode": `${languageCode}`,
            "name": voiceName,
        },
        "audioConfig": {
            "audioEncoding": audioEncoding,
            "speakingRate": rateOfSpeech
        }
    };

    const response = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => response.json())
        .then(data => {
        const { audioContent } = data;

        // Decode base64 audio data (assuming it's base64 encoded)
        const binaryString = atob(audioContent);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        audioContext.decodeAudioData(bytes.buffer, buffer => {
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start(0);
        });
        })
        .catch(error => console.error('Error processing audio context JSON:', error));
}
const audioContext = new window.AudioContext();

    
