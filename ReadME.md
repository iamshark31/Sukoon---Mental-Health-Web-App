# Sukoon - A Mental Health Application

A comprehensive mental health platform built with the MERN stack, enabling users to track mood and sleep, participate in a supportive community.

## Features

### Mood & Sleep Tracker

### Community

Read and like mental health-related articles. Engage with others through posts and discussions.

### Analytics Dashboard

## Tech Stack

- **Frontend:** React, Axios, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, JWT Authentication
- **Database:** MongoDB for storing user data, posts, mood/sleep logs.

## Setup Instructions
1. Clone the repository and install dependencies in both backend and frontend folder.
2. Install dependencies of both directories:
   
   ```bash
   npm install
4. Create a .env file in the backend folder and add the following variables:
   
   ```plaintext
   MONGO_URI=<your_mongo_uri>
   JWT_SECRET=<your_jwt_secret>
5. Create a .env file in the frontend folder and add the following variables:
   ```plaintext
   VITE_REACT_APP_API_KEY= 
   VITE_REACT_APP_AUTH_DOMAIN= 
   VITE_REACT_APP_PROJECT_ID= 
   VITE_REACT_APP_STORAGE_BUCKET= 
   VITE_REACT_APP_MESSAGING_SENDER_ID= 
   VITE_REACT_APP_APP_ID= 
   VITE_REACT_APP_MEASUREMENT_ID= 

5. Start the server and client app.
   
   ```bash
   npm run dev
