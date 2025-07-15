# 🚀 Step 4: Deployment Guide

This guide helps you deploy the app either manually (VPS/Cloud) or using Docker.

---

## ✅ Manual Deployment (VPS or Cloud VM)

### Backend

1. Copy the `backend/` folder to your server
2. SSH into the server
3. Set up `.env` file for production DB credentials
4. Run:

```bash
cd backend
npm install
npm run start
```

### Frontend

1. Copy `frontend/` folder
2. Build for production:

```bash
npm run build
```

3. Serve using Nginx or use `serve` package:

```bash
npm install -g serve
serve -s dist
```

---

## ✅ Docker Deployment (Recommended)

Coming soon: a full `docker-compose.yml` that launches:

- Node.js backend
- React frontend
- PostgreSQL database
- PGAdmin (optional)