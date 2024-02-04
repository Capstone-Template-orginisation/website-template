import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p>Research by Kyle Adams and Quinn Curtis regarding the best possible option for the knowledge base\nproject at Thoth Tech. 4 Platforms were considered: Docusaurus, Starlight, Jekyl, and BookStack.</p>\n<h2 id=\"docusaurus\">Docusaurus</h2>\n<p><a href=\"https://docusaurus.io/\">Home Page</a></p>\n<h3 id=\"docusaurus-pros\">Docusaurus Pros</h3>\n<ul>\n<li>Structure is determined through directory adn can be easily altered.</li>\n<li>Quick to get up and running</li>\n<li>Easily works with docker</li>\n<li>Compatible with Markdown, MDX, and react.</li>\n<li>React supports imbeded videos</li>\n<li>Simple navigation between blogs, docs, and pages.</li>\n</ul>\n<h3 id=\"docusaurus-cons\">Docusaurus Cons</h3>\n<ul>\n<li>Not super flexible when it comes to creating themes or having more complex sub-pages.</li>\n<li>If you do want that extra functionality, enable react support, but even then it is pretty strict.</li>\n<li>Hosting through github pages is complex</li>\n<li>Requires set-up through a package manager and runtime environment to set up.</li>\n</ul>\n<h2 id=\"starlight\">Starlight</h2>\n<p><a href=\"https://starlight.astro.build/\">Home Page</a></p>\n<h3 id=\"starlight-pros\">Starlight Pros</h3>\n<ul>\n<li>Compatible with a lot of existing JS frameworks via Astro</li>\n<li>Can create custom content for sub-pages through cards and MDX files that would match the designs\nvery well.</li>\n<li>UI can be made using only MD and MDX files, with simple configuration files for fonts and colours\netc.</li>\n<li>Includes a search feature by default.</li>\n</ul>\n<h3 id=\"starlight-cons\">Starlight Cons</h3>\n<ul>\n<li>It is a very new software. There is still little documentation and support out.</li>\n<li>As a new piece of software it also is subject to changes. so we may have to change features in the\nfuture.</li>\n<li>Requires set-up through a package manager and runtime environment to set up.</li>\n<li>No blog Feature.</li>\n</ul>\n<h2 id=\"bookstack\">BookStack</h2>\n<p><a href=\"https://www.bookstackapp.com/\">Home Page</a></p>\n<h3 id=\"bookstack-pros\">BookStack Pros</h3>\n<ul>\n<li>Content can be sorted into “books,” making it really easy to sort our projects into their own\npages and lay them out like in the designs</li>\n<li>BookStack is FOSS, which fits our price-point quite nicely.</li>\n<li>Default <a href=\"https://www.drawio.com/\">diagrams</a> integration</li>\n</ul>\n<h3 id=\"bookstack-cons\">BookStack Cons</h3>\n<ul>\n<li>UI is not the best option. It is a bit outdated.</li>\n<li>Git integration is a bit touch and go.</li>\n</ul>\n<h2 id=\"jekyll\">Jekyll</h2>\n<p><a href=\"https://jekyllrb.com/\">Home Page</a></p>\n<h3 id=\"jekyll-pros\">Jekyll Pros</h3>\n<ul>\n<li>Ease to produce a repository by generating through a template, and simple to host through GitHub\npages.</li>\n<li>Allows for a video type document that embeds a video link and centres around the video content,\nuseful for producing guides that involve multiple videos.</li>\n</ul>\n<h3 id=\"jekyll-cons\">Jekyll Cons</h3>\n<ul>\n<li>Structure is determined by categorization, which is done in-document and through additional files\nthat can cause project bloat.</li>\n<li>Markdown only support.</li>\n<li>All documentation is arranged by date due to being blog-based, meaning that categorization is only\neffective through additional index infrastructure.</li>\n</ul>\n<h2 id=\"comparison\">Comparison</h2>\n<p>This is how the platforms stack up against the features that we are looking for. We need a platform\nthat is customisable in accordance with our designs and structure. We also need markdown support.\nGit integration would make the work flow of adding new content simple, and a blog feature would\nallow for quick news and updates.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Platform</th><th>Customisation / Themes</th><th>.md support</th><th>Git integration</th><th>Blog feature</th></tr></thead><tbody><tr><td>Docusaurus</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Starlight</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr><tr><td>Jekyll</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>BookStack</td><td>❌</td><td>✅</td><td>❌</td><td>❌</td></tr></tbody></table>\n<h2 id=\"recommendation\">Recommendation</h2>\n<p>While looking at these criteria alone, Jekyll might look like the best option, the team still feels\nthat it is too restrictive, and its layout lends itself better to a blog than for documentation.</p>\n<p>Based on the positive outcomes possible and mainly negligible issues that can be subverted given the\ncorrect policy/use, this document recommends that the company operations knowledge base project\nmoves forward with Starlight as the platform for Thoth Tech’s knowledge base.</p>\n<p>While other platforms have positive characteristics that may also prove valuable to the project,\nissues such as lacking/difficult integration with Git/GitHub, inaccessible customisation and themes,\nand adverse project structure (the significance of documents over blogs), would create additional\nconstraints that Starlight is less effected by. Additionally, the existing support for Starlight\nwithin the company will simplify the integration process, whereas other platforms would need to be\nintegrated from scratch. Therefore, this document concludes that Starlight is the best solution out\nof the reviewed platforms for this project.</p>";

				const frontmatter = {"title":"Choosing a Documentation Platform"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/documentation/Choosing a Documentation Platform.md";
				const url = undefined;
				function rawContent() {
					return "\nResearch by Kyle Adams and Quinn Curtis regarding the best possible option for the knowledge base\nproject at Thoth Tech. 4 Platforms were considered: Docusaurus, Starlight, Jekyl, and BookStack.\n\n## Docusaurus\n\n[Home Page](https://docusaurus.io/)\n\n### Docusaurus Pros\n\n- Structure is determined through directory adn can be easily altered.\n- Quick to get up and running\n- Easily works with docker\n- Compatible with Markdown, MDX, and react.\n- React supports imbeded videos\n- Simple navigation between blogs, docs, and pages.\n\n### Docusaurus Cons\n\n- Not super flexible when it comes to creating themes or having more complex sub-pages.\n- If you do want that extra functionality, enable react support, but even then it is pretty strict.\n- Hosting through github pages is complex\n- Requires set-up through a package manager and runtime environment to set up.\n\n## Starlight\n\n[Home Page](https://starlight.astro.build/)\n\n### Starlight Pros\n\n- Compatible with a lot of existing JS frameworks via Astro\n- Can create custom content for sub-pages through cards and MDX files that would match the designs\n  very well.\n- UI can be made using only MD and MDX files, with simple configuration files for fonts and colours\n  etc.\n- Includes a search feature by default.\n\n### Starlight Cons\n\n- It is a very new software. There is still little documentation and support out.\n- As a new piece of software it also is subject to changes. so we may have to change features in the\n  future.\n- Requires set-up through a package manager and runtime environment to set up.\n- No blog Feature.\n\n## BookStack\n\n[Home Page](https://www.bookstackapp.com/)\n\n### BookStack Pros\n\n- Content can be sorted into \"books,\" making it really easy to sort our projects into their own\n  pages and lay them out like in the designs\n- BookStack is FOSS, which fits our price-point quite nicely.\n- Default [diagrams](https://www.drawio.com/) integration\n\n### BookStack Cons\n\n- UI is not the best option. It is a bit outdated.\n- Git integration is a bit touch and go.\n\n## Jekyll\n\n[Home Page](https://jekyllrb.com/)\n\n### Jekyll Pros\n\n- Ease to produce a repository by generating through a template, and simple to host through GitHub\n  pages.\n- Allows for a video type document that embeds a video link and centres around the video content,\n  useful for producing guides that involve multiple videos.\n\n### Jekyll Cons\n\n- Structure is determined by categorization, which is done in-document and through additional files\n  that can cause project bloat.\n- Markdown only support.\n- All documentation is arranged by date due to being blog-based, meaning that categorization is only\n  effective through additional index infrastructure.\n\n## Comparison\n\nThis is how the platforms stack up against the features that we are looking for. We need a platform\nthat is customisable in accordance with our designs and structure. We also need markdown support.\nGit integration would make the work flow of adding new content simple, and a blog feature would\nallow for quick news and updates.\n\n| Platform   | Customisation / Themes | .md support | Git integration | Blog feature |\n| ---------- | ---------------------- | ----------- | --------------- | ------------ |\n| Docusaurus | ❌                     | ✅          | ✅              | ✅           |\n| Starlight  | ✅                     | ✅          | ✅              | ❌           |\n| Jekyll     | ✅                     | ✅          | ✅              | ✅           |\n| BookStack  | ❌                     | ✅          | ❌              | ❌           |\n\n## Recommendation\n\nWhile looking at these criteria alone, Jekyll might look like the best option, the team still feels\nthat it is too restrictive, and its layout lends itself better to a blog than for documentation.\n\nBased on the positive outcomes possible and mainly negligible issues that can be subverted given the\ncorrect policy/use, this document recommends that the company operations knowledge base project\nmoves forward with Starlight as the platform for Thoth Tech's knowledge base.\n\nWhile other platforms have positive characteristics that may also prove valuable to the project,\nissues such as lacking/difficult integration with Git/GitHub, inaccessible customisation and themes,\nand adverse project structure (the significance of documents over blogs), would create additional\nconstraints that Starlight is less effected by. Additionally, the existing support for Starlight\nwithin the company will simplify the integration process, whereas other platforms would need to be\nintegrated from scratch. Therefore, this document concludes that Starlight is the best solution out\nof the reviewed platforms for this project.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"docusaurus","text":"Docusaurus"},{"depth":3,"slug":"docusaurus-pros","text":"Docusaurus Pros"},{"depth":3,"slug":"docusaurus-cons","text":"Docusaurus Cons"},{"depth":2,"slug":"starlight","text":"Starlight"},{"depth":3,"slug":"starlight-pros","text":"Starlight Pros"},{"depth":3,"slug":"starlight-cons","text":"Starlight Cons"},{"depth":2,"slug":"bookstack","text":"BookStack"},{"depth":3,"slug":"bookstack-pros","text":"BookStack Pros"},{"depth":3,"slug":"bookstack-cons","text":"BookStack Cons"},{"depth":2,"slug":"jekyll","text":"Jekyll"},{"depth":3,"slug":"jekyll-pros","text":"Jekyll Pros"},{"depth":3,"slug":"jekyll-cons","text":"Jekyll Cons"},{"depth":2,"slug":"comparison","text":"Comparison"},{"depth":2,"slug":"recommendation","text":"Recommendation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };