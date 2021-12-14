#!/bin/bash

set -e

if grep --color=always -rE '(Symbiflow|simbi[fF]low)' source/; then
    echo "Found incorrect casing of SymbiFlow"
    exit 1
else
    exit 0
fi
