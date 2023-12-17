import consola from "consola";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const workDir = process.cwd();

async function main() {
  const rootPath = path.resolve(workDir, "blogs");

  const blogRoutes = await fs.readdir(rootPath);
  const currentBlog = blogRoutes
    .filter((item) => !["authors.yml"].includes(item))
    .sort((a, b) => Number(b) - Number(a))
    .at(0);

  const blogDir = path.resolve(rootPath, currentBlog);

  const dirList = await fs.readdir(blogDir);
  const prevTimestamp = Math.max(
    ...dirList
      .filter(item => !["welcome", "authors", ".DS_Store"].some(s => item.includes(s)))
      .map(item => item.replace(/-/g, "/"))
      .map(item => new Date(item).getTime())
  );

  const week = 1000 * 60 * 60 * 24 * 7;
  const nextTimestamp = prevTimestamp + week;

  const d = new Date(nextTimestamp);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();

  const folderName = [
    year,
    `${month}`.padStart(2, "0"),
    `${date}`.padStart(2, "0")
  ].join("-");

  const template = [
    "---",
    `slug: ${month}月${date}日内容汇总`,
    `title: ${month}月${date}日内容汇总`,
    "authors: [garfield]",
    "tags: []",
    "---",
    "",
    "## 🌟 AI 相关",
    "",
    "",
    "",
    "## ⭐️ Go & 云原生 & Rust 相关",
    "",
    "",
    "",
    "## 📒 后端相关",
    "",
    "",
    "",
    "## 📒 前端相关",
    "",
    "",
    "",
  ].join(os.EOL);

  const newDir = path.resolve(blogDir, folderName);
  const newFile = path.resolve(blogDir, folderName, "index.md");

  consola.info("Create new dir...");
  await fs.mkdir(newDir);

  consola.info("Init file content...");
  await fs.writeFile(newFile, template);

  consola.success("Successfully create new blog!");
}

main().catch(err => {
  consola.error(err);
})
