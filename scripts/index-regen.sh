# Generate indices

set -e

DIARY_DIR="notes/diary"

INDEX_DIRS="${DIARY_DIR}"

for adir in ${INDEX_DIRS}; do

  echo "Generating index for directory: ${adir}"
  test -d "$adir"

  INDEX_FILE="${adir}/index.md"
  ENTRIES=`ls -1 "$adir" | grep ".md" | grep -v index.md | sed -e "s|.md$||1"`

  echo "# Contents" > ${INDEX_FILE}
  echo >> ${INDEX_FILE}

  for entry in ${ENTRIES}; do
    echo " > $entry"

    echo "[${entry}](${entry})" >> ${INDEX_FILE}
    echo >> ${INDEX_FILE}
  done
done
