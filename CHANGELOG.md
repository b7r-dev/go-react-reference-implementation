# Changelog

## [2.0.0] - 2026-04-14

### Changed
- **Migrated frontend from JavaScript (JSX) to TypeScript (TSX)** with strict mode enabled
- Added shared TypeScript interfaces (`User`, `Quote`, `HelloData`, `ApiResponse<T>`) in `src/types.ts`
- Removed dead `tailwind.config.js` — Tailwind v4 uses CSS-first configuration via `@theme` in `index.css`
- Removed redundant `autoprefixer` dependency (handled by `@tailwindcss/postcss`)
- Consolidated duplicate CSS rules: removed identical `.bg-texture-dark` and `.glass-dark` classes
- Replaced global `* { transition }` with scoped selector targeting interactive elements only
- Added `typescript-eslint` for ESLint TypeScript support
- Updated ESLint config to lint `*.{ts,tsx}` files
- Added `frontend-typecheck` and `frontend-lint` Make targets
- Updated README to reflect accurate project structure, dependencies, and router (`http.ServeMux`)

## [1.0.0] - 2025-10-28

### Added
- Consistent header and footer components across all pages
- GitHub repository link in header navigation

## [1.0.0-rc.2] - 2025-10-27

### Changed
- Increased header blur intensity for stronger glassmorphism effect

### Added
- Comprehensive deployment guide (`DEPLOYMENT.md`)
- Mock API service (`mockApi.js`) for standalone frontend deployment without Go backend
- Vercel deployment configuration (`vercel.json`)

### Fixed
- Adjusted stats card layout spacing for better visual balance

## [1.0.0-rc.1] - 2025-10-27

### Added
- Initial commit: b7r.dev Go + React reference implementation
- Go backend with clean architecture (service layer pattern, `http.ServeMux`, logrus, viper)
- React frontend with Vite, Tailwind CSS v4, and glassmorphism design system
- RESTful API endpoints: `/api/hello`, `/api/health`, `/api/users`, `/api/quotes`
- Component library showcasing buttons, inputs, cards, alerts, badges, and modals
- Dark mode with `localStorage` persistence
- Interactive project setup script (`setup.sh`)
