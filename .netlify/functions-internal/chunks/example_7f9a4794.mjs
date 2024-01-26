import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_2e5e586a.mjs';
import { $ as $$Card, a as $$CardGrid, b as $$LinkCard } from './LinkCard_03ce885e.mjs';
import 'clsx';

const frontmatter = {
  "title": "CourseFlow",
  "description": "An example page to fill out the knowledge base where necissary."
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
      title: "Welcome to CourseFlow",
      icon: "bars"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "GitHub",
        href: "https://github.com/thoth-tech/CourseFlow"
      }), createVNode($$LinkCard, {
        title: "Trello",
        href: "https://trello.com/b/eSAkspIF/courseflow"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "about-us",
      children: "About Us"
    }), "\n", createVNode(_components.p, {
      children: "CourseFlow is a clear and easy-to-use course planning platform that helps students navigate their\ncourse requirements and graduate with confidence."
    }), "\n", createVNode(_components.p, {
      children: "Each year, several thousand students enrol in Deakin University. Unfortunately, a lot of these\nstudents struggle with understanding the requirements they need to fulfil in order to graduate."
    }), "\n", createVNode(_components.p, {
      children: "What electives do you do, have you met prerequisites or other course rules? What exactly will you\nlearn and benefit from a unit? Universities also have problems with putting out course-relevant\ninformation that is easily digestible. Most information in course maps doesn\u2019t apply to students\nthat have transferred from other degrees or have an altered path to the original map. The team at\nCourseFlow hopes to mitagate these issues through the CourseFlow platform."
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
const url = "src/content/docs/products/courseflow/example.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/courseflow/example.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/courseflow/example.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
