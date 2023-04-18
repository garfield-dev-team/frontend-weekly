import { exec } from "node:child_process";
import { promisify } from "node:util";
import os from "node:os";
import consola from "consola";

const execa = promisify(exec);

async function main() {
  consola.info("Get local change...");

  // git diff 可选参数：
  // `--name-only`: 只显示文件名，而不显示更改的具体内容
  // `--diff-filter=d`：只显示被修改或已删除的文件，过滤掉新增的文件
  // `--cached`：只显示已经被 Git 暂存的文件，即已经被 `git add` 命令添加到暂存区的文件
  const { stdout } = await execa(`git diff --name-only | grep "\.md$"`);
  const changes = stdout.trim().split(os.EOL);
  if (changes.length > 1) {
    return Promise.reject(
      `${changes.length} md files found, please commit then separately!`
    );
  }

  consola.info(`Committing local change: ${changes[0]}...`)

  let chunk = changes[0].replace(/.*\/(.*)\/(.*)$/, "$1");
  if (chunk.includes("welcome")) {
    chunk = "pinned";
  }
  // 下面是 `git add .` 和 `git commit` 两个命令的缩写
  await execa(`git commit -am ":sparkles: feat: update ${chunk} section"`);

  consola.success(
    'Commit successfully! Run "git push" to push to remote repository'
  );
}

main().catch((err) => {
  consola.error(err);
});
