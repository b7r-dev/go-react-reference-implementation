package server

import (
	"net/http"
)

// SetupRoutes configures all application routes
func SetupRoutes(handler *Handler) *http.ServeMux {
	mux := http.NewServeMux()

	// API routes
	mux.HandleFunc("/api/hello", handler.HelloHandler)
	mux.HandleFunc("/api/health", handler.HealthHandler)
	mux.HandleFunc("/api/users", handler.GetUsersHandler)
	mux.HandleFunc("/api/user", handler.GetUserHandler)
	mux.HandleFunc("/api/quotes", handler.GetAllQuotesHandler)
	mux.HandleFunc("/api/quote/random", handler.GetRandomQuoteHandler)

	return mux
}

