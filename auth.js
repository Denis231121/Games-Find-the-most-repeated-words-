app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Authentication logic here
    console.log('Login attempt with:', username);
    req.session.user = username;  // Set username in session
    res.redirect('/profile');
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Registration logic here
    console.log('Registering:', username, email);
    res.redirect('/login');
});

app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Unauthorized');
    }
    res.send(`Welcome to your profile, ${req.session.user}`);
});
