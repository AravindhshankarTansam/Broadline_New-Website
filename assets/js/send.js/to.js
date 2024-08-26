
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Encryption key (Keep this secret!)
        const encryptionKey = "your-secret-key"; // Replace with your own secret key

        // Encrypt data
        const encryptedName = CryptoJS.AES.encrypt(name, encryptionKey).toString();
        const encryptedEmail = CryptoJS.AES.encrypt(email, encryptionKey).toString();
        const encryptedMessage = CryptoJS.AES.encrypt(message, encryptionKey).toString();

        // Log encrypted details to the console
        console.log("Encrypted Name: ", encryptedName);
        console.log("Encrypted Email: ", encryptedEmail);
        console.log("Encrypted Message: ", encryptedMessage);

        // Send the encrypted email using SMTP.js and Hostinger's SMTP server
        Email.send({
            Host: "smtp.hostinger.com",
            Username: "aravindhtansam@gmail.com", // Replace with your email
            Password: "Raj05@raM98",   // Replace with your email password
            To: 'recipient-email@domain.com',  // Replace with the recipient's email
            From: email,
            Subject: `New message from ${name}`,
            Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
        })
        .then(function(message) {
            alert('Message Sent Successfully!');
        })
        .catch(function(error) {
            alert('Failed to Send Message: ' + error);
        });
    });

    function generateEncryptionKey(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let key = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            key += charset[randomIndex];
        }
        return key;
    }
    
    const encryptionKey = generateEncryptionKey(32); // 256-bit key
    console.log("Encryption Key: ", encryptionKey);
    