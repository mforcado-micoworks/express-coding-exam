const express = require('express');
const app = express();
const PORT = 3001;

// 1. Create a middleware function that logs the request method and URL to the console for every incoming request

// Dummy user data
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

// 2. Create three endpoints:
//     2.1. GET endpoint at /api/users that returns a JSON response with a list of users
//     2.2. POST endpoint at /api/users that accepts JSON data with the keys name and email and adds a new user to the list of users.
//     2.3. DELETE endpoint at /api/users/:id that deletes the user with the specified ID from the list of users.
//     2.4 Ensure that the POST endpoint validates that both name and email are provided in the request body. If either is missing, return a 400 Bad Request status with an appropriate error message.


// 3. BONUS: Create a PUT endpoint at /api/users/:id that updates the user with the specified ID. The endpoint should accept JSON data with the keys name and email and update the corresponding user's information.

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});