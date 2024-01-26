import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_c5329516.mjs';
import 'clsx';
import { P as Posts, a as Page } from './Blog_935a6dc7.mjs';
import { f as getTagsStaticPaths, c as getPageProps } from './404_4432cf6a.mjs';
/* empty css                          */
const pluralRules = new Intl.PluralRules("en-US");
function pluralize(count, singular, plural) {
  const rule = pluralRules.select(count);
  switch (rule) {
    case "one": {
      return `${count} ${singular}`;
    }
    case "other": {
      return `${count} ${plural}`;
    }
    default: {
      throw new Error(`Unexpected plural rule '${rule}'.`);
    }
  }
}

const $$Astro = createAstro();
function getStaticPaths() {
  return getTagsStaticPaths();
}
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { entries, label, tag } = Astro2.props;
  const pageProps = getPageProps(label, `blog/tags/${tag}`);
  return renderTemplate`${renderComponent($$result, "Page", Page, { ...pageProps, "class": "astro-e2qntac6" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="count astro-e2qntac6">${pluralize(entries.length, "post", "posts")} with the tag &ldquo;${label}&rdquo;</div> ${renderComponent($$result2, "Posts", Posts, { "entries": entries, "pageProps": pageProps, "class": "astro-e2qntac6" })} ` })} `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/routes/Tags.astro", void 0);

const $$file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/starlight-blog/routes/Tags.astro";
const $$url = undefined;

export { $$Tags as default, $$file as file, getStaticPaths, $$url as url };
