# Portfolio Task A2 - GIT on the server

This repository demonstrates the required artefacts for **Portfolio Task A2**.

## Included artefacts

- Commit history
- Suitable `README.md`
- `.gitignore` configured to ignore `node_modules`
- `package.json` with **TestCafe** as a development dependency
- A simple TestCafe functional test

## TestCafe functional test

### Install dependencies

```bash
npm install
```

### Run test

```bash
npm test
```

The test validates a simple local HTML page in `public/index.html`.

## Gogs evidence checklist

To fully satisfy the rubric in your Gogs server video (`http://localhost:3000`), also show:

- Pull request and merge evidence (from branch to main/master)
- Issues created, resolved, and closed via commits (for example commit messages containing `Fixes #<issue-number>`)
- TestCafe test run showing a passing result
