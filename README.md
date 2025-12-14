# 🚗 Car Rental Agency Website

A full-stack **Car Rental Agency Website** built with **Laravel** as the backend and **React** as the frontend.  
The React application is located **inside the Laravel project** under the `/client` directory.

This project allows users to check car availability, view cars and prices, locate agencies, and contact the company for reservations or information.

---

## 📁 Project Structure
app/
bootstrap/
client/ # React application
config/
database/
public/
resources/
routes/
storage/


---

## 📌 Pages & Features

### 🏠 Home
- Welcome page
- Check car availability

### 🚘 Cars
- View all cars
- Car photos
- Descriptions and detailed information

### 💰 Prices
- Display rental prices for each car

### 📍 Localisation
- View different car rental agency locations

### 📩 Contact
- Send messages
- Request information
---

## 🛠️ Technologies Used

### Backend
- **Laravel**
- **PHP**
- **MySQL**
- **REST API**

### Frontend
- **React**
- **Bootstrap**
- **Axios**
- **React Router DOM**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

bash
git clone https://github.com/abdehassko/AGENCEPALOMA-Site-web-agence-de-location-des-voitures.git
cd car-rental-agency
### 🔧 Backend Setup (Laravel)
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
🔸 Configure your database in the .env file before running migrations.
### 🎨 Frontend Setup (React)
cd client
npm install
npm install bootstrap axios react-router-dom
Start the React development server:
npm run dev
##🔗 API Connection

The React frontend communicates with the Laravel backend using REST APIs.

Make sure the API base URL is correctly configured in your React project (example):
const API_URL = "http://127.0.0.1:8000/api";
##🔐 Environment Variables

.env files are not included for security reasons.

Use .env.example to configure your environment.

##🖼️ Screenshots

##🚀 Future Improvements

Authentication (Admin / User)

Online payment integration

Admin dashboard

Advanced search and filtering

Multi-language support

