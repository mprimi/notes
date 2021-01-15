# Personal document management with `git`

This tutorial is for my dear friend M.
Like any person working on computers, M. struggles with keeping track of changes to files.

This is the simplest possible tutorial that explains how to leverage `git` for very simple personal projects.

## 📜 Old school versioning

We've all done this at some point, it looks something like this:

```
letter.txt
letter-2.txt
letter-3.txt
letter-v4.txt
letter-v4-with-edits.txt
letter-v4-final.txt
letter-v4-final-with-images.txt
...
```

 > Quiz: In this example, which file is the latest and greatest version? I don't know, and neither do you! If you're using old school versioning, make damn sure you give a *unique* version number every time you create a new version!


This versioning strategy works ok with single-file projects.
It creates some little clutter, wastes space on disk and [makes your laptop heavier to carry](https://physics.stackexchange.com/questions/31326/is-a-hard-drive-heavier-when-it-is-full)). But that seems acceptable.

This approach breaks down as soon as your project consists of multiple files.
One could apply the same "versioning" strategy to the entire folder.

## 🪛 The right tool for the job

To me, using file copies to version files is using a hammer to drive a screw.
If you need to drive a screw, use a screwdriver.
If you need to version files, use `git`.

## `git` vs. GitHub

`git` is a tool installed on your computer. You may use it in a terminal or with a GUI.
`git` transforms a folder into a little database and then uses that database to store and manage your versions.

You can definitely use `git` without GitHub.
You should probably learn to use `git` before you even look at GitHub.

GitHub is a service from Microsoft. GitLab, BitBucket, and many others offer similar services.

What you get with GitHub:
 * Backups in the cloud -- if you regularly synchronize your `git` projects with GH, then they are safely backed up if your computer is stolen or catches on fire
 * Web -- GH creates a website around your repository, so you can easily share a link with a friend, e.g.: https://github.com/mprimi/notes/blob/main/README.md, rather than having to send the file via email.
 * Collaboration -- i can clone your repository, or send you patches for bugs I spot in your code, etc. collaboration is the main reason for hosting a project on a platform like GitHub, but it's beyond the scope of this document

# 3, 2, 1, let's `git`!

Without further ado, let's cover the very basics of `git`.

## 🍳 `my-recipes.git`

Let's say you have a bunch of cooking recipes you've collected over the years. They are stored in a Word document on your laptop.

```
recipes.adoc
```

### A note on convention

If there is a `$` character at the beginning of a line, it's a prompt.
It means i issued a command. If there is no `$`, then it's the command output.
Lines begining with `#` are comments
Example:

```sh
# This is a comment
$ echo foo     <= This is me issuing the command
foo            <= This is the output of the command
```


Let's see how to transfer and manage this knowledge-base with `git`.

## 1. Create a repository

A repository is a special folder that acts as a database.

I like to name my repository folder `project-name.git` to easily tell distinguish a regular folder from a repository folder. But this is just personal preference, you can name your repository however you want.

```sh
# Create the new empty folder
$ mkdir my-recipes.git

# Enter the directory (the rest of commands are issued from within)

# Turn the current folder (.) into a git repository
$ git init .
```

Congratulations, you just created your first repository.
This still just looks like an empty folder, but it's not: `git` initialized an database inside a hidden folder (`my-recipes.git/.git/`).

You don't need to know what is inside this hidden folder.
You never interact with it directly.
But it's useful to know this is where `git` does its magic (stores all your versions and other metadata).

## 2. Add your existing document

One way to look think of `git` is:
 ***If you would like to go back to something at some point in the future, then commit it!***

You may at some point in the future want to retrieve your original Word document, so let's commit it!

```
# Copy the original recipes into the repository folder.
$ cp ~/Documents/recipes.adoc .
```

Rather than moving the original file (`~/Documents/recipes.adoc`) in the repo, I made a copy. Just in case. You really don't want to lose it while you mess up with `git` for the first time. We can always delete it later.

Let's look at the status of your repository folder:

```
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	recipes.adoc

nothing added to commit but untracked files present (use "git add" to track)
```

Let's explain line by line:

```
$ git status
```
I'm invoking the `status` command of `git`. Which prints an overview of the status of the local repository folder (there are many more commands, ignore them for now, but if you are curious, try `git help` which lists them).

```
On branch master
```
Branches are an advanced topic, you don't need to care about them for now.
However, notice your screen may actually say `main` rather than `master`. This is a recent change of convention, but for our purposes it's just a name.

```
No commits yet
```
You just created this repo fresh a second ago, so there's no history at all.
If history existed, it would give you a recap of the most recent commit.

```
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	recipes.adoc
```
Git is saying: "there is a file I haven't seen before in this folder: `recipes.adoc`".
It also suggests "if you want to start versioning this file, use `git add`.

```
nothing added to commit but untracked files present (use "git add" to track)
```
This is telling you that you have not staged any files or changes for commit.
More on this later.

This `status` is very verbose, and contains help messages.
For the rest of this document, I'll use the "succint" version, which gives you the same information but more compact:

```
$ git status --short
?? recipes.adoc
```

This says the same as before: there is a file, `recipes.adoc` and I've never seen it before ('`??`' means 'untracked').

### 2.1. First stage and commit

Creating a new version for your repository is done in 2 steps:

1. **Stage**: select the files you want to include in the next version.
2. **Commit**: create the next version of the repository, which consists of the changes/files you staged.

We want `git` to start managing/versioning/tracking your recipes file.

So first let's stage the file:

```
$git add recipes.adoc
```
This stages the document. Notice it does not make any change whatsoever to the file. This is true for pretty much all the comments in this document: `git` does NOT modify your files. It just tracks them and makes copies in the "magic" folder.

After adding the file to the index (another way to say staged the file, or added the file), take a look at the status:

```
$git st --short
A  recipes.adoc
```

It is saying: "a file i've never seen before is staged" A stands for "added".
If you ask for status in the "verbose" mode, it probably says the same with more words:

```
$ git status
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   recipes.adoc
```

This is also telling you how to "unstage".
Removing from the staging also does not delete or modify the file, it just means the file goes back to 'untracked' status.

Our objective for the first version is to put your file under version control.
The file is now staged, so let's go ahead and commit:

```
$git commit -m "Adding the original recipes word document"
[master (root-commit) cdab0fc] Adding the original recipes word document
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 recipes.adoc
```

Commit means "create a new version of the repository with all the changes currently staged".

A commit requires a message: a short description of what changed in this commit.
The message itself doesn't really matter to `git`. You could say `-m "cacca"` and it would be perfectly happy with it.

Commit messages are for **you**.
Your repository is going to quickly grow to hundreds of versions, and it's going to be nice to scroll them and know what each commit does just by looking at the message.

Congratulation, you just created the first version of your repository!

Let's look at a `status` because here is when people can panic.

```
$ git status
On branch master
nothing to commit, working tree clean
```

I can hear you screaming: "WTF? Where did my file go???" 

As I said before staging and committing **do not touch the files** they just create metadata.
Your file is still there. Go ahead and check.

It is not showing up in `status` because the file has no changes. The file you have is identical to the file `git` knows to be the latest committed version.
So `git` doesn't even bother showing it to you, `git` cares more about *changes* to your directory!

## 3. Multiple files

At this point, you could be happy with what you have: a repository consisting of a single file.
Every time you modify the file, you could stage and commit, and over time you would have a versioned file, allowing you to go back to revisit previous versions if you made a mistake.

This is good, but let's make it better: split recipes into individual files.

```
$ touch tiramisu.txt cappone.txt carbonara.txt
```
This just creates 3 empty files.

``` 
$ git st --short
?? cappone.txt
?? carbonara.txt
```

As expected, `git` is saying: there are 3 files I've never seen before.

Let's add a first version of the recipe. For the sake of this example, I'm starting with a very shitty version of the recipes.

Edit the files to add this content:

```
Pasta alla Carbonara

1. Cuoci la pasta
2. Aggiungi il sugo
```

```
Cappone della Nonna

1. Spenna il cappone
2. Cuocilo in forno
```

Let's check status after adding the recipes:

```
$git st --short
?? cappone.txt
?? carbonara.txt
```

Same as before: 2 files never seen before.

Let's create a new version of the repository by adding these new files (with the current content) and creating a new commit.

```
$ git add cappone.txt carbonara.txt
$ git commit -m "Importing carbonara and cappone recipes"
```

So far so good. Now that you have some history (2 commits) we can look back at it.

The `log` command is the goto for looking at repository history (altough GUIs are usually even easier).
The `log` command has a thousand options, let's stick to the simplest:

```
$ git log --oneline
41330d2 (HEAD -> master) Importing carbonara and cappone recipes
cdab0fc Adding the original recipes word document
```

This list the full history of your repository, most recent on top.

The first code (e.g, `41330d2`) it's just a unique identifier for each commit. Yours will be different than mine even if the files are identical, because the commit author and date will be different for your commits.

Try this alternative view of history, which includes the files changed summary:

```
$ git log --stat
```

And feel free to explore more `log` options described in the manual (hit `q` to exit):

```
$ git help log
```


<!-- 

# Quiz Time! 

## Move a file by accident

## Delete a file by accident

-->





















