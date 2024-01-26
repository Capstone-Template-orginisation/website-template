import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_4432cf6a.mjs';
import { b as $$LinkCard } from './LinkCard_dc6772e9.mjs';
import 'clsx';

const frontmatter = {
  "title": "Check out our products!",
  "description": "Thoth Tech's latest and greatest"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "artGallery",
      children: [createVNode($$LinkCard, {
        title: "Art Gallery",
        description: "a digital art gallery platform for the\ndisplaying and enjoying of art. One of our up and coming products. ",
        href: "/products/art-gallery/example/"
      }), createVNode("img", {
        src: "/artgallery.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "courseFlow",
      children: [createVNode($$LinkCard, {
        title: "CourseFlow",
        description: "This project aims to assists students and\ncourse directors in course planning and in\ncomprehending the requirements of\ncertain courses",
        href: "/products/courseflow/example/"
      }), createVNode("img", {
        src: "/courseflow.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "operations",
      children: [createVNode($$LinkCard, {
        title: "Operations",
        description: "a dedicated team for monitoring the other\nproducts and making their jobs as easier\nthrough research documentation..",
        href: "/products/company-operations/example/"
      }), createVNode("img", {
        src: "/operation.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "ontrack",
      children: [createVNode($$LinkCard, {
        title: "Ontrack",
        description: "an innovative Learning Management\nSystem that is designed for a skill-based\ncourse delivery model.",
        href: "/products/ontrack/example/"
      }), createVNode("img", {
        src: "/ontrack.png",
        class: "pi"
      })]
    }), "\n", createVNode("div", {
      class: "splashkit",
      children: [createVNode($$LinkCard, {
        title: "SplashKit",
        description: "a C++ Software Development Kit. It is\nbeginner-friendly to assist in introductory\nprogramming education, and can be used\nto create 2D games.",
        href: "/products/splashkit/example/"
      }), createVNode("img", {
        src: "/splashkit.png",
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
const url = "src/content/docs/products/products.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/products.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/products.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
