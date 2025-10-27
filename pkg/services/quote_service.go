package services

import (
	"math/rand"
	"time"

	"github.com/b7r/go-boilerplate/pkg/models"
)

// QuoteService handles quote-related business logic
type QuoteService struct {
	quotes []models.Quote
}

// NewQuoteService creates a new QuoteService instance
func NewQuoteService() *QuoteService {
	// Initialize with some inspirational quotes
	quotes := []models.Quote{
		{ID: 1, Text: "The only way to do great work is to love what you do.", Author: "Steve Jobs"},
		{ID: 2, Text: "Code is like humor. When you have to explain it, it's bad.", Author: "Cory House"},
		{ID: 3, Text: "First, solve the problem. Then, write the code.", Author: "John Johnson"},
		{ID: 4, Text: "Experience is the name everyone gives to their mistakes.", Author: "Oscar Wilde"},
		{ID: 5, Text: "In order to be irreplaceable, one must always be different.", Author: "Coco Chanel"},
		{ID: 6, Text: "Simplicity is the soul of efficiency.", Author: "Austin Freeman"},
		{ID: 7, Text: "Make it work, make it right, make it fast.", Author: "Kent Beck"},
	}

	return &QuoteService{quotes: quotes}
}

// GetRandomQuote returns a random quote
func (s *QuoteService) GetRandomQuote() *models.Quote {
	rand.Seed(time.Now().UnixNano())
	randomIndex := rand.Intn(len(s.quotes))
	return &s.quotes[randomIndex]
}

// GetAllQuotes returns all quotes
func (s *QuoteService) GetAllQuotes() []models.Quote {
	return s.quotes
}

