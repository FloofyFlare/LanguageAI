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