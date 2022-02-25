#!/bin/bash
uglifyjs public/garden/app.js --compress --mangle > public/garden/app.min.js
git add -A
git status
read -p "[CONTINUE]"
git commit -m "$1"
git push
