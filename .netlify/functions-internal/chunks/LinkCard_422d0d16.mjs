import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, u as unescapeHTML, o as renderSlot, i as addAttribute, F as Fragment, s as spreadAttributes } from './astro_c5329516.mjs';
import 'clsx';
import { k as $$Icon } from './pages/404_03a440f7.mjs';
/* empty css                                                             *//* empty css                                                                 *//* empty css                                                             */import { select } from 'hast-util-select';
import { rehype } from 'rehype';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';
/* empty css                                                                 */
const $$Astro$4 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card sl-flex astro-v5tidmuc"> <p class="title sl-flex astro-v5tidmuc"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "icon astro-v5tidmuc", "size": "1.333em" })}`} <span class="astro-v5tidmuc">${unescapeHTML(title)}</span> </p> <div class="body astro-v5tidmuc">${renderSlot($$result, $$slots["default"])}</div> </article> `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/user-components/Card.astro", void 0);

const $$Astro$3 = createAstro();
const $$CardGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const { stagger = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([["card-grid", { stagger }], "astro-zntqmydn"], "class:list")}>${renderSlot($$result, $$slots["default"])}</div> `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/user-components/CardGrid.astro", void 0);

const TabItemTagname = "starlight-tab-item";
const focusableElementSelectors = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]",
  "[tabindex]:not([disabled])"
].map((selector) => `${selector}:not([hidden]):not([tabindex="-1"])`).join(",");
let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
const tabsProcessor = rehype().data("settings", { fragment: true }).use(function tabs() {
  return (tree, file) => {
    file.data.panels = [];
    let isFirst = true;
    visit(tree, "element", (node) => {
      if (node.tagName !== TabItemTagname || !node.properties) {
        return CONTINUE;
      }
      const { dataLabel } = node.properties;
      const ids = getIDs();
      file.data.panels?.push({
        ...ids,
        label: String(dataLabel)
      });
      delete node.properties.dataLabel;
      node.tagName = "section";
      node.properties.id = ids.panelId;
      node.properties["aria-labelledby"] = ids.tabId;
      node.properties.role = "tabpanel";
      const focusableChild = select(focusableElementSelectors, node);
      if (!focusableChild) {
        node.properties.tabindex = 0;
      }
      if (isFirst) {
        isFirst = false;
      } else {
        node.properties.hidden = true;
      }
      return SKIP;
    });
  };
});
const processPanels = (html) => {
  const file = tabsProcessor.processSync({ value: html });
  return {
    /** Data for each tab panel. */
    panels: file.data.panels,
    /** Processed HTML for the tab panels. */
    html: file.toString()
  };
};

const $$Astro$2 = createAstro();
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tabs;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  return renderTemplate`${renderComponent($$result, "starlight-tabs", "starlight-tabs", { "class": "astro-esqgolmp" }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content astro-esqgolmp"> <ul role="tablist" class="astro-esqgolmp"> ${panels.map(({ label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab astro-esqgolmp"> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 && "true", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} class="astro-esqgolmp"> ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ` })}  `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/user-components/Tabs.astro", void 0);

const $$Astro$1 = createAstro();
const $$TabItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TabItem;
  const { label } = Astro2.props;
  if (!label) {
    throw new Error("Missing prop `label` on `<TabItem>` component.");
  }
  return renderTemplate`${renderComponent($$result, "TabItemTagname", TabItemTagname, { "data-label": label }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/user-components/TabItem.astro", void 0);

const $$Astro = createAstro();
const $$LinkCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="astro-mf7fz2mj"> <span class="sl-flex stack astro-mf7fz2mj"> <a${spreadAttributes(attributes, void 0, { "class": "astro-mf7fz2mj" })}> <span class="title astro-mf7fz2mj">${unescapeHTML(title)}</span> </a> ${description && renderTemplate`<span class="description astro-mf7fz2mj">${unescapeHTML(description)}</span>`} </span> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-arrow", "size": "1.333em", "class": "icon rtl:flip astro-mf7fz2mj" })} </div> `;
}, "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/node_modules/@astrojs/starlight/user-components/LinkCard.astro", void 0);

export { $$Card as $, $$CardGrid as a, $$LinkCard as b };
