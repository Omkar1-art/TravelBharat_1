# TravelBharat – Full Stack Tourism Exploration & Booking Platform

## Overview

TravelBharat is a full-stack tourism and travel management platform designed to simplify travel discovery and booking across India.

The platform provides users with a centralized digital space to explore Indian states, cities, tourist attractions, local cuisines, hotels, and restaurants. Along with destination discovery, users can make hotel reservations, restaurant bookings, save favorite places, and manage their travel preferences.

TravelBharat aims to create an organized and scalable tourism ecosystem by combining travel information and booking services into one platform.

---

## Problem Statement

Planning a trip usually requires users to visit multiple websites for destination research, hotel booking, restaurant reservations, and local food exploration.

This fragmented process creates inconvenience and poor travel planning.

TravelBharat solves this problem by integrating all major tourism services into a single web application.

---

## Objectives

* Centralize tourism information for Indian destinations
* Simplify hotel and restaurant booking
* Improve travel planning experience
* Promote local food culture
* Create a scalable tourism platform

---

## Core Features

### User Features

* User Registration & Login
* JWT Authentication
* Browse Indian States
* Explore Cities by State
* Tourist Places Discovery
* Detailed Tourist Place Information
* Hotel Browsing
* Hotel Booking System
* Restaurant Browsing
* Restaurant Table Booking
* Local Food Discovery
* Favorites Management
* User Profile Management
* Contact Support System
* Search Functionality

---

### Admin Features

* Admin Login
* State Management
* City Management
* Tourist Place Management
* Hotel Management
* Gallery Management
* Contact Messages Monitoring

---

## Project Modules

### 1. Authentication Module

Handles user registration, login, and protected routes.

---

### 2. Tourism Discovery Module

Allows users to browse states, cities, and tourist attractions.

---

### 3. Booking Module

Supports hotel booking and restaurant reservation.

---

### 4. Favorites Module

Enables users to save favorite destinations.

---

### 5. Gallery Module

Displays tourism images and destination highlights.

---

### 6. Contact Module

Allows users to send inquiries and feedback.

---

### 7. Admin Management Module

Allows content management for tourism data.

---

## Technology Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM
* Framer Motion
* AOS Animations

---

### Backend

* Node.js
* Express.js

---

### Database

* MongoDB Atlas

---

### Authentication

* JWT (JSON Web Token)
* bcryptjs

---

### Deployment

* Frontend: Vercel
* Backend: Vercel
* Database: MongoDB Atlas

---

## Project Structure

```text
TravelBharat
│
├── backend
│   ├── api
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── vercel.json
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── admin
│   │   ├── components
│   │   ├── assets
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   └── utils
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Omkar1-art/TravelBharat_1.git
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### Backend Setup

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## API Endpoints

### Authentication

```bash
POST /api/auth/register
POST /api/auth/login
```

---

### Contact

```bash
POST /api/contact
GET /api/contact
```

---

### Favorites

```bash
POST /api/favorites
GET /api/favorites
DELETE /api/favorites/:id
```

---

### Hotel Booking

```bash
POST /api/bookings
GET /api/bookings
```

---

### Restaurant Booking

```bash
POST /api/restaurant-bookings
GET /api/restaurant-bookings
```

---

## Live Project Links

### GitHub Repository

https://github.com/Omkar1-art/TravelBharat_1

---

### Frontend Deployment

https://travelbharat-frontend-liard.vercel.app/

---

### Backend API

https://travelbharat-backend.vercel.app/

---

## Future Enhancements

* Google Maps Integration
* Reviews & Ratings
* Live Weather Information
* Budget Estimation
* Trip Planner
* Nearby Attractions Recommendation
* Travel Blogs
* AI-Based Travel Recommendation

---

## Business Value

* Centralized tourism platform
* Simplifies travel planning
* Promotes destination discovery
* Improves hotel & restaurant accessibility
* Enhances tourism engagement

---

## Author

**Omkar Sawant**
Full Stack Developer
Internship Project

---

## License

This project is developed for internship, portfolio, and educational purposes.
