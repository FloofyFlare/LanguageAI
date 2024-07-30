import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: 'https://api.deepinfra.com/v1/openai',
  apiKey: "93m4KBwYEIpDpmAZQwswvN2UM2bFQY6Z",
  "dangerouslyAllowBrowser": true,
});

const stream = false; // or true

export async function infrence(){

  const completion = await openai.chat.completions.create({
    messages: [
      {role: "user", content: "Hello!"},
    ],
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
}
