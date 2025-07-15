const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');
const db = require('./models');
const authRoutes = require('./routes/auth.routes');
const logRoutes = require('./routes/log.routes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/logs', logRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

db.sequelize.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
