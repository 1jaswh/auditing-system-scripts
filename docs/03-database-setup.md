# 🗄️ Database Setup

## ✅ Create the Database

```sql
CREATE DATABASE audit_system;
```

## ✅ Create Tables

Run your schema.sql or ORM migrations.

## ✅ Insert a Test User

```sql
INSERT INTO users (username, password)
VALUES ('admin', crypt('admin123', gen_salt('bf')));
```