const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/admin', require('./routes/api/admin'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/order', require('./routes/api/order'));
app.use('/api/wishlist', require('./routes/api/wishlist'));
app.use('/api/brands', require('./routes/api/brands'));
app.use('/api/filter', require('./routes/api/filter'));
app.use('/api/size', require('./routes/api/size'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
