
interface toSpeech {
    text : String, 
    languageCode : String, 
    voiceName : String, 
    audioEncoding : String, 
    rateOfSpeech : Number
}

export default defineEventHandler(async (event) => {
    const { text, languageCode, voiceName, audioEncoding, rateOfSpeech } = await readBody<toSpeech>(event);
    const runtimeConfig = useRuntimeConfig()
    const GOOGLE_API_KEY = `${runtimeConfig.google}`;
    const projectId = "zeta-dock-430723-p9";
    console.log(text, languageCode, voiceName, audioEncoding, rateOfSpeech);
    const headers = {
        "Authorization": `Bearer ${GOOGLE_API_KEY}`,
        "x-goog-user-project": projectId,
        "Content-Type": "application/json; charset=utf-8"
    };

    const body = {
        "input": {
            "text": text,
        },
        "voice": {
            "languageCode": languageCode,
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
    });
    console.log (response);
    const data = await response.json();
    return data;
});