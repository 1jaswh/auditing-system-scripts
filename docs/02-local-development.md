# ⚙️ Step 2: Run the Project Locally

This section walks you through running both the **backend** and **frontend** of the auditing system on your local machine.

---

## ✅ Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create a `.env` file from example:

```bash
cp .env.example .env
```

3. Edit `.env` file and update your PostgreSQL DB connection settings:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_password
DB_NAME=audit_system
```

4. Install dependencies:

```bash
npm install
```

5. Start backend:

```bash
npm run dev
```

> ✅ Your backend should now be running at `http://localhost:5000`

---

## ✅ Frontend Setup

1. Open new terminal tab or window

2. Navigate to frontend:

```bash
cd frontend
```

3. Install frontend packages:

```bash
npm install
```

4. Run frontend server:

```bash
npm run dev
```

> 🌐 Visit `http://localhost:5173` in your browser to view the app