import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<ul>\n<li><a href=\"#feature-development-where-do-i-start\">Feature development: where do I start?</a></li>\n<li><a href=\"#epics-and-user-stories\">Epics and User Stories</a>\n<ul>\n<li><a href=\"#epics\">Epics</a></li>\n<li><a href=\"#user-stories\">User Stories</a></li>\n</ul>\n</li>\n<li><a href=\"#software-requirements-specification-document\">Software Requirements Specification Document</a></li>\n<li><a href=\"#testing-and-development\">Testing and Development</a>\n<ul>\n<li><a href=\"#making-a-test-plan\">Making a Test Plan</a></li>\n<li><a href=\"#test-strategy\">Test Strategy</a></li>\n<li><a href=\"#testing-tools\">Testing Tools</a></li>\n</ul>\n</li>\n<li><a href=\"#test-driven-development\">Test Driven Development</a>\n<ul>\n<li><a href=\"#determining-appropriate-tests\">Determining appropriate tests</a></li>\n<li><a href=\"#writing-a-failing-test-case\">Writing a failing test case</a></li>\n<li><a href=\"#writing-code-to-pass-your-test\">Writing code to pass your test</a></li>\n<li><a href=\"#refactoring-code\">Refactoring Code</a></li>\n</ul>\n</li>\n<li><a href=\"#testing-templates\">Testing Templates</a></li>\n</ul>\n<p>You might be wondering, before jumping into coding and planning tests for a new feature, <em>where do\nyou begin</em>?</p>\n<h2 id=\"feature-development-where-do-i-start\">Feature development: where do I start?</h2>\n<ul>\n<li>\n<p>Clearly articulate the problem and why the changes need to be made.</p>\n</li>\n<li>\n<p>Create <a href=\"#epics\">epics</a> for each feature for planned development.</p>\n</li>\n<li>\n<p>Identify <a href=\"#user-stories\">user stories</a> of the feature.</p>\n</li>\n<li>\n<p>Consider how best to mitigate risk or look for alternate solutions.</p>\n</li>\n<li>\n<p>Determine functional and non-functional requirements.</p>\n</li>\n<li>\n<p>Determine acceptance criteria.</p>\n<ul>\n<li>What are the metrics for success?</li>\n<li>What’s in/out of scope?</li>\n</ul>\n</li>\n<li>\n<p>Your extracted purpose and requirements will be documented within your\n<a href=\"#software-requirements-specification-document\">Software Requirements Specification</a> document.</p>\n</li>\n<li>\n<p>Plan your testing by defining your Test Strategy and Test Plan:</p>\n<ul>\n<li>Using your specifications, fleshout the expected behaviour for different use case scenarios;\nthese will provide scenarios to be tested in your <a href=\"#making-a-test-plan\">Test Plan</a>.</li>\n<li>Determine <em>how</em> you are going to test your scenarios and describe this in your\n<a href=\"#test-strategy\">Test Strategy</a>.</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"epics-and-user-stories\">Epics and User Stories</h2>\n<h3 id=\"epics\">Epics</h3>\n<p>Epics describe a large body of work that will be broken down into smaller tasks (called user\nstories). Epics are a higher-level view of user request or needs that help with considering larger\naims, what value the work described will bring to the business, organizing work and creating a\nhierarchy. Epics will be broken down into smaller, more manageable tasks (“user stories”) to be\ncompleted by team members. A Markdown <a href=\"../../leadership/epic-template.md\">Epic Template</a> is also\navailable.</p>\n<h3 id=\"user-stories\">User Stories</h3>\n<p>User Stories are user-centric statements often put in the form of:</p>\n<p>“As a [persona], I [want to], [so that]”</p>\n<p>This describes a <em>persona + need + purpose</em>.</p>\n<p>A <strong>[persona]</strong> – describes the person we are building this for. The persona is not just a role or\njob title; we want to have an understanding of who the person is, how they work, think and feel.</p>\n<p><strong>[wants to]</strong> – describes the user’s <em>intent</em> (what they want to achieve) and not the feature they\nuse. If you are describing implementation specifics here, you are taking the wrong approach.</p>\n<p><strong>[so that]</strong> – explains the motivation behind the user’s desire and the overall benefit to them\nfrom what they are trying to achieve.</p>\n<p>User stories use non-technical language to provide context and an understanding of what is to be\nbuilt and why. They provide a framework for approaching development which is user-focused, discrete\nand small enough to be manageably tackled by team members in an Agile environment.</p>\n<p>Benefits include:</p>\n<ul>\n<li>Keeps focus on the user: keeps the team focused on solving real-world problems in user-centric\nways.</li>\n<li>Enables collaboration: by defining the end goal, the team can work together on deciding on how\nbest to meet it</li>\n<li>Drives creative solutions: the focus on the end-user solution required, rather than the how,\nencourages creative problem-solving (where to-do lists do not).</li>\n</ul>\n<p>In Agile methodology, during a sprint or iteration, the team decides which user stories to tackle\nthat story and discuss requirements; once agreed, requirements are added to the stories; Story tasks\nand subtasks can be tracked and assigned using the team’s relevant Trello board; user stories for\nfuture sprints can remain in the backlog.</p>\n<p>When defining user stories, consider:</p>\n<ul>\n<li>Definition of “done”: how will we know when a task/story is complete?</li>\n<li>Tasks or subtasks: what steps need to be completed and by whom?</li>\n<li>User personas: who is the user being considered; are there multiple users (consider making user\nstories for each of them)</li>\n<li>Ordered steps: In a larger process, write a story for <em>each step</em></li>\n<li>Time: consider how long a story may take; if it’s more than one sprint, or seems very complex, the\nstory may need to be broken down into smaller stories (or, you may be looking at an epic)</li>\n</ul>\n<p>Further background on user stories can be found at\n<a href=\"https://www.atlassian.com/agile/project-management/user-stories\">https://www.atlassian.com/agile/project-management/user-stories</a></p>\n<h2 id=\"software-requirements-specification-document\">Software Requirements Specification Document</h2>\n<p>A Software Requirements Specification (SRS) document describes the expectations for your product,\nhow it should perform, and the functionality required to meet stakeholder needs. An\n<a href=\"templates/srs-template.md\">SRS template</a> has been provided which sets out an example format of an\nSRS, including the following components.</p>\n<ul>\n<li>\n<p><strong>Introduction</strong>:</p>\n<ul>\n<li>\n<p><strong>Product Purpose</strong></p>\n<p>Define the purpose of the SRS</p>\n</li>\n<li>\n<p><strong>Intended audience</strong></p>\n<p>Who are the expected readers (testers, developers, leadership team?) of the SRS document?</p>\n</li>\n<li>\n<p><strong>Intended use</strong></p>\n<p>How are these readers expected to use the SRS document?</p>\n</li>\n<li>\n<p><strong>Scope</strong></p>\n<p>What are the goals and objectives for this product? What should the product do (And what should\nit <em>not</em> do?)</p>\n</li>\n<li>\n<p><strong>Definition and acronyms</strong></p>\n<p>Describe relevant terms, definitions and acronyms required to understand the document.</p>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>Overall Description</strong></p>\n<p>Describes your product and what you are going to build; describe here whether it is a new product,\nor an enhancement/add-on to an existing product, who it is for and why it has value. This explains\nthe general background and factors affecting requirements (rather than the specific requirements\nthemselves)</p>\n<ul>\n<li>\n<p><strong>User Needs</strong></p>\n<p>Who will use your product feature and how? What needs do your end users have that you need to be\naware of?</p>\n</li>\n<li>\n<p><strong>Assumptions and dependencies</strong></p>\n<p>Provide any assumptions made (what are we assuming to be true) or dependencies for your\nproduct/feature</p>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>System Features and Requirements</strong></p>\n<ul>\n<li>\n<p><strong>Functional Requirements</strong></p>\n<p>Fundamental requirements are essential requirements that, as the name suggests, provide\nfunctionality and are often described by “The system shall…” statements.</p>\n</li>\n<li>\n<p><strong>External Interface Requirements</strong></p>\n<p>Specific requirements detailing hor your product interfaces with other components. They may\ninclude user, hardware, software and communications interfaces.</p>\n</li>\n<li>\n<p><strong>System Features</strong></p>\n<p><em>System features are types of functional requirements. These are features that are required in\norder for a system to function</em></p>\n</li>\n<li>\n<p><strong>Nonfunctional requirements</strong></p>\n<p>Nonfunctional requirements are those relating to non-functional measures and relate to aspects\nsuch as performance, safety, security and quality.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>Further references include Perforce’s\n<a href=\"https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document\">How to Write an SRS Document</a>\nand, for a higher level of detail on recommended guidelines for the SRS elements,\n<a href=\"https://drive.google.com/file/d/1G1vQq-RjnbEmTTzItIUarWuMnbqZchlx/view\">IEEE’s Recommended Practice for Software Requirements Specifications</a>.</p>\n<p><em>After completing the SRS, you’ll need to get it approved by key stakeholders. This will require\neveryone to review the latest version of the document</em></p>\n<h2 id=\"testing-and-development\">Testing and Development</h2>\n<p>Testing should be built into the software development process. Thoth-Tech advocates for a\n<a href=\"#test-driven-development\">Test Driven Development</a> (TDD) approach. In any event, all coding\nprojects should consider and record their <a href=\"#making-a-test-plan\">Test Plan</a> and\n<a href=\"#test-strategy\">Test Strategy</a> and produce these as project deliverables.</p>\n<h3 id=\"making-a-test-plan\">Making a Test Plan</h3>\n<p>For each product/feature, using the required specifications, flesh out the expected behaviour for\ndifferent use case scenarios. A collaborative approach helps to make sure you are defining the right\nproblem and solution; be sure to seek feedback from the team during this process. These scenarios\nwill be detailed in a Test Plan, which will record each scenario to be tested, the expected outcome,\nand the actual outcome of tests. A simple Markdown\n<a href=\"templates/test-plan-template.md\">Test Plan Template</a> has been provided.</p>\n<h3 id=\"test-strategy\">Test Strategy</h3>\n<p>You need to consider <em>how</em> you are going to test your scenarios as part of this process –\nconsidering matters such as what <a href=\"#testing-tools\">testing tools</a> you will use, what platforms tests\nwill be performed on, any release processes, and what deliverables will you need to produce. This\nshould be considered as part of your Test Strategy – a deliverable which should be produced as part\nof the QA process. Other documents that may be produced as part of the QA process include a Test\nPlan and Bug Reports.</p>\n<p>Templates have been provided for sample <a href=\"templates/test-strategy-template.md\">Test Strategy</a>,\n<a href=\"templates/test-plan-template.md\">Test Plan</a> and <a href=\"templates/bug-report-template.md\">Bug Report</a>\ndocuments.</p>\n<p>While manual testing may be conducted initially, moving towards automated tests allows for better\nefficiency, ease of code checks and is the preferred method to allow automatic test incorporation\ninto the deployment pipeline. Testing and processes, like many other in the Agile model, are not\nstatic, and can (and should) be improved on successive iterations. This may include iterating\nexisting processes for testing releases as well as automating more functionality.</p>\n<p>Thoth-Tech encourages a <a href=\"#test-driven-development\">test driven development</a> approach, in which\ntesting is intertwined with softward development. If your software coding has begun in advance of\ntesting considerations, then you should still formulate a Testing Strategy, including a Test Plan,\nto verify that your code successfully meets requirements.</p>\n<h3 id=\"testing-tools\">Testing Tools</h3>\n<p>Using testing tools makes tests easier to write and easier for future developers to understand. They\nadd consistency and repeatability to the testing process, and make test design and documentation\nsimpler.</p>\n<p>Testing tools include:</p>\n<ul>\n<li><a href=\"https://jasmine.github.io\">Jasmine</a> (for javascript unit testing)</li>\n<li><a href=\"https://www.cypress.io/\">Cypress</a> (javascript end-to-end testing)</li>\n<li>Minitest (for Rails)</li>\n<li><a href=\"https://github.com/catchorg/Catch2/tree/v2.x\">Catch2</a> (for C/C++)</li>\n<li>Junit (for Java)</li>\n<li>Nunit (for .Net languages, such as C#, F#, Visual Basic)</li>\n<li><a href=\"https://karma-runner.github.io/latest/index.html\">Karma</a> (a testing tool for automation that\nutilises other testing frameworks)</li>\n</ul>\n<p>But there are many more. Look for what is currently available and popular in your language.\nCurrently, proposals have been put forward for utilising <a href=\"https://jasmine.github.io\">Jasmine</a> and\n<a href=\"https://karma-runner.github.io/latest/index.html\">Karma</a> for relevant unit testing and automation\nand <a href=\"https://www.cypress.io/\">Cypress</a> for end-to-end testing in the OnTrack space.</p>\n<h2 id=\"how-do-i-prove-my-code-does-what-its-supposed-to-do\">How do I prove my code does what it’s supposed to do? <!-- omit in toc --></h2>\n<h2 id=\"test-driven-development\">Test Driven Development</h2>\n<p>By utilising <em>test driven development (TDD)</em>, software requirements are embedded into the testing\nand coding process, so that functionality is validated as it is coded. This assists to confirm code\nis actually fulfilling the requirements while improving the robustness of testing and paving the way\nfor automation in deployment pipelines.</p>\n<p>How does it work?</p>\n<ol>\n<li><a href=\"#determining-appropriate-tests\">Determine appropriate tests</a></li>\n<li><a href=\"#writing-a-failing-test-case\">Write a failing test case</a></li>\n<li><a href=\"#writing-code-to-pass-your-test\">Write code to pass the test</a></li>\n<li><a href=\"#refactoring-code\">Refactor code</a></li>\n</ol>\n<h3 id=\"determining-appropriate-tests\">Determining appropriate tests</h3>\n<p>Tests should come from your <em>requirements</em> and <em>acceptance criteria</em>; they are designed to test\nrequirements not methods.</p>\n<p>From these, project teams solidify scenarios that relate to project requirements – make sure you\ncollaborate and obtain feedback on these scenarios to check that you have understood the\nrequirements correctly. This can be done through group brainstorming sessions (especially valuable\nin initial stages) and through returning to the team for feedback.</p>\n<p>Remember, test-driven development does lend itself to an iterative software development process,\nsuch as Agile, so it is quite suited to a development process where coders start with basic\nfunctionality that may be added to or improved in subsequent iterations. This is okay – you will\nprogress and build, and using the TDD approach allows for evolving such code in a robust manner. A\nuseful approach is to begin with base functionality and increase complexity.</p>\n<h3 id=\"writing-a-failing-test-case\">Writing a failing test case</h3>\n<p><em>Why are we writing a test to fail?</em></p>\n<p>Having determined our test case from our acceptance criteria, we begin by writing some code that\nwill fail our test. Why? Because we want to make sure that our test works; we don’t want later\nchecks to be useless because we wrote our test incorrectly and are having false positives returned.</p>\n<h3 id=\"writing-code-to-pass-your-test\">Writing code to pass your test</h3>\n<p>Once you’ve confirmed your test “works” by failing for code that doesn’t pass your test, you can now\nwrite code to pass your test. This can also be an iterative process – first, starting with arbitrary\nvalues that you know will give the “expected” result (faking it to pass), before refining to be more\nbroadly applicable to how your code needs to work in the live system.</p>\n<p>When you are satisfied that your code is complete, it is wise to challenge your test again with\nknown failing code to reaffirm your testing is still functioning as expected.</p>\n<p><strong>What next?</strong></p>\n<p>Once your code is passing your test, it’s time to examine <em>code quality</em>. Is your code:</p>\n<ul>\n<li>reusable:\n<ul>\n<li>are there components that are (or will be) repeated elsewhere?</li>\n</ul>\n</li>\n<li>efficient:\n<ul>\n<li>is your code cost-effective and easily modifiable?</li>\n</ul>\n</li>\n<li>readable:\n<ul>\n<li>could a third-party looking at your code easily understand what is going on?</li>\n</ul>\n</li>\n</ul>\n<p>These are concerns which may be addressed through <em>code refactoring</em>.</p>\n<h3 id=\"refactoring-code\">Refactoring Code</h3>\n<p>Refactoring involves changing the <em>internal</em> structure to make it more easily understood, effective\nand/or cheaper to modify without changing the <em>external behaviour</em> of the code.</p>\n<p>While writing a failing test case and then coding it to pass focuses on <strong>requirements</strong> (and adding\n<strong>new functionality</strong> ), refactoring focuses on <strong>improving design</strong>.</p>\n<p><strong>My code is complete and passing tests; is it time to refactor?</strong></p>\n<p>You don’t need to assess your code for refactoring on every test, but if your find your code is:</p>\n<ul>\n<li>repeating itself (or repeating functionality),</li>\n<li>confusing to follow, or</li>\n<li>you are getting stuck,</li>\n</ul>\n<p>these are good signs that it might be time to refactor.</p>\n<p><strong>How do I refactor?</strong></p>\n<p>Extract function refactoring is one common and intuitive approach to refactoring code: this involves\ncomparing the code intention with the implementation. If the code is doing more than the intention,\nparticularly if it is doing things that may be repeated elsewhere, it probably contains functions\nthat should be split off.</p>\n<p><a href=\"http://refactoring.com/\">Refactoring.com</a> provides useful reading that covers a number of\nrefactoring techniques.</p>\n<h3 id=\"further-information-about-test-driven-development\">Further information about Test Driven Development</h3>\n<p>Deakin students have free access to LinkedIn Learning courses.</p>\n<p>A useful course on these general concepts is\n<a href=\"https://www.linkedin.com/learning/programming-foundations-test-driven-development-3\">Programming Foundations Test Driven Development</a></p>\n<p>Developers working with C++ may also find\n<a href=\"https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus\">Test Driven Development in C++</a>\nuseful</p>\n<h2 id=\"testing-templates\">Testing Templates</h2>\n<p>Several Markdown testing templates are available:</p>\n<ul>\n<li><a href=\"templates/test-strategy-template.md\">Sample Test Strategy</a></li>\n<li><a href=\"templates/test-plan-template.md\">Test Plan Template</a></li>\n<li><a href=\"templates/bug-report-template.md\">Bug Report Template</a></li>\n</ul>";

				const frontmatter = {"title":"QA Process - Software Development and Testing","sidebar":{"label":"QA Process - Software Development and Testing"}};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/processes/quality-assurance/testing-and-dev.md";
				const url = undefined;
				function rawContent() {
					return "\n- [Feature development: where do I start?](#feature-development-where-do-i-start)\n- [Epics and User Stories](#epics-and-user-stories)\n  - [Epics](#epics)\n  - [User Stories](#user-stories)\n- [Software Requirements Specification Document](#software-requirements-specification-document)\n- [Testing and Development](#testing-and-development)\n  - [Making a Test Plan](#making-a-test-plan)\n  - [Test Strategy](#test-strategy)\n  - [Testing Tools](#testing-tools)\n- [Test Driven Development](#test-driven-development)\n  - [Determining appropriate tests](#determining-appropriate-tests)\n  - [Writing a failing test case](#writing-a-failing-test-case)\n  - [Writing code to pass your test](#writing-code-to-pass-your-test)\n  - [Refactoring Code](#refactoring-code)\n- [Testing Templates](#testing-templates)\n\nYou might be wondering, before jumping into coding and planning tests for a new feature, _where do\nyou begin_?\n\n## Feature development: where do I start?\n\n- Clearly articulate the problem and why the changes need to be made.\n- Create [epics](#epics) for each feature for planned development.\n- Identify [user stories](#user-stories) of the feature.\n- Consider how best to mitigate risk or look for alternate solutions.\n- Determine functional and non-functional requirements.\n- Determine acceptance criteria.\n\n  - What are the metrics for success?\n  - What's in/out of scope?\n\n- Your extracted purpose and requirements will be documented within your\n  [Software Requirements Specification](#software-requirements-specification-document) document.\n- Plan your testing by defining your Test Strategy and Test Plan:\n  - Using your specifications, fleshout the expected behaviour for different use case scenarios;\n    these will provide scenarios to be tested in your [Test Plan](#making-a-test-plan).\n  - Determine _how_ you are going to test your scenarios and describe this in your\n    [Test Strategy](#test-strategy).\n\n## Epics and User Stories\n\n### Epics\n\nEpics describe a large body of work that will be broken down into smaller tasks (called user\nstories). Epics are a higher-level view of user request or needs that help with considering larger\naims, what value the work described will bring to the business, organizing work and creating a\nhierarchy. Epics will be broken down into smaller, more manageable tasks (\"user stories\") to be\ncompleted by team members. A Markdown [Epic Template](../../leadership/epic-template.md) is also\navailable.\n\n### User Stories\n\nUser Stories are user-centric statements often put in the form of:\n\n\"As a [persona], I [want to], [so that]\"\n\nThis describes a _persona + need + purpose_.\n\nA **[persona]** – describes the person we are building this for. The persona is not just a role or\njob title; we want to have an understanding of who the person is, how they work, think and feel.\n\n**[wants to]** – describes the user's _intent_ (what they want to achieve) and not the feature they\nuse. If you are describing implementation specifics here, you are taking the wrong approach.\n\n**[so that]** – explains the motivation behind the user's desire and the overall benefit to them\nfrom what they are trying to achieve.\n\nUser stories use non-technical language to provide context and an understanding of what is to be\nbuilt and why. They provide a framework for approaching development which is user-focused, discrete\nand small enough to be manageably tackled by team members in an Agile environment.\n\nBenefits include:\n\n- Keeps focus on the user: keeps the team focused on solving real-world problems in user-centric\n  ways.\n- Enables collaboration: by defining the end goal, the team can work together on deciding on how\n  best to meet it\n- Drives creative solutions: the focus on the end-user solution required, rather than the how,\n  encourages creative problem-solving (where to-do lists do not).\n\nIn Agile methodology, during a sprint or iteration, the team decides which user stories to tackle\nthat story and discuss requirements; once agreed, requirements are added to the stories; Story tasks\nand subtasks can be tracked and assigned using the team's relevant Trello board; user stories for\nfuture sprints can remain in the backlog.\n\nWhen defining user stories, consider:\n\n- Definition of \"done\": how will we know when a task/story is complete?\n- Tasks or subtasks: what steps need to be completed and by whom?\n- User personas: who is the user being considered; are there multiple users (consider making user\n  stories for each of them)\n- Ordered steps: In a larger process, write a story for _each step_\n- Time: consider how long a story may take; if it's more than one sprint, or seems very complex, the\n  story may need to be broken down into smaller stories (or, you may be looking at an epic)\n\nFurther background on user stories can be found at\n<https://www.atlassian.com/agile/project-management/user-stories>\n\n## Software Requirements Specification Document\n\nA Software Requirements Specification (SRS) document describes the expectations for your product,\nhow it should perform, and the functionality required to meet stakeholder needs. An\n[SRS template](templates/srs-template.md) has been provided which sets out an example format of an\nSRS, including the following components.\n\n- **Introduction**:\n\n  - **Product Purpose**\n\n    Define the purpose of the SRS\n\n  - **Intended audience**\n\n    Who are the expected readers (testers, developers, leadership team?) of the SRS document?\n\n  - **Intended use**\n\n    How are these readers expected to use the SRS document?\n\n  - **Scope**\n\n    What are the goals and objectives for this product? What should the product do (And what should\n    it _not_ do?)\n\n  - **Definition and acronyms**\n\n    Describe relevant terms, definitions and acronyms required to understand the document.\n\n- **Overall Description**\n\n  Describes your product and what you are going to build; describe here whether it is a new product,\n  or an enhancement/add-on to an existing product, who it is for and why it has value. This explains\n  the general background and factors affecting requirements (rather than the specific requirements\n  themselves)\n\n  - **User Needs**\n\n    Who will use your product feature and how? What needs do your end users have that you need to be\n    aware of?\n\n  - **Assumptions and dependencies**\n\n    Provide any assumptions made (what are we assuming to be true) or dependencies for your\n    product/feature\n\n- **System Features and Requirements**\n\n  - **Functional Requirements**\n\n    Fundamental requirements are essential requirements that, as the name suggests, provide\n    functionality and are often described by \"The system shall...\" statements.\n\n  - **External Interface Requirements**\n\n    Specific requirements detailing hor your product interfaces with other components. They may\n    include user, hardware, software and communications interfaces.\n\n  - **System Features**\n\n    _System features are types of functional requirements. These are features that are required in\n    order for a system to function_\n\n  - **Nonfunctional requirements**\n\n    Nonfunctional requirements are those relating to non-functional measures and relate to aspects\n    such as performance, safety, security and quality.\n\nFurther references include Perforce's\n[How to Write an SRS Document](https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document)\nand, for a higher level of detail on recommended guidelines for the SRS elements,\n[IEEE’s Recommended Practice for Software Requirements Specifications](https://drive.google.com/file/d/1G1vQq-RjnbEmTTzItIUarWuMnbqZchlx/view).\n\n_After completing the SRS, you’ll need to get it approved by key stakeholders. This will require\neveryone to review the latest version of the document_\n\n## Testing and Development\n\nTesting should be built into the software development process. Thoth-Tech advocates for a\n[Test Driven Development](#test-driven-development) (TDD) approach. In any event, all coding\nprojects should consider and record their [Test Plan](#making-a-test-plan) and\n[Test Strategy](#test-strategy) and produce these as project deliverables.\n\n### Making a Test Plan\n\nFor each product/feature, using the required specifications, flesh out the expected behaviour for\ndifferent use case scenarios. A collaborative approach helps to make sure you are defining the right\nproblem and solution; be sure to seek feedback from the team during this process. These scenarios\nwill be detailed in a Test Plan, which will record each scenario to be tested, the expected outcome,\nand the actual outcome of tests. A simple Markdown\n[Test Plan Template](templates/test-plan-template.md) has been provided.\n\n### Test Strategy\n\nYou need to consider _how_ you are going to test your scenarios as part of this process –\nconsidering matters such as what [testing tools](#testing-tools) you will use, what platforms tests\nwill be performed on, any release processes, and what deliverables will you need to produce. This\nshould be considered as part of your Test Strategy – a deliverable which should be produced as part\nof the QA process. Other documents that may be produced as part of the QA process include a Test\nPlan and Bug Reports.\n\nTemplates have been provided for sample [Test Strategy](templates/test-strategy-template.md),\n[Test Plan](templates/test-plan-template.md) and [Bug Report](templates/bug-report-template.md)\ndocuments.\n\nWhile manual testing may be conducted initially, moving towards automated tests allows for better\nefficiency, ease of code checks and is the preferred method to allow automatic test incorporation\ninto the deployment pipeline. Testing and processes, like many other in the Agile model, are not\nstatic, and can (and should) be improved on successive iterations. This may include iterating\nexisting processes for testing releases as well as automating more functionality.\n\nThoth-Tech encourages a [test driven development](#test-driven-development) approach, in which\ntesting is intertwined with softward development. If your software coding has begun in advance of\ntesting considerations, then you should still formulate a Testing Strategy, including a Test Plan,\nto verify that your code successfully meets requirements.\n\n### Testing Tools\n\nUsing testing tools makes tests easier to write and easier for future developers to understand. They\nadd consistency and repeatability to the testing process, and make test design and documentation\nsimpler.\n\nTesting tools include:\n\n- [Jasmine](https://jasmine.github.io) (for javascript unit testing)\n- [Cypress](https://www.cypress.io/) (javascript end-to-end testing)\n- Minitest (for Rails)\n- [Catch2](https://github.com/catchorg/Catch2/tree/v2.x) (for C/C++)\n- Junit (for Java)\n- Nunit (for .Net languages, such as C#, F#, Visual Basic)\n- [Karma](https://karma-runner.github.io/latest/index.html) (a testing tool for automation that\n  utilises other testing frameworks)\n\nBut there are many more. Look for what is currently available and popular in your language.\nCurrently, proposals have been put forward for utilising [Jasmine](https://jasmine.github.io) and\n[Karma](https://karma-runner.github.io/latest/index.html) for relevant unit testing and automation\nand [Cypress](https://www.cypress.io/) for end-to-end testing in the OnTrack space.\n\n## How do I prove my code does what it's supposed to do? <!-- omit in toc -->\n\n## Test Driven Development\n\nBy utilising _test driven development (TDD)_, software requirements are embedded into the testing\nand coding process, so that functionality is validated as it is coded. This assists to confirm code\nis actually fulfilling the requirements while improving the robustness of testing and paving the way\nfor automation in deployment pipelines.\n\nHow does it work?\n\n1. [Determine appropriate tests](#determining-appropriate-tests)\n2. [Write a failing test case](#writing-a-failing-test-case)\n3. [Write code to pass the test](#writing-code-to-pass-your-test)\n4. [Refactor code](#refactoring-code)\n\n### Determining appropriate tests\n\nTests should come from your _requirements_ and _acceptance criteria_; they are designed to test\nrequirements not methods.\n\nFrom these, project teams solidify scenarios that relate to project requirements – make sure you\ncollaborate and obtain feedback on these scenarios to check that you have understood the\nrequirements correctly. This can be done through group brainstorming sessions (especially valuable\nin initial stages) and through returning to the team for feedback.\n\nRemember, test-driven development does lend itself to an iterative software development process,\nsuch as Agile, so it is quite suited to a development process where coders start with basic\nfunctionality that may be added to or improved in subsequent iterations. This is okay – you will\nprogress and build, and using the TDD approach allows for evolving such code in a robust manner. A\nuseful approach is to begin with base functionality and increase complexity.\n\n### Writing a failing test case\n\n_Why are we writing a test to fail?_\n\nHaving determined our test case from our acceptance criteria, we begin by writing some code that\nwill fail our test. Why? Because we want to make sure that our test works; we don't want later\nchecks to be useless because we wrote our test incorrectly and are having false positives returned.\n\n### Writing code to pass your test\n\nOnce you've confirmed your test \"works\" by failing for code that doesn't pass your test, you can now\nwrite code to pass your test. This can also be an iterative process – first, starting with arbitrary\nvalues that you know will give the \"expected\" result (faking it to pass), before refining to be more\nbroadly applicable to how your code needs to work in the live system.\n\nWhen you are satisfied that your code is complete, it is wise to challenge your test again with\nknown failing code to reaffirm your testing is still functioning as expected.\n\n**What next?**\n\nOnce your code is passing your test, it's time to examine _code quality_. Is your code:\n\n- reusable:\n  - are there components that are (or will be) repeated elsewhere?\n- efficient:\n  - is your code cost-effective and easily modifiable?\n- readable:\n  - could a third-party looking at your code easily understand what is going on?\n\nThese are concerns which may be addressed through _code refactoring_.\n\n### Refactoring Code\n\nRefactoring involves changing the _internal_ structure to make it more easily understood, effective\nand/or cheaper to modify without changing the _external behaviour_ of the code.\n\nWhile writing a failing test case and then coding it to pass focuses on **requirements** (and adding\n**new functionality** ), refactoring focuses on **improving design**.\n\n**My code is complete and passing tests; is it time to refactor?**\n\nYou don't need to assess your code for refactoring on every test, but if your find your code is:\n\n- repeating itself (or repeating functionality),\n- confusing to follow, or\n- you are getting stuck,\n\nthese are good signs that it might be time to refactor.\n\n**How do I refactor?**\n\nExtract function refactoring is one common and intuitive approach to refactoring code: this involves\ncomparing the code intention with the implementation. If the code is doing more than the intention,\nparticularly if it is doing things that may be repeated elsewhere, it probably contains functions\nthat should be split off.\n\n[Refactoring.com](http://refactoring.com/) provides useful reading that covers a number of\nrefactoring techniques.\n\n### Further information about Test Driven Development\n\nDeakin students have free access to LinkedIn Learning courses.\n\nA useful course on these general concepts is\n[Programming Foundations Test Driven Development](https://www.linkedin.com/learning/programming-foundations-test-driven-development-3)\n\nDevelopers working with C++ may also find\n[Test Driven Development in C++](https://www.linkedin.com/learning/test-driven-development-in-c-plus-plus)\nuseful\n\n## Testing Templates\n\nSeveral Markdown testing templates are available:\n\n- [Sample Test Strategy](templates/test-strategy-template.md)\n- [Test Plan Template](templates/test-plan-template.md)\n- [Bug Report Template](templates/bug-report-template.md)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"feature-development-where-do-i-start","text":"Feature development: where do I start?"},{"depth":2,"slug":"epics-and-user-stories","text":"Epics and User Stories"},{"depth":3,"slug":"epics","text":"Epics"},{"depth":3,"slug":"user-stories","text":"User Stories"},{"depth":2,"slug":"software-requirements-specification-document","text":"Software Requirements Specification Document"},{"depth":2,"slug":"testing-and-development","text":"Testing and Development"},{"depth":3,"slug":"making-a-test-plan","text":"Making a Test Plan"},{"depth":3,"slug":"test-strategy","text":"Test Strategy"},{"depth":3,"slug":"testing-tools","text":"Testing Tools"},{"depth":2,"slug":"how-do-i-prove-my-code-does-what-its-supposed-to-do","text":"How do I prove my code does what it’s supposed to do? "},{"depth":2,"slug":"test-driven-development","text":"Test Driven Development"},{"depth":3,"slug":"determining-appropriate-tests","text":"Determining appropriate tests"},{"depth":3,"slug":"writing-a-failing-test-case","text":"Writing a failing test case"},{"depth":3,"slug":"writing-code-to-pass-your-test","text":"Writing code to pass your test"},{"depth":3,"slug":"refactoring-code","text":"Refactoring Code"},{"depth":3,"slug":"further-information-about-test-driven-development","text":"Further information about Test Driven Development"},{"depth":2,"slug":"testing-templates","text":"Testing Templates"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };