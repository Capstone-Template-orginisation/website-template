import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"purpose\">Purpose</h2>\n<p>The website aims to showcase Thoth Tech’s products and serve as a central hub for those seeking\ninformation about the company. It will feature comprehensive content about the company’s mission,\nactivities, and its range of products. Additionally, the site will host informative blog posts\nguiding users on product usage and relevant IT tasks.</p>\n<h2 id=\"benefits-of-a-company-website\">Benefits of a Company Website</h2>\n<ul>\n<li>A platform to showcase our identity and brand on a global scale, making our information accessible\nto a wide audience.</li>\n<li>Showcase our products to the world.</li>\n<li>Having a website enhances our credibility and professionalism. It establishes trust with potential\nclients, customers, or visitors.</li>\n<li>Allows people learn about our products and what we do.</li>\n<li>Provides valuable content, tutorials, or documentation relevant to the IT industry.</li>\n</ul>\n<h2 id=\"tools-and-language\">Tools and Language</h2>\n<ul>\n<li>Visual Studio Code</li>\n<li>GitHub</li>\n<li>Astro</li>\n<li>Tailwind CSS</li>\n<li>Vanilla JavaScript</li>\n<li>Markdown</li>\n</ul>\n<h2 id=\"website-interfaces\">Website Interfaces</h2>\n<ul>\n<li>Home page</li>\n<li>Products page</li>\n<li>Blogs page</li>\n<li>Gallery</li>\n<li>Documentation Website (This would be a button on the nav bar that takes viewers to the\ndocumentation website)</li>\n</ul>\n<h2 id=\"color-scheme\">Color Scheme</h2>\n<ul>\n<li>Black</li>\n<li>White</li>\n<li>Gray</li>\n</ul>\n<h2 id=\"project-plan\">Project Plan</h2>\n<ul>\n<li>Create a low-level design for the website</li>\n<li>Receive approval to start creating the website.</li>\n<li>Start website creation</li>\n<li>Generate a testing strategy and perform required testing.</li>\n<li>Showcase created website.</li>\n<li>Deploy to production</li>\n<li>Publish website on Netlify</li>\n</ul>";

				const frontmatter = {"title":"Thoth Tech Website Deployment Plan"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/projects/Thoth-Tech-Website/Website Spike Plan.md";
				const url = undefined;
				function rawContent() {
					return "\n## Purpose\n\nThe website aims to showcase Thoth Tech's products and serve as a central hub for those seeking\ninformation about the company. It will feature comprehensive content about the company's mission,\nactivities, and its range of products. Additionally, the site will host informative blog posts\nguiding users on product usage and relevant IT tasks.\n\n## Benefits of a Company Website\n\n- A platform to showcase our identity and brand on a global scale, making our information accessible\n  to a wide audience.\n- Showcase our products to the world.\n- Having a website enhances our credibility and professionalism. It establishes trust with potential\n  clients, customers, or visitors.\n- Allows people learn about our products and what we do.\n- Provides valuable content, tutorials, or documentation relevant to the IT industry.\n\n## Tools and Language\n\n- Visual Studio Code\n- GitHub\n- Astro\n- Tailwind CSS\n- Vanilla JavaScript\n- Markdown\n\n## Website Interfaces\n\n- Home page\n- Products page\n- Blogs page\n- Gallery\n- Documentation Website (This would be a button on the nav bar that takes viewers to the\n  documentation website)\n\n## Color Scheme\n\n- Black\n- White\n- Gray\n\n## Project Plan\n\n- Create a low-level design for the website\n- Receive approval to start creating the website.\n- Start website creation\n- Generate a testing strategy and perform required testing.\n- Showcase created website.\n- Deploy to production\n- Publish website on Netlify\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"purpose","text":"Purpose"},{"depth":2,"slug":"benefits-of-a-company-website","text":"Benefits of a Company Website"},{"depth":2,"slug":"tools-and-language","text":"Tools and Language"},{"depth":2,"slug":"website-interfaces","text":"Website Interfaces"},{"depth":2,"slug":"color-scheme","text":"Color Scheme"},{"depth":2,"slug":"project-plan","text":"Project Plan"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
