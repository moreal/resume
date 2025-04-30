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
else
  SOURCE_FILE="resume/DX.md"
fi

FILES=("$SOURCE_FILE" style.css logo.svg)

build() {
  cp style.css build/style.css
  cp logo.svg build/logo.svg
  pandoc "$SOURCE_FILE" -o "build/index.html"
}

trap 'kill $(jobs -p)' SIGINT

echo "Clean up 'build' directory"
rm -rf build

echo "Initial build"
mkdir build
build

echo "Start watch"
fswatch -o "${FILES[@]}" | while read -r; do build; done &
python3 -m http.server 8000 --directory build &

sleep 1

echo "Open http://localhost:8000/index.html in your browser"
open http://localhost:8000/index.html

wait
