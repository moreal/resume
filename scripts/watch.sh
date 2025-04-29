#!/bin/bash

# 기본값은 default로 설정
PAGE_TYPE=${1:-default}

# 유효한 인수 확인
if [[ "$PAGE_TYPE" != "default" && "$PAGE_TYPE" != "dx" ]]; then
  echo "Error: Argument must be either 'index' or 'dx'"
  echo "Usage: $0 [default|dx]"
  exit 1
fi

# 페이지 유형에 따라 다른 설정
if [[ "$PAGE_TYPE" == "default" ]]; then
  SOURCE_FILE="resume/DEFAULT.md"
  TARGET_FILE="build/default.html"
else
  SOURCE_FILE="resume/DX.md"
  TARGET_FILE="build/dx.html"
fi

FILES=("$SOURCE_FILE" style.css)

build() {
  cp style.css build/style.css
  pandoc "$SOURCE_FILE" -o "$TARGET_FILE"
}

trap 'kill $(jobs -p)' SIGINT

echo "Clean up 'build' directory"
rm -rf build

echo "Initial build"
mkdir build
build

echo "Start watch"
fswatch -o "${FILES[@]}" | while read -r; do build; done &

sleep 1

echo "Open $TARGET_FILE"
open $TARGET_FILE

wait
