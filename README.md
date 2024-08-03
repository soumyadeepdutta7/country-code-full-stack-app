# Country Info App

## Description

The Country Info App is a full-stack single-page application that provides detailed information about countries based on currency codes. Built using React on the frontend and Node.js/Express on the backend, this application allows users to search for countries by currency code, view detailed country information, and manage their favorite countries.

## Features

- **User Authentication**: Register, login, and manage user sessions.
- **Search Functionality**: Search for countries by currency code.
- **Favorites**: Add countries to your favorites list and view them.
- **Search History**: Keep track of recent searches.
- **Responsive Design**: Ensure a consistent experience across various devices.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **APIs**: REST Countries API for country data, Flags API for country flags

## Installation

### Backend

```bash
# Clone the repository
git clone <repository-url>
cd backend

# Install dependencies
npm install

# Create a .env file in the backend directory with the following content:
# PORT=5000
# MONGO_URI=<your-mongodb-uri>
# JWT_SECRET=<your-jwt-secret>

# Start the server
npm start
```

### Frontend

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file in the frontend directory with the following content:
# VITE_API_BASE_URL=http://localhost:5000/api

# Start the development server
npm run dev
```

Usage
Backend

# Access the Application: Open your browser and navigate to http://localhost:3000 (frontend) or use the configured domain in production.

# Authentication: Register a new account or log in with an existing account.

# Search for Countries: Use the search bar to enter a currency code and view detailed information about countries.

# Manage Favorites: Add countries to your favorites list and view them from the favorites page.

# View Search History: Access your recent searches from the history section.


Frontend

# Access the Application: Open your browser and navigate to http://localhost:3000.

# Register or Log In: Use the authentication forms to create a new account or log in with an existing one.

# Search for Countries: Enter a currency code in the search bar to fetch and view country details.

# Manage Favorites: Add or remove countries from your favorites list and view them on the favorites page.

# View Search History: See your recent searches and quickly access past queries.


Deployment
Frontend: https://currency-code-info.netlify.app/
Backend: https://country-code-full-stack-app.onrender.com/
