# 📱 CodeAlpha Social Media Platform

A full-stack **Social Media Platform** developed using **Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript**.  
The application allows users to create accounts, share posts, interact through likes and comments, and follow other users.

This project demonstrates a **modern backend architecture for social media applications**, including authentication, REST APIs, and database integration.

---                     

# 🚀 Features

### 🔐 User Authentication
- User registration and login
- Password hashing using **bcrypt**
- Secure authentication using **JWT tokens**

### 📝 Post Management
- Create posts
- View all posts
- Like posts
- Comment on posts

### 👥 Social Features
- Follow / Unfollow users
- View user profiles
- Track followers and following

### 🌐 RESTful API Design
- Modular API architecture
- Organized routes and models
- Scalable backend structure

--- 

# 🛠 Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JSON Web Tokens (JWT)
- bcryptjs

## Tools
- Postman
- Git & GitHub

---

# 📂 Project Structure

backend  
│  
├── models  
│   ├── User.js  
│   ├── Post.js  
│  
├── routes  
│   ├── userRoutes.js  
│   ├── postRoutes.js  
│  
├── middleware  
│   └── authMiddleware.js  
│  
├── server.js  
├── package.json  
└── .env  

frontend  
│  
├── index.html  
├── login.html  
├── register.html  
├── profile.html  
├── style.css  
└── script.js  

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/SadhvikaNallathigala/CodeAlpha_SocialMedia.git

---

### 2️⃣ Navigate to backend folder

cd CodeAlpha_SocialMedia/backend

---

### 3️⃣ Install dependencies

npm install

---

### 4️⃣ Create environment variables

Create a `.env` file

MONGO_URI=your_mongodb_connection_string  
PORT=5000  
JWT_SECRET=secret123  

---

### 5️⃣ Start the server

npx nodemon server.js

Server runs on:

http://localhost:5000

---

# 🔗 API Endpoints

### User APIs

POST /api/users/register → Register new user  
POST /api/users/login → Login user  
PUT /api/users/follow/:id → Follow a user  

---

### Post APIs

POST /api/posts → Create post  
GET /api/posts → Get all posts  
PUT /api/posts/:id/like → Like a post  
POST /api/posts/:id/comment → Comment on a post  

---

# 🗄 Database Schema

## Users

name  
email  
password  
followers  
following  

---

## Posts

userId  
description  
likes  
comments  

---

# 📸 Example Workflow

1️⃣ User registers an account  
2️⃣ User logs into the system  
3️⃣ User creates a post  
4️⃣ Other users can like or comment on the post  
5️⃣ Users can follow each other  

---

# 📈 Future Improvements

- Real-time notifications
- Media upload (images/videos)
- Chat system between users
- React.js frontend
- WebSocket-based real-time updates

---

# 👩‍💻 Author

**Sadhvika Nallathigala**

Full Stack Developer | MERN Stack Enthusiast

GitHub  
https://github.com/SadhvikaNallathigala

---

# 📜 License

This project was developed for educational and internship purposes.
