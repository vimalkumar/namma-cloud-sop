#!/bin/bash
set -e

echo "📦 Installing Quarto..."

# Download and install Quarto
QUARTO_VERSION="1.4.549"
wget -q https://github.com/quarto-dev/quarto-cli/releases/download/v${QUARTO_VERSION}/quarto-${QUARTO_VERSION}-linux-amd64.tar.gz
tar -xzf quarto-${QUARTO_VERSION}-linux-amd64.tar.gz
export PATH="${PWD}/quarto-${QUARTO_VERSION}/bin:${PATH}"

echo "✅ Quarto installed: $(quarto --version)"

echo "📖 Rendering Quarto book..."
quarto render

echo "✅ Build complete!"
echo "📁 Output directory: _book"

