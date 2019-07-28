---
title: "Remove .DS_Store from Git repository"
publishDate: 2019-05-28T00:20:54+01:00
tags:
- git
- command line
source:
  title: How to get rid of .DS_Store files in git repositories
  url: https://code.likeagirl.io/how-to-get-rid-of-ds-store-and-node-modules-in-git-repositories-d37b8a391247
---

Run this command to remove `.DS_Store` files from your repository

``` zsh
find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch
```

Run this command to add `.DS_Store` to your .gitignore

``` zsh
echo ."DS_Store" >> .gitignore
```
