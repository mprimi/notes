---
title: macOS startup service and daemons
---

Reference to find and stop annoying applications and services that auto-start on login or auto-restart when killed.

## `launchd`

 * `LaunchDaemon` items run with system privileges
 * `LaunchAgent` items run in user context after login

`launchd` auto-loads from the following locations:

 * `~/Library/LaunchAgent`
 * `/Library/LaunchAgents`
 * `/Library/LaunchDaemons`
 * `/System/Library/LaunchAgents`
 * `/System/Library/LaunchDaemons`

Notice that `/System/` is protected by system integrity checks, so it's unlikely that's where apps registers.

List services: `launchctl list`

Dump `launchd state`: `launchctl dumpstate`

## `cron`

List cron jobs for user: `crontab -l`

## Helper applications

Some applications bundle a helper application that manages to start despite not having a `launchd` plist in the locations above.

Try: `find /Applications/ -name 'LoginItems'`
