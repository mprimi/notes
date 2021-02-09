#!/usr/bin/env #!/bin/bash

if [ -z "$NOTES_REPO" ]; then
  echo "Not set: \$NOTES_REPO"
  exit 1;
elif [ -z "$EDITOR_APP" ]; then
  echo "Not set: \$EDITOR_APP"
  exit 1;
fi

TODAYS_DATE_DASHED="$(date '+%Y-%m-%d')"

TODAYS_LOG="${NOTES_REPO}/notes/logs/${TODAYS_DATE_DASHED}.md"

touch "${TODAYS_LOG}"
"${EDITOR_APP}" "${TODAYS_LOG}"
