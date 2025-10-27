#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Banner
echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║           Go Boilerplate Project Setup                   ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Check if we're in a git repository
if [ -d ".git" ]; then
    print_warning "This directory is already a git repository."
    read -p "Do you want to remove .git and start fresh? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Removing .git directory..."
        rm -rf .git
        print_success "Removed .git directory"
    else
        print_info "Keeping existing .git directory"
    fi
fi

# Collect project information
echo ""
print_info "Let's set up your new Go project!"
echo ""

# Project name
read -p "Project name (e.g., my-awesome-app): " PROJECT_NAME
if [ -z "$PROJECT_NAME" ]; then
    print_error "Project name cannot be empty"
    exit 1
fi

# Module path
read -p "Go module path (e.g., github.com/username/my-awesome-app): " MODULE_PATH
if [ -z "$MODULE_PATH" ]; then
    print_error "Module path cannot be empty"
    exit 1
fi

# Project description
read -p "Project description: " PROJECT_DESC
if [ -z "$PROJECT_DESC" ]; then
    PROJECT_DESC="A Go application built with the Go Boilerplate template"
fi

# Author name
read -p "Author name: " AUTHOR_NAME
if [ -z "$AUTHOR_NAME" ]; then
    AUTHOR_NAME="Unknown"
fi

# Author email
read -p "Author email: " AUTHOR_EMAIL

# License
echo ""
print_info "Choose a license:"
echo "1) MIT"
echo "2) Apache 2.0"
echo "3) GPL v3"
echo "4) BSD 3-Clause"
echo "5) None"
read -p "Enter choice (1-5): " LICENSE_CHOICE

case $LICENSE_CHOICE in
    1) LICENSE="MIT" ;;
    2) LICENSE="Apache-2.0" ;;
    3) LICENSE="GPL-3.0" ;;
    4) LICENSE="BSD-3-Clause" ;;
    5) LICENSE="None" ;;
    *) LICENSE="MIT" ;;
esac

# Confirm
echo ""
print_info "Project Configuration:"
echo "  Name: $PROJECT_NAME"
echo "  Module: $MODULE_PATH"
echo "  Description: $PROJECT_DESC"
echo "  Author: $AUTHOR_NAME"
if [ -n "$AUTHOR_EMAIL" ]; then
    echo "  Email: $AUTHOR_EMAIL"
fi
echo "  License: $LICENSE"
echo ""

read -p "Proceed with setup? (Y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]] && [[ ! -z $REPLY ]]; then
    print_error "Setup cancelled"
    exit 1
fi

# Start setup
echo ""
print_info "Setting up your project..."

# Update go.mod
print_info "Updating go.mod..."
if [ -f "go.mod" ]; then
    sed -i.bak "s|module github.com/b7r/go-boilerplate|module $MODULE_PATH|g" go.mod
    rm go.mod.bak
fi

# Update all Go files with new module path
print_info "Updating Go import paths..."
find . -name "*.go" -type f -exec sed -i.bak "s|github.com/b7r/go-boilerplate|$MODULE_PATH|g" {} \;
find . -name "*.go.bak" -type f -delete

# Update frontend package.json
print_info "Updating frontend package.json..."
if [ -f "frontend/package.json" ]; then
    sed -i.bak "s|\"name\": \"frontend\"|\"name\": \"$PROJECT_NAME-frontend\"|g" frontend/package.json
    rm frontend/package.json.bak
fi

# Update HTML title
if [ -f "frontend/index.html" ]; then
    sed -i.bak "s|<title>Go Boilerplate</title>|<title>$PROJECT_NAME</title>|g" frontend/index.html
    rm frontend/index.html.bak
fi

# Create/Update README
print_info "Creating README.md..."
cat > README.md << EOF
# $PROJECT_NAME

$PROJECT_DESC

## Quick Start

\`\`\`bash
# Backend
go run main.go

# Frontend (separate terminal)
cd frontend && npm install && npm run dev
\`\`\`

Backend: http://localhost:8080
Frontend: http://localhost:5173

## API Endpoints

- GET /api/hello - Hello world
- GET /api/health - Health check
- GET /api/users - List users
- GET /api/user?id=1 - Get user
- GET /api/quotes - List quotes
- GET /api/quote/random - Random quote

## Structure

\`\`\`
main.go          Entry point
config/          Configuration
cmd/server/      HTTP server
pkg/models/      Data models
pkg/services/    Business logic
pkg/utils/       Utilities
frontend/        React app
\`\`\`

## Build

\`\`\`bash
go build -o bin/server main.go
cd frontend && npm run build
\`\`\`

## Author

$AUTHOR_NAME
EOF

if [ -n "$AUTHOR_EMAIL" ]; then
    echo "$AUTHOR_EMAIL" >> README.md
fi

# Create LICENSE file
if [ "$LICENSE" != "None" ]; then
    print_info "Creating LICENSE file..."
    YEAR=$(date +%Y)
    
    case $LICENSE in
        "MIT")
            cat > LICENSE << EOF
MIT License

Copyright (c) $YEAR $AUTHOR_NAME

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF
            ;;
        *)
            print_warning "License template for $LICENSE not included. Please add manually."
            ;;
    esac
fi

# Initialize git
print_info "Initializing git repository..."
git init
git add .
git commit -m "Initial commit: $PROJECT_NAME

Generated from go-boilerplate template"

# Run go mod tidy
print_info "Running go mod tidy..."
go mod tidy

# Success message
echo ""
print_success "Project setup complete!"
echo ""
print_info "Next steps:"
echo "  1. Review and customize the generated files"
echo "  2. Start the backend: go run main.go"
echo "  3. Start the frontend: cd frontend && npm install && npm run dev"
echo "  4. Create a remote repository and push:"
echo "     git remote add origin <your-repo-url>"
echo "     git push -u origin main"
echo ""
print_success "Happy coding!"
echo ""

