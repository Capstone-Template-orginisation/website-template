import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_00d7dc95.mjs';
import { $ as $$Card, a as $$CardGrid, b as $$LinkCard } from './LinkCard_157b7d50.mjs';
import 'clsx';

const frontmatter = {
  "title": "OnTrack",
  "description": "The landing page for OnTrack."
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
      title: "Welcome to OnTrack",
      icon: "bars"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "GitHub",
        href: "https://github.com/doubtfire-lms"
      }), createVNode($$LinkCard, {
        title: "Trello",
        href: "https://trello.com/b/IKabVmzt/ontrack"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "about-us",
      children: "About Us"
    }), "\n", createVNode(_components.p, {
      children: "This team is working on the production of an innovative Learning Management System that is designed\nfor a skill-based course delivery model."
    }), "\n", createVNode(_components.p, {
      children: "Students will gain real experience thourgh regular practice receive rapid feedback on their work on\na weekly basis. This platform is used to connect tutors and students at Deakin university as well as\nother universities around the world."
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
const url = "src/content/docs/products/ontrack/example.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/example.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/example.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
