#!/usr/bin/env node
import { Command } from "commander";
import { execSync } from "child_process";
import { gradientText } from "./utilities/gradient.js";

const program = new Command();

program
    .command("show")
    .description("Custom git pull command")
    .action(() => {
        const desc = gradientText('pls pull: git pull')
        const desc1 = gradientText('pls hide: git stash')
        const desc2 = gradientText('pls seek: git stash pop')
        const desc3 = gradientText('pls rebase <branchName>: git rebase -i <branchName>')
        const desc4 = gradientText('pls create <branchName>: git checkout -b <branchName>')
        const desc5 = gradientText('pls go <branchName>: git switch <branchName>')
        const desc6 = gradientText('pls clone <url>: git clone <url>')
        console.log(desc);
        console.log(desc1);
        console.log(desc2);
        console.log(desc3);
        console.log(desc4);
        console.log(desc5);
        console.log(desc6);
    });


program
    .command("pull")
    .description("Custom git pull command")
    .action(() => {
        execSync("git pull");
    });

program
    .command("hide")
    .description("Custom git stash command")
    .action(() => {
        execSync("git stash");
    });

program
    .command("seek")
    .description("Custom git stash pop command")
    .action(() => {
        execSync("git stash pop");
    });

program
    .command("rebase <branchName>")
    .description("Custom git rebase command")
    .action((branchName) => {
        execSync(`git rebase -i ${branchName}`, { stdio: "inherit" });
    });

program
    .command("create <branchName>")
    .description("Custom git checkout command")
    .action((branchName) => {
        execSync(`git checkout -b ${branchName}`);
    });

program
    .command("go <branchName>")
    .description("Custom git switch command")
    .action((branchName) => {
        execSync(`git switch ${branchName}`);
    });

program
    .command("clone <url>")
    .description("Custom git clone command")
    .action((url) => {
        execSync(`git clone ${url}`);
    });

program.parse(process.argv);
