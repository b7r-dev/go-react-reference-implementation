package utils

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestWriteJSON(t *testing.T) {
	// Create a response recorder
	w := httptest.NewRecorder()

	// Test data
	testData := map[string]string{"message": "test"}

	// Call WriteJSON
	err := WriteJSON(w, http.StatusOK, testData)
	if err != nil {
		t.Fatalf("WriteJSON returned an error: %v", err)
	}

	// Check status code
	if w.Code != http.StatusOK {
		t.Errorf("Expected status code %d, got %d", http.StatusOK, w.Code)
	}

	// Check content type
	contentType := w.Header().Get("Content-Type")
	if contentType != "application/json" {
		t.Errorf("Expected Content-Type 'application/json', got '%s'", contentType)
	}

	// Check response body
	var response map[string]string
	err = json.NewDecoder(w.Body).Decode(&response)
	if err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if response["message"] != "test" {
		t.Errorf("Expected message 'test', got '%s'", response["message"])
	}
}

func TestWriteSuccess(t *testing.T) {
	w := httptest.NewRecorder()

	testData := map[string]int{"count": 42}
	err := WriteSuccess(w, "Success message", testData)
	if err != nil {
		t.Fatalf("WriteSuccess returned an error: %v", err)
	}

	// Check status code
	if w.Code != http.StatusOK {
		t.Errorf("Expected status code %d, got %d", http.StatusOK, w.Code)
	}

	// Decode and check response
	var response JSONResponse
	err = json.NewDecoder(w.Body).Decode(&response)
	if err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if !response.Success {
		t.Error("Expected success to be true")
	}

	if response.Message != "Success message" {
		t.Errorf("Expected message 'Success message', got '%s'", response.Message)
	}
}

func TestWriteError(t *testing.T) {
	w := httptest.NewRecorder()

	err := WriteError(w, http.StatusBadRequest, "Error message")
	if err != nil {
		t.Fatalf("WriteError returned an error: %v", err)
	}

	// Check status code
	if w.Code != http.StatusBadRequest {
		t.Errorf("Expected status code %d, got %d", http.StatusBadRequest, w.Code)
	}

	// Decode and check response
	var response JSONResponse
	err = json.NewDecoder(w.Body).Decode(&response)
	if err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if response.Success {
		t.Error("Expected success to be false")
	}

	if response.Error != "Error message" {
		t.Errorf("Expected error 'Error message', got '%s'", response.Error)
	}
}

