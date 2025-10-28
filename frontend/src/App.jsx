import { useState, useEffect } from 'react'
import {
  Loader2,
  AlertTriangle,
  PartyPopper,
  Mail,
  Calendar,
  RefreshCw,
  Activity,
  Zap
} from 'lucide-react'
import ComponentLibrary from './ComponentLibrary'
import Header from './Header'
import Footer from './Footer'
import mockApi from './mockApi'

function App() {
  const [hello, setHello] = useState(null)
  const [users, setUsers] = useState([])
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showComponentLibrary, setShowComponentLibrary] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true
  })

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      // Fetch all data in parallel using mock API
      const [helloData, usersData, quoteData] = await Promise.all([
        mockApi.getHello(),
        mockApi.getUsers(),
        mockApi.getRandomQuote()
      ])

      setHello(helloData.data)
      setUsers(usersData.data)
      setQuote(quoteData.data)
    } catch (err) {
      setError('Unable to load data. Please try again.')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchNewQuote = async () => {
    try {
      const data = await mockApi.getRandomQuote()
      setQuote(data.data)
    } catch (err) {
      console.error('Error fetching quote:', err)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Show component library if requested
  if (showComponentLibrary) {
    return <ComponentLibrary onBack={() => setShowComponentLibrary(false)} />
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-texture-light dark:bg-texture-dark flex items-center justify-center">
        <div className="glass rounded-3xl p-8 shadow-depth">
          <Loader2 className="h-16 w-16 text-blue-600 dark:text-blue-400 animate-spin mx-auto" />
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">Initializing...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-texture-light dark:bg-texture-dark flex items-center justify-center p-4">
        <div className="glass rounded-3xl shadow-depth-xl p-8 max-w-md">
          <AlertTriangle className="h-16 w-16 text-red-600 dark:text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">Connection Error</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="icon-btn-red p-1.5 rounded-xl mx-auto block"
            aria-label="Retry loading data"
          >
            <RefreshCw className="h-6 w-6 text-red-700 dark:text-red-300" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-texture-light dark:bg-texture-dark">
      <Header
        title="b7r.dev Boilerplate"
        subtitle="Full-stack reference implementation"
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onShowComponentLibrary={() => setShowComponentLibrary(true)}
        showComponentLibraryButton={true}
        showGithubLink={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hello World Card */}
        {hello && (
          <div className="glass rounded-3xl shadow-depth p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20">
                <PartyPopper className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">{hello.message}</h2>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <p><span className="font-medium">Version:</span> {hello.version}</p>
              <p><span className="font-medium">Timestamp:</span> {new Date(hello.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* Quote Card */}
        {quote && (
          <div className="glass rounded-3xl shadow-depth-lg p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-lg sm:text-2xl italic mb-4 text-gray-800 dark:text-gray-100 font-normal">&ldquo;{quote.text}&rdquo;</p>
                <p className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">— {quote.author}</p>
              </div>
              <button
                onClick={fetchNewQuote}
                className="icon-btn p-1.5 rounded-xl"
                aria-label="Get new quote"
              >
                <RefreshCw className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
          </div>
        )}

        {/* Users Grid */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">Sample Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="glass rounded-3xl shadow-depth hover:shadow-depth-lg transition-all p-4 sm:p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-depth">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight">{user.name}</h3>
                    <span className="inline-block px-2 sm:px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 bg-blue-500/20 rounded-full">
                      {user.role}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <p className="flex items-center gap-2">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="truncate">{user.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    Added {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        <div className="glass rounded-3xl shadow-depth-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-2xl bg-green-500/10 dark:bg-green-500/20">
              <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">System Status</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass rounded-2xl p-4 shadow-depth">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Records</p>
              <p className="text-2xl sm:text-3xl font-semibold text-green-600 dark:text-green-400">{users.length}</p>
            </div>
            <div className="glass rounded-2xl p-4 shadow-depth">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Uptime</p>
              <p className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400">100%</p>
            </div>
            <div className="glass rounded-2xl p-4 shadow-depth">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Optimized</p>
              <div className="flex items-center justify-center">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500 dark:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
