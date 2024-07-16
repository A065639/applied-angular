import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('api/user', () => {
    return HttpResponse.json({ sub: 'Justin Lueckel' });
  }),
];

export default handlers;
