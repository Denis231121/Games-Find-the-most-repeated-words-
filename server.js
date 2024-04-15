const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./modules/auth/authController');
const userRoutes = require('./modules/users/userController');
const subscriptionRoutes = require('./modules/subscriptions/subscriptionController');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/subscriptions', subscriptionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
