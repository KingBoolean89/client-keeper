const express = require('express');
const connectDB = require('./config/db')
const app = express();

app.get('/', (req, res) => res.json({msg: "Let's get started"}))

//Port Setup for server
const PORT = process.env.PORT || 5000;

//Connect Database
connectDB();

//Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/clients', require('./routes/clients'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));