const id = "products/company-operations/issues-and-resolution/Enable Bullet Points in Markdown Tables.md";
						const collection = "docs";
						const slug = "products/company-operations/issues-and-resolution/enable-bullet-points-in-markdown-tables";
						const body = "\n## Issue\n\nUnable to use html with markdown to add bullet points on tables because markdown lint does not\nsupport this.\n\n## Problem Description\n\nAs shown in the table below, on trying to add html tags on markdown tables, it is highlighted with\nthe yellow underlines showing that it is not supported. And it gives the error\n\"_MD033/no-inline-html: Inline HTML [Element: li] mardwonlint (MD033)_.\"\n\n![Markdown Table Error](/images/mkdowntblerror.png)\n\n## Resolution\n\nTo resolve this issue, add a _markdownlint.json_ file in your working folder that contains the\nfollowing code.\n\n    {\n    \"MD033\": {\n    \"allowed_elements\": [\"ul\", \"li\"]\n     },\n    }\n\nAs a result of this change, you might experience some errors on your markdown document about your\nline exceeding expected value. To resolve this, update the above code with the one below.\n\n    {\n    \"MD033\": {\n    \"allowed_elements\": [\"ul\", \"li\"]\n    },\n    \"MD013\": {\n    \"tables\": false\n     }\n    }\n\n**Your document should now be accepted by markdown lint!**\n";
						const data = {title:"Enable Bullet Points in Markdown Tables",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/issues-and-resolution/Enable Bullet Points in Markdown Tables.md",
							rawData: "\ntitle: Enable Bullet Points in Markdown Tables",
						};

export { _internal, body, collection, data, id, slug };
