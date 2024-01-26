import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"test-plan-template\">Test Plan Template</h2>\n<h3 id=\"test-cases\"><strong>TEST CASES</strong></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>#</th><th>Scenario</th><th>Input</th><th>Expected Result</th><th>Actual Result</th><th>Automated?</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td>(Y/N)</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>";

				const frontmatter = {"title":"Test Plan Template","sidebar":{"label":"Test Plan Template"}};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/processes/quality-assurance/templates/test-plan-template.md";
				const url = undefined;
				function rawContent() {
					return "\n## Test Plan Template\n\n### **TEST CASES**\n\n| #   | Scenario | Input | Expected Result | Actual Result | Automated? |\n| --- | -------- | ----- | --------------- | ------------- | ---------- |\n|     |          |       |                 |               | (Y/N)      |\n|     |          |       |                 |               |            |\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"test-plan-template","text":"Test Plan Template"},{"depth":3,"slug":"test-cases","text":"TEST CASES"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
