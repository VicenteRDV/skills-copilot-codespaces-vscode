// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Import routes
const posts = require('./routes/posts');

// Setup middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Setup routes
app.use('/posts', posts);

// Start server
app.listen(process.env.PORT || 8081);