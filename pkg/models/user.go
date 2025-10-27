package models

import "time"

// User represents a user in the system
type User struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Role      string    `json:"role"`
	CreatedAt time.Time `json:"created_at"`
}

// Quote represents an inspirational quote
type Quote struct {
	ID     int    `json:"id"`
	Text   string `json:"text"`
	Author string `json:"author"`
}

