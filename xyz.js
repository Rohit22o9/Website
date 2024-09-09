document.getElementById("submitbtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    document.getElementById("nameErr").innerText = "";

   
    const name = document.getElementById("Name").value.trim();
    const username = document.querySelector("input[name='username']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const phone = document.querySelector("input[name='phone']").value.trim();
    const password = document.querySelector("input[name='password']").value.trim();
    const confirmPassword = document.querySelectorAll("input[name='password']")[1].value.trim();
    const gender = document.querySelector("input[name='gender']:checked");

   
    if (name === "") {
        document.getElementById("nameErr").innerText = "Full Name is required";
        return false;
    }

    
    if (username === "") {
        alert("Username is required");
        return false;
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    if (password === "") {
        alert("Password is required");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    if (!gender) {
        alert("Please select a gender");
        return false;
    }

    alert("Registration successful!");
    document.querySelector("form").submit();
});
