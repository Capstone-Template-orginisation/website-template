import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p>==================</p>\n<p><strong>Spike:</strong> 2</p>\n<p><strong>Title:</strong> Prior Learning Summary</p>\n<p><strong>Author:</strong> Kyle Adams, <a href=\"mailto:kdadams@deakin.edu.au\">kdadams@deakin.edu.au</a></p>\n<h2 id=\"goals--deliverables\">Goals / Deliverables</h2>\n<p>The goal of this report is to reflect any prior learning from previous studies of knowledge base\ntechnologies, and to summarize portions relevant to the current knowledge base project to support\nthe current workers</p>\n<h2 id=\"technologies-tools-and-resources-used\">Technologies, Tools, and Resources Used</h2>\n<ul>\n<li>Text Editor: VsCode</li>\n<li><a href=\"https://github.com/thoth-tech/documentation/tree/main/docs/ArtGallery/Documentation%20Project\">Art Gallery Documentation Project Directory</a></li>\n</ul>\n<h2 id=\"tasks-undertaken\">Tasks Undertaken</h2>\n<ul>\n<li>Reviewed documentations from the art gallery documentation project.</li>\n<li>Summarized significant details relevant to the current project.</li>\n</ul>\n<h2 id=\"what-we-found-out\">What we found out</h2>\n<h3 id=\"knowledge-base-structure\">Knowledge Base Structure</h3>\n<p>The structure designs in this directory fall into three general types: grouped by frontend/backend,\ngrouped by project, grouped by client/developer. However, it appears that as the designs progressed,\nthe structure leaned more towards grouping content by project at a high level, and further\ncategorising documentation based on its use in each project towards the lower end of the structure.\nCategorising at the lower level included by technology and by individual, but ultimately it appears\nthat grouping by theme was the most popular method.</p>\n<h3 id=\"knowledge-base-content\">Knowledge Base Content</h3>\n<p>GitHub is repeatedly mentioned as a problem area for many newcomers, so a GitHub guide/tutorial\nappears vital to include in the knowledge base. Several groups also mention the inclusion of a\n‘footprint’ document, a document that records all suggestions for future improvements to a project\nand any ideas in progress but incomplete. Finally, almost every project group appears to want\ndocumentation that explains the technology stack involved in its workflow.</p>\n<h3 id=\"other-information\">Other Information</h3>\n<p>One suggestion briefly mentioned is that the knowledge base could be used to replace the handover\ndocument, containing all of the necessary information for newer members to understand the project in\nits current state. It is also worth mentioning that the knowledge base was intended to be utilised\nby both Thoth Tech members and the clientele of the project, so reporting information and\ntroubleshooting for each project solution was included in the content discussion.</p>\n<h2 id=\"recommendations\">Recommendations</h2>\n<p>This document recommends, based on the research and review discussed above, the following design and\ncreation practices:</p>\n<ul>\n<li>Separate the content between each project and further categorise content by theme of use for a\nmore accessible navigation process.</li>\n<li>Include technology stack guides/tutorials/troubleshooting information, especially in the use of\nGitHub and the knowledge base.</li>\n<li>Encourage the creation of ‘footprint’ documents to identify any future endeavours for a given\nproject, allowing members across trimesters to explore new possibilities and directions discovered\nor suggested by their predecessors.</li>\n</ul>";

				const frontmatter = {"title":"Prior Learning Outcome for a Documentation Website"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/projects/docusaurus-documentation/Prior Learning Outcome for Documentation Website.md";
				const url = undefined;
				function rawContent() {
					return "\n==================\n\n**Spike:** 2\n\n**Title:** Prior Learning Summary\n\n**Author:** Kyle Adams, <kdadams@deakin.edu.au>\n\n## Goals / Deliverables\n\nThe goal of this report is to reflect any prior learning from previous studies of knowledge base\ntechnologies, and to summarize portions relevant to the current knowledge base project to support\nthe current workers\n\n## Technologies, Tools, and Resources Used\n\n- Text Editor: VsCode\n- [Art Gallery Documentation Project Directory](https://github.com/thoth-tech/documentation/tree/main/docs/ArtGallery/Documentation%20Project)\n\n## Tasks Undertaken\n\n- Reviewed documentations from the art gallery documentation project.\n- Summarized significant details relevant to the current project.\n\n## What we found out\n\n### Knowledge Base Structure\n\nThe structure designs in this directory fall into three general types: grouped by frontend/backend,\ngrouped by project, grouped by client/developer. However, it appears that as the designs progressed,\nthe structure leaned more towards grouping content by project at a high level, and further\ncategorising documentation based on its use in each project towards the lower end of the structure.\nCategorising at the lower level included by technology and by individual, but ultimately it appears\nthat grouping by theme was the most popular method.\n\n### Knowledge Base Content\n\nGitHub is repeatedly mentioned as a problem area for many newcomers, so a GitHub guide/tutorial\nappears vital to include in the knowledge base. Several groups also mention the inclusion of a\n'footprint' document, a document that records all suggestions for future improvements to a project\nand any ideas in progress but incomplete. Finally, almost every project group appears to want\ndocumentation that explains the technology stack involved in its workflow.\n\n### Other Information\n\nOne suggestion briefly mentioned is that the knowledge base could be used to replace the handover\ndocument, containing all of the necessary information for newer members to understand the project in\nits current state. It is also worth mentioning that the knowledge base was intended to be utilised\nby both Thoth Tech members and the clientele of the project, so reporting information and\ntroubleshooting for each project solution was included in the content discussion.\n\n## Recommendations\n\nThis document recommends, based on the research and review discussed above, the following design and\ncreation practices:\n\n- Separate the content between each project and further categorise content by theme of use for a\n  more accessible navigation process.\n- Include technology stack guides/tutorials/troubleshooting information, especially in the use of\n  GitHub and the knowledge base.\n- Encourage the creation of 'footprint' documents to identify any future endeavours for a given\n  project, allowing members across trimesters to explore new possibilities and directions discovered\n  or suggested by their predecessors.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"goals--deliverables","text":"Goals / Deliverables"},{"depth":2,"slug":"technologies-tools-and-resources-used","text":"Technologies, Tools, and Resources Used"},{"depth":2,"slug":"tasks-undertaken","text":"Tasks Undertaken"},{"depth":2,"slug":"what-we-found-out","text":"What we found out"},{"depth":3,"slug":"knowledge-base-structure","text":"Knowledge Base Structure"},{"depth":3,"slug":"knowledge-base-content","text":"Knowledge Base Content"},{"depth":3,"slug":"other-information","text":"Other Information"},{"depth":2,"slug":"recommendations","text":"Recommendations"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };