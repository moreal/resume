#!/bin/bash

# Typst Resume Build and Watch Script
# Builds both PDF and HTML outputs from Typst source

# Default page type
PAGE_TYPE=${1:-dx}

# Validate argument
if [[ "$PAGE_TYPE" != "dx" ]]; then
  echo "Error: Argument must be 'dx'"
  echo "Usage: $0 [dx]"
  exit 1
fi

# Set source file based on page type
if [[ "$PAGE_TYPE" == "dx" ]]; then
  SOURCE_FILE="resume/DX.typ"
fi

# Cleanup handler
trap 'kill $(jobs -p) 2>/dev/null' SIGINT SIGTERM EXIT

echo "Clean up 'build' directory"
rm -rf build

echo "Creating build directory"
mkdir -p build

echo "Initial build (PDF)"
typst compile "$SOURCE_FILE" build/resume.pdf

echo "Converting to HTML (using typst-preview or alternative method)"
# Note: Typst doesn't have native HTML export yet
# Options:
# 1. Use typst-preview server (recommended for development)
# 2. Convert PDF to HTML (less ideal)
# 3. Wait for official HTML export support

echo "Starting watch mode..."
echo "Watching $SOURCE_FILE for changes"

# Start typst watch for PDF in background
typst watch "$SOURCE_FILE" build/resume.pdf &

# Start a simple HTTP server to serve the build directory
python3 -m http.server 8000 --directory build &

sleep 1

echo ""
echo "✓ Typst watch is running"
echo "✓ PDF output: build/resume.pdf"
echo "✓ HTTP server running at http://localhost:8000"
echo ""
echo "To view the PDF, open: http://localhost:8000/resume.pdf"
echo "Or open build/resume.pdf with your PDF viewer"
echo ""
echo "Press Ctrl+C to stop"

# Wait for all background jobs
wait
