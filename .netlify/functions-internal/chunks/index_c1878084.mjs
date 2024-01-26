const id = "index.mdx";
						const collection = "docs";
						const slug = "index";
						const body = "\nimport { Card, LinkCard, CardGrid } from \"@astrojs/starlight/components\";\n\n## About Us:\n\n<Card title=\"What we do\">\n   You should be adding a description here about your company, what it does and what kind of technology it works on. No more than a few paragraphs.\n</Card>\n\n<CardGrid>\n  <LinkCard\n    title=\"Policies\"\n    description=\"Understand what we stand for.\"\n    href=\"/policies/github-management-policy/\"\n  />\n  <LinkCard\n    title=\"Process\"\n    description=\"How can my company function?.\"\n    href=\"/processes/introduction/\"\n  />\n  <LinkCard title=\"News\" description=\"Link to your Company website..\" href=\"/blog/\" />\n  <LinkCard\n    title=\"Leadership\"\n    description=\"Meet our team.\"\n    href=\"/teams-and-leadership/leadership-t2-2023/\"\n  />\n</CardGrid>\n";
						const data = {title:"Welcome to capstone documenation template",description:"Get started building your docs site with Starlight.",editUrl:true,head:[],template:"splash",hero:{tagline:"This site is a documenation repo for all  your company documents as well as a guide for using github, Trello and working in a capstone company.",actions:[{text:"Getting started!!",link:"/products/products/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"FAQ",link:"/reference/faq/",variant:"primary",icon:{type:"icon",name:"right-arrow"}}]},sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/index.mdx",
							rawData: "\ntitle: Welcome to capstone documenation template\ndescription: Get started building your docs site with Starlight.\ntemplate: splash\nhero:\n  tagline: This site is a documenation repo for all  your company documents as well as a guide for using github, Trello and working in a capstone company.\n  actions:\n    - text: Getting started!!\n      link: /products/products/\n      icon: right-arrow\n      variant: primary\n    - text: FAQ\n      link: /reference/faq/\n      icon: right-arrow\n      variant: primary",
						};

export { _internal, body, collection, data, id, slug };
