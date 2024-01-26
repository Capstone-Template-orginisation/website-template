import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ce5063c3.mjs';

const _page0  = () => import('./chunks/styles_9933d30c.mjs');
const _page1  = () => import('./chunks/scripts_d04e9aa5.mjs');
const _page2  = () => import('./chunks/Tags_2038e2d9.mjs');
const _page3  = () => import('./chunks/generic_30457eb8.mjs');
const _page4  = () => import('./chunks/Blog_c91fc6fc.mjs');
const _page5  = () => import('./chunks/404_5d829bbf.mjs');
const _page6  = () => import('./chunks/index_916ccb3c.mjs');const pageMap = new Map([["node_modules/astro-expressive-code/routes/styles.ts", _page0],["node_modules/astro-expressive-code/routes/scripts.ts", _page1],["node_modules/starlight-blog/routes/Tags.astro", _page2],["node_modules/astro/dist/assets/endpoint/generic.js", _page3],["node_modules/starlight-blog/routes/Blog.astro", _page4],["node_modules/@astrojs/starlight/404.astro", _page5],["node_modules/@astrojs/starlight/index.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
