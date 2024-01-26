import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent } from '../astro_c5329516.mjs';
import 'clsx';
import { p as paths, h as generateRouteData, $ as $$Page } from './404_03a440f7.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { Content, headings } = await Astro2.props.entry.render();
  const route = generateRouteData({ props: { ...Astro2.props, headings }, url: Astro2.url });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...route }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/index.astro", void 0);

const $$file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, getStaticPaths, $$url as url };
