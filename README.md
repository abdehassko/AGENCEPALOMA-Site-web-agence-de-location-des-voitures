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

npm run dev

---

### 🔗 API Connection

The React frontend communicates with the Laravel backend using REST APIs.

Make sure the API base URL is correctly configured in your React project (example):
const API_URL = "http://127.0.0.1:8000/api";

---


### 🔐 Environment Variables

.env files are not included for security reasons.

Use .env.example to configure your environment.

---

### 🖼️ Screenshots
![Captures](https://github.com/user-attachments/assets/75e42a8c-196e-40f7-afd5-574dd6056509)
![Captsure](https://github.com/user-attachments/assets/d7e9d22a-378b-4f25-b876-fa0d34b855f8)
![Captusssre](https://github.com/user-attachments/assets/bafbe3d7-d0ae-4192-92df-5642f96ddf77)
![Captssure](https://github.com/user-attachments/assets/05d28949-02fb-4b34-be88-e5750bfd9d4e)
![Captuttre](https://github.com/user-attachments/assets/1e641f25-132c-4907-a2d7-3a64fbf68f3e)
![Captusre](https://github.com/user-attachments/assets/83e515bb-213b-45e8-8316-879a0db884c3)
![aCaptusre](https://github.com/user-attachments/assets/67c26818-3ad4-4c84-980a-fd52059480fc)

---

### 🚀 Future Improvements

Authentication (Admin / User)

Online payment integration

Admin dashboard

Multi-language support


## 🧑‍💻 Author

**Abderrahim Elhasskouri**
Digital Development Student – OFPPT

---

⭐ If you like this project, feel free to star the repository!

