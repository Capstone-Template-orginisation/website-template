const id = "blog/test.md";
						const collection = "docs";
						const slug = "blog/test";
						const body = "\nWelcome to our brand new blog! On this page, you will be able to find all the latest in Thoth Tech\nnews and updates!\n\n#### How do we use it?\n\nTo create a post on the blog, just create a markdown file and add it to the blog folder under\n`/src/content/docs/blog/` and add the following items to the header:\n\n- Title (just a basic overview of the post)\n- Date (the date of your post. It needs to be formatted YYYY-MM-DD)\n- Author / Authors (some basic information about you)\n\n##### Here is an example header, taken straight from this post\n\n```markdown\n---\ntitle: Introducing the Thoth Tech Blog!\ndate: 2023-11-21\nauthors:\n  - name: Quinn Curtis\n    title: Senior Company Operations Member\n    picture: https://avatars.githubusercontent.com/u/139825230\n---\n```\n\nAs you can see, under authors there are a few subheadings. Name is the only mandatory field, but to\nkeep things clear and easy for everyone, please at least add your title, but feel free to add in a\npicture as well. Your GitHub profile picture is probably the easiest option. Just drag it from your\nprofile to another tab and copy the URL.\n\nStill having issues? Check out this handy video tutorial I've made to get you started:\n";
						const data = {title:"Introducing the Thoth Tech Blog!",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,authors:[{name:"Quinn Curtis",title:"Senior Company Operations Member",picture:"https://avatars.githubusercontent.com/u/139825230"}],date:new Date(1700524800000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/blog/test.md",
							rawData: "\ntitle: Introducing the Thoth Tech Blog!\ndate: 2023-11-21\nauthors:\n  - name: Quinn Curtis\n    title: Senior Company Operations Member\n    picture: https://avatars.githubusercontent.com/u/139825230",
						};

export { _internal, body, collection, data, id, slug };
