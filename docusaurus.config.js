module.exports = {
  title: 'Seu Título',
  tagline: 'Seu Tagline',
  url: 'https://andrecristen.github.io', // URL do seu site
  baseUrl: '/all-services/', // Caminho base
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'andrecristen', // Nome do seu usuário ou organização no GitHub
  projectName: 'all-services', // Nome do seu repositório no GitHub
  deploymentBranch: 'gh-pages', // Branch usada para o GitHub Pages
  trailingSlash: false, // ou true, dependendo da sua preferência e configuração
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/andrecristen/all-services/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/andrecristen/all-services/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
