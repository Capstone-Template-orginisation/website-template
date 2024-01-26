import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"1-introduction\">1. Introduction</h2>\n<h3 id=\"11-purpose\">1.1 Purpose</h3>\n<h3 id=\"12-intended-audience\">1.2 Intended Audience</h3>\n<h3 id=\"13-intended-use\">1.3 Intended Use</h3>\n<h3 id=\"14-scope\">1.4 Scope</h3>\n<h3 id=\"15-definitions-and-acronyms\">1.5 Definitions and Acronyms</h3>\n<h2 id=\"overall-description\">Overall Description</h2>\n<h3 id=\"21-user-needs\">2.1 User Needs</h3>\n<h3 id=\"22-assumptions-and-dependencies\">2.2 Assumptions and Dependencies</h3>\n<h2 id=\"system-features-and-requirements\">System Features and Requirements</h2>\n<h3 id=\"31-functional-requirements\">3.1 Functional Requirements</h3>\n<h3 id=\"32-external-interface-requirements\">3.2 External Interface Requirements</h3>\n<h3 id=\"33-system-features\">3.3 System Features</h3>\n<h3 id=\"34-nonfunctional-requirements\">3.4 Nonfunctional Requirements</h3>";

				const frontmatter = {"title":"Software Requirement Specification (SRS) Document Template","sidebar":{"label":"Software Requirement Specification (SRS) Document Template"}};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/processes/quality-assurance/templates/srs-template.md";
				const url = undefined;
				function rawContent() {
					return "\n## 1. Introduction\n\n### 1.1 Purpose\n\n### 1.2 Intended Audience\n\n### 1.3 Intended Use\n\n### 1.4 Scope\n\n### 1.5 Definitions and Acronyms\n\n## Overall Description\n\n### 2.1 User Needs\n\n### 2.2 Assumptions and Dependencies\n\n## System Features and Requirements\n\n### 3.1 Functional Requirements\n\n### 3.2 External Interface Requirements\n\n### 3.3 System Features\n\n### 3.4 Nonfunctional Requirements\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-introduction","text":"1. Introduction"},{"depth":3,"slug":"11-purpose","text":"1.1 Purpose"},{"depth":3,"slug":"12-intended-audience","text":"1.2 Intended Audience"},{"depth":3,"slug":"13-intended-use","text":"1.3 Intended Use"},{"depth":3,"slug":"14-scope","text":"1.4 Scope"},{"depth":3,"slug":"15-definitions-and-acronyms","text":"1.5 Definitions and Acronyms"},{"depth":2,"slug":"overall-description","text":"Overall Description"},{"depth":3,"slug":"21-user-needs","text":"2.1 User Needs"},{"depth":3,"slug":"22-assumptions-and-dependencies","text":"2.2 Assumptions and Dependencies"},{"depth":2,"slug":"system-features-and-requirements","text":"System Features and Requirements"},{"depth":3,"slug":"31-functional-requirements","text":"3.1 Functional Requirements"},{"depth":3,"slug":"32-external-interface-requirements","text":"3.2 External Interface Requirements"},{"depth":3,"slug":"33-system-features","text":"3.3 System Features"},{"depth":3,"slug":"34-nonfunctional-requirements","text":"3.4 Nonfunctional Requirements"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
