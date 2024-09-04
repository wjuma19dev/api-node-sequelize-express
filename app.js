const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config({ path: `${process.cwd()}/.env` });

const app = express();
const port = process.env.PORT || 4000;

// All routes
const authRoutes = require('./route/authRoute');

// Error Handler
const { handlerError } = require('./middlewares/handlerError');

// Uses
app.use(express.json());

app.get('/', (req, res, next) => {
	res.json({ status: 'success', message: 'Wooohoo! REST APIs are working' });
});

// All routes
app.use('/api/v1/auth', authRoutes);

// Route not found
app.use('*', (req, res, next) => {
	res.status(404).json({
		status: 'fail',
		message: 'Route not found',
	});
});

// Handler error
app.use(handlerError);

// Server up
app.listen(port, console.log(`Servidor corriendo en pueto ${port}`.underline));
