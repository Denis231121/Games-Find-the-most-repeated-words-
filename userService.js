exports.getUserProfile = function(username, res) {
    // Fetch user profile from the database
    res.send(`Profile page for ${username}`);
};
