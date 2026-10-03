
        const form = document.getElementById("registrationForm");

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const message = document.getElementById("message");

            // Check if passwords match
            if (password !== confirmPassword) {
                message.textContent = "Passwords do not match!";
                message.style.color = "red";
                return;
            }

            // Check password length
            if (password.length < 6) {
                message.textContent = "Password must be at least 6 characters!";
                message.style.color = "red";
                return;
            }

            // Successful registration
            message.textContent = "Registration successful!";
            message.style.color = "green";

            console.log("Name:", name);
            console.log("Email:", email);
        });