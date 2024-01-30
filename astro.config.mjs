import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlightBlog(),
    starlight({
      title: "Capstone",
      customCss: ["./src/styles/custom.css"],
      social: {
        // This should be changed to your companies repo
        github: "https://github.com/Capstone-Template-orginisation/website-template",
      },
      components: {
        MarkdownContent: "starlight-blog/overrides/MarkdownContent.astro",
        Sidebar: "starlight-blog/overrides/Sidebar.astro",
        ThemeSelect: "starlight-blog/overrides/ThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Usefull Company Processes",
          items: [
            { label: "Capstone Example Stack Document", 
              link: "processes/example-thoth-tech-technology-stack",
            },

            { label: "Introduction", link: "/processes/introduction" },
            {
              label: "Cyber Security Guidelines",
              autogenerate: {
                directory: "processes/cyber-security-guidelines",
              },
            },
            {
              label: "Documentation",
              autogenerate: { directory: "processes/Documentation" },
            },
            {
              label: "Quality Assurance",
              items: [
                {
                  label: "Git Contributions Guide",
                  link: "/processes/quality-assurance/git-contributions-guide",
                },
                {
                  label: "Quality Assurance Overview",
                  link: "/processes/quality-assurance/quality-assurance-overview",
                },
                {
                  label: "Testing and Development",
                  link: "/processes/quality-assurance/testing-and-dev",
                },
                {
                  label: "Templates",
                  autogenerate: {
                    directory: "processes/quality-assurance/templates",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Example Teams and Leadership",
          autogenerate: {
            directory: "teams-and-leadership",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Example Company Policies",
          autogenerate: {
            directory: "policies",
          },
        },
        {
          label: "Capstone-Training",
          items: [
            {
              label: "",
              link: "/Capstone-Training/Capstone-Training",
            },
            {
              label: "Github - Training",
              items: [
                {
                  label: "Github",
                  autogenerate: {
                    directory: "/Capstone-Training/Github/",
                  },
              
                  label: "Github Written Guides",
                  autogenerate: {
                    directory: "/Capstone-Training/Github/",
                  },
                },
                {
                  label: "Github Video Guides",
                  autogenerate: {
                    directory: "/Capstone-Training/Github/",
                  },
                  },
              ],
            },
            
            {
              label: "Trello",
              items: [

                {
                  label: "Trello Written Guides",
                  autogenerate: {
                    directory: "Capstone-Training/Trello",
                  },
                },
                {
                  label: "Trello Video Guides",
                  autogenerate: {
                    directory: "Capstone-Training/Trello",
                  },
                  
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
