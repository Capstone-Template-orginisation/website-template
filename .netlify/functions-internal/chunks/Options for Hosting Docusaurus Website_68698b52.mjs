import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p>This documents consists of hosting platforms recommended by Docusaurus for hosting its website.</p>\n<ol>\n<li><strong>Koyeb</strong>: Starter plan: Pay-per-use by the second, $5.50 of free monthly usage</li>\n<li><strong>Render</strong>: Individuals: Free</li>\n<li><strong>Qovery</strong>: Unlimited Developers: Free</li>\n<li><strong>Hostman</strong>: $4 per month</li>\n<li><strong>Surge</strong>: Surge Basic: Free</li>\n<li><strong>Azure Web Apps</strong>: Free for personal projects. $13.378 per month for production apps.</li>\n</ol>";

				const frontmatter = {"title":"Options for Hosting Docusaurus Website"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/projects/docusaurus-documentation/Options for Hosting Docusaurus Website.md";
				const url = undefined;
				function rawContent() {
					return "\nThis documents consists of hosting platforms recommended by Docusaurus for hosting its website.\n\n1. **Koyeb**: Starter plan: Pay-per-use by the second, $5.50 of free monthly usage\n2. **Render**: Individuals: Free\n3. **Qovery**: Unlimited Developers: Free\n4. **Hostman**: $4 per month\n5. **Surge**: Surge Basic: Free\n6. **Azure Web Apps**: Free for personal projects. $13.378 per month for production apps.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
