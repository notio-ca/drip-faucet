#!/bin/bash
git add -A
git status
read -p "[CONTINUE]"
git commit -m "$1"
git push
