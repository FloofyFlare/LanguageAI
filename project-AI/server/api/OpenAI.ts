
import {getBearerTokenProvider, ClientSecretCredential } from "@azure/identity";
import { AzureOpenAI } from "openai";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const endpointazure = `${runtimeConfig.azureEndpoint}`;
  const cred = new ClientSecretCredential(
    `${runtimeConfig.azureClient}`,
    `${runtimeConfig.azureTenant}`,
    `${runtimeConfig.azureSecret}`
  );
  const tokenProvider = getBearerTokenProvider(
    cred,
    "https://cognitiveservices.azure.com/.default"
  );
  throw createError(500, 'point1');
  
  interface ChatMessage {
    role: string;
    content: string;
  }
  const client = new AzureOpenAI(
    {
      tokenProvider,
      apiVersion: "2024-08-01-preview",
      endpoint: endpointazure,
    }
  );
  if (client === undefined) {
    throw createError(500, 'client is undefined');
  }
  // Parse the request body as an object containing a 'chat' array
  const body = await readBody<{ chat: ChatMessage[] }>(event);

  // Access the 'chat' array from the body
  const chatHistory = body.chat;
  if (chatHistory === undefined) {
    throw createError(500, 'chat is undefined');
  }
  // Check if chatMessages is an array
  if (Array.isArray(chatHistory)) {
    // Iterate over each ChatMessage object and print its content
    chatHistory.forEach((message, index) => {
    });
  } else {
    console.error('Chat is not an array');
    return { error: 'Invalid chat format' };
  }

  const result = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: chatHistory,
    max_tokens: 150,
  });


  console.log(result.choices[0].message.content);
  return result.choices[0].message.content;


});