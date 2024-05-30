// Import required modules
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const errorHandler = require('./middleware/errorHandler')

// Load environment variables from .env file
dotenv.config()

// Initialize Express app
const app = express()

// Set up middleware
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())

// Error handling middleware
app.use(errorHandler)

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err))

// Define routes
// Example route
app.get('/', (req, res) => {
  res.send('Hello World! This means the server is running successfully.')
})

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
