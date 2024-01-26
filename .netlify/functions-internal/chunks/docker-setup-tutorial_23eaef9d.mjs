const id = "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-setup-tutorial.md";
						const collection = "docs";
						const slug = "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-setup-tutorial";
						const body = "\n## Install Git (Windows)\n\n<https://git-scm.com/download/win>\n\n---\n\n## Install Docker Desktop\n\n<https://www.docker.com/products/docker-desktop/>\n\n1. Fork **doubtfire-deploy:development**, **doubtfire-api:development**, and\n   **doubtfire-web:development** from <https://github.com/doubtfire-lms>\n2. Clone your doubtfire-deploy. Make sure to fetch submodules to get the subprojects.\n\n   ```console\n   git clone -b development --recurse-submodules https://github.com/[your_github_username]/doubtfire-deploy\n   ```\n\n3. Change directory to doubtfire-deploy by using: cd doubtfire-deploy. Open a Terminal that supports\n   sh scripts (on Windows, you will need WSL, Msys2, or Cygwin). Run the following command to set\n   your fork as the remote.\n\n   ```console\n   bash ./change_remotes.sh\n   ```\n\n4. Change into the development directory and use Docker Compose to setup the database.\n\n   ```console\n   cd development\n   docker compose up -d\n   docker compose run --rm doubtfire-api bash -c \"bundle exec rails db:environment:set RAILS_ENV=development && bundle exec rake db:populate\"\n   ```\n\n5. Change into the development directory and use Docker Compose to setup the database. Run in the\n   development folder\n\n   ```console\n   docker compose up -d\n   ```\n\n6. Open a web browser and navigate to: <http://localhost:4200>\n";
						const data = {title:"Docker Setup Tutorial",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-setup-tutorial.md",
							rawData: "\ntitle: Docker Setup Tutorial",
						};

export { _internal, body, collection, data, id, slug };
