import consola from "consola";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

async function main() {
  const workDir = process.cwd();
  const blogDir = path.resolve(workDir, "blog");
  
  const dirList = await fs.readdir(blogDir);
  const prevTimestamp = Math.max(
    ...dirList
      .filter(item => !["welcome", "authors"].some(s => item.includes(s)))
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
