
import {getBearerTokenProvider, ClientSecretCredential } from "@azure/identity";
import { AzureOpenAI } from "openai";
const cred = new ClientSecretCredential(
    "36a942fb-f7e8-4862-82e4-3c7f655d4d2c",
    "cdeece57-68b3-4625-ba3e-d1e37f9f6d6c",
    "46M8Q~RpT2Q2uX9PLMxf6xiB.SnHmLjEqB4rka5s"
);
const tokenProvider = getBearerTokenProvider(
  cred,
  "https://cognitiveservices.azure.com/.default"
);

interface ChatMessage {
  role: string;
  content: string;
}
const client = new AzureOpenAI(
  "https://yuuera.openai.azure.com/",
  { tokenProvider }
);
export default defineEventHandler(async (event) => {
  // Parse the request body as an object containing a 'chat' array
  const body = await readBody<{ chat: ChatMessage[] }>(event);

  // Access the 'chat' array from the body
  const chatHistory = body.chat;
  // Check if chatMessages is an array
  if (Array.isArray(chatHistory)) {
    // Iterate over each ChatMessage object and print its content
    chatHistory.forEach((message, index) => {
    });
  } else {
    console.error('Chat is not an array');
    return { error: 'Invalid chat format' };
  }

  const assistantMessage = chatHistory.find(message => message.role === 'assistant');
  const assistantContent = assistantMessage.content;
  const runtimeConfig = useRuntimeConfig(event);

  const result = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: chatHistory,
    max_tokens: 150,
  });


  console.log(result.choices[0].message.content);
  return result.choices[0].message.content;


});