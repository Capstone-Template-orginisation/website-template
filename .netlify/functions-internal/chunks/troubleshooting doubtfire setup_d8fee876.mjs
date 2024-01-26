import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h2 id=\"3-trouble-shooting\">3. Trouble shooting</h2>\n<ol>\n<li>\n<p>docker: ‘compose’ is not a docker command. See ‘docker —help’</p>\n<blockquote>\n<p>You need to change “docker compose” of file run-full.sh in doubtfire-deploy/development</p>\n</blockquote>\n</li>\n<li>\n<p>doubtfire-web doesn’t compile successfully:</p>\n<ul>\n<li>Open terminal</li>\n<li>Head to folder doubtfire-deploy/development by cd</li>\n<li>Run this in 1 line:</li>\n</ul>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.0epgx.css\"><script type=\"module\" src=\"/_astro/ec.sgewm.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre tabindex=\"0\"><code><div class=\"ec-line\"><span style=\"--0:#D6DEEB;--1:#403F53\">doubtfire-web: docker-compose run -u 0 -p 4200:4200 doubtfire-web bash -c</span></div><div class=\"ec-line\"><span style=\"--0:#D6DEEB;--1:#403F53\">\"npm install; npm start\"</span></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"doubtfire-web: docker-compose run -u 0 -p 4200:4200 doubtfire-web bash -c&#x22;npm install; npm start&#x22;\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>doubtfire-api don’t run and exit with code 0/1.</p>\n<ul>\n<li>Open terminal</li>\n<li>Head to folder doubtfire-deploy/development by cd</li>\n<li>Run this in 1 line:</li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre tabindex=\"0\"><code><div class=\"ec-line\"><span style=\"--0:#D6DEEB;--1:#403F53\">docker-compose run -p 3000:3000 doubtfire-api bash -c \"bundle install;</span></div><div class=\"ec-line\"><span style=\"--0:#D6DEEB;--1:#403F53\">bundle exec rails db:environment:set RAILS_ENV=development;</span></div><div class=\"ec-line\"><span style=\"--0:#D6DEEB;--1:#403F53\">bundle exec rake db:populate;</span></div><div class=\"ec-line\"><span style=\"--0:#D6DEEB;--1:#403F53\">bundle exec rake db:migrate &#x26;&#x26; bundle exec rails s -b 0.0.0.0\"</span></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"docker-compose run -p 3000:3000 doubtfire-api bash -c &#x22;bundle install;bundle exec rails db:environment:set RAILS_ENV=development;bundle exec rake db:populate;bundle exec rake db:migrate &#x26;&#x26; bundle exec rails s -b 0.0.0.0&#x22;\"><div></div></button></div></figure></div>\n</li>\n</ol>\n<h2 id=\"4-give-up\">4. Give Up</h2>\n<p>Still cannot deploy it? Maybe it’s time to give up, you can just use Burp Suite and pentest online\non my VPS: <a href=\"http://208.87.135.57:4200/\">http://208.87.135.57:4200/</a> <strong>IMPORTANT</strong>: don’t scan with BurpSuite you guys won’t find\nanything anyway because of the anchor tag.</p>";

				const frontmatter = {"title":"Troubleshooting Doubtfire Setup"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/issues-and-resolutions/troubleshooting doubtfire setup.md";
				const url = undefined;
				function rawContent() {
					return "\n## 3. Trouble shooting\n\n1. docker: 'compose' is not a docker command. See 'docker --help'\n\n   > You need to change “docker compose” of file run-full.sh in doubtfire-deploy/development\n\n2. doubtfire-web doesn’t compile successfully:\n\n   - Open terminal\n   - Head to folder doubtfire-deploy/development by cd\n   - Run this in 1 line:\n\n   ```console\n   doubtfire-web: docker-compose run -u 0 -p 4200:4200 doubtfire-web bash -c\n   \"npm install; npm start\"\n   ```\n\n3. doubtfire-api don’t run and exit with code 0/1.\n\n   - Open terminal\n   - Head to folder doubtfire-deploy/development by cd\n   - Run this in 1 line:\n\n   ```console\n   docker-compose run -p 3000:3000 doubtfire-api bash -c \"bundle install;\n   bundle exec rails db:environment:set RAILS_ENV=development;\n   bundle exec rake db:populate;\n   bundle exec rake db:migrate && bundle exec rails s -b 0.0.0.0\"\n   ```\n\n## 4. Give Up\n\nStill cannot deploy it? Maybe it’s time to give up, you can just use Burp Suite and pentest online\non my VPS: <http://208.87.135.57:4200/> **IMPORTANT**: don’t scan with BurpSuite you guys won’t find\nanything anyway because of the anchor tag.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"3-trouble-shooting","text":"3. Trouble shooting"},{"depth":2,"slug":"4-give-up","text":"4. Give Up"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
