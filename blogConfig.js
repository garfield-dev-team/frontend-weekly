const BLOG_CONFIG = [2021, 2022];

module.exports = BLOG_CONFIG.map(item =>
  [
    '@docusaurus/plugin-content-blog',
    {
      id: `blog-${item}`,
      routeBasePath: `/blog/${item}`,
      path: `./blog/${item}`,
    }
  ]
)
