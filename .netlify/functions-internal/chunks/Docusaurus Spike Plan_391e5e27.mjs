import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p>==============</p>\n<p><strong>Name:</strong></p>\n<p>Docusaurus Recommendation plan</p>\n<h2 id=\"context\">Context</h2>\n<p>The operations team needs to determine if Docusaurus is an appropriate tool for storing Thoth tech’s\ndocumentation. It has been proposed as a better solution than just storing everything on the GitHub.\nThis spike outlines the steps needed to decide if this is the right solution for Thoth Tech.</p>\n<p><strong>Knowledge Gap:</strong></p>\n<p>any team members who are not familiar with docusaurus will need to be brought up to speed. Begin by\ngoing through the tool’s documentation which can be found at:\n<a href=\"https://docusaurus.io/docs/category/getting-started\">https://docusaurus.io/docs/category/getting-started</a></p>\n<p><strong>Skill Gap:</strong></p>\n<p>If team members are not up to date with syntax and technologies used by docusaurus, begin\nup-skilling ASAP. W3 schools has great resources if you are unsure where to start.\n<a href=\"https://www.w3schools.com/\">https://www.w3schools.com/</a></p>\n<p><strong>Technology Gap:</strong></p>\n<p>Hosting and deployment need to be researched before we can deploy an instance of Docusaurus.</p>\n<h2 id=\"goalsdeliverables\">Goals/Deliverables</h2>\n<ul>\n<li>Create a list of reasons for Thoth tech to adopt Docusaurus, and any recommendations for using it.</li>\n<li>Develop a basic test environment and some sample content.</li>\n</ul>\n<p><strong>Planned start date:</strong> Week 2 T2 2023</p>\n<p><strong>Deadline:</strong> The end of week 2 T2 2023</p>\n<h2 id=\"planning-notes\">Planning notes</h2>\n<ul>\n<li>Begin by up-skilling in relevant areas. (if necessary) CSS, HTML, Javascript, React and Typescript\nare the major ones.</li>\n<li>Create a Docusaurus test environment to test its capabilities and drawbacks.</li>\n<li>Get started with the Docusaurus docs page: <a href=\"https://docusaurus.io/docs\">https://docusaurus.io/docs</a></li>\n<li>Draw up a mock layout of the Docusaurus structure further down the line. (design pages, folders\netc.)</li>\n</ul>";

				const frontmatter = {"title":"Docusaurus Spike Plan"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/projects/docusaurus-documentation/Docusaurus Spike Plan.md";
				const url = undefined;
				function rawContent() {
					return "\n==============\n\n**Name:**\n\nDocusaurus Recommendation plan\n\n## Context\n\nThe operations team needs to determine if Docusaurus is an appropriate tool for storing Thoth tech's\ndocumentation. It has been proposed as a better solution than just storing everything on the GitHub.\nThis spike outlines the steps needed to decide if this is the right solution for Thoth Tech.\n\n**Knowledge Gap:**\n\nany team members who are not familiar with docusaurus will need to be brought up to speed. Begin by\ngoing through the tool's documentation which can be found at:\n<https://docusaurus.io/docs/category/getting-started>\n\n**Skill Gap:**\n\nIf team members are not up to date with syntax and technologies used by docusaurus, begin\nup-skilling ASAP. W3 schools has great resources if you are unsure where to start.\n<https://www.w3schools.com/>\n\n**Technology Gap:**\n\nHosting and deployment need to be researched before we can deploy an instance of Docusaurus.\n\n## Goals/Deliverables\n\n- Create a list of reasons for Thoth tech to adopt Docusaurus, and any recommendations for using it.\n- Develop a basic test environment and some sample content.\n\n**Planned start date:** Week 2 T2 2023\n\n**Deadline:** The end of week 2 T2 2023\n\n## Planning notes\n\n- Begin by up-skilling in relevant areas. (if necessary) CSS, HTML, Javascript, React and Typescript\n  are the major ones.\n- Create a Docusaurus test environment to test its capabilities and drawbacks.\n- Get started with the Docusaurus docs page: <https://docusaurus.io/docs>\n- Draw up a mock layout of the Docusaurus structure further down the line. (design pages, folders\n  etc.)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"context","text":"Context"},{"depth":2,"slug":"goalsdeliverables","text":"Goals/Deliverables"},{"depth":2,"slug":"planning-notes","text":"Planning notes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
