---
type: session
location:
date: <% tp.date.now("YYYY-MM-DD") %>
summary: ""
art: ""
episode:
tags:
---
# [[<% tp.file.title %>]]

## Session Summary
> [!tldr] [[<% tp.file.title %>]]
> < write summary here >
> ^summary

---


## Recap
### **<%*
  let target = tp.user.getLastGameTitle(tp);
  target = target.replace(/^\[\[/, '').replace(/\]\]$/, '').split('\|')[0];
  const file = await tp.file.find_tfile(target);
  const fm = app.metadataCache.getFileCache(file)?.frontmatter || {};
  tR += fm.episode ?? "(no episode)";
%>**
![[<% tp.user.getLastGameTitle(tp) %>#^summary]]





---

## AI Summary


## Log
