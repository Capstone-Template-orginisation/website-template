export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/Blog_01f1f606.mjs').then(n => n.B);

export { page };
