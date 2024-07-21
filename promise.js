
// Fetch user data with a valid ID
getUserData(1)
    .then(user => {
        console.log('User data:', user); // Log user data when promise resolves
    })
    .catch(error => {
        console.error('Error:', error.message); // Log error when promise rejects
    });

// Fetch user data with an invalid ID
getUserData(3)
    .then(user => {
        console.log('User data:', user); // Log user data when promise resolves
    })
    .catch(error => {
        console.error('Error:', error.message); // Log error when promise rejects
    });



// Create a promise
// Function to simulate fetching user data
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulated user database
        const users = {
            1: { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
            2: { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
        };

        // Simulate a delay for fetching data
        setTimeout(() => {
            const user = users[userId];
            if (user) {
                resolve(user); // Resolve with user data if found
            } else {
                reject(new Error('User not found')); // Reject with error if not found
            }
        }, 1000); // Simulated delay of 1 second
    });
}

//Consume the promise

// Fetch user data with a valid ID
getUserData(1).then(user => {console.log('User data:', user); // Log user data when promise resolves
    })
    .catch(error => {
        console.error('Error:', error.message); // Log error when promise rejects
    });

// Fetch user data with an invalid ID
getUserData(3)
    .then(user => {
        console.log('User data:', user); // Log user data when promise resolves
    })
    .catch(error => {
        console.error('Error:', error.message); // Log error when promise rejects
    });

