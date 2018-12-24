#!/bin/bash
GITHUB_USER=$(echo $TRAVIS_REPO_SLUG | sed -e's-/.*--')
if [ "$GITHUB_USER" == "SymbiFlow" ]; then
	git clone https://${GH_TOKEN}@github.com/SymbiFlow/symbiflow.github.io --branch master build
else
	git clone https://${GH_TOKEN}@github.com/$TRAVIS_REPO_SLUG --branch gh-pages build
fi
git status
