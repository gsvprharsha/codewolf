# 🤝 Contributing to CodeWolf

First off, thanks for taking the time to contribute ❤️  
CodeWolf is an open-source project, and every contribution matters.

---

## Ways to Contribute

You can contribute in multiple ways:
### Report Bugs
- Found something broken?
- Open an issue with:
  - Clear description
  - Steps to reproduce
  - Expected vs actual behavior

---
### Suggest Features
- Have an idea to improve CodeWolf?
- Open an issue with:
  - Problem statement
  - Proposed solution
  - Why it matters

---
### Submit Code Changes
- Fix bugs
- Improve performance
- Add features
- Refactor existing code

---
## Development Setup

1. Fork the repository

2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/codewolf.git
cd codewolf
```

3. Install dependencies:

```bash
npm install
```

4. Setup environment variables:

```bash
cp .env.example .env
```

5. Run the server:

```bash
node app/server.js
```

---

## Branching Strategy

- Create a new branch for any change:

```bash
git checkout -b feature/your-feature-name
```

Examples:
- `feature/pr-summary`
- `fix/webhook-bug`
- `improvement/llm-performance`

---
## Pull Request Guidelines

Before submitting a PR:
- Ensure your code works as expected  
- Keep changes focused (avoid huge PRs)  
- Write clear commit messages  
- Test your changes locally  

### PR Title Format

```
[type]: short description
```

Examples:
- `fix: handle empty diff edge case`
- `feature: add TLDR summary generation`
- `improvement: optimize LLM prompt`

---

## Code Style

- Keep code simple and readable  
- Avoid unnecessary abstractions  
- Follow existing project structure  
- Add comments where needed  

---

## Testing

If your change affects behavior:

- Test with real PRs if possible  
- Ensure no regressions 

---

## Communication

- Be respectful and constructive  
- Ask questions if you're stuck  
- Open discussions before large changes  

---

## What to Work On?

Check:
- Open issues  
- Roadmap in README  
- Anything labeled `good first issue` (coming soon)

---

## License

By contributing, you agree that your contributions will be licensed under the Apache 2.0 License.

---

## Final Note

We’re building CodeWolf to become the **default AI reviewer for developers**.

Your contributions help make that happen!!