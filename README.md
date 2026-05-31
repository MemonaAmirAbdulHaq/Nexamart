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
- [Architecture Diagram](#architecture-diagram)
- [ER Diagram](#er-diagram)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

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

## Architecture Diagram

```svg
<svg viewBox="0 0 860 480" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, Arial, sans-serif" font-size="13">

  <!-- Background -->
  <rect width="860" height="480" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="430" y="36" text-anchor="middle" fill="#94a3b8" font-size="14" font-weight="600" letter-spacing="2">NEXAMART — SYSTEM ARCHITECTURE</text>

  <!-- ── CLIENT LAYER ── -->
  <rect x="30" y="60" width="180" height="360" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="120" y="82" text-anchor="middle" fill="#64748b" font-size="11" font-weight="700" letter-spacing="1.5">CLIENT LAYER</text>

  <!-- Browser box -->
  <rect x="50" y="94" width="140" height="60" rx="8" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.2"/>
  <text x="120" y="118" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">🌐 Browser</text>
  <text x="120" y="135" text-anchor="middle" fill="#7dd3fc" font-size="11">React SPA (Vite)</text>

  <!-- Pages -->
  <rect x="50" y="168" width="140" height="100" rx="8" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1.2"/>
  <text x="120" y="187" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="600">Pages / Components</text>
  <text x="120" y="205" text-anchor="middle" fill="#c4b5fd" font-size="10">Home · Products</text>
  <text x="120" y="220" text-anchor="middle" fill="#c4b5fd" font-size="10">Cart · Checkout</text>
  <text x="120" y="235" text-anchor="middle" fill="#c4b5fd" font-size="10">Seller Dashboard</text>
  <text x="120" y="250" text-anchor="middle" fill="#c4b5fd" font-size="10">Orders · Profile</text>

  <!-- Socket Client -->
  <rect x="50" y="282" width="140" height="44" rx="8" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="120" y="300" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Socket.IO Client</text>
  <text x="120" y="316" text-anchor="middle" fill="#fde68a" font-size="10">Real-time Events</text>

  <!-- Auth Store -->
  <rect x="50" y="340" width="140" height="44" rx="8" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.2"/>
  <text x="120" y="358" text-anchor="middle" fill="#34d399" font-size="11" font-weight="600">State / Auth Store</text>
  <text x="120" y="374" text-anchor="middle" fill="#6ee7b7" font-size="10">JWT · Context/Redux</text>

  <!-- ── BACKEND LAYER ── -->
  <rect x="300" y="60" width="200" height="360" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="400" y="82" text-anchor="middle" fill="#64748b" font-size="11" font-weight="700" letter-spacing="1.5">BACKEND LAYER</text>

  <!-- Express API -->
  <rect x="318" y="94" width="164" height="60" rx="8" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.2"/>
  <text x="400" y="118" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">⚙️ Express API</text>
  <text x="400" y="135" text-anchor="middle" fill="#7dd3fc" font-size="11">Node.js · server.js</text>

  <!-- Routes -->
  <rect x="318" y="168" width="164" height="120" rx="8" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1.2"/>
  <text x="400" y="187" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="600">REST Routes</text>
  <text x="400" y="205" text-anchor="middle" fill="#c4b5fd" font-size="10">/api/auth</text>
  <text x="400" y="220" text-anchor="middle" fill="#c4b5fd" font-size="10">/api/products</text>
  <text x="400" y="235" text-anchor="middle" fill="#c4b5fd" font-size="10">/api/cart · /api/orders</text>
  <text x="400" y="250" text-anchor="middle" fill="#c4b5fd" font-size="10">/api/users · /api/seller</text>
  <text x="400" y="268" text-anchor="middle" fill="#c4b5fd" font-size="10">JWT Middleware</text>

  <!-- Socket Server -->
  <rect x="318" y="302" width="164" height="44" rx="8" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="400" y="320" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Socket.IO Server</text>
  <text x="400" y="336" text-anchor="middle" fill="#fde68a" font-size="10">/socket — events hub</text>

  <!-- Middleware -->
  <rect x="318" y="360" width="164" height="44" rx="8" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1.2"/>
  <text x="400" y="378" text-anchor="middle" fill="#34d399" font-size="11" font-weight="600">Middleware</text>
  <text x="400" y="394" text-anchor="middle" fill="#6ee7b7" font-size="10">CORS · Helmet · Morgan</text>

  <!-- ── DATA LAYER ── -->
  <rect x="590" y="60" width="240" height="360" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="710" y="82" text-anchor="middle" fill="#64748b" font-size="11" font-weight="700" letter-spacing="1.5">DATA LAYER</text>

  <!-- MongoDB -->
  <rect x="608" y="94" width="204" height="60" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.2"/>
  <text x="710" y="118" text-anchor="middle" fill="#34d399" font-size="12" font-weight="600">🍃 MongoDB Atlas</text>
  <text x="710" y="135" text-anchor="middle" fill="#6ee7b7" font-size="11">Mongoose ODM</text>

  <!-- Collections -->
  <rect x="608" y="168" width="204" height="180" rx="8" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1.2"/>
  <text x="710" y="188" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="600">Collections</text>
  <rect x="622" y="198" width="176" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.18"/>
  <text x="710" y="213" text-anchor="middle" fill="#ddd6fe" font-size="10">users</text>
  <rect x="622" y="226" width="176" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.18"/>
  <text x="710" y="241" text-anchor="middle" fill="#ddd6fe" font-size="10">products</text>
  <rect x="622" y="254" width="176" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.18"/>
  <text x="710" y="269" text-anchor="middle" fill="#ddd6fe" font-size="10">orders</text>
  <rect x="622" y="282" width="176" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.18"/>
  <text x="710" y="297" text-anchor="middle" fill="#ddd6fe" font-size="10">carts</text>
  <rect x="622" y="310" width="176" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.18"/>
  <text x="710" y="325" text-anchor="middle" fill="#ddd6fe" font-size="10">reviews</text>

  <!-- Vercel -->
  <rect x="608" y="362" width="204" height="44" rx="8" fill="#0ea5e9" fill-opacity="0.12" stroke="#0ea5e9" stroke-width="1.2"/>
  <text x="710" y="380" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="600">▲ Vercel Hosting</text>
  <text x="710" y="396" text-anchor="middle" fill="#7dd3fc" font-size="10">Static + Serverless Functions</text>

  <!-- ── ARROWS ── -->
  <!-- Client → Backend (REST) -->
  <line x1="192" y1="154" x2="298" y2="154" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="298,150 308,154 298,158" fill="#0ea5e9"/>
  <text x="246" y="148" text-anchor="middle" fill="#7dd3fc" font-size="9">HTTP / REST</text>

  <!-- Client → Backend (Socket) -->
  <line x1="192" y1="305" x2="298" y2="322" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="298,318 308,322 298,326" fill="#f59e0b"/>
  <text x="246" y="308" text-anchor="middle" fill="#fde68a" font-size="9">WebSocket</text>

  <!-- Backend → DB -->
  <line x1="500" y1="154" x2="588" y2="154" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="588,150 598,154 588,158" fill="#10b981"/>
  <text x="544" y="148" text-anchor="middle" fill="#6ee7b7" font-size="9">Mongoose</text>

  <!-- Backend → Vercel -->
  <line x1="500" y1="384" x2="588" y2="384" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
  <polygon points="588,380 598,384 588,388" fill="#64748b"/>

</svg>
```

---

## ER Diagram

```svg
<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, Arial, sans-serif" font-size="12">

  <!-- Background -->
  <rect width="900" height="560" fill="#0f172a" rx="12"/>
  <text x="450" y="32" text-anchor="middle" fill="#94a3b8" font-size="14" font-weight="600" letter-spacing="2">NEXAMART — ENTITY RELATIONSHIP DIAGRAM</text>

  <!-- ── USERS ── -->
  <rect x="30" y="55" width="190" height="220" rx="10" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
  <rect x="30" y="55" width="190" height="34" rx="10" fill="#0ea5e9" fill-opacity="0.25"/>
  <rect x="30" y="79" width="190" height="10" fill="#0ea5e9" fill-opacity="0.25"/>
  <text x="125" y="77" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">USERS</text>
  <line x1="30" y1="89" x2="220" y2="89" stroke="#0ea5e9" stroke-width="1"/>
  <text x="48" y="107" fill="#7dd3fc" font-size="11">🔑 _id (ObjectId, PK)</text>
  <text x="48" y="124" fill="#94a3b8" font-size="11">  name : String</text>
  <text x="48" y="141" fill="#94a3b8" font-size="11">  email : String (unique)</text>
  <text x="48" y="158" fill="#94a3b8" font-size="11">  password : String (hashed)</text>
  <text x="48" y="175" fill="#94a3b8" font-size="11">  role : enum[buyer,seller]</text>
  <text x="48" y="192" fill="#94a3b8" font-size="11">  avatar : String (URL)</text>
  <text x="48" y="209" fill="#94a3b8" font-size="11">  address : String</text>
  <text x="48" y="226" fill="#94a3b8" font-size="11">  createdAt : Date</text>
  <text x="48" y="243" fill="#94a3b8" font-size="11">  updatedAt : Date</text>

  <!-- ── PRODUCTS ── -->
  <rect x="270" y="55" width="200" height="240" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="270" y="55" width="200" height="34" rx="10" fill="#8b5cf6" fill-opacity="0.25"/>
  <rect x="270" y="79" width="200" height="10" fill="#8b5cf6" fill-opacity="0.25"/>
  <text x="370" y="77" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="700">PRODUCTS</text>
  <line x1="270" y1="89" x2="470" y2="89" stroke="#8b5cf6" stroke-width="1"/>
  <text x="288" y="107" fill="#7dd3fc" font-size="11">🔑 _id (ObjectId, PK)</text>
  <text x="288" y="124" fill="#94a3b8" font-size="11">  title : String</text>
  <text x="288" y="141" fill="#94a3b8" font-size="11">  description : String</text>
  <text x="288" y="158" fill="#94a3b8" font-size="11">  price : Number</text>
  <text x="288" y="175" fill="#94a3b8" font-size="11">  category : String</text>
  <text x="288" y="192" fill="#94a3b8" font-size="11">  images : [String]</text>
  <text x="288" y="209" fill="#94a3b8" font-size="11">  stock : Number</text>
  <text x="288" y="226" fill="#94a3b8" font-size="11">  rating : Number</text>
  <text x="288" y="243" fill="#7dd3fc" font-size="11">  🔗 sellerId → USERS</text>
  <text x="288" y="260" fill="#94a3b8" font-size="11">  createdAt : Date</text>
  <text x="288" y="277" fill="#94a3b8" font-size="11">  updatedAt : Date</text>

  <!-- ── ORDERS ── -->
  <rect x="530" y="55" width="200" height="240" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <rect x="530" y="55" width="200" height="34" rx="10" fill="#f59e0b" fill-opacity="0.25"/>
  <rect x="530" y="79" width="200" height="10" fill="#f59e0b" fill-opacity="0.25"/>
  <text x="630" y="77" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="700">ORDERS</text>
  <line x1="530" y1="89" x2="730" y2="89" stroke="#f59e0b" stroke-width="1"/>
  <text x="548" y="107" fill="#7dd3fc" font-size="11">🔑 _id (ObjectId, PK)</text>
  <text x="548" y="124" fill="#7dd3fc" font-size="11">  🔗 userId → USERS</text>
  <text x="548" y="141" fill="#94a3b8" font-size="11">  items : [OrderItem]</text>
  <text x="548" y="158" fill="#94a3b8" font-size="11">    ↳ productId, qty, price</text>
  <text x="548" y="175" fill="#94a3b8" font-size="11">  totalAmount : Number</text>
  <text x="548" y="192" fill="#94a3b8" font-size="11">  status : enum</text>
  <text x="548" y="209" fill="#94a3b8" font-size="11">    pending·shipped·delivered</text>
  <text x="548" y="226" fill="#94a3b8" font-size="11">  shippingAddress : String</text>
  <text x="548" y="243" fill="#94a3b8" font-size="11">  paymentMethod : String</text>
  <text x="548" y="260" fill="#94a3b8" font-size="11">  createdAt : Date</text>

  <!-- ── CARTS ── -->
  <rect x="30" y="320" width="190" height="180" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <rect x="30" y="320" width="190" height="34" rx="10" fill="#10b981" fill-opacity="0.25"/>
  <rect x="30" y="344" width="190" height="10" fill="#10b981" fill-opacity="0.25"/>
  <text x="125" y="342" text-anchor="middle" fill="#34d399" font-size="13" font-weight="700">CARTS</text>
  <line x1="30" y1="354" x2="220" y2="354" stroke="#10b981" stroke-width="1"/>
  <text x="48" y="372" fill="#7dd3fc" font-size="11">🔑 _id (ObjectId, PK)</text>
  <text x="48" y="389" fill="#7dd3fc" font-size="11">  🔗 userId → USERS</text>
  <text x="48" y="406" fill="#94a3b8" font-size="11">  items : [CartItem]</text>
  <text x="48" y="423" fill="#94a3b8" font-size="11">    ↳ productId, quantity</text>
  <text x="48" y="440" fill="#94a3b8" font-size="11">  updatedAt : Date</text>

  <!-- ── REVIEWS ── -->
  <rect x="270" y="340" width="200" height="180" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
  <rect x="270" y="340" width="200" height="34" rx="10" fill="#ec4899" fill-opacity="0.25"/>
  <rect x="270" y="364" width="200" height="10" fill="#ec4899" fill-opacity="0.25"/>
  <text x="370" y="362" text-anchor="middle" fill="#f472b6" font-size="13" font-weight="700">REVIEWS</text>
  <line x1="270" y1="374" x2="470" y2="374" stroke="#ec4899" stroke-width="1"/>
  <text x="288" y="392" fill="#7dd3fc" font-size="11">🔑 _id (ObjectId, PK)</text>
  <text x="288" y="409" fill="#7dd3fc" font-size="11">  🔗 userId → USERS</text>
  <text x="288" y="426" fill="#7dd3fc" font-size="11">  🔗 productId → PRODUCTS</text>
  <text x="288" y="443" fill="#94a3b8" font-size="11">  rating : Number (1-5)</text>
  <text x="288" y="460" fill="#94a3b8" font-size="11">  comment : String</text>
  <text x="288" y="477" fill="#94a3b8" font-size="11">  createdAt : Date</text>

  <!-- ── NOTIFICATIONS ── -->
  <rect x="530" y="340" width="200" height="160" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <rect x="530" y="340" width="200" height="34" rx="10" fill="#64748b" fill-opacity="0.3"/>
  <rect x="530" y="364" width="200" height="10" fill="#64748b" fill-opacity="0.3"/>
  <text x="630" y="362" text-anchor="middle" fill="#cbd5e1" font-size="13" font-weight="700">NOTIFICATIONS</text>
  <line x1="530" y1="374" x2="730" y2="374" stroke="#64748b" stroke-width="1"/>
  <text x="548" y="392" fill="#7dd3fc" font-size="11">🔑 _id (ObjectId, PK)</text>
  <text x="548" y="409" fill="#7dd3fc" font-size="11">  🔗 userId → USERS</text>
  <text x="548" y="426" fill="#94a3b8" font-size="11">  message : String</text>
  <text x="548" y="443" fill="#94a3b8" font-size="11">  isRead : Boolean</text>
  <text x="548" y="460" fill="#94a3b8" font-size="11">  createdAt : Date</text>

  <!-- ── RELATIONSHIP LINES ── -->
  <!-- Users → Products (1:N) -->
  <line x1="220" y1="175" x2="270" y2="175" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="245" y="170" text-anchor="middle" fill="#8b5cf6" font-size="10">1:N</text>

  <!-- Users → Orders (1:N) -->
  <line x1="125" y1="275" x2="125" y2="310" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="125" y1="310" x2="630" y2="310" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="630" y1="310" x2="630" y2="295" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="378" y="305" text-anchor="middle" fill="#f59e0b" font-size="10">1:N</text>

  <!-- Users → Carts (1:1) -->
  <line x1="125" y1="275" x2="125" y2="320" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="140" y="305" fill="#10b981" font-size="10">1:1</text>

  <!-- Users → Reviews (1:N) -->
  <line x1="220" y1="420" x2="270" y2="420" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="245" y="415" text-anchor="middle" fill="#ec4899" font-size="10">1:N</text>

  <!-- Products → Reviews (1:N) -->
  <line x1="370" y1="295" x2="370" y2="340" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="385" y="325" fill="#ec4899" font-size="10">1:N</text>

  <!-- Users → Notifications (1:N) -->
  <line x1="220" y1="200" x2="750" y2="200" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="750" y1="200" x2="750" y2="340" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="690" y="195" fill="#64748b" font-size="10">1:N</text>

  <!-- Orders → Products (N:M embedded) -->
  <line x1="530" y1="175" x2="470" y2="175" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="500" y="170" text-anchor="middle" fill="#f59e0b" font-size="10">N:M</text>

  <!-- Legend -->
  <rect x="770" y="55" width="115" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="827" y="74" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="700">LEGEND</text>
  <line x1="782" y1="86" x2="800" y2="86" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="806" y="89" fill="#94a3b8" font-size="9">Primary Key</text>
  <line x1="782" y1="100" x2="800" y2="100" stroke="#7dd3fc" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="806" y="103" fill="#94a3b8" font-size="9">Foreign Key ref</text>
  <line x1="782" y1="114" x2="800" y2="114" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="5,3"/>
  <text x="806" y="117" fill="#94a3b8" font-size="9">Relationship</text>
  <text x="782" y="132" fill="#94a3b8" font-size="9">1:N  one-to-many</text>
  <text x="782" y="147" fill="#94a3b8" font-size="9">N:M  many-to-many</text>

</svg>
```

---

## Project Structure

```
Nexamart/
├── frontend/               # React + Vite SPA
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   ├── context/        # Auth & cart context
│   │   ├── services/       # Axios API calls
│   │   └── main.jsx
│   └── package.json
│
├── backend/                # Node.js + Express REST API
│   ├── routes/             # API route handlers
│   ├── models/             # Mongoose schemas
│   ├── middleware/         # Auth, error handling
│   ├── controllers/        # Business logic
│   └── server.js           # Entry point
│
├── socket/                 # Socket.IO server
│   └── index.js            # WebSocket event handlers
│
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

The frontend will be available at `http://localhost:5173`, backend at `http://localhost:5000`, and the socket service at `http://localhost:5001`.

---

## Environment Variables

Create `.env` files in each service:

**`backend/.env`**
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/nexamart
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
SOCKET_URL=http://localhost:5001
```

**`frontend/.env`**
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5001
```

**`socket/.env`**
```env
PORT=5001
CLIENT_URL=http://localhost:5173
```

---

## Deployment

This project is configured for **Vercel** deployment via `vercel.json`:

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

## Contributing

Pull requests are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">Made with ❤️ by <a href="https://github.com/MemonaAmirAbdulHaq">MemonaAmirAbdulHaq</a></p>
