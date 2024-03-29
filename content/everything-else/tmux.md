---
title: tmux Reference
---

## CLI

`tmux ls`: List sessions

`tmux new-session -s <session-name>`: New session

`tmux a`: Reattach last used (short for `attach`)

`tmux a -t <session-name>`: Reattach

`tmux source-file ~/.tmux.conf`: Reload

## Commands
Default prefix: `Ctrl-b`

```
?: List commands
d: Detatch

:list-keys
:refresh-client
:source-file ~/.tmux.conf
```

### Windows
```
c: New window
:new-window -n <name>

<N>: Switch to window N
w: Select
p: Previous
n: Next
x: Kill
,: Rename

```
### Panes

```
": horizontal split
%: vertical split
<space>: rearrange
o: focus next
<arrow>: move focus
ctrl-<arrow>: resize
}: swap
!: move to new window
z: zoom
```

### Sessions
```
): Next
(: Previous
s: Select
$: rename
```

# Move / Organize
```
# Swap panes 1 and 3 in current session
:swap-panes -s 1 -t 3

# Move pane 4 up (left) by 1
:swap-panes -U -t 4
# Move pane 4 down (right) by 1
:swap-panes -D -t 4

# Mark current pane
:select-pane -m

# Swap pane 3 in current session with marked pane (may be in a different session)
swap-window -t 3
```

## Intro & Reference
 * https://peterxjang.com/blog/a-minimalist-guide-to-tmux.html
 * https://github.com/tony/tmux-config
 * https://www.barbarianmeetscoding.com/blog/2019/12/25/jaimes-guide-to-tmux-the-most-awesome-tool-you-didnt-know-you-needed
 * https://www.golinuxcloud.com/tmux-cheatsheet/
 * https://danielmiessler.com/study/tmux/

## Configuration & Customization
* https://github.com/samoshkin/tmux-config
* https://peterforgacs.github.io/2017/04/25/Tmux/

## Utilities & Extensions
* https://github.com/tmux-python/tmuxp
* https://github.com/tmux-plugins/tmux-resurrect
* https://github.com/tmux-plugins/tmux-continuum
