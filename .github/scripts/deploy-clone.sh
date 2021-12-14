#!/bin/bash

set -e

GITHUB_USER=$(echo $GITHUB_REPOSITORY | sed -e's-/.*--')
if [ "$GITHUB_USER" == "SymbiFlow" ]; then
	git clone https://${GH_TOKEN}@github.com/SymbiFlow/symbiflow.github.io --branch master build
else
	git clone https://${GH_TOKEN}@github.com/$GITHUB_REPOSITORY --branch gh-pages build
fi
git status
