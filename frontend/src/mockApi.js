// Mock API service to replace the Go backend
// This allows the frontend to run standalone without the backend server

const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    created_at: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Developer",
    created_at: "2024-02-20T14:45:00Z"
  },
  {
    id: 3,
    name: "Carol Williams",
    email: "carol@example.com",
    role: "Designer",
    created_at: "2024-03-10T09:15:00Z"
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    role: "Developer",
    created_at: "2024-03-25T16:20:00Z"
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve@example.com",
    role: "Manager",
    created_at: "2024-04-05T11:00:00Z"
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    role: "Developer",
    created_at: "2024-04-18T13:30:00Z"
  }
]

const mockQuotes = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 2,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    id: 3,
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    id: 4,
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    id: 5,
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    id: 6,
    text: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    id: 7,
    text: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann"
  },
  {
    id: 8,
    text: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    id: 9,
    text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "Dan Salomon"
  },
  {
    id: 10,
    text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "Antoine de Saint-Exupery"
  }
]

// Simulate network delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms))

// Mock API endpoints
export const mockApi = {
  // GET /api/hello
  async getHello() {
    await delay(200)
    return {
      success: true,
      message: "Welcome to Go Boilerplate API",
      data: {
        message: "Hello, World!",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
      }
    }
  },

  // GET /api/users
  async getUsers() {
    await delay(300)
    return {
      success: true,
      message: "Users retrieved successfully",
      data: mockUsers
    }
  },

  // GET /api/user?id=1
  async getUser(id) {
    await delay(200)
    const user = mockUsers.find(u => u.id === id)
    if (!user) {
      throw new Error(`User with ID ${id} not found`)
    }
    return {
      success: true,
      message: "User retrieved successfully",
      data: user
    }
  },

  // GET /api/quotes
  async getAllQuotes() {
    await delay(250)
    return {
      success: true,
      message: "All quotes retrieved",
      data: mockQuotes
    }
  },

  // GET /api/quote/random
  async getRandomQuote() {
    await delay(200)
    const randomIndex = Math.floor(Math.random() * mockQuotes.length)
    return {
      success: true,
      message: "Random quote retrieved",
      data: mockQuotes[randomIndex]
    }
  },

  // GET /api/health
  async getHealth() {
    await delay(100)
    return {
      success: true,
      message: "Service is healthy",
      data: {
        status: "healthy",
        uptime: "100%"
      }
    }
  }
}

export default mockApi

