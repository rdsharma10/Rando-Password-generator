
// Function to generate a random password
// Parameters:
// - length: Number of characters in the password (default is 12)
// - options: Object to specify character types (uppercase, lowercase, numbers, symbols)
function generatePassword(length = 12, options = { uppercase: true, lowercase: true, numbers: true, symbols: true }) {
    // Define character sets
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?/';
    
    let allChars = ''; // String containing all selected character types
    let password = ''; // Generated password
    
    // Append selected character sets to allChars
    if (options.uppercase) allChars += upperCaseChars;
    if (options.lowercase) allChars += lowerCaseChars;
    if (options.numbers) allChars += numberChars;
    if (options.symbols) allChars += symbolChars;
    
    // Ensure at least one character type is selected
    if (allChars.length === 0) {
        throw new Error('At least one character type must be selected.');
    }
    
    // Generate password of given length
    for (let i = 0; i < length; i++) {
        // Select a random character from allChars and add it to the password
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    return password; // Return the generated password
}

// Example usage
// Generate a password with 16 characters including all types
console.log(generatePassword(16, { uppercase: true, lowercase: true, numbers: true, symbols: true }));
