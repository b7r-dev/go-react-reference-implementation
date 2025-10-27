# b7r.dev Go + React Reference Implementation

Modern full-stack reference implementation featuring Go backend with React + Vite + Tailwind CSS frontend. This boilerplate showcases best practices for building production-ready web applications with a beautiful, Apple-inspired glassmorphism UI.

## ✨ Features

### Backend (Go)
- Clean architecture with service layer pattern
- RESTful API with gorilla/mux router
- Structured logging with logrus
- Configuration management with viper
- CORS middleware
- Health check endpoints
- Sample data models and services

### Frontend (React + Vite)
- ⚡ Lightning-fast Vite dev server with HMR
- 🎨 Tailwind CSS v4 with custom design system
- 🌓 Dark mode with localStorage persistence
- 💎 2025 liquid glassmorphism UI
- 🎯 Apple-inspired design language
- 📚 Comprehensive component library
- 🔤 Humanist monospace typography (JetBrains Mono, IBM Plex Mono)
- ♿ Accessible with proper contrast ratios
- 📱 Fully responsive design

## 🚀 Quick Start

### Interactive Setup

Run the interactive setup script to create your own project:

```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup

```bash
# Install backend dependencies
go mod download

# Start backend server
go run main.go

# In a separate terminal, start frontend
cd frontend
npm install
npm run dev
```

**Backend:** http://localhost:8080
**Frontend:** http://localhost:5173

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hello` | Hello world with version info |
| GET | `/api/health` | Health check |
| GET | `/api/users` | List all users |
| GET | `/api/user?id=1` | Get user by ID |
| GET | `/api/quotes` | List all quotes |
| GET | `/api/quote/random` | Get random quote |

## 📁 Project Structure

```
.
├── main.go                 # Application entry point
├── config/                 # Configuration management
│   └── config.go
├── cmd/
│   └── server/            # HTTP server setup
│       └── server.go
├── pkg/
│   ├── models/            # Data models
│   │   ├── user.go
│   │   └── quote.go
│   ├── services/          # Business logic layer
│   │   ├── user_service.go
│   │   └── quote_service.go
│   └── utils/             # Utility functions
│       └── logger.go
└── frontend/              # React application
    ├── src/
    │   ├── App.jsx        # Main application
    │   ├── ComponentLibrary.jsx
    │   ├── index.css      # Custom styles & glassmorphism
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── tailwind.config.js
```

## 🎨 Design System

### Typography
- **Primary Font:** JetBrains Mono (grotesque monospace)
- **Fallback:** IBM Plex Mono (humanist monospace)
- **Features:** Ligatures, contextual alternates, optimized letter spacing

### Color Palette
- **Apple Blue:** `rgb(0, 113, 227)` / `rgb(10, 132, 255)`
- **Apple Purple:** `rgb(175, 82, 222)`
- **Apple Red:** `rgb(255, 59, 48)` / `rgb(255, 69, 58)`
- **Emerald:** `rgb(52, 211, 153)`

### Glassmorphism
- Liquid glass effect with 24px blur and 200% saturation
- Gradient backgrounds with transparency
- Inset highlights for depth
- Enhanced backdrop filters

## 🛠️ Build for Production

```bash
# Build backend
go build -o bin/server main.go

# Build frontend
cd frontend
npm run build
```

The frontend build output will be in `frontend/dist/`.

## 🧪 Development

### Backend
```bash
# Run with hot reload (requires air)
air

# Run tests
go test ./...

# Format code
go fmt ./...
```

### Frontend
```bash
cd frontend

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## 📦 Dependencies

### Backend
- `github.com/gorilla/mux` - HTTP router
- `github.com/sirupsen/logrus` - Structured logging
- `github.com/spf13/viper` - Configuration
- `github.com/joho/godotenv` - Environment variables

### Frontend
- `react` - UI library
- `vite` - Build tool
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library

## 🤝 Contributing

This is a reference implementation. Feel free to fork and adapt for your own projects.

## 📄 License

MIT License - feel free to use this boilerplate for any project.

## 🔗 Links

- **Website:** [b7r.dev](https://b7r.dev)
- **Repository:** [github.com/b7r-dev/go-react-reference-implementation](https://github.com/b7r-dev/go-react-reference-implementation)

---

Built with ❤️ by b7r.dev
