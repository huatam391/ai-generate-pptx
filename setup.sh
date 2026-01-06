#!/bin/bash

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

echo "Starting setup for Rikai Slide Maker..."

# 1. Install Python 3.12
if ! command_exists python3.12; then
    echo "Python 3.12 not found. Installing..."
    if [ -f /etc/debian_version ]; then
        sudo apt update
        sudo apt install -y software-properties-common
        sudo add-apt-repository -y ppa:deadsnakes/ppa
        sudo apt update
        sudo apt install -y python3.12 python3.12-venv python3.12-dev
    else
        echo "Unsupported Linux distribution for automatic Python installation. Please install Python 3.12 manually."
    fi
else
    echo "Python 3.12 is already installed."
fi

# 2. Install Node.js 20
if ! command_exists node || [[ $(node -v) != v20* ]]; then
    echo "Node.js 20 not found or incorrect version. Installing..."
    if [ -f /etc/debian_version ]; then
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    else
         echo "Unsupported Linux distribution for automatic Node.js installation. Please install Node.js 20 manually."
    fi
else
    echo "Node.js 20 is already installed."
fi

# 3. Install uv
if ! command_exists uv; then
    echo "uv not found. Installing..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    # Add uv to path for current session
    export PATH="$HOME/.cargo/bin:$PATH"
else
    echo "uv is already installed."
fi

# 4. Install Python dependencies
echo "Installing Python dependencies with uv..."
uv sync

# 5. Install Node.js dependencies
echo "Installing Node.js dependencies with npm..."
npm install

echo "Setup complete! You can now run the app."
