#!/bin/bash

set -e

GITHUB_USER=$(echo $GITHUB_REPOSITORY | sed -e's-/.*--')
GIT_DESCRIBE=$(git describe --tags)

cd build

touch .nojekyll
cat > README.md <<EOF
# [SymbiFlow Website](https://symbiflow.github.io)

Built from [$GITHUB_REPOSITORY $GIT_DESCRIBE](https://github.com/$GITHUB_REPOSITORY/commit/$GITHUB_SHA)

# Commit Message

$COMMIT_MESSAGE
EOF

git add --all .
git status
echo "Updating to $GIT_DESCRIBE." > /tmp/git_commit
echo >> /tmp/git_commit
echo "$COMMIT_MESSAGE" >> /tmp/git_commit
git commit -F /tmp/git_commit
git log
git push origin
