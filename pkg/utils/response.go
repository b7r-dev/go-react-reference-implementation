package utils

import (
	"encoding/json"
	"net/http"
)

// JSONResponse represents a standard API response structure
type JSONResponse struct {
	Success bool        `json:"success"`
	Message string      `json:"message,omitempty"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty"`
}

// WriteJSON writes a JSON response to the http.ResponseWriter
func WriteJSON(w http.ResponseWriter, status int, data interface{}) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(data)
}

// WriteSuccess writes a successful JSON response
func WriteSuccess(w http.ResponseWriter, message string, data interface{}) error {
	return WriteJSON(w, http.StatusOK, JSONResponse{
		Success: true,
		Message: message,
		Data:    data,
	})
}

// WriteError writes an error JSON response
func WriteError(w http.ResponseWriter, status int, message string) error {
	return WriteJSON(w, status, JSONResponse{
		Success: false,
		Error:   message,
	})
}

