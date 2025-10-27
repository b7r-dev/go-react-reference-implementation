package config

import (
	"github.com/joho/godotenv"
	"github.com/spf13/viper"
)

// Config holds the application configuration
type Config struct {
	Port        string
	Environment string
	APIVersion  string
}

// Load reads configuration from environment variables with sensible defaults
func Load() *Config {
	// Try to load .env file (ignore error if it doesn't exist)
	_ = godotenv.Load()

	// Set defaults
	viper.SetDefault("PORT", "8080")
	viper.SetDefault("ENVIRONMENT", "development")
	viper.SetDefault("API_VERSION", "v1")

	// Bind environment variables
	viper.AutomaticEnv()

	return &Config{
		Port:        viper.GetString("PORT"),
		Environment: viper.GetString("ENVIRONMENT"),
		APIVersion:  viper.GetString("API_VERSION"),
	}
}
