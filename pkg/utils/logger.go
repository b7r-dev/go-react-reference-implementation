package utils

import (
	"fmt"
	"time"

	"github.com/sirupsen/logrus"
)

var log = logrus.New()

func init() {
	log.SetFormatter(&logrus.TextFormatter{
		FullTimestamp: true,
	})
	log.SetLevel(logrus.InfoLevel)
}

// LogRequest logs HTTP request details
func LogRequest(method, path string, duration time.Duration) {
	log.WithFields(logrus.Fields{
		"method":   method,
		"path":     path,
		"duration": duration,
	}).Info("HTTP request")
}

// LogInfo logs informational messages
func LogInfo(message string) {
	log.Info(message)
}

// LogError logs error messages
func LogError(message string, err error) {
	log.WithError(err).Error(message)
}

// FormatGreeting returns a formatted greeting message
func FormatGreeting(name string) string {
	return fmt.Sprintf("Hello, %s! Welcome to the Go Boilerplate API.", name)
}
