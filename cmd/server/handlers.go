package server

import (
	"net/http"
	"strconv"
	"time"

	"github.com/b7r/go-boilerplate/pkg/services"
	"github.com/b7r/go-boilerplate/pkg/utils"
)

// Handler holds all the service dependencies
type Handler struct {
	userService  *services.UserService
	quoteService *services.QuoteService
}

// NewHandler creates a new Handler instance
func NewHandler() *Handler {
	return &Handler{
		userService:  services.NewUserService(),
		quoteService: services.NewQuoteService(),
	}
}

// HelloHandler handles the hello world endpoint
func (h *Handler) HelloHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	defer func() {
		utils.LogRequest(r.Method, r.URL.Path, time.Since(start))
	}()

	data := map[string]interface{}{
		"message":   "Hello, World!",
		"timestamp": time.Now().Format(time.RFC3339),
		"version":   "1.0.0",
	}

	utils.WriteSuccess(w, "Welcome to Go Boilerplate API", data)
}

// HealthHandler handles health check requests
func (h *Handler) HealthHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	defer func() {
		utils.LogRequest(r.Method, r.URL.Path, time.Since(start))
	}()

	data := map[string]interface{}{
		"status": "healthy",
		"uptime": time.Since(start).String(),
	}

	utils.WriteSuccess(w, "Service is healthy", data)
}

// GetUsersHandler handles requests to get all users
func (h *Handler) GetUsersHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	defer func() {
		utils.LogRequest(r.Method, r.URL.Path, time.Since(start))
	}()

	users, err := h.userService.GetAllUsers()
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, "Failed to retrieve users")
		return
	}

	utils.WriteSuccess(w, "Users retrieved successfully", users)
}

// GetUserHandler handles requests to get a specific user
func (h *Handler) GetUserHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	defer func() {
		utils.LogRequest(r.Method, r.URL.Path, time.Since(start))
	}()

	// Extract user ID from query parameter
	idStr := r.URL.Query().Get("id")
	if idStr == "" {
		utils.WriteError(w, http.StatusBadRequest, "User ID is required")
		return
	}

	id, err := strconv.Atoi(idStr)
	if err != nil {
		utils.WriteError(w, http.StatusBadRequest, "Invalid user ID format")
		return
	}

	user, err := h.userService.GetUser(id)
	if err != nil {
		utils.WriteError(w, http.StatusNotFound, err.Error())
		return
	}

	utils.WriteSuccess(w, "User retrieved successfully", user)
}

// GetRandomQuoteHandler handles requests to get a random quote
func (h *Handler) GetRandomQuoteHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	defer func() {
		utils.LogRequest(r.Method, r.URL.Path, time.Since(start))
	}()

	quote := h.quoteService.GetRandomQuote()
	utils.WriteSuccess(w, "Random quote retrieved", quote)
}

// GetAllQuotesHandler handles requests to get all quotes
func (h *Handler) GetAllQuotesHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()
	defer func() {
		utils.LogRequest(r.Method, r.URL.Path, time.Since(start))
	}()

	quotes := h.quoteService.GetAllQuotes()
	utils.WriteSuccess(w, "All quotes retrieved", quotes)
}

