import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, o as renderSlot, m as maybeRenderHead, i as addAttribute } from '../astro_c5329516.mjs';
import 'clsx';
import { $ as $$Page$1, g as getBlogEntryExcerpt, M as Metadata, a as MarkdownContent, P as PostTags, b as getBlogStaticPaths, c as getPageProps, d as config, e as PrevNextLinks } from './404_2e5e586a.mjs';
/* empty css                          *//* empty css                          */
const $$Astro$3 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Page;
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$Page$1, { ...Astro2.props, "class": "astro-h6mhcjsi" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/components/Page.astro", void 0);
const Page = $$Page;

const $$Astro$2 = createAstro();
const $$Preview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Preview;
  const { entry, pageProps } = Astro2.props;
  const Excerpt = await getBlogEntryExcerpt(entry);
  return renderTemplate`${maybeRenderHead()}<article class="preview astro-dr56dw7m"> <header class="astro-dr56dw7m"> <h2 class="astro-dr56dw7m"> <a${addAttribute(`/${entry.slug}`, "href")} class="astro-dr56dw7m">${entry.data.title}</a> </h2> ${renderComponent($$result, "Metadata", Metadata, { "entry": entry, "class": "astro-dr56dw7m" })} </header> ${renderComponent($$result, "MarkdownContent", MarkdownContent, { ...pageProps, "class": "astro-dr56dw7m" }, { "default": ($$result2) => renderTemplate`${typeof Excerpt === "string" ? Excerpt : renderTemplate`${renderComponent($$result2, "Excerpt", Excerpt, { "class": "astro-dr56dw7m" })}`}` })} <footer class="astro-dr56dw7m"> ${renderComponent($$result, "PostTags", PostTags, { "entry": entry, "class": "astro-dr56dw7m" })} </footer> </article> `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/components/Preview.astro", void 0);
const Preview = $$Preview;

const $$Astro$1 = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Posts;
  const { entries, pageProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="posts astro-xaz7kpyh"> ${entries.map((entry) => renderTemplate`${renderComponent($$result, "Preview", Preview, { "entry": entry, "pageProps": pageProps, "class": "astro-xaz7kpyh" })}`)} </div> `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/components/Posts.astro", void 0);
const Posts = $$Posts;

const $$Astro = createAstro();
function getStaticPaths() {
  return getBlogStaticPaths();
}
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { entries, nextLink, prevLink } = Astro2.props;
  const pageProps = getPageProps(config.title, "blog");
  return renderTemplate`${renderComponent($$result, "Page", Page, { ...pageProps, "class": "astro-w2yzoj57" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Posts", Posts, { "entries": entries, "pageProps": pageProps, "class": "astro-w2yzoj57" })} ${maybeRenderHead()}<footer class="not-content astro-w2yzoj57"> ${renderComponent($$result2, "PrevNextLinks", PrevNextLinks, { "next": nextLink, "prev": prevLink, "class": "astro-w2yzoj57" })} </footer> ` })} `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/routes/Blog.astro", void 0);

const $$file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/routes/Blog.astro";
const $$url = undefined;

const Blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Blog as B, Posts as P, Page as a };
