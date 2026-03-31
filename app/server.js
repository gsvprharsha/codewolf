require("dotenv").config();

const express = require("express");
const { getOctokit } = require("./github/githubClient");
const { generateReview } = require("./core/reviewEngine");

const app = express();

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const event = req.headers["x-github-event"];
  const action = req.body.action;

  if (event === "pull_request" && ["opened", "synchronize"].includes(action)) {
    try {
      const prNumber = req.body.pull_request?.number;
      const owner = req.body.repository?.owner?.login;
      const repo = req.body.repository?.name;
      const installationId = req.body.installation?.id;
      const headSha = req.body.pull_request.head.sha;

      console.log("[+] New PR detected:");
      console.log({ prNumber, owner, repo, installationId });

      const octokit = getOctokit(installationId);

      console.log("[=] Fetching PR files...");

      const response = await octokit.pulls.listFiles({
        owner,
        repo,
        pull_number: prNumber,
      });

      const files = response.data;

      let finalReview = `CodeWolf Review:\n\n`;

      for (const file of files) {
        console.log("\n[=] Processing file:", file.filename);

        if (!file.patch) continue;

        const fileData = await octokit.repos.getContent({
          owner,
          repo,
          path: file.filename,
          ref: headSha,
        });

        let content = "";

        if (fileData.data && fileData.data.content) {
          content = Buffer.from(fileData.data.content, "base64").toString("utf-8");
        }

        console.log("[+] Generating AI review...");

        const review = await generateReview({
          filename: file.filename,
          patch: file.patch,
          fullContent: content,
        });

        console.log("\n[+] AI Review:\n", review);

        finalReview += `### ${file.filename}\n${review}\n\n---\n\n`;
      }

      await octokit.issues.createComment({
        owner,
        repo,
        issue_number: prNumber,
        body: finalReview,
      });

    } catch (error) {
      console.error("[-] Error processing PR:", error.message);
    }
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("[+] CodeWolf server running on port 3000");
});