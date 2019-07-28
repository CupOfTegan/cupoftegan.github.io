---
title: "Remove incomplete commit locks on the command line"
publishDate: 2019-06-16T00:13:40+01:00
tags:
- git
- command line
---

Run these commands in the command line to clear incomplete commits:

``` zsh
rm .git/COMMIT_EDITMSG
rm .git/.COMMIT_EDITMSG.swp
rm .git/index.lock
```

Then add your changes, commit and push as you would normally.
