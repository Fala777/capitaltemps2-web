/* ========================================
   LOGIN / LOGOUT FUNCTIONALITY
   ======================================== */

// Global function to update UI after login
function updateUIAfterLogin(username) {
    const navLoginLink = document.getElementById('nav-login-link');
    const userMenu = document.getElementById('user-menu');
    const userMenuButton = document.getElementById('user-menu-button');

    // Hide login link
    if (navLoginLink) {
        navLoginLink.style.display = 'none';
    }

    // Show user menu
    if (userMenu) {
        userMenu.style.display = 'flex';
        if (userMenuButton) {
            userMenuButton.textContent = username;
        }
    }

    // Hide the login form if on login page
    const loginSection = document.getElementById('login-section');
    if (loginSection) {
        loginSection.style.display = 'none';
    }

    // Hide the register form if on register page
    const registerSection = document.getElementById('register-section');
    if (registerSection) {
        registerSection.style.display = 'none';
    }
}

// Global function for logout
function logout() {
    const navLoginLink = document.getElementById('nav-login-link');
    const userMenu = document.getElementById('user-menu');
    const userDropdown = document.getElementById('user-dropdown');

    // Clear localStorage
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('userEmail');

    // Update UI
    if (navLoginLink) {
        navLoginLink.style.display = '';
    }

    if (userMenu) {
        userMenu.style.display = 'none';
    }

    // Show login form again
    const loginSection = document.getElementById('login-section');
    if (loginSection) {
        loginSection.style.display = '';
    }

    // Show register form again
    const registerSection = document.getElementById('register-section');
    if (registerSection) {
        registerSection.style.display = '';
    }

    // Close dropdown
    if (userDropdown) {
        userDropdown.style.display = 'none';
    }

    // Redirect to home
    window.location.href = '../index.html';
}

async function loginUser(email, password) {
    const loginData = {
        email: email, // This matches your LoginRequest.java field name
        password: password
    };

    try {
        const response = await fetch('http://localhost:8082/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const result = await response.json();

        if (response.status === 200) {
            console.log("Approval:", result.message);
            console.log("Data Received:", result.payload); // Here are your capitals!
            
            // Extract username (everything before @)
            const username = email.split('@')[0];
            
            // Store in localStorage
            localStorage.setItem('loggedInUser', username);
            localStorage.setItem('userEmail', email);
            
            // Update UI
            updateUIAfterLogin(username);
            
            // Redirect to home page
            window.location.href = '../index.html';
        } else {
            console.error("Denial:", result.message);
            alert("Login Failed: " + result.message);
        }
    } catch (error) {
        console.error("Connection Error:", error);
        alert("Connection Error: " + error.message);
    }
}

async function registerUser(email, password, confirmPassword) {
    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwörter stimmen nicht überein");
        return;
    }

    // Extract username from email (part before @)
    const username = email.split('@')[0];

    const registerData = {
        username: username,
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:8082/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
            console.log("Registration Successful:", result.message);
            alert("Registrierung erfolgreich! Sie können sich jetzt anmelden.");
            
            // Redirect to login page
            window.location.href = 'login.html';
        } else {
            console.error("Registration Failed:", result.message);
            alert("Registrierung fehlgeschlagen: " + result.message);
        }
    } catch (error) {
        console.error("Connection Error:", error);
        alert("Verbindungsfehler: " + error.message);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const navLoginLink = document.getElementById('nav-login-link');
    const userMenu = document.getElementById('user-menu');
    const userMenuButton = document.getElementById('user-menu-button');
    const userDropdown = document.getElementById('user-dropdown');
    const disconnectButton = document.getElementById('disconnect-button');
    const passwordInput = document.getElementById('password');

    // Check if user is already logged in
    checkUserSession();

    // Handle form submission (both login and registration)
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if this is a registration form or login form
            const registerEmail = document.getElementById('register-email');
            const registerPassword = document.getElementById('register-password');
            const registerConfirmPassword = document.getElementById('register-confirm-password');
            
            if (registerEmail) {
                // Registration form
                const email = registerEmail.value;
                const password = registerPassword.value;
                const confirmPassword = registerConfirmPassword.value;
                
                if (!email || !password || !confirmPassword) {
                    alert('Bitte alle Felder ausfüllen');
                    return;
                }

                // Call registration function with server connection
                registerUser(email, password, confirmPassword);
            } else {
                // Login form
                const email = emailInput.value;
                const password = passwordInput.value;
                
                if (!email || !password) {
                    alert('Bitte E-Mail und Passwort eingeben');
                    return;
                }

                // Call login function with server connection
                loginUser(email, password);
            }
            
            // Clear form
            loginForm.reset();
        });
    }

    // Toggle user dropdown menu
    if (userMenuButton) {
        userMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (userDropdown.style.display === 'block') {
                userDropdown.style.display = 'none';
            } else {
                userDropdown.style.display = 'block';
            }
        });
    }

    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        if (userDropdown) {
            userDropdown.style.display = 'none';
        }
    });

    // Handle disconnect
    if (disconnectButton) {
        disconnectButton.addEventListener('click', function() {
            logout();
        });
    }

    function checkUserSession() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            updateUIAfterLogin(loggedInUser);
        }
    }
});


