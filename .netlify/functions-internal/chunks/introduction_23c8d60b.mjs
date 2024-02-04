const id = "products/ontrack/documentation/front-end-migration/introduction.md";
						const collection = "docs";
						const slug = "products/ontrack/documentation/front-end-migration/introduction";
						const body = "\n## T3 / 2022\n\nOnTrack is now a hybrid project which is using Bootstrap/AngularJS + MUI/Angular, it is build using\ndifferent reusable components.\n\nAngularJS support has officially ended as of **January 2022**. The code will remain accessible on\nGitHub, npm, Bower, and Release archive. This website will remain here indefinitely. The GitHub\nrepository will be in an archived state, meaning that no new issues or pull requests can be\nsubmitted. CoffeeScript can be viewed as a fine complement to JavaScript, not a replacement.\n\nTherefore, the OnTrack frontend is looking forward to switching to the new MUI/Angular approach and\ntrying to keep things more up to date going forward.\n\n## Aims for Trimester\n\n---\n\n1. Testing new branch\n\n   - We have a special request from our director Andrew that we need to execute some on testing the\n     doubtfire-web(quality/entity-service-to-npm) branch with\n     doubtfire-api(refactor/entity-service-backend), write up some test scripts for people to run to\n     verify that things work branch.\n   - Tests cases can just be actions for someone to perform. Now those branches have migrated much\n     of the front end. We now need to exhaustively test it to make sure things work. Log the issue\n     and report to director\n\n2. Components Migration\n\n   - There is **168 components** waiting to be migrated, in T3/2022, I hope we can continue the work\n     that we left in previous trimester and assign some simple components for Juniors. Delivery lead\n     should involve continuing the ongoing components, seniors should continue his work from\n     previous trimester.\n\n## Deliverables\n\n---\n\n### Short Term\n\n- Gather information and continue the migration work that left from previous trimester.\n- Develop and deliver at least 5 migrated components.\n- Understand and plan for testing new branch\n- Give Juniors OnTrack ASAP.\n- Improve and fix outdated documents.\n\n**_Long Term:_**\n\n- Give enough passion for junior to involve into the same project next trimester\n- Extent documentation for new member to be able to understand the project quickly.\n\n## **What to do next**\n\n---\n\nIf you are new member into this team, welcome! and we are going to guide you step by step to show\nyou what you sould do next if you are:\n\n**_Junior_**\n\nAs a junior we suggest that you should:\n\n1. Do Upskilling understand the basic of AngularJS and Angular framework.\n   - [Learning AngularJS A Guide to AngularJS Development](https://www.amazon.com.au/Learning-AngularJS-Guide-Development-ebook/dp/B00UW1MATQ)\n     (ISBN 978-1491916759)\n   - [Angular JS tutorial](https://www.youtube.com/playlist?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl)\n   - _To be added in next-trimester_\n2. Set up the project on your local machine. For Windows user, you need to do an extra step to\n   inistall a **WSL2 virtual machine**. Make sure you dont have VMware or VirtualBox installed that\n   will enable the HyperV feature which **conflict** with Docker.\n   - **Windows (WSL2)**\n     1. Follow [Docker Compose with WSL2](Docker/Docker_Compose_with_WSL2.md) guideline.\n     2. Read [Docker Setup Tutorial](Docker/Docker_Setup_Tutorial.md) guideline.\n     3. Watch\n        [Docker Setup Tutorial](https://drive.google.com/file/d/16A5zzG3g0S1B0PCKWrFK9anLhheXgi_b/view?usp=sharing)\n        > Please note that the tutorial used Windows CMD enviroment, it should use WSL2 machine\n        > instead. See the\n        > [issue](https://teams.microsoft.com/l/message/19:bd20175d09414f079490a2403f7fca74@thread.tacv2/1659408245022?tenantId=d02378ec-1688-46d5-8540-1c28b5f470f6&groupId=0e15669c-3f66-49aa-b023-640fe1dda2e0&parentMessageId=1659398288375&teamName=Thoth).\n   - **Mac / Linux**\n     1. Read [Docker Setup Tutorial](Docker/Docker_Setup_Tutorial.md) guideline.\n        > If the servers in the docker running into issues, please follow the backup plan -\n        > [Troubleshooting Docker - Backup for OnTrack](Docker/Troubleshooting_Docker_Backup_for_OnTrack.md)\n3. Migration\n   1. Read [Create Brach and Initial Migration](Migration/Create_Branch_and_Initial_Migration)\n      guideline.\n   2. Read [Regular Commit](Migration/Regular_Migration_Step.md) guideline.\n4. Testing\n   1. Read [Unit Test](Testing/Unit_Test.md) guideline.\n5. Do **report any issue** or questions to the senior or deilvery lead.\n6. **Writting docemnts** during the learning process which you found intresting or worth to know.\n7. Start to migrate some simple components.\n\n**_Senior_**\n\n1. Answer question from junior report the issue to the lead if no solution.\n2. Carry on the components that are in the middle of migrating in last trimester.\n\n---\n\n**Once again, welcome to the team!**\n";
						const data = {title:"Entry point of OnTrack UIEnhancemnt",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/ontrack/documentation/front-end-migration/introduction.md",
							rawData: "\ntitle: Entry point of OnTrack UIEnhancemnt",
						};

export { _internal, body, collection, data, id, slug };