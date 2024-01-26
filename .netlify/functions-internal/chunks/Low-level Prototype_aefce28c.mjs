import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"how-to-navigate-the-live-figma-design\">How to Navigate the Live Figma Design</h2>\n<p>The live link for the figma protoype design can be found here -\n<a href=\"https://www.figma.com/proto/zoY61GY8hTJTobXlqOd2Qc/Thoth-Tech-Website?type=design&#x26;node-id=1-2&#x26;t=mr86o4LOinD1FfuY-0&#x26;scaling=min-zoom&#x26;page-id=0%3A1\">https://www.figma.com/proto/zoY61GY8hTJTobXlqOd2Qc/Thoth-Tech-Website?type=design&#x26;node-id=1-2&#x26;t=mr86o4LOinD1FfuY-0&#x26;scaling=min-zoom&#x26;page-id=0%3A1</a></p>\n<p>To navigate through the pages of the website, use the navigation bar menus.</p>\n<p><img src=\"/website-img1.png\" alt=\"Navbar\"></p>\n<p>After clicking on Products nav menu, you will be directed to the OnTrack page, after which you have\nto click Products to navigate through the various product pages.</p>\n<p><img src=\"/website-img2.png\" alt=\"Navbar\"></p>\n<p><strong>Note: The PDF design and figma file can be found in the Company Operations Repo >> Projects >>\nThoth Tech Website.</strong></p>";

				const frontmatter = {"title":"Low-Level Prototype"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/projects/Thoth-Tech-Website/Low-level Prototype.md";
				const url = undefined;
				function rawContent() {
					return "\n## How to Navigate the Live Figma Design\n\nThe live link for the figma protoype design can be found here -\n<https://www.figma.com/proto/zoY61GY8hTJTobXlqOd2Qc/Thoth-Tech-Website?type=design&node-id=1-2&t=mr86o4LOinD1FfuY-0&scaling=min-zoom&page-id=0%3A1>\n\nTo navigate through the pages of the website, use the navigation bar menus.\n\n![Navbar](/website-img1.png)\n\nAfter clicking on Products nav menu, you will be directed to the OnTrack page, after which you have\nto click Products to navigate through the various product pages.\n\n![Navbar](/website-img2.png)\n\n**Note: The PDF design and figma file can be found in the Company Operations Repo >> Projects >>\nThoth Tech Website.**\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"how-to-navigate-the-live-figma-design","text":"How to Navigate the Live Figma Design"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
