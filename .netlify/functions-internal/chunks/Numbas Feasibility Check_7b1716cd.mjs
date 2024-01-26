import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p><strong>Daniel Maddern</strong>.</p>\n<p><strong>Capstone SIT374</strong>.</p>\n<p><strong>Ontrack</strong>.</p>\n<p><strong>Numbas feasibility check</strong>.</p>\n<p><strong>Preamble</strong>.</p>\n<p>The aim of this study is to check the feasibility of setting up or linking Numbas into Ontrack a\nlive production environment running on Rails/Angular.</p>\n<p><strong>Research information</strong>:</p>\n<p>For this project I have been reviewing several links and pages of information to ensure we take the\ncorrect direction. As well as to upskill to ensure I have the key skills required for this project.</p>\n<p><a href=\"https://angular.io/guide/standalone-components\">https://angular.io/guide/standalone-components</a></p>\n<p><a href=\"https://blog.logrocket.com/the-ultimate-guide-to-iframes/\">https://blog.logrocket.com/the-ultimate-guide-to-iframes/</a></p>\n<p><a href=\"https://angular.io/guide/setup-local\">https://angular.io/guide/setup-local</a></p>\n<p><a href=\"https://www.numbas.org.uk/\">https://www.numbas.org.uk/</a></p>\n<p><a href=\"https://community.dataminer.services/information-security-research-unsafe-attribute-bindings-on-iframe-elements-in-angular/\">https://community.dataminer.services/information-security-research-unsafe-attribute-bindings-on-iframe-elements-in-angular/</a></p>\n<p><strong>Outcome</strong>.</p>\n<p>So after some research the two main ways we can approach this task is to embed an iframe, then later\ncapture the test objecet and store it.</p>\n<p>Or we can use the local NPM package and install Numbas as a package and configure and run the tests\nnatively.</p>\n<p>The second option initially looks more secure and longer to setup, I was concerned about iFrame from\na security risk related to XSS, however it looks like in Angular 15 this was resolved.</p>\n<p><strong>Plan</strong>.</p>\n<p>I will look at configuring both solutions and see which one performs best and gives us the best\nfeatures moving forward. Hopefully by week 6 a have a trial version of both and make the final\ndecision before tidying up the code to ensure it is production ready.</p>";

				const frontmatter = {"title":"Project feasability study document"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/documentation/numbas/Numbas Feasibility Check.md";
				const url = undefined;
				function rawContent() {
					return "\n**Daniel Maddern**.\n\n**Capstone SIT374**.\n\n**Ontrack**.\n\n**Numbas feasibility check**.\n\n**Preamble**.\n\nThe aim of this study is to check the feasibility of setting up or linking Numbas into Ontrack a\nlive production environment running on Rails/Angular.\n\n**Research information**:\n\nFor this project I have been reviewing several links and pages of information to ensure we take the\ncorrect direction. As well as to upskill to ensure I have the key skills required for this project.\n\n[https://angular.io/guide/standalone-components](https://angular.io/guide/standalone-components)\n\n[https://blog.logrocket.com/the-ultimate-guide-to-iframes/](https://blog.logrocket.com/the-ultimate-guide-to-iframes/)\n\n[https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)\n\n[https://www.numbas.org.uk/](https://www.numbas.org.uk/)\n\n[https://community.dataminer.services/information-security-research-unsafe-attribute-bindings-on-iframe-elements-in-angular/](https://community.dataminer.services/information-security-research-unsafe-attribute-bindings-on-iframe-elements-in-angular/)\n\n**Outcome**.\n\nSo after some research the two main ways we can approach this task is to embed an iframe, then later\ncapture the test objecet and store it.\n\nOr we can use the local NPM package and install Numbas as a package and configure and run the tests\nnatively.\n\nThe second option initially looks more secure and longer to setup, I was concerned about iFrame from\na security risk related to XSS, however it looks like in Angular 15 this was resolved.\n\n**Plan**.\n\nI will look at configuring both solutions and see which one performs best and gives us the best\nfeatures moving forward. Hopefully by week 6 a have a trial version of both and make the final\ndecision before tidying up the code to ensure it is production ready.\n";
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
