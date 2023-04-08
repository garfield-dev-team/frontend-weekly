# Frontend Weekly

⭐️ 每周更新优质技术文章，欢迎点赞关注！

GitHub pages:

> https://garfield-dev-team.github.io/frontend-weekly/

Vercel:

> https://frontend-weekly.vercel.app/

Netlify:

> https://frontend-weekly.netlify.app/

### 安装 docusaurus

```bash
$ npx create-docusaurus@latest my-website classic --typescript --package-manager pnpm
```

### 更新 docusaurus

更新 docusaurus 核心库：

```bash
$ pnpm up @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest

# 可以简写如下
$ pnpm up "@docusaurus/*" --latest
```

更新其他依赖：

```bash
$ pnpm up
```

更新 TypeScript：

```bash
$ pnpm up typescript --latest
```

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
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
