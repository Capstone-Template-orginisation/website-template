import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_c5329516.mjs';
import { j as $$Image } from './pages/404_00d7dc95.mjs';
import 'clsx';

const frontmatter = {
  "title": "Frequently Asked Questions (FAQ)",
  "description": "Frequently Asked Questions"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    ul: "ul",
    li: "li",
    div: "div",
    link: "link",
    script: "script",
    figure: "figure",
    figcaption: "figcaption",
    pre: "pre",
    code: "code",
    span: "span",
    button: "button"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Welcome to Thoth Techs Frequently Asked Questions (FAQ) section! We understand that you might have\nqueries about contributing in Thoth Tech or seek clarification on how to use certain tools. Our aim\nis to provide you with comprehensive and straightforward answers to address your concerns promptly."
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Where can I find the link to Thoth Tech GitHub channel"
      }), createVNode(_components.p, {
        children: ["Find link ", createVNode(_components.a, {
          href: "https://github.com/thoth-tech/",
          children: "here"
        }), "."]
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Which Thoth Tech repository should I clone to contribute to the Documentation Website"
      }), createVNode(_components.p, {
        children: ["To contribute to the Documentation Website, locate the ", createVNode(_components.a, {
          href: "https://github.com/thoth-tech/ThothTech-Documentation-Website/tree/main",
          children: "\u201CThothtech-Documentation-Website\u201D repository"
        }), ",\nnavigate to the src/content/docs, and upload your .md or .mdx file to the relevant folder."]
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "When I attempt to run the documentation website locally, it says \u201CThe .nvmrc file is using a\nversion of node that is not supported by astro anymore\u201D. Please how do I fix this?"
      }), createVNode(_components.p, {
        children: "Re-install or upgrade the version of Node.js software on your laptop."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "How do I make a newly created folder to appear on the side navbar of the Documentation website?"
      }), createVNode(_components.p, {
        children: "On the astro.config.mjs file, create a new label (if main folder) or item(if sub folder). You do not\nneed to reinvent the will, you can copy from what already exists on the astro.config.mjs file, insert\nthe copied block into the right location, and modify the labels and directory link."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Is there a video that helps me understand how to migrate documents to the Documentation website?"
      }), createVNode(_components.p, {
        children: "Yes, there is. Find some helpful links below."
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.a, {
            href: "https://deakin365.sharepoint.com/:v:/r/sites/ThothTech2/Shared%20Documents/General/Instructional%20Video%20-%20How%20To%20Upload%20Documents%20to%20Starlight.mp4?csf=1&web=1&e=s26lMo",
            children: "Instructional video"
          }), "."]
        }), "\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://deakin365-my.sharepoint.com/:v:/g/personal/s221460489_deakin_edu_au/EXib27xJI2hCkHpzBXOxxYQBOfDGhhQJ1A23ciisMROeRA?xsdata=MDV8MDF8fDgxMTZlNDYzMzAyZTQxYTZhNGE2MDhkYmYyMWMwMGY1fGQwMjM3OGVjMTY4ODQ2ZDU4NTQwMWMyOGI1ZjQ3MGY2fDB8MHw2MzgzNjk5NzQyOTIxNjE3MDJ8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMM1JsWVcxekx6RTVPbEZtZUY5VFZFaFZPVEJQYzFaWlFraFdXVXRvYzFKUk5XZHRSV1V3Y3psUk5tdFBjRUptTm1Kc2FUZ3hRSFJvY21WaFpDNTBZV04yTWk5amFHRnVibVZzY3k4eE9UcFJabmhmVTFSSVZUa3dUM05XV1VKSVZsbExhSE5TVVRWbmJVVmxNSE01VVRaclQzQkNaalppYkdrNE1VQjBhSEpsWVdRdWRHRmpkakl2YldWemMyRm5aWE12TVRjd01UUXdNRFl5T0RNd01nPT18NTg0ZjIwNWZmZjA3NGZlZTQyNjQwOGRiZjIxYzAwZjN8ZTU2N2Y4NzA4YjFlNDI1YWIzYjRhM2I1NmExY2QwMjE%3D&sdata=TldtNGVnTDJWWlVnb2lBMGlZZXlLNEI1M2p5emU3ZndBYmpSTkV6MnN0QT0%3D",
            children: "Help hub session recording"
          })
        }), "\n"]
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "What do I do to resolve Linelint issues in the CI build checks for my Pull Request?"
      }), createVNode(_components.p, {
        children: "Identify the file which has the lint issue from the details section of the CI Build check. Open the\nidentified file on Visual Studio code or your editor of choice, right click on the document and select\nFormat document with markdownlint. Ensure that you have the markdownlint extension installed on your\ncode editor."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "What do I do to resolve Prettier issues in the CI build checks for my Pull Request?"
      }), createVNode(_components.p, {
        children: "Identify the file which has the prettier issue from the details section of the CI Build check. Open\nthe identified file on Visual Studio code or your editor of choice, right click on the document and\nselect Format document with Prettier. Ensure that you have the Prettier extension installed on your\ncode editor."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "My Pull request keeps failing the netlify checks"
      }), createVNode(_components.p, {
        children: "In such instances, the primary reason is often due to the absence of a title block at the start of your markdown file.\nFor example."
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: [createVNode(_components.link, {
          rel: "stylesheet",
          href: "/_astro/ec.0epgx.css"
        }), createVNode(_components.script, {
          type: "module",
          src: "/_astro/ec.sgewm.js"
        }), createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            tabindex: "0",
            dir: "ltr",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "title: Frequently Asked Questions (FAQ)"
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "description: Frequently Asked Questions"
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "title: Frequently Asked Questions (FAQ)\x7Fdescription: Frequently Asked Questions",
              children: createVNode(_components.div, {})
            })
          })]
        })]
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
const url = "src/content/docs/reference/faq.mdx";
const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/reference/faq.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/reference/faq.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
