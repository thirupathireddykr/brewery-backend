# Brewery Review System - Backend

This repository contains the backend code for a Brewery Review System, built using Node.js, Express.js, and SQLite. This system allows users to register/login, search for breweries, view brewery details, and add reviews.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Running the Server](#running-the-server)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- SQLite (via sqlite3)
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing
- dotenv for managing environment variables

## Features

- User authentication (register, login) using JWT tokens.
- CRUD operations for managing reviews.
- SQLite for storing user data and reviews.
- RESTful API endpoints for user registration, authentication, managing reviews, etc.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your machine
- SQLite installed locally

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/thirupathireddykr/brewery-backend.git
   cd brewery-backend

2. Install dependencies:

   ```bash
   npm install

### Setting Up Environment Variables
    Create a .env file in the root directory:
    ```plaintext
    SECRET_KEY=your_jwt_secret_key

### Running the Server
    Start the server:
    ```bash
    npm start