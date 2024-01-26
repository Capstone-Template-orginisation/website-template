import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p>Thoth Tech prides itself on our ability to produce sustainable solutions, this can be achieved\nthrough documentation. Documentation is an important element in the software development life cycle.\nIt continues throughout the entire project. It is imperative to remember, others will take over your\nprojects or want to learn more about how it works and why.</p>\n<p>Documentation is offical information, provided by the company, for users and contributors.\nDocumentation is written for specific audiences and provides knowledge on the development lifecycle\nand end product.</p>\n<p>The Thoth Tech documentation is stored in the\n<a href=\"https://github.com/thoth-tech/documentation\">documentation repositry</a>., in the company GitHub. All\ndocumentation should be written in markdown and includes: research, meeting minutes, software user\nguides, and more.</p>\n<h2 id=\"top-tips-for-thoth-tech-writing\">Top tips for Thoth Tech writing</h2>\n<p>Effective writing is clear, easy to read, and concise. Thoth Tech writing should follow the\nguidelines of plain English (Australian English).</p>\n<p>Here at Thoth Tech, we aim for all our writing to meet these goals:</p>\n<ul>\n<li>\n<p><strong>To Empower:</strong> We want our people to have the knowledge to make the most of our products.</p>\n</li>\n<li>\n<p><strong>To Respect:</strong> We want our people to feel included and accepted for who they are.</p>\n</li>\n<li>\n<p><strong>To Educate:</strong> We want to assist our people in their learning and provide them with the\ninformation they need.</p>\n</li>\n<li>\n<p><strong>To Guide:</strong> We want to lead our people in a thoughtful manner towards their goals.</p>\n</li>\n<li>\n<p><strong>To be Honest:</strong> We want to be truthful to our people and focus on our real strengths.</p>\n</li>\n</ul>\n<p>When documenting, we recommend you consider the following when writing your documentation:</p>\n<ul>\n<li>Clear</li>\n<li>Useful</li>\n<li>Friendly</li>\n<li>Appropriate</li>\n<li>Consistent</li>\n<li>Accessible</li>\n</ul>\n<p>More information here:</p>\n<ul>\n<li><a href=\"writing-style-guide.md\">Writing Style Guide</a></li>\n<li><a href=\"docs/../../../learning/training/writing-documentation.md\">Documentation Writing Workshop</a></li>\n</ul>";

				const frontmatter = {"title":"Documenting for Thoth Tech","sidebar":{"label":"Documenting for Thoth Tech"}};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/processes/Documentation/documenting-for-thoth-tech.md";
				const url = undefined;
				function rawContent() {
					return "\nThoth Tech prides itself on our ability to produce sustainable solutions, this can be achieved\nthrough documentation. Documentation is an important element in the software development life cycle.\nIt continues throughout the entire project. It is imperative to remember, others will take over your\nprojects or want to learn more about how it works and why.\n\nDocumentation is offical information, provided by the company, for users and contributors.\nDocumentation is written for specific audiences and provides knowledge on the development lifecycle\nand end product.\n\nThe Thoth Tech documentation is stored in the\n[documentation repositry](https://github.com/thoth-tech/documentation)., in the company GitHub. All\ndocumentation should be written in markdown and includes: research, meeting minutes, software user\nguides, and more.\n\n## Top tips for Thoth Tech writing\n\nEffective writing is clear, easy to read, and concise. Thoth Tech writing should follow the\nguidelines of plain English (Australian English).\n\nHere at Thoth Tech, we aim for all our writing to meet these goals:\n\n- **To Empower:** We want our people to have the knowledge to make the most of our products.\n\n- **To Respect:** We want our people to feel included and accepted for who they are.\n\n- **To Educate:** We want to assist our people in their learning and provide them with the\n  information they need.\n\n- **To Guide:** We want to lead our people in a thoughtful manner towards their goals.\n\n- **To be Honest:** We want to be truthful to our people and focus on our real strengths.\n\nWhen documenting, we recommend you consider the following when writing your documentation:\n\n- Clear\n- Useful\n- Friendly\n- Appropriate\n- Consistent\n- Accessible\n\nMore information here:\n\n- [Writing Style Guide](writing-style-guide.md)\n- [Documentation Writing Workshop](docs/../../../learning/training/writing-documentation.md)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"top-tips-for-thoth-tech-writing","text":"Top tips for Thoth Tech writing"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
