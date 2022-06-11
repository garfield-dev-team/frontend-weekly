# Frontend Weekly

⭐️ 每周更新优质技术文章，欢迎点赞关注！

GitHub pages:

> https://garfield-dev-team.github.io/frontend-weekly/

Vercel:

> https://frontend-weekly.vercel.app/

Netlify:

> https://frontend-weekly.netlify.app/

### ⚠️ Breaking Change!!! Upgrade to docusaurus@2.0.0-beta.21

Please note that docusaurus@2.0.0-beta.21 requires Node >= 16.14.0, make sure your Node version is not out-dated.

### 安装 docusaurus

```bash
$ npx create-docusaurus@latest my-website classic --typescript --package-manager yarn
```

### 更新 docusaurus

```bash
$ yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest
```

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
