import OpenAI from "openai";

const stream = false; // or true

interface ChatMessage {
  role: string;
  content: string;
}

export default defineEventHandler(async (event) => {
  // Parse the request body as an object containing a 'chat' array
  const body = await readBody<{ chat: ChatMessage[] }>(event);

  // Access the 'chat' array from the body
  const chatHistory = body.chat;
  console.log(chatHistory);
  // Check if chatMessages is an array
  if (Array.isArray(chatHistory)) {
    // Iterate over each ChatMessage object and print its content
    chatHistory.forEach((message, index) => {
      console.log(`Message ${index + 1} Content: ${message.content}`);
    });
  } else {
    console.error('Chat is not an array');
    return { error: 'Invalid chat format' };
  }

  const assistantMessage = chatHistory.find(message => message.role === 'assistant');
  const assistantContent = assistantMessage.content;
  const runtimeConfig = useRuntimeConfig()
  
  const openai = new OpenAI({
    baseURL: 'https://api.deepinfra.com/v1/openai',
    apiKey: `${runtimeConfig.deepInfra}`,
    "dangerouslyAllowBrowser": true,
  });
  const completion = await openai.chat.completions.create({
    messages: chatHistory,
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct",
    stream: stream,
    max_new_tokens: 200,
    usage: {prompt_tokens: 15, completion_tokens: 16, total_tokens: 31},
  });

  if (stream) {
    for await (const chunk of completion) {
      if (chunk.choices[0].finish_reason) {
        console.log(chunk.choices[0].finish_reason,
                    chunk.usage.prompt_tokens,
                    chunk.usage.completion_tokens);
      } else {
        console.log(chunk.choices[0].delta.content);
      }
    }
  } else {
    console.log(completion.choices[0].message.content);
    console.log(completion.usage.prompt_tokens, completion.usage.completion_tokens);
  }
  return completion.choices[0].message.content;
  return result.data
});


