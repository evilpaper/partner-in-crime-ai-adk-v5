import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const model = google('gemini-2.0-flash');

const stream = streamText({
  model,
  prompt: 'Write a poem about my wife Helena.',
});

for await (const chunk of stream.toUIMessageStream()) {
  console.log(chunk);
}
