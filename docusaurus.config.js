// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dusun wiki',
  tagline: 'Dusun wiki',
  favicon: 'img/favicon.png',
  noIndex: true,
  // Set the production url of your site here
  url: 'https://wiki.dusuniot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dusun001', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      colorMode: {
        defaultMode: 'dark',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'iot-gateway-hardware',
            position: 'left',
            label: 'IoT Gateway Hardware',
            className: 'navbar_doc_items',
          },
          {
            type: 'doc',
            docId: 'iot-gateway-with-applications',
            position: 'left',
            label: 'IoT Gateway with Applications',
            className: 'navbar_doc_items',
          },
          {
            type: 'doc',
            docId: 'system-on-modules',
            position: 'left',
            label: 'System on Modules',
            className: 'navbar_doc_items',
          },
          {
            to: 'https://www.dusuniot.com/shop/',
            position: 'right',
            className: 'navbar_doc_right_items',
            // className: 'header-shop-link',
            label: 'Shop 👜',
          },
          {
            label: 'Help 🙋',
            position: 'right',
            className: 'navbar_doc_right_items',
            to: 'https://community.dusuniot.com/',
          },
          {
            href: 'https://github.com/Seeed-Studio/wiki-documents',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'IoT Gateway Hardware',
                to: '/iot-gateway-hardware',
              },
              {
                label: 'IoT Gateway with Applications',
                to: '/iot-gateway-with-applications',
              },
              {
                label: 'System on Modules',
                to: '/system-on-modules',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Forum',
                href: 'https://community.dusuniot.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/d5b2Y2rUsv',
              },
            ],
          },
          {
            title: 'Guick Guide',
            items: [
              {
                label: 'Dusun IoT Website',
                href: 'https://www.dusuniot.com/',
              },
              {
                label: 'Shop',
                href: 'https://www.dusuniot.com/shop/',
              },
              {
                label: 'Technical Help',
                href: 'https://community.dusuniot.com/',
              },
              {
                label: 'Tutorials',
                href: 'https://www.dusuniot.com/resources/iot-resources-library/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Company',
                href: 'https://www.dusuniot.com/about-us/',
              },
              {
                label: 'Company News',
                href: 'https://www.dusuniot.com/news/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DusunIoT.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'ANUSD2X02Y',
        apiKey: '47b490fe9a55f1c8d34d2dec4aea653d',
        indexName: 'dusuniot',
        contextualSearch: false,
        searchParameters: {},
        searchPagePath: 'search',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
