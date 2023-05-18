// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Introducción a Frontend',
  tagline: 'ADA ITW',
  url: 'https://plugit.social',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/plugit-dots-removebg-preview.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PlugIT', // Usually your GitHub org/user name.
  projectName: 'Intro Frontend', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PlugIT',
        // logo: {
        //   alt: 'PlugIT',
        //   src: 'img/plugit-dots-removebg-preview.png',
        // },
        items: [
          {
            to: 'docs/modulo-1/clase-01',
            label: 'Clases',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} PlugIT.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        
      },
    }),
};

module.exports = config;

// module.exports = {
//   title: 'Introducción a Python',
//   tagline: 'Programa',
//   url: 'https://adaitw.org',
//   baseUrl: '/',
//   favicon: 'img/ada-favicon.png',
//   organizationName: 'Ada ITW', // Usually your GitHub org/user name.
//   projectName: 'adadocs', // Usually your repo name.
//   themeConfig: {
//     prism: {
//       theme: require('prism-react-renderer/themes/palenight'),
//     },
//     navbar: {
//       title: 'Ada ITW',
//       logo: {
//         alt: 'My Site Logo',
//         src: 'img/iso_blanco.svg',
//       },
//       items: [
//         { to: 'docs/modulo-1/clase-01', label: 'Clases', position: 'left' },
//       ],
//     },
//     footer: {
//       style: 'dark',
//       links: [],
//       copyright: `Copyright © ${new Date().getFullYear()} Ada ITW.`,
//     },
//   },
//   presets: [
//     [
//       '@docusaurus/preset-classic',
//       {
//         docs: {
//           sidebarPath: require.resolve('./sidebars.js'),
//           editUrl:
//             'https://github.com/facebook/docusaurus/edit/master/website/',
//         },
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//       },
//     ],
//   ],
// };