# b7r.dev Go + React Reference Implementation

Modern full-stack reference implementation featuring Go backend with React + TypeScript + Vite + Tailwind CSS v4 frontend. This boilerplate showcases best practices for building production-ready web applications with a beautiful, Apple-inspired glassmorphism UI.

**[View the live demo →](https://ref.b7r.dev/)**

## Features

### Backend (Go)
- Clean architecture with service layer pattern
- RESTful API with Go 1.22+ enhanced `http.ServeMux`
- Structured logging with logrus
- Configuration management with viper
- CORS middleware
- Health check endpoints
- Sample data models and services

### Frontend (React + TypeScript + Vite)
- TypeScript with strict mode
- Lightning-fast Vite dev server with HMR
- Tailwind CSS v4 with CSS-first configuration
- Dark mode with localStorage persistence
- 2025 liquid glassmorphism UI
- Apple-inspired design language
- Comprehensive component library
- Humanist monospace typography (JetBrains Mono, IBM Plex Mono)
- Accessible with proper contrast ratios
- Fully responsive design

## Quick Start

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

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hello` | Hello world with version info |
| GET | `/api/health` | Health check |
| GET | `/api/users` | List all users |
| GET | `/api/user?id=1` | Get user by ID |
| GET | `/api/quotes` | List all quotes |
| GET | `/api/quote/random` | Get random quote |

## Project Structure

```
.
├── main.go                 # Application entry point
├── config/                 # Configuration management
│   └── config.go
├── cmd/
│   └── server/            # HTTP server setup
│       ├── handlers.go
│       ├── middleware.go
│       ├── routes.go
│       └── server.go
├── pkg/
│   ├── models/            # Data models
│   │   └── user.go
│   ├── services/          # Business logic layer
│   │   ├── user_service.go
│   │   └── quote_service.go
│   └── utils/             # Utility functions
│       ├── logger.go
│       ├── response.go
│       └── response_test.go
└── frontend/              # React + TypeScript application
    ├── src/
    │   ├── types.ts       # Shared TypeScript interfaces
    │   ├── App.tsx        # Main application
    │   ├── Header.tsx     # Header component
    │   ├── Footer.tsx     # Footer component
    │   ├── ComponentLibrary.tsx
    │   ├── mockApi.ts     # Mock API service
    │   ├── index.css      # Custom styles & glassmorphism
    │   └── main.tsx       # Entry point
    ├── tsconfig.json
    ├── eslint.config.js
    ├── postcss.config.js
    ├── index.html
    └── package.json
```

## Build for Production

```bash
# Build backend
go build -o bin/server main.go

# Build frontend
cd frontend
npm run build
```

The frontend build output will be in `frontend/dist/`.

## Development

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

# Type-check
npx tsc --noEmit

# Lint
npm run lint
```

## Dependencies

### Backend
- `net/http` (Go 1.22+ enhanced ServeMux) - HTTP router
- `github.com/sirupsen/logrus` - Structured logging
- `github.com/spf13/viper` - Configuration
- `github.com/joho/godotenv` - Environment variables

### Frontend
- `react` / `react-dom` - UI library
- `typescript` - Type safety
- `vite` - Build tool
- `tailwindcss` v4 - Utility-first CSS (CSS-first config)
- `lucide-react` - Icon library

## Contributing

This is a reference implementation. Feel free to fork and adapt for your own projects.

## License

MIT License - feel free to use this boilerplate for any project.

## Links

- **Demo:** [ref.b7r.dev](https://b7r.dev)
- **Repository:** [github.com/b7r-dev/go-react-reference-implementation](https://github.com/b7r-dev/go-react-reference-implementation)
