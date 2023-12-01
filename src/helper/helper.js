const bcrypt = require("bcrypt");

// Function to hash a password
exports.hashPassword = (password) => {
    
    return bcrypt.hash(password, 10);
}

// Function to compare a password with its hashed version
exports.matchPassword = (password, encryptedPassword) => {
    
    return bcrypt.compare(password, encryptedPassword);
}
