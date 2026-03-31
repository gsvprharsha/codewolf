const { callHuggingFace } = require("../llm/huggingFace");

function buildPrompt(file) {
  return `
You are a senior security engineer.

Analyze the code for:
- bugs
- security issues
- production risks

IMPORTANT RULES:
- ONLY output the final answer
- DO NOT explain your thinking
- DO NOT include reasoning
- DO NOT describe the task
- DO NOT include analysis text
- ONLY return the final structured output

STRICT FORMAT:

## 🔴 Issues
- ...

## 🔐 Security
- ...

## 🧠 Verdict
- ...

If no issues exist, write:
"No significant issues found"

File: ${file.filename}

Changes:
${file.patch}

Code:
${file.fullContent.slice(0, 3000)}
`;
}

async function generateReview(file) {
  try {
    const prompt = buildPrompt(file);
    const result = await callHuggingFace(prompt);

    if (result) return result;

    return "⚠️ No usable response from model";
  } catch (err) {
    console.error("HF Fetch Error:", err);
    return "⚠️ Failed to generate review";
  }
}

module.exports = { generateReview };