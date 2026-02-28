const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const session = require('express-session');
const passport = require('passport');

// Import Passport Config
require('./config/passport')(passport); 

const app = express();
const PORT = process.env.PORT || 8080;

app.set('trust proxy', 1);

// 1. Connect to Database
connectDB();

// 2. Basic Middleware (Parse data before handling sessions/routes)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Session Middleware (Must be before passport.session())
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat', // Use env variable for Render
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', // true on Render, false locally
    sameSite: 'lax' 
  }
}));

// 4. Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// 5. Routes
app.use('/', require('./routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. Docs at http://localhost:${PORT}`);
});