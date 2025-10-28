import { Sun, Moon, Layers, Github } from 'lucide-react'

function Header({ 
  title, 
  subtitle, 
  darkMode, 
  onToggleDarkMode, 
  onShowComponentLibrary,
  showComponentLibraryButton = true,
  showGithubLink = true 
}) {
  return (
    <header className="header-glass sticky top-0 z-50 shadow-depth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-normal">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            {showGithubLink && (
              <a
                href="https://github.com/b7r-dev/go-react-reference-implementation"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn p-1 sm:p-1.5 rounded-xl"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-200" />
              </a>
            )}
            {showComponentLibraryButton && (
              <button
                onClick={onShowComponentLibrary}
                className="icon-btn p-1 sm:p-1.5 rounded-xl"
                aria-label="View component library"
              >
                <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-200" />
              </button>
            )}
            <button
              onClick={onToggleDarkMode}
              className="icon-btn p-1 sm:p-1.5 rounded-xl"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

