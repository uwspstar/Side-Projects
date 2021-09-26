---
marp: true
theme: default
header: 'Git https://www.youtube.com/watch?v=8JJ101D3knE'
footer: 'study note by Xing, source - https://labuladong.gitbook.io/algo/mu-lu-ye-5/git-chang-yong-ming-ling'
paginate: true
size: 16:9
---

# Git

- https://mp.weixin.qq.com/s/Q_O0ey4C9tryPZaZeJocbA
- https://www.youtube.com/watch?v=8JJ101D3knE
- https://labuladong.gitbook.io/algo/mu-lu-ye-5/git-chang-yong-ming-ling

### Git Tools

- GitKraken Git GUI
- SourceTree

---

### Git install

- `git --version`

---

# Git 的三个分区分别是：

- https://labuladong.gitbook.io/algo/mu-lu-ye-5/git-chang-yong-ming-ling
- `working directory` : 执行 `git add` 相关命令后，就会把 `work dir` 中的修改添加到「暂存区」`stage area`
- `stage/index area` : 执行 `git commit` 相关命令之后，就会把 `stage` 中的修改保存到「提交历史」 `commit history` 中
- `commit history` : 任何修改只要进入 commit history，基本可以认为永远不会丢失了。每个 commit 都有一个唯一的 `Hash` 值

---

### 需求一，如何把 work dir 中的修改加入 stage。

- `git add .`
- 顺便一提，add 有个别名叫做 stage，也就是说你可能见到 `git stage` 相关的命令，这个命令和 `git add` 命令是完全一样的。

---

### 需求二，如何把 stage 中的修改还原到 work dir 中。

- `$ git checkout` a.txt, 如果 work dir 中新增了新文件，使用 git checkout . 是不会删除新文件的

---

### 需求三，将 stage 区的文件添加到 history 区。

- `$ git commit -m '一些描述'`
- 不想为改几个错别字而新开一个 commit 到 history 区 `$ git commit --amend` 这样就是把错别字的修改和之前的那个 commit 中的修改合并，作为一个 commit 提交到 history 区。

---

### 需求四，将 history 区的文件还原到 stage 区。

- `$ git reset a.txt` : 不改变 work dir 中的任何数据，将 stage 区域中的 a.txt 文件还原成 HEAD 指向的 commit history 中的样子。就相当于把对 a.txt 的修改从 stage 区撤销，但依然保存在 work dir 中，变为 unstage 的状态。

---

### 需求五，将 work dir 的修改提交到 history 区。

- 这个需求很简单啦，先 `git add` 然后 `git commit` 就行了，或者一个快捷方法是使用命令 `git commit -a`。

---

### 需求六，将 history 区的历史提交还原到 work dir 中。

- 比如我从 GitHub 上 clone 了一个项目，然后乱改了一通代码，结果发现我写的代码根本跑不通，于是后悔了，干脆不改了，我想恢复成最初的模样，怎么办？

- `$ git checkout HEAD .` work dir 和 stage 中所有的「修改」都会被撤销，恢复成 HEAD 指向的那个 history commit。
- 注意，类似之前通过 stage 恢复 work dir 的 checkout 命令，这里撤销的也只是修改，新增的文件不会被撤销。
- 当然，只要找到任意一个 commit 的 HASH 值，checkout 命令可就以将文件恢复成任一个 history commit 中的样子：`$ git checkout 2bdf04a some_test.go`

---

- https://labuladong.gitbook.io/algo/mu-lu-ye-5/git-chang-yong-ming-ling

### 需求一，合并多个 commit。

- `$ git reset 17bd20c`
- `$ git add .`
- `$ git commit -m 'this is the notes'`
- reset 命令的作用，相当于把 HEAD 移到了 17bd20c 这个 commit，而且不会修改 work dir 中的数据，所以只要 add 再 commit，就相当于把中间的多个 commit 合并到一个了。

---

### 需求二，由于 HEAD 指针的回退，导致有的 commit 在 git log 命令中无法看到，怎么得到它们的 Hash 值呢？

- `$ git reflog`
- 再重复一遍，只要你不乱动本地的 .git 文件夹，任何修改只要提交到 commit history 中，都永远不会丢失，看不到某些 commit 只是因为它们不是我们当前 HEAD 位置的「历史」提交，我们可以使用如下命令查看操作记录：

---

### To undo git add

- To undo git add before a commit, run `git reset <file>` or `git reset` to unstage all changes.

```
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   Git/readme.md
```
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
