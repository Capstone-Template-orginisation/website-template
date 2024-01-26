import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_00d7dc95.mjs';
import { $ as $$Card, a as $$CardGrid, b as $$LinkCard } from './LinkCard_157b7d50.mjs';
import 'clsx';

const frontmatter = {
  "title": "Welcome to capstone documenation template",
  "description": "Get started building your docs site with Starlight.",
  "template": "splash",
  "hero": {
    "tagline": "This site is a documenation repo for all  your company documents as well as a guide for using github, Trello and working in a capstone company.",
    "actions": [{
      "text": "Getting started!!",
      "link": "/products/products/",
      "icon": "right-arrow",
      "variant": "primary"
    }, {
      "text": "FAQ",
      "link": "/reference/faq/",
      "icon": "right-arrow",
      "variant": "primary"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "about-us",
    "text": "About Us:"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "about-us",
      children: "About Us:"
    }), "\n", createVNode($$Card, {
      title: "What we do",
      children: createVNode(_components.p, {
        children: "You should be adding a description here about your company, what it does and what kind of technology it works on. No more than a few paragraphs."
      })
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Policies",
        description: "Understand what we stand for.",
        href: "/policies/github-management-policy/"
      }), createVNode($$LinkCard, {
        title: "Process",
        description: "How can my company function?.",
        href: "/processes/introduction/"
      }), createVNode($$LinkCard, {
        title: "News",
        description: "Link to your Company website..",
        href: "/blog/"
      }), createVNode($$LinkCard, {
        title: "Leadership",
        description: "Meet our team.",
        href: "/teams-and-leadership/leadership-t2-2023/"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/index.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
