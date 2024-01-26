import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<p>This agreement is entered into by and between the undersigned students (“Participants”) of\n(SIT374/SIT764 &#x26; SIT378/SIT782) at Thoth Tech (“Company”).</p>\n<h2 id=\"objective\">Objective</h2>\n<p>The main objective is to encourage collaboration among students who are eager to put in additional\nhours to generate an outstanding feature that can be referenced even after the completion of your\nstudies.</p>\n<h2 id=\"commitments\">Commitments</h2>\n<ol>\n<li>Time Dedication: Participants agree to collectively dedicate more hours per week to contribute to\nthe project.</li>\n<li>Regular Meetings: Participants agree to show up to team meetings on time to talk about the status\nof the project, work through any obstacles, and plan how to develop it effectively.</li>\n<li>Task Distribution: Participants will be assigned specific roles and responsibilities based on\ntheir skills and expertise. Each member pledges to do their assigned obligations within agreed\ntimeline.</li>\n<li>Communication: Effective and transparent communication is essential. Participants pledge to\ncommunicate regularly through designated channels and respond promptly to team inquiries.</li>\n<li>Project Documentation: Thorough documentation of the project’s requirement, roadmap, progress,\nchallenges, and solutions is essential. Participants agree to maintain detailed records and share\nupdates regularly.</li>\n<li>Quality Assurance: Participants commit to ensuring the highest quality of work. Regular testing\nand quality checks will be conducted to meet or exceed Thoth Tech’s standards.</li>\n<li>Duration: This agreement is effective from the day of signing and continues until the end of\ntrimester 3. Extensions may be discussed based on project requirements.</li>\n</ol>\n<h2 id=\"consequences-for-non-compliance\">Consequences for Non-Compliance</h2>\n<ul>\n<li>Failure to adhere to the commitments outlined in this agreement may result in a re-evaluation of\nthe participant’s involvement in the project.</li>\n<li>Not fulfilling these obligations will lead to more severe grade penalties compared to students who\nhaven’t agreed to this commitment.</li>\n</ul>";

				const frontmatter = {"title":"Committed Participant Agreement"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/policies/Committed Participant Agreement.md";
				const url = undefined;
				function rawContent() {
					return "\nThis agreement is entered into by and between the undersigned students (“Participants”) of\n(SIT374/SIT764 & SIT378/SIT782) at Thoth Tech (“Company”).\n\n## Objective\n\nThe main objective is to encourage collaboration among students who are eager to put in additional\nhours to generate an outstanding feature that can be referenced even after the completion of your\nstudies.\n\n## Commitments\n\n1. Time Dedication: Participants agree to collectively dedicate more hours per week to contribute to\n   the project.\n2. Regular Meetings: Participants agree to show up to team meetings on time to talk about the status\n   of the project, work through any obstacles, and plan how to develop it effectively.\n3. Task Distribution: Participants will be assigned specific roles and responsibilities based on\n   their skills and expertise. Each member pledges to do their assigned obligations within agreed\n   timeline.\n4. Communication: Effective and transparent communication is essential. Participants pledge to\n   communicate regularly through designated channels and respond promptly to team inquiries.\n5. Project Documentation: Thorough documentation of the project's requirement, roadmap, progress,\n   challenges, and solutions is essential. Participants agree to maintain detailed records and share\n   updates regularly.\n6. Quality Assurance: Participants commit to ensuring the highest quality of work. Regular testing\n   and quality checks will be conducted to meet or exceed Thoth Tech's standards.\n7. Duration: This agreement is effective from the day of signing and continues until the end of\n   trimester 3. Extensions may be discussed based on project requirements.\n\n## Consequences for Non-Compliance\n\n- Failure to adhere to the commitments outlined in this agreement may result in a re-evaluation of\n  the participant's involvement in the project.\n- Not fulfilling these obligations will lead to more severe grade penalties compared to students who\n  haven't agreed to this commitment.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"objective","text":"Objective"},{"depth":2,"slug":"commitments","text":"Commitments"},{"depth":2,"slug":"consequences-for-non-compliance","text":"Consequences for Non-Compliance"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
