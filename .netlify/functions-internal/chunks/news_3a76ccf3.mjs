import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_00d7dc95.mjs';
import { b as $$LinkCard } from './LinkCard_157b7d50.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stay Up to Date with Everything Thoth Tech!",
  "description": "Thoth Tech's latest and greatest"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "starlight",
      children: [createVNode($$LinkCard, {
        title: "Thoth Tech Documentation website",
        description: "One Location for all Thoth Tech documentation. Say hello \nto documentation retrieval issues and welcome to maximum visibility ",
        href: "/products/products/"
      }), createVNode("img", {
        src: "/starlightlogo.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "courseFlow",
      children: [createVNode($$LinkCard, {
        title: "Welcome Package",
        description: "We are glad that you are here! Begin your journey with us \nby reviewing the welcome package",
        href: "/policies/thoth-tech-onboarding-document/"
      }), createVNode("img", {
        src: "/welcomelogo.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "operations",
      children: [createVNode($$LinkCard, {
        title: "How We Use GitHub",
        description: "Our GitHub management policy provides guidelines on \nhow to utilize GitHub in Thoth Tech",
        href: "/policies/github-management-policy/"
      }), createVNode("img", {
        src: "/githublogo.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "ontrack",
      children: [createVNode($$LinkCard, {
        title: "How We Use Trello",
        description: "As we run an agile environment, Trello is used to maange \nall products task. Our Trello management policy provides guidelines \non how to use Trello in Thoth Tech.",
        href: "/policies/trello-management-policy/"
      }), createVNode("img", {
        src: "/trellologo.png",
        class: "pi"
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
  }) : _createMdxContent();
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/news/news.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/news/news.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/news/news.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
