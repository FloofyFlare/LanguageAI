export default defineEventHandler(async (event) => {
    const formData = readFormData(event);
    const audioFile = (await formData).get('audio');
    const audioBlob = new Blob([audioFile], { type: 'audio/webm' }); // Adjust type if necessary

    const runtimeConfig = useRuntimeConfig()
    const DEEPINFRA_API_KEY = `${runtimeConfig.deepInfra}`;

    const newformData = new FormData();
    newformData.append('audio', audioBlob, 'voiceIn.webm');

    const response = await fetch('https://api.deepinfra.com/v1/inference/openai/whisper-large-v3', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${DEEPINFRA_API_KEY}`,
        },
        body: newformData,
    });
    const data = await response.json();
    return data.text;
});


    
