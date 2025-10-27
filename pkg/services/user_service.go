package services

import (
	"fmt"
	"time"

	"github.com/b7r/go-boilerplate/pkg/models"
)

// UserService handles user-related business logic
type UserService struct{}

// NewUserService creates a new UserService instance
func NewUserService() *UserService {
	return &UserService{}
}

// GetUser retrieves a user by ID
func (s *UserService) GetUser(id int) (*models.User, error) {
	// In a real application, this would query a database
	// For now, we'll return mock data
	if id <= 0 {
		return nil, fmt.Errorf("invalid user ID: %d", id)
	}

	user := &models.User{
		ID:        id,
		Name:      fmt.Sprintf("User %d", id),
		Email:     fmt.Sprintf("user%d@example.com", id),
		Role:      "developer",
		CreatedAt: time.Now().Add(-24 * time.Hour * 30), // 30 days ago
	}

	return user, nil
}

// GetAllUsers retrieves all users
func (s *UserService) GetAllUsers() ([]*models.User, error) {
	// Mock data for demonstration
	users := []*models.User{
		{
			ID:        1,
			Name:      "Alice Johnson",
			Email:     "alice@example.com",
			Role:      "admin",
			CreatedAt: time.Now().Add(-24 * time.Hour * 90),
		},
		{
			ID:        2,
			Name:      "Bob Smith",
			Email:     "bob@example.com",
			Role:      "developer",
			CreatedAt: time.Now().Add(-24 * time.Hour * 60),
		},
		{
			ID:        3,
			Name:      "Carol Williams",
			Email:     "carol@example.com",
			Role:      "designer",
			CreatedAt: time.Now().Add(-24 * time.Hour * 30),
		},
	}

	return users, nil
}

