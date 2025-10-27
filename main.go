package main

import (
	"fmt"
	"log"

	"github.com/b7r/go-boilerplate/cmd/server"
	"github.com/b7r/go-boilerplate/config"
)

func main() {
	// Load configuration
	cfg := config.Load()

	fmt.Printf("Starting Go Boilerplate Application\n")
	fmt.Printf("Server will run on port %s\n", cfg.Port)

	// Start the HTTP server
	if err := server.Start(cfg); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

