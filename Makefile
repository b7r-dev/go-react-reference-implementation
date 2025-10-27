.PHONY: help run build test clean frontend-install frontend-dev frontend-build

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

run: ## Run the Go backend server
	go run main.go

build: ## Build the Go backend binary
	go build -o bin/server main.go

test: ## Run Go tests
	go test -v ./...

clean: ## Clean build artifacts
	rm -rf bin/
	rm -rf frontend/dist/

frontend-install: ## Install frontend dependencies
	cd frontend && npm install

frontend-dev: ## Run frontend development server
	cd frontend && npm run dev

frontend-build: ## Build frontend for production
	cd frontend && npm run build

dev: ## Run both backend and frontend (requires separate terminals)
	@echo "Run 'make run' in one terminal and 'make frontend-dev' in another"

all: build frontend-build ## Build both backend and frontend

