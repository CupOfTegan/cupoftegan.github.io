---
title: "Remove node_modules from Git repository"
publishDate: 2019-06-15T00:12:25+01:00
tags:
- git
- command line
source:
  title: Stackoverflow - Ignore node_modules folder everywhere
  url: https://stackoverflow.com/a/47825219
---

Run this command to remove `node_modules` files from your local repository

```zsh
git rm -r --cached node_modules
```

Run this command to add `node_modules` to your .gitignore

```zsh
echo "node_modules" >> .gitignore
```
