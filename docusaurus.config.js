// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frontend Weekly',
  tagline: '⭐️ 每周更新优质技术文章，欢迎点赞关注！',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/frontend-weekly/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
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
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ <b>恭祝大家新春快乐，虎年大吉，虎虎生威！</b>`,
      },
      // algolia: {
      //   appId: 'X1Z85QJPUV',
      //   apiKey: 'bf7211c161e8205da2f933a02534105a',
      //   indexName: 'docusaurus-2',
      //   contextualSearch: true,
      // },
      navbar: {
        title: 'Frontend Weekly',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/garfield-dev-team/frontend-weekly/tree/main/static/img/IMG_0058.JPG',
            label: '技术交流群',
            position: 'right',
          },
          {
            href: 'https://github.com/garfield-dev-team/frontend-weekly',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Blog',
            items: [
              {
                label: 'Tutorial',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Garfield-cli 前端工程化',
                href: 'https://github.com/garfield-dev-team/Garfield-cli',
              },
              {
                label: 'NPM 工程化规范',
                href: 'https://github.com/Jiacheng787/my-promisify',
              },
              {
                label: 'React 从零到一工程化指北',
                href: 'https://github.com/Jiacheng787/React-zero-to-one',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Golang 学习',
                href: 'https://github.com/Jiacheng787/go-by-example',
              },
              {
                label: '面试内容汇总',
                href: 'https://github.com/Jiacheng787/Bytedance-interview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
