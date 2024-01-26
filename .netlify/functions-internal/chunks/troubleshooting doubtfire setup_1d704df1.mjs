const id = "products/ontrack/issues-and-resolutions/troubleshooting doubtfire setup.md";
						const collection = "docs";
						const slug = "products/ontrack/issues-and-resolutions/troubleshooting-doubtfire-setup";
						const body = "\n## 3. Trouble shooting\n\n1. docker: 'compose' is not a docker command. See 'docker --help'\n\n   > You need to change “docker compose” of file run-full.sh in doubtfire-deploy/development\n\n2. doubtfire-web doesn’t compile successfully:\n\n   - Open terminal\n   - Head to folder doubtfire-deploy/development by cd\n   - Run this in 1 line:\n\n   ```console\n   doubtfire-web: docker-compose run -u 0 -p 4200:4200 doubtfire-web bash -c\n   \"npm install; npm start\"\n   ```\n\n3. doubtfire-api don’t run and exit with code 0/1.\n\n   - Open terminal\n   - Head to folder doubtfire-deploy/development by cd\n   - Run this in 1 line:\n\n   ```console\n   docker-compose run -p 3000:3000 doubtfire-api bash -c \"bundle install;\n   bundle exec rails db:environment:set RAILS_ENV=development;\n   bundle exec rake db:populate;\n   bundle exec rake db:migrate && bundle exec rails s -b 0.0.0.0\"\n   ```\n\n## 4. Give Up\n\nStill cannot deploy it? Maybe it’s time to give up, you can just use Burp Suite and pentest online\non my VPS: <http://208.87.135.57:4200/> **IMPORTANT**: don’t scan with BurpSuite you guys won’t find\nanything anyway because of the anchor tag.\n";
						const data = {title:"Troubleshooting Doubtfire Setup",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/issues-and-resolutions/troubleshooting doubtfire setup.md",
							rawData: "\ntitle: Troubleshooting Doubtfire Setup",
						};

export { _internal, body, collection, data, id, slug };
