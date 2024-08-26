
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
    console.log (GOOGLE_API_KEY);
    const projectId = "zeta-dock-430723-p9";

    console.log("API Key:", GOOGLE_API_KEY);
    console.log("Text:", text);
    console.log("Language Code:", languageCode);
    console.log("Voice Name:", voiceName);
    console.log("Audio Encoding:", audioEncoding);
    console.log("Rate of Speech:", rateOfSpeech);

    const headers = {
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
    const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_API_KEY}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });
    console.log (response);

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText}`, errorText);
        throw new Error(`Request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data;
});