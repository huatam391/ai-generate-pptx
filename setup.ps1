Write-Host "Starting setup for Rikai Slide Maker..."

# Function to check if a command exists
function Test-CommandExists {
    param ($command)
    if (Get-Command $command -ErrorAction SilentlyContinue) {
        return $true
    }
    return $false
}

# Function to refresh environment variables
function Refresh-Environment {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    Write-Host "Environment variables refreshed."
}

# Check for Winget
if (-not (Test-CommandExists winget)) {
    Write-Warning "Winget is not installed or not in PATH. Automatic installation of Python/Node.js might fail."
    Write-Warning "Please ensure App Installer is installed from the Microsoft Store."
}

# 1. Install Python 3.12
if (-not (Test-CommandExists python)) {
    Write-Host "Python not found. Installing Python 3.12 via Winget..."
    winget install -e --id Python.Python.3.12 --accept-source-agreements --accept-package-agreements --source winget
    Refresh-Environment
} else {
    $pyVersion = python --version 2>&1
    if ($pyVersion -match "3.12") {
        Write-Host "Python 3.12 is already installed."
    } else {
        Write-Host "Python found: $pyVersion. Skipping automatic installation to avoid conflicts."
    }
}

# 2. Install Node.js 20 (LTS)
if (-not (Test-CommandExists node)) {
    Write-Host "Node.js not found. Installing Node.js LTS via Winget..."
    winget install -e --id OpenJS.NodeJS.20 --accept-source-agreements --accept-package-agreements --source winget
    Refresh-Environment
} else {
    $nodeVersion = node -v
    if ($nodeVersion -match "v20") {
        Write-Host "Node.js 20 is already installed."
    } else {
        Write-Host "Node.js found: $nodeVersion. Skipping automatic installation."
    }
}

# 3. Install uv
if (-not (Test-CommandExists uv)) {
    Write-Host "uv not found. Installing..."
    powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
    Refresh-Environment
} else {
    Write-Host "uv is already installed."
}

# 4. Install Python dependencies
Write-Host "Installing Python dependencies with uv..."
if (Test-CommandExists uv) {
    uv sync
} else {
    Write-Error "uv command not found even after installation attempt. Please restart your terminal and run 'uv sync'."
}

# 5. Install Node.js dependencies
Write-Host "Installing Node.js dependencies with npm..."
if (Test-CommandExists npm) {
    npm install
} else {
    Write-Error "npm command not found even after installation attempt. Please restart your terminal and run 'npm install'."
}

Write-Host "Setup complete! If you see errors about missing commands, please restart your terminal."
