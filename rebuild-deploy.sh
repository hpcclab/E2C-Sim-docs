#!/bin/bash

function pull(){
  echo "Pulling from master..."
  cd "./"
  echo "=> Navigated to $(pwd)"
  git pull origin main &
  wait
  echo "=> Pull complete! -------------------------------"
}

function build(){
  echo "Executing build..."
  cd "./ui/"
  echo "=> Navigated to $(pwd)"
  ng build --output-path ../docs --base-href /E2C-Sim-docs/ &
  wait
  echo "=> Build complete! ----------------------------"
}

function copyFile(){
  echo "Copying index.html to 404.html..."
  cd "../docs"
  echo "=> Navigated to $(pwd)"
  cp index.html 404.html &
  wait
  echo "=> Copy complete! -----------------------------"
}

function commit(){
  echo "Committing build to branch..."
  cd "./"
  echo "=> Navigated to $(pwd)"
  git status & wait
  git add . & wait
  echo "=> Changes added to tree"
  git status & wait
  git commit -m "Build $(date)" & wait
  echo "=> Changes committed to branch"
  git status & wait
  echo "=> Commit complete! ---------------------------"
}

function push(){
  echo "Pushing to repository..."
  cd "./"
  echo "=> Navigated to $(pwd)"
  git push origin prod & wait
  echo "=> Push complete! -----------------------------"
}

pull
build
copyFile
commit
push

echo "******* Script complete! *******"