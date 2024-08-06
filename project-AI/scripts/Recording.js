navigator.mediaDevices.getUserMedia({audio: true})
    .then(function(mediaStreamObj) {
        
        let audio = document.getElementById('audio');
        audio.onloadedmetadata =  function(ev) {
            //show in the video element what is being captured by the webcam
            audio.play();
        };

        audio.srcObject = mediaStreamObj;
        let audioSave = document.getElementById('audio-save');
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        let chunks = [];
        
        let start = document.getElementById('btnStart');
        let stop = document.getElementById('btnStop');
        
        start.addEventListener('click', (ev)=>{
            mediaRecorder.start();
            console.log(mediaRecorder.state);
        })
        stop.addEventListener('click', (ev)=>{
            mediaRecorder.stop();
            console.log(mediaRecorder.state);
        });
        mediaRecorder.ondataavailable = function(ev) {
            chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev)=>{
            let blob = new Blob(chunks, { 'type' : 'audio/mp4;' });
            chunks = [];
            let audioURL = window.URL.createObjectURL(blob);
            audioSave.src = audioURL;
        }
    })
    .catch(error => {
        console.error(error);
    });

export function startRecording() {
    audio.play();
}
export function endRecording() {
    const audio = document.querySelector('audio');
    audio.pause();
}