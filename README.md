# 🛒 Nexamart

> A full-stack e-commerce marketplace built with React, Node.js, and real-time Socket.IO — deployed on Vercel.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)


---

## Overview

**Nexamart** is a modern e-commerce platform where buyers and sellers interact on a single centralised marketplace. It features a React SPA frontend, a RESTful Node.js/Express backend, and a dedicated Socket.IO service for real-time capabilities such as live notifications and chat.

---

## Features

- 🔐 User authentication (register / login / JWT)
- 🛍️ Product listing, filtering & search
- 🛒 Shopping cart & checkout flow
- 📦 Order management & tracking
- 👤 Seller dashboard (upload & manage products)
- 💬 Real-time notifications via Socket.IO
- ☁️ Deployed on Vercel (frontend + backend)

---

## Project Structure

```
Nexamart/
├── docs/
│   ├── architecture.svg    # System architecture diagram
│   └── er-diagram.svg      # Entity relationship diagram
├── frontend/               # React + Vite SPA
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   ├── context/        # Auth & cart context
│   │   ├── services/       # Axios API calls
│   │   └── main.jsx
│   └── package.json
├── backend/                # Node.js + Express REST API
│   ├── routes/             # API route handlers
│   ├── models/             # Mongoose schemas
│   ├── middleware/         # Auth, error handling
│   ├── controllers/        # Business logic
│   └── server.js           # Entry point
├── socket/                 # Socket.IO server
│   └── index.js            # WebSocket event handlers
├── vercel.json             # Vercel deployment config
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Clone & Install

```bash
git clone https://github.com/MemonaAmirAbdulHaq/Nexamart.git
cd Nexamart

# Install root dependencies
npm install

# Install frontend
cd frontend && npm install

# Install backend
cd ../backend && npm install

# Install socket service
cd ../socket && npm install
```

### Run Locally

```bash
# Start backend (from /backend)
npm run dev

# Start socket server (from /socket)
npm run dev

# Start frontend (from /frontend)
npm run dev
```




## Deployment

This project is configured for **Vercel** via `vercel.json`:

- **Frontend** is built as a static site (`frontend/dist`)
- **Backend** runs as a Vercel Serverless Function (`backend/server.js`)
- All `/api/*` requests are proxied to the backend function

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from root
vercel --prod
```

Set all environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**.

---


<p align="center">Made with ❤️ by <a href="https://github.com/MemonaAmirAbdulHaq">MemonaAmirAbdulHaq</a></p>
