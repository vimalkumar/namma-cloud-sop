#!/bin/bash
set -e

echo "📦 Installing Quarto..."

# Download and install Quarto (use same version as local dev)
QUARTO_VERSION="1.6.30"
wget -q https://github.com/quarto-dev/quarto-cli/releases/download/v${QUARTO_VERSION}/quarto-${QUARTO_VERSION}-linux-amd64.tar.gz
tar -xzf quarto-${QUARTO_VERSION}-linux-amd64.tar.gz
export PATH="${PWD}/quarto-${QUARTO_VERSION}/bin:${PATH}"

echo "✅ Quarto installed: $(quarto --version)"

# Install Chromium for Mermaid diagram rendering
echo "📦 Installing Chromium for diagram rendering..."
npm install puppeteer
export PUPPETEER_CACHE_DIR="${PWD}/.cache/puppeteer"
export CHROMIUM_PATH=$(node -e "const p = require('puppeteer'); console.log(p.executablePath())")
export QUARTO_CHROMIUM="${CHROMIUM_PATH}"
echo "✅ Chromium installed at: ${CHROMIUM_PATH}"

echo "📖 Rendering Quarto book..."
quarto render

echo "✅ Build complete!"
echo "📁 Output directory: _book"
