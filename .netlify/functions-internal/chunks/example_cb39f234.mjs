import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_2e5e586a.mjs';
import { $ as $$Card, a as $$CardGrid, b as $$LinkCard } from './LinkCard_03ce885e.mjs';
import 'clsx';

const frontmatter = {
  "title": "Art Gallery",
  "description": "The landing page for the Art Gallery project."
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
      title: "Welcome to the Art Gallery",
      icon: "bars"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "GitHub",
        href: "https://github.com/thoth-tech/art-gallery"
      }), createVNode($$LinkCard, {
        title: "Documentation",
        href: "https://github.com/thoth-tech/documentation/tree/main/docs/ArtGallery"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "about-us",
      children: "About Us"
    }), "\n", createVNode(_components.p, {
      children: "The Art Gallery is a product being created to help sell and advertise rural Art in Australia. The\nproject is in production not only for its artistic merits, but through its development the team at\nthe Art Gallery hope to showcase and introduce webapp development to newer students earlier in their\nI.T. career."
    }), "\n", createVNode(_components.p, {
      children: "This career is still in the early stages of development, so there are always exciting new\nopportunities to take advantage of as the project grows and changes."
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
const url = "src/content/docs/products/art-gallery/example.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/art-gallery/example.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/art-gallery/example.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
