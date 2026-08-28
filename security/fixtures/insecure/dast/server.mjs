// TRAINING ONLY: a tiny local-only DAST target excluded from every build.
import { createServer } from 'node:http';

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url ?? '/', 'http://127.0.0.1');
  const name = requestUrl.searchParams.get('name') ?? 'learner';
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(`<h1>Hello ${name}</h1>`);
});

server.listen(4010, '127.0.0.1', () => console.log('Training target on 127.0.0.1:4010'));

