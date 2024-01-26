import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_2e5e586a.mjs';
import { $ as $$Card, a as $$CardGrid, b as $$LinkCard } from './LinkCard_03ce885e.mjs';
import 'clsx';

const frontmatter = {
  "title": "Company Operations",
  "description": "The landing page for Company Operations."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "about-us",
    "text": "About Us"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h3: "h3",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$Card, {
      title: "Welcome to Company Operations",
      icon: "bars"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "GitHub",
        href: "https://github.com/thoth-tech/Company-Operations"
      }), createVNode($$LinkCard, {
        title: "Trello",
        href: "https://trello.com/b/nH5S3ecw/company-operations"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "about-us",
      children: "About Us"
    }), "\n", createVNode(_components.p, {
      children: "This team oversees the entire operations of Thoth Tech and strives to make things easier. We aim to\nmake the onboarding process as smooth and clear as possible, as well as increase the knowledge of\nour seniors in meaningful ways while creating policies to improve the wellbeing of all company\nemployees."
    }), "\n", createVNode(_components.p, {
      children: "In the short term, we would like to create new documentation, policies, workflows, and processes\nthat are relevant to improve the company\u2019s outlook and overall productivity. In the long term, we aim\nto store documentations in a dedicated website (Starlight) to make it easy to push updates, new\nfeatures, and bug fixes to everyone without the need to gain access to our GitHub repository."
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
const url = "src/content/docs/products/company-operations/example.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/example.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/example.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
