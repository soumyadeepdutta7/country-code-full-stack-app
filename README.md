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
