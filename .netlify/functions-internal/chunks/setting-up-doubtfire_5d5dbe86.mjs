import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"1-before-setting-up-doubtfire\">1. Before setting up Doubtfire</h2>\n<p>You need to set up a Kali Linux virtual machine and clone the Doubtfire. Any management tool(Virtual\nbox, VM ware and so on) to manage these virtual machines will work.</p>\n<p>Here is a nice YouTube tutorial: <a href=\"https://www.youtube.com/watch?v=pwYH0NNWWzU\">https://www.youtube.com/watch?v=pwYH0NNWWzU</a></p>\n<blockquote>\n<p>*Note: Set the Network mode to <strong>NAT*</strong></p>\n</blockquote>\n<h2 id=\"2-clone-doubtfire\">2. Clone DoubtFire</h2>\n<p>Here is the GitHub link to the project that we going to exploit:\n<a href=\"https://github.com/doubtfire-lms/doubtfire-deploy\">https://github.com/doubtfire-lms/doubtfire-deploy</a></p>\n<p>What you guys need to do is</p>\n<ol>\n<li>read this: <a href=\"https://github.com/doubtfire-lms/doubtfire-deploy/blob/main/CONTRIBUTING.md\">https://github.com/doubtfire-lms/doubtfire-deploy/blob/main/CONTRIBUTING.md</a></li>\n<li>And watch this video of MANJIANG YU: <a href=\"https://www.youtube.com/watch?v=2WEmibSkF9w\">https://www.youtube.com/watch?v=2WEmibSkF9w</a></li>\n<li>Install docker-compose. Command: sudo apt install docker-compose Success deploy</li>\n</ol>";

				const frontmatter = {"title":"Setting up Doubtfire"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/setting-up-doubtfire.md";
				const url = undefined;
				function rawContent() {
					return "\n## 1. Before setting up Doubtfire\n\nYou need to set up a Kali Linux virtual machine and clone the Doubtfire. Any management tool(Virtual\nbox, VM ware and so on) to manage these virtual machines will work.\n\nHere is a nice YouTube tutorial: <https://www.youtube.com/watch?v=pwYH0NNWWzU>\n\n> \\*Note: Set the Network mode to **NAT\\***\n\n## 2. Clone DoubtFire\n\nHere is the GitHub link to the project that we going to exploit:\n<https://github.com/doubtfire-lms/doubtfire-deploy>\n\nWhat you guys need to do is\n\n1. read this: <https://github.com/doubtfire-lms/doubtfire-deploy/blob/main/CONTRIBUTING.md>\n2. And watch this video of MANJIANG YU: <https://www.youtube.com/watch?v=2WEmibSkF9w>\n3. Install docker-compose. Command: sudo apt install docker-compose Success deploy\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-before-setting-up-doubtfire","text":"1. Before setting up Doubtfire"},{"depth":2,"slug":"2-clone-doubtfire","text":"2. Clone DoubtFire"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
