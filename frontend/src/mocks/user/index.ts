import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('api/user', async () => {
    return HttpResponse.json({ sub: 'Justin Lueckel' });
  }),
];

export default handlers;
