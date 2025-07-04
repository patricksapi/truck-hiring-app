
# 🚚 Truck Hiring App (Full Stack Microservices + React Native)

This is a full-stack mobile truck hiring platform — think **Uber for Logistics** — built using:

- 8 Dockerized backend microservices (Node.js + Express)
- Mobile frontend with two React Native apps (Driver and Customer)
- Real-time tracking via Socket.IO
- Event-driven messaging via RabbitMQ

---

## 📦 Services

| Service              | Port  | DB         |
|----------------------|-------|------------|
| Auth Service         | 3001  | PostgreSQL |
| Driver Service       | 3002  | MongoDB    |
| Vehicle Service      | 3003  | MongoDB    |
| Tracking Service     | 3004  | Socket.IO  |
| Booking Service      | 3005  | RabbitMQ   |
| Payment Service      | 3006  | PostgreSQL |
| Notification Service | 3007  | RabbitMQ   |
| Rating Service       | 3008  | PostgreSQL |

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express, MongoDB, PostgreSQL, RabbitMQ
- **Frontend:** React Native (Expo), Axios, Redux (optional)
- **Real-time:** Socket.IO for tracking driver location
- **Messaging:** RabbitMQ for event-based coordination
- **Deployment-ready:** Docker & Docker Compose

---

## 🛠️ Setup

```bash
git clone https://github.com/YOUR_USERNAME/truck-hiring-app.git
cd truck-hiring-app
docker-compose up --build
```

- Mobile apps (`frontend/customer-app` and `frontend/driver-app`) can be run with `npm start` using Expo

---

## 🚀 Future Improvements

- Add payment gateway integration (e.g. Stripe)
- Secure services with OAuth/JWT middleware
- Add CI/CD via GitHub Actions
- Map visualization via Leaflet/Mapbox

---

## 📄 License

MIT — Free to use and modify for commercial or personal projects.
