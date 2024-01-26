export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/Blog_0001e6aa.mjs').then(n => n.B);

export { page };
