# 🚀 Deployment Guide

## ✅ Manual Deployment

1. Install Node.js and PostgreSQL on server
2. Copy frontend and backend folders
3. Run backend:
```bash
cd backend && npm install && npm run start
```
4. Build frontend:
```bash
cd frontend && npm run build && serve -s dist
```

## ✅ Docker Deployment

_Use docker-compose to run backend, frontend, and database together._