# 📝 MERN Blog Platform with AI & ImageKit Integration

A full-stack **MERN** (MongoDB, Express, React, Node.js) blog web app that enables users to create, manage, and explore blogs. It integrates **Gemini AI** for AI-generated blog content and **ImageKit** for efficient image hosting and optimization.


---

## 🖼️ Screenshots

### 🏠 Homepage
![Homepage](https://github.com/user-attachments/assets/a91235aa-dedb-4e9b-ab80-051458e32f8f)

### ✍️ Create Blog Post
![Dashboard Post](https://github.com/user-attachments/assets/7d1be4d2-db7e-4f32-94b6-549feae10962)

### 🤖 AI-Powered Blog Generation
![AI Generate](https://github.com/user-attachments/assets/b82057a1-3491-4d37-9a94-e5c0bf015a2f)

---


## 🌐 Live Demo

🚀 Check out the live application here:  
**[👉 Live Demo](https://blog-client-seven-zeta.vercel.app/)**

---


## 🚀 Features

- 🧠 **AI-Powered Blog Generation** (via Gemini AI)
- 🖼️ **Image Upload & Optimization** (via ImageKit)
- 🔐 **User Authentication** (JWT-based)
- 📝 **Create, Edit, and Delete Blogs**
- 📚 **Read Blogs with Markdown Rendering**
- 📦 **RESTful API (Express.js)**
- 💾 **MongoDB Database with Mongoose**
- ⚡ Built using **Vite** for fast frontend dev

---

## 🧠 AI Integration: Gemini

This app uses **Gemini AI** to help users generate blog content from prompts. Users can:
- Input a topic or keyword
- Let AI generate blog outlines or full articles
- Edit the generated content before publishing

---

## 🖼️ ImageKit Integration

Uploaded images are:
- Compressed and optimized via **ImageKit**
- Delivered globally through a CDN
- Stored securely with transformation support

---

## 🛠️ Tech Stack

| Tech         | Description                             |
|--------------|-----------------------------------------|
| MongoDB      | NoSQL database for blogs & users        |
| Express.js   | Backend framework                       |
| React        | Frontend UI                             |
| Node.js      | Server-side JavaScript runtime          |
| ImageKit     | Cloud-based image CDN & transformer     |
| Gemini AI    | AI content generation engine            |
| Vite         | Lightning-fast React dev server         |

---

## 📦 Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- ImageKit API keys
- Gemini AI API key

⚙️ Environment Variables

Create .env files in both server/ and client/ directories.
server/.env

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

client/.env

VITE_IMAGEKIT_URL=your_imagekit_endpoint
VITE_IMAGEKIT_PUBLIC_KEY=your_public_key

▶️ Run the App

# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm run dev
🧪 Future Improvements

    ✍️ Rich text editor (e.g., TipTap)

    🗂️ Blog tagging and categories

    💬 Comment system

    📊 View analytics



### 🔧 Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
