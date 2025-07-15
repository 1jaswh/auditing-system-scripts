# 🗄️ Step 3: Setting Up PostgreSQL

Follow these steps to create the database and users table manually or using a GUI tool.

---

## ✅ Create the Database

1. Login to PostgreSQL:

```bash
psql -U postgres
```

2. Create database:

```sql
CREATE DATABASE audit_system;
```

3. Connect to the new DB:

```sql
\c audit_system
```

---

## ✅ Create `users` Table (if not using ORM)

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ✅ Insert a Test User

If using bcrypt-hashed password (recommended):

```sql
INSERT INTO users (username, password)
VALUES ('admin', crypt('admin123', gen_salt('bf')));
```

If hashing not yet setup, use plain text:

```sql
INSERT INTO users (username, password)
VALUES ('admin', 'admin123');
```

Now you can log in from the frontend using this test user.