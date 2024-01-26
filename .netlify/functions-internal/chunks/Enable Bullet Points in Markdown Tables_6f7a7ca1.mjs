import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"issue\">Issue</h2>\n<p>Unable to use html with markdown to add bullet points on tables because markdown lint does not\nsupport this.</p>\n<h2 id=\"problem-description\">Problem Description</h2>\n<p>As shown in the table below, on trying to add html tags on markdown tables, it is highlighted with\nthe yellow underlines showing that it is not supported. And it gives the error\n”<em>MD033/no-inline-html: Inline HTML [Element: li] mardwonlint (MD033)</em>.”</p>\n<p><img src=\"/images/mkdowntblerror.png\" alt=\"Markdown Table Error\"></p>\n<h2 id=\"resolution\">Resolution</h2>\n<p>To resolve this issue, add a <em>markdownlint.json</em> file in your working folder that contains the\nfollowing code.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.0epgx.css\"><script type=\"module\" src=\"/_astro/ec.sgewm.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre tabindex=\"0\"><code><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">{</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">\"MD033\": {</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">\"allowed_elements\": [\"ul\", \"li\"]</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\"> },</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">}</span></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{&#x22;MD033&#x22;: {&#x22;allowed_elements&#x22;: [&#x22;ul&#x22;, &#x22;li&#x22;] },}\"><div></div></button></div></figure></div>\n<p>As a result of this change, you might experience some errors on your markdown document about your\nline exceeding expected value. To resolve this, update the above code with the one below.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre tabindex=\"0\"><code><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">{</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">\"MD033\": {</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">\"allowed_elements\": [\"ul\", \"li\"]</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">},</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">\"MD013\": {</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">\"tables\": false</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\"> }</span></div><div class=\"ec-line\"><span style=\"--0:#d6deeb;--1:#403f53\">}</span></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{&#x22;MD033&#x22;: {&#x22;allowed_elements&#x22;: [&#x22;ul&#x22;, &#x22;li&#x22;]},&#x22;MD013&#x22;: {&#x22;tables&#x22;: false }}\"><div></div></button></div></figure></div>\n<p><strong>Your document should now be accepted by markdown lint!</strong></p>";

				const frontmatter = {"title":"Enable Bullet Points in Markdown Tables"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/issues-and-resolution/Enable Bullet Points in Markdown Tables.md";
				const url = undefined;
				function rawContent() {
					return "\n## Issue\n\nUnable to use html with markdown to add bullet points on tables because markdown lint does not\nsupport this.\n\n## Problem Description\n\nAs shown in the table below, on trying to add html tags on markdown tables, it is highlighted with\nthe yellow underlines showing that it is not supported. And it gives the error\n\"_MD033/no-inline-html: Inline HTML [Element: li] mardwonlint (MD033)_.\"\n\n![Markdown Table Error](/images/mkdowntblerror.png)\n\n## Resolution\n\nTo resolve this issue, add a _markdownlint.json_ file in your working folder that contains the\nfollowing code.\n\n    {\n    \"MD033\": {\n    \"allowed_elements\": [\"ul\", \"li\"]\n     },\n    }\n\nAs a result of this change, you might experience some errors on your markdown document about your\nline exceeding expected value. To resolve this, update the above code with the one below.\n\n    {\n    \"MD033\": {\n    \"allowed_elements\": [\"ul\", \"li\"]\n    },\n    \"MD013\": {\n    \"tables\": false\n     }\n    }\n\n**Your document should now be accepted by markdown lint!**\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"issue","text":"Issue"},{"depth":2,"slug":"problem-description","text":"Problem Description"},{"depth":2,"slug":"resolution","text":"Resolution"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
