#!/bin/bash

GITHUB_USER=$(echo $TRAVIS_REPO_SLUG | sed -e's-/.*--')
GIT_DESCRIBE=$(git describe --tags)

cd build
touch .nojekyll
cat > README.md <<EOF
# [SymbiFlow Website](https://symbiflow.github.io)

Built from [$TRAVIS_REPO_SLUG $GIT_DESCRIBE](https://github.com/$TRAVIS_REPO_SLUG/commit/$TRAVIS_COMMIT)

# Commit Message

$TRAVIS_COMMIT_MESSAGE
EOF

git add --all .
git status
echo "Updating to $GIT_DESCRIBE." > /tmp/git_commit
echo >> /tmp/git_commit
echo "$TRAVIS_COMMIT_MESSAGE" >> /tmp/git_commit
git commit -F /tmp/git_commit
git log
git push origin
