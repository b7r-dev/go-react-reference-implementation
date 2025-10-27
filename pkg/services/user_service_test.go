package services

import (
	"testing"
)

func TestGetUser(t *testing.T) {
	service := NewUserService()

	// Test valid user ID
	user, err := service.GetUser(1)
	if err != nil {
		t.Fatalf("GetUser returned an error: %v", err)
	}

	if user == nil {
		t.Fatal("Expected user to be non-nil")
	}

	if user.ID != 1 {
		t.Errorf("Expected user ID to be 1, got %d", user.ID)
	}

	if user.Email == "" {
		t.Error("Expected user email to be non-empty")
	}

	// Test invalid user ID
	_, err = service.GetUser(0)
	if err == nil {
		t.Error("Expected error for invalid user ID, got nil")
	}

	_, err = service.GetUser(-1)
	if err == nil {
		t.Error("Expected error for negative user ID, got nil")
	}
}

func TestGetAllUsers(t *testing.T) {
	service := NewUserService()

	users, err := service.GetAllUsers()
	if err != nil {
		t.Fatalf("GetAllUsers returned an error: %v", err)
	}

	if len(users) == 0 {
		t.Error("Expected at least one user")
	}

	// Check that all users have required fields
	for _, user := range users {
		if user.ID <= 0 {
			t.Errorf("User has invalid ID: %d", user.ID)
		}
		if user.Name == "" {
			t.Error("User has empty name")
		}
		if user.Email == "" {
			t.Error("User has empty email")
		}
		if user.Role == "" {
			t.Error("User has empty role")
		}
	}
}

