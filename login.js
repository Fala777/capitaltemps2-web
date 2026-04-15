async function loginUser(email, password) {
    const loginData = {
        username: email, // This matches your LoginRequest.java field name
        password: password
    };

    try {
        const response = await fetch('http://localhost:8080/api/login', {
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
            // Redirect user or show data on site
        } else {
            console.error("Denial:", result.message);
            alert("Login Failed: " + result.message);
        }
    } catch (error) {
        console.error("Connection Error:", error);
    }
}