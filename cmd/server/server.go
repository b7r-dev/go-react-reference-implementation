package server

import (
	"fmt"
	"net/http"

	"github.com/b7r/go-boilerplate/config"
	"github.com/b7r/go-boilerplate/pkg/utils"
)

// Start initializes and starts the HTTP server
func Start(cfg *config.Config) error {
	// Create handler with all dependencies
	handler := NewHandler()

	// Setup routes
	mux := SetupRoutes(handler)

	// Apply middleware
	finalHandler := CORSMiddleware(LoggingMiddleware(mux))

	// Server configuration
	addr := fmt.Sprintf(":%s", cfg.Port)
	utils.LogInfo(fmt.Sprintf("Server starting on %s", addr))
	utils.LogInfo(fmt.Sprintf("Environment: %s", cfg.Environment))

	// Start server
	return http.ListenAndServe(addr, finalHandler)
}

