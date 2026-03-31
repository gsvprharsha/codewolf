<p align="center">
  <a href="https://github.com/gsvprharsha/codewolf">
    <img src="./assets/logo.svg" alt="CodeWolf" width="500" height="100">
  </a>
</p>

<h1 align="center">
  Speed up PR reviews and catch security issues early with AI
</h1>
<p align="center">
  <b>
    <a href="#-what-is-codewolf">What is CodeWolf</a> •
    <a href="#-features">Features</a> •
    <a href="#-self-hosting-codewolf-quick-start">Installation</a> •
    <a href="#-roadmap">Roadmap</a> •
    <a href="#-contributing">Contributing</a>
  </b>
</p>
---
## What is CodeWolf?

**CodeWolf** is an open-source AI-powered code review engine that automatically reviews your pull requests and provides meaningful, structured feedback.

It analyzes code diffs, identifies potential bugs, highlights security vulnerabilities, and suggests improvements directly inside your PR workflow.

Unlike traditional tools, CodeWolf is:
- **LLM-agnostic (BYOK)** - use your own model
- **Fully self-hostable** - no vendor lock-in
- **Minimal and fast** - no bloated dashboards or unnecessary noise

---
## Why CodeWolf?

Manual PR reviews are:
- Time-consuming
- Inconsistent
- Often miss security issues

CodeWolf acts as a **first-pass reviewer**, helping you:
- Catch issues before human review
- Reduce reviewer fatigue
- Maintain consistent code quality across teams

---

## Features

###  Automated PR Reviews
- Runs on every pull request
- Analyzes code changes (diff-based)
- Posts structured feedback directly on GitHub

### Security-Focused Analysis
- Detects common vulnerabilities
- Flags risky patterns early
- Helps enforce secure coding practices

### Bring Your Own LLM (BYOK)
- Use Hugging Face models or your own hosted LLM
- No dependency on proprietary APIs
- Full control over cost and performance

### Lightweight & Minimal
- No complex setup
- No heavy UI
- Focused purely on developer workflow

### Fully Self-Hosted
- Run on your own infrastructure
- Keep your code private
- No data leaving your environment

---

## Demo

> Coming soon — working demo with real PR reviews

---
## Documentation  
  
Full setup guides, deployment options, and integrations:  
  
👉 https://docs.getcodewolf.com/  
  
Includes:  
- Hosting on Vercel or other cloud providers  
- GitHub App setup
- Model configuration

---

## Hosting CodeWolf Locally (Quick Start)

Run CodeWolf locally or deploy it to your own infrastructure.  
For persistent cloud deployments (Vercel, cloud, etc.), see: https://docs.getcodewolf.com/

---
### 1. Clone the repository

```bash
git clone https://github.com/codewolfai/codewolf.git
cd codewolf
```

---

### 2. Configure environment variables

```bash
cp .env.example .env
```

Update the `.env` file:

```env
# GitHub App credentials
GITHUB_APP_ID=
GITHUB_PRIVATE_KEY_PATH=

# LLM configuration (Hugging Face)
HF_TOKEN=
HF_MODEL=
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Start the server

```bash
node app/server.js
```

---

### 5. Expose your local server (ngrok)

GitHub needs a public URL to send webhooks.

```bash
ngrok http 3000
```

Copy the generated HTTPS URL (example: `https://abc123.ngrok.io`)

---

### 6. Create & Configure GitHub App

- Go to GitHub Developer Settings > GitHub Apps  
- Create a new app  

#### Set:

- **Webhook URL** > `https://ngrok-url/webhook`
- **Permissions:**
  - Pull Requests > Read & Write  
  - Contents > Read  
  - Metadata > Read  

- Subscribe to events:
  - Pull Request events  

After creating:
- Copy **App ID** and add to `.env`  
- Generate and download **private key** and set path in `.env`  

---

### 7. Install the GitHub App

- Install the app on your repository  
- Select the repo you want CodeWolf to monitor  

---

### 8. Create a Pull Request 🎉

- Open a PR in your repo  
- CodeWolf will automatically review it  
- Feedback will appear as a comment  

That’s it You now have a fully working AI code reviewer running locally.

---
## How It Works

CodeWolf follows a simple pipeline:

1. **Webhook Trigger**
   - GitHub sends a PR event

2. **Diff Extraction**
   - CodeWolf fetches changed files and context

3. **LLM Analysis**
   - Sends structured input (diff + metadata) to your configured model

4. **Review Generation**
   - Produces actionable feedback:
     - Bugs
     - Security risks
     - Suggestions

5. **PR Commenting**
   - Posts results directly on the pull request

---

## 🧭 Roadmap

We’re building CodeWolf into a complete AI review layer for developers:

### Model & Platform Expansion
- [ ] Support for all major LLM providers (OpenAI, Anthropic, Gemini, Ollama, and local models, etc.)
### Interactive AI in PRs
- [ ] Tag `@codewolfapp` to:
  - Trigger reviews on demand  
  - Ask questions about code  
  - Get suggestions or explanations  
### Auto-Fix Code
- [ ] Automatically fix detected issues  
- [ ] Suggest improvements and push commits  
- [ ] Open new PRs when required  
### Smart Summaries
- [ ] TL;DR summaries of code diffs  
- [ ] High-level understanding of changes  
### Custom Code Guidelines
- [ ] Define your own coding standards  
- [ ] Enforce team-specific rules  
- [ ] Context-aware review behavior  
### Automated Reports
- [ ] PR quality insights  
- [ ] Security reports  
- [ ] Trend analysis across repositories  
### Integration with
- [ ] Jira, Linear, and other issue trackers  
- [ ] CI/CD pipelines  
- [ ] Existing PR review tools

---

## 🤝 Contributing  
  
We welcome contributions of all kinds — from bug fixes to new features.  
  
Before getting started, please read our contribution guidelines:  
  
👉 See [CONTRIBUTING.md](./CONTRIBUTING.md)  
  
If you're unsure where to start, open an issue and we’ll help you out.

---

## 📄 License

Apache 2.0 © CodeWolf