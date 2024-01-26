export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/404_2e5e586a.mjs').then(n => n._);

export { page };
