const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const passport = require('passport')
const errorHandler = require('./middleware/errorHandler')
const dataConnection = require('./config/dataConnection')
const userRoutes = require('./routes/UserRoutes')
const authRoutes = require('./routes/authRoutes')

// Load environment variables from .env file
dotenv.config()

// Initialize Express app
const app = express()

// Passport middleware
app.use(passport.initialize())
require('./config/passport')(passport)

// Set up middleware
app.use(
  cors({
    origin: ['http://localhost:3000'], // Allow requests from the frontend running on port 3000
    credentials: true, // Allow sending cookies along with requests
  }),
)
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())

// Connect to MongoDB database
dataConnection()

// Define routes to endpoints here
// Example route
app.get('/', (req, res) => {
  res.send('Hello World! This means the server is running successfully.')
})

app.use('/api', authRoutes)
app.use('/api', userRoutes)

// Error handling middleware (move to the end)
app.use(errorHandler)

// Set port
const PORT = process.env.PORT || 5000

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('SIGINT signal received: shutting down server')
  server.close(() => {
    console.log('Server shut down gracefully')
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: shutting down server')
  server.close(() => {
    console.log('Server shut down gracefully')
    process.exit(0)
  })
})
