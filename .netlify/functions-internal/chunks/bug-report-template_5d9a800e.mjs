import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"bug-report-template\">Bug Report Template</h2>\n<h3 id=\"name-of-the-bug\">Name of the bug</h3>\n<p>Provide a descriptive name of the bug.</p>\n<h3 id=\"steps-to-reproduce\">Steps to reproduce</h3>\n<p>List all steps to reproduce the bug.</p>\n<h3 id=\"expected-result\">Expected result</h3>\n<p>Describe the correct result expected.</p>\n<h3 id=\"actual-result\">Actual result</h3>\n<p>Describe the current erroneous result.</p>\n<h3 id=\"a-screenshot-gif-or-video\">A screenshot, GIF, or video</h3>\n<p>Include something to show the bug in action.</p>\n<h3 id=\"helpful-logs\">Helpful logs</h3>\n<p>Include any logs that show the error.</p>\n<p><em>Based on template from</em>\n<a href=\"https://www.linkedin.com/learning/programming-foundations-software-testing-qa/create-a-test-strategy?autoSkip=true&#x26;autoplay=true&#x26;contextUrn=urn%3Ali%3AlyndaLearningPath%3A57f7e27c3dd559e018dfe994&#x26;resume=false&#x26;u=2104084\"><em>Programming Foundations: Software Testing/QA</em></a>\n<em>with Meaghan Lewis on LinkedIn Learning</em></p>";

				const frontmatter = {"title":"Bug Report Template","sidebar":{"label":"Bug Report Template"}};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/processes/quality-assurance/templates/bug-report-template.md";
				const url = undefined;
				function rawContent() {
					return "\n## Bug Report Template\n\n### Name of the bug\n\nProvide a descriptive name of the bug.\n\n### Steps to reproduce\n\nList all steps to reproduce the bug.\n\n### Expected result\n\nDescribe the correct result expected.\n\n### Actual result\n\nDescribe the current erroneous result.\n\n### A screenshot, GIF, or video\n\nInclude something to show the bug in action.\n\n### Helpful logs\n\nInclude any logs that show the error.\n\n_Based on template from_\n[_Programming Foundations: Software Testing/QA_](https://www.linkedin.com/learning/programming-foundations-software-testing-qa/create-a-test-strategy?autoSkip=true&autoplay=true&contextUrn=urn%3Ali%3AlyndaLearningPath%3A57f7e27c3dd559e018dfe994&resume=false&u=2104084)\n_with Meaghan Lewis on LinkedIn Learning_\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"bug-report-template","text":"Bug Report Template"},{"depth":3,"slug":"name-of-the-bug","text":"Name of the bug"},{"depth":3,"slug":"steps-to-reproduce","text":"Steps to reproduce"},{"depth":3,"slug":"expected-result","text":"Expected result"},{"depth":3,"slug":"actual-result","text":"Actual result"},{"depth":3,"slug":"a-screenshot-gif-or-video","text":"A screenshot, GIF, or video"},{"depth":3,"slug":"helpful-logs","text":"Helpful logs"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
