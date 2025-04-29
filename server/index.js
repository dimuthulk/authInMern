require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('./db.js'); // Import the database connection
const authRoutes = require('./routes/auth.js'); // Import the auth routes
const userRoutes = require('./routes/users.js'); // Import the user routes

// Middlewares
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS

// Routes
app.use('/api/auth', authRoutes); // Use the auth routes
app.use('/api/users', userRoutes); // Use the user routes

// Start the server
const port = 3000 || process.env.PORT; // Use the port from environment variables or default to 5000
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
