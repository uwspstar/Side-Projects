---
marp: true
theme: default
header: 'Git https://www.youtube.com/watch?v=8JJ101D3knE'
footer: 'study note by Xing, source https://www.youtube.com/watch?v=8JJ101D3knE'
paginate: true
size: 16:9
---

# Git

- https://www.youtube.com/watch?v=8JJ101D3knE

### Git Tools

- GitKraken Git GUI
- SourceTree

---

### Git install

- `git --version`

---

### Undo Last Git Commit

- Undo Last Git Commit with reset : The easiest way to undo the last Git commit is to execute the “git reset” command with the “–soft” option that will preserve changes done to your files. You have to specify the commit to undo which is “HEAD~1” in this case.
  `$ git reset --soft HEAD~1`

- Undo Last Commit with revert : in order to revert the last Git commit, use the “git revert” and specify the commit to be reverted which is “HEAD” for the last commit of your history.
  `$ git revert HEAD`

---

### Reverting Working Copy to Most Recent Commit

- To revert to a previous commit, ignoring any changes:
  `git reset --hard HEAD`
- reverting The Working Copy to an Older Commit

```
# Resets index to former commit; replace '56e05fced' with your commit code
git reset 56e05fced

# Moves pointer back to previous HEAD
git reset --soft HEAD@{1}

git commit -m "Revert to 56e05fced"

# Updates working copy to reflect the new commit
git reset --hard
```
