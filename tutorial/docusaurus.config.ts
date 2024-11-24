import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Tutoriais de Engenharia Estrutural',
  tagline: 'projeto-de-engenharia-estrutural',
  favicon: 'img/favicon.ico',
  url: 'https://engenharia-estrutural.web.app/',
  baseUrl: '/',
  organizationName: 'tcarvi-engenheiro-eduardo-leal',
  projectName: 'projeto-de-engenharia-estrutural',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-engenharia-estrutural/edit/main/tutorial/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-engenharia-estrutural/edit/main/tutorial/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'engenharia-estrutural',
      logo: {
        alt: 'engenharia-estrutural',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutoriais',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-engenharia-estrutural',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/category/conceitos-gerais',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-de-engenharia-estrutural',
            },
          ],
        },
      ],
      copyright: `atualizado em  ${new Date().toLocaleDateString("pt-BR")} ©TCARVI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
