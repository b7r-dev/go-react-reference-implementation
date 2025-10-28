import { useState } from 'react'
import {
  ArrowLeft,
  Check,
  X,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Loader2,
  Search,
  Bell,
  Settings,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  Share2,
  Heart,
  Star,
  Bookmark,
  MessageSquare,
  Send
} from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

function ComponentLibrary({ onBack }) {
  const [activeTab, setActiveTab] = useState('buttons')
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [checkboxStates, setCheckboxStates] = useState({
    option1: false,
    option2: true,
    option3: false
  })
  const [radioValue, setRadioValue] = useState('option1')
  const [sliderValue, setSliderValue] = useState(50)
  const [switchStates, setSwitchStates] = useState({
    switch1: true,
    switch2: false,
    switch3: true
  })

  const tabs = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'cards', label: 'Cards' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'badges', label: 'Badges' },
    { id: 'modals', label: 'Modals' }
  ]

  const GlassCard = ({ children, className = '' }) => (
    <div className={`glass dark:glass-dark rounded-2xl p-6 shadow-depth dark:shadow-glass-dark ${className}`}>
      {children}
    </div>
  )

  const Button = ({ children, variant = 'primary', size = 'md', icon, ...props }) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 shadow-depth hover:shadow-depth-lg active:scale-95'

    const variants = {
      primary: 'bg-indigo-500 hover:bg-indigo-600 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700',
      secondary: 'glass dark:glass-dark hover:bg-white/80 dark:hover:bg-slate-800/80 text-gray-700 dark:text-gray-200',
      success: 'bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700',
      danger: 'bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700',
      ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }

    return (
      <button className={`${baseClasses} ${variants[variant]} ${sizes[size]}`} {...props}>
        {icon && <span>{icon}</span>}
        {children}
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-texture-light dark:bg-texture-dark">
      <div className="header-glass sticky top-0 z-50 shadow-depth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="icon-btn p-1 sm:p-1.5 rounded-xl"
                aria-label="Go back to main page"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-700 dark:text-indigo-300" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                Component Reference
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">Component Library</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Reference implementation of UI patterns for the b7r.dev boilerplate.
          </p>
        </div>

        {/* Tabs */}
        <div className="glass rounded-3xl p-2 mb-8 shadow-depth">
          <div className="flex flex-wrap gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-depth'
                    : 'hover:bg-white/50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons Tab */}
        {activeTab === 'buttons' && (
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Button Variants</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Button Sizes</h2>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Buttons with Icons</h2>
              <div className="flex flex-wrap gap-4">
                <Button icon={<Plus className="h-4 w-4" />}>Add Item</Button>
                <Button variant="success" icon={<Check className="h-4 w-4" />}>Confirm</Button>
                <Button variant="danger" icon={<Trash2 className="h-4 w-4" />}>Delete</Button>
                <Button variant="secondary" icon={<Download className="h-4 w-4" />}>Download</Button>
                <Button variant="ghost" icon={<Share2 className="h-4 w-4" />}>Share</Button>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Icon Buttons</h2>
              <div className="flex flex-wrap gap-4">
                <button className="icon-btn p-1.5 rounded-xl" aria-label="Like">
                  <Heart className="h-5 w-5 text-red-700 dark:text-red-300" />
                </button>
                <button className="icon-btn p-1.5 rounded-xl" aria-label="Favorite">
                  <Star className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
                </button>
                <button className="icon-btn p-1.5 rounded-xl" aria-label="Bookmark">
                  <Bookmark className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
                </button>
                <button className="icon-btn p-1.5 rounded-xl" aria-label="Message">
                  <MessageSquare className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
                </button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Inputs Tab */}
        {activeTab === 'inputs' && (
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Text Inputs</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Default Input
                  </label>
                  <input
                    type="text"
                    placeholder="Enter text..."
                    className="w-full px-4 py-2 rounded-xl glass dark:glass-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Input with Icon
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 rounded-xl glass dark:glass-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Password Input
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password..."
                      className="w-full pl-10 pr-12 py-2 rounded-xl glass dark:glass-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Select & Dropdown</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Select Option
                  </label>
                  <div className="relative">
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl glass dark:glass-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 appearance-none cursor-pointer"
                    >
                      <option value="">Choose an option...</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600 dark:text-gray-300 pointer-events-none" />
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Checkboxes & Radio</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Checkboxes</h3>
                  <div className="space-y-2">
                    {Object.keys(checkboxStates).map((key, index) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checkboxStates[key]}
                          onChange={(e) => setCheckboxStates({...checkboxStates, [key]: e.target.checked})}
                          className="w-5 h-5 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500 cursor-pointer"
                        />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                          Checkbox Option {index + 1}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Radio Buttons</h3>
                  <div className="space-y-2">
                    {['option1', 'option2', 'option3'].map((option, index) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="radio-group"
                          value={option}
                          checked={radioValue === option}
                          onChange={(e) => setRadioValue(e.target.value)}
                          className="w-5 h-5 border-gray-300 text-indigo-500 focus:ring-indigo-500 cursor-pointer"
                        />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                          Radio Option {index + 1}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Cards Tab */}
        {activeTab === 'cards' && (
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Basic Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass dark:glass-dark rounded-2xl p-6 shadow-depth hover:shadow-depth-lg transition-all">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Card Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    This is a basic glass card with hover effect and depth shadow.
                  </p>
                </div>

                <div className="glass dark:glass-dark rounded-2xl p-6 shadow-depth hover:shadow-depth-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20">
                      <Star className="h-5 w-5 text-indigo-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">With Icon</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Card with an icon header for better visual hierarchy.
                  </p>
                </div>

                <div className="glass dark:glass-dark rounded-2xl overflow-hidden shadow-depth hover:shadow-depth-lg transition-all">
                  <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Image Card</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Card with gradient header simulating an image.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Interactive Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass dark:glass-dark rounded-2xl p-6 shadow-depth hover:shadow-depth-xl transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-700 dark:text-green-400">
                      Active
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Success Card</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Hover to see the enhanced shadow effect.
                  </p>
                  <Button size="sm" variant="success">View Details</Button>
                </div>

                <div className="glass dark:glass-dark rounded-2xl p-6 shadow-depth hover:shadow-depth-xl transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <Info className="h-6 w-6 text-blue-500" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-400">
                      Info
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Info Card</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Interactive card with status badge and action button.
                  </p>
                  <Button size="sm" variant="primary">Learn More</Button>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Alert Variants</h2>
              <div className="space-y-4">
                <div className="glass dark:glass-dark rounded-xl p-4 border-l-4 border-blue-500 shadow-depth">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Information</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        This is an informational alert with glassmorphism design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass dark:glass-dark rounded-xl p-4 border-l-4 border-green-500 shadow-depth">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Success</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your action was completed successfully!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass dark:glass-dark rounded-xl p-4 border-l-4 border-yellow-500 shadow-depth">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Warning</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Please review this information carefully before proceeding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass dark:glass-dark rounded-xl p-4 border-l-4 border-red-500 shadow-depth">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Error</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        An error occurred while processing your request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Dismissible Alerts</h2>
              <div className="space-y-4">
                <div className="glass dark:glass-dark rounded-xl p-4 shadow-depth">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Dismissible Alert</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Click the X button to dismiss this alert.
                        </p>
                      </div>
                    </div>
                    <button className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Badge Variants</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Default
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-700 dark:text-indigo-400">
                  Primary
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-700 dark:text-green-400">
                  Success
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">
                  Warning
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500/20 text-red-700 dark:text-red-400">
                  Danger
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-700 dark:text-blue-400">
                  Info
                </span>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Badges with Icons</h2>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-700 dark:text-green-400">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Active
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  Pending
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-red-500/20 text-red-700 dark:text-red-400">
                  <XCircle className="h-3.5 w-3.5" />
                  Inactive
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-700 dark:text-blue-400">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Loading
                </span>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Notification Badges</h2>
              <div className="flex flex-wrap gap-6">
                <div className="relative">
                  <button className="icon-btn p-1.5 rounded-xl" aria-label="Notifications">
                    <Bell className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
                  </button>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow-depth">
                    3
                  </span>
                </div>

                <div className="relative">
                  <button className="icon-btn p-1.5 rounded-xl" aria-label="Messages">
                    <MessageSquare className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
                  </button>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center shadow-depth">
                    12
                  </span>
                </div>

                <div className="relative">
                  <button className="icon-btn p-1.5 rounded-xl" aria-label="Mail">
                    <Mail className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
                  </button>
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 shadow-depth"></span>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Modals Tab */}
        {activeTab === 'modals' && (
          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">Modal Examples</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Interactive modal patterns for dialogs and confirmations.
              </p>

              <div className="space-y-6">
                {/* Modal Preview */}
                <div className="glass dark:glass-dark rounded-2xl p-8 shadow-depth-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">Modal Title</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        This is what a modal would look like with glassmorphism design
                      </p>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 dark:text-gray-300">
                      Modal content goes here. This could include forms, information, or any other content.
                    </p>

                    <div className="glass dark:glass-dark rounded-xl p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nested glass elements work great for highlighting important information within modals.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="primary">Confirm</Button>
                  </div>
                </div>

                {/* Confirmation Modal Preview */}
                <div className="glass dark:glass-dark rounded-2xl p-8 shadow-depth-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="p-4 rounded-full bg-red-500/20 mb-4">
                      <AlertCircle className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">Confirm Action</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Are you sure you want to proceed? This action cannot be undone.
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default ComponentLibrary

