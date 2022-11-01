// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Stampi",
  tagline: "Sistema de facturación",
  url: "https://stampi-doc.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "Stampi",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-iso.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Empezando",
          },
          { to: "/api", label: "API", position: "left" },
          { to: "/blog", label: "Webhooks", position: "left" },
          {
            href: "https://github.com/nomada-sh/stampi-api-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Empezando",
                to: "/docs/intro",
              },
              {
                label: "API",
                to: "/api",
              },
              {
                label: "Webhooks",
                to: "/blog",
              },
            ],
          },
          {
            title: "Nomada Software House",
            items: [
              {
                label: "Stampi",
                href: "https://getstampi.com/",
              },
              {
                label: "React Native Eyecandy",
                href: "https://eyecandy.nomada.cloud/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nomada Software House.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
