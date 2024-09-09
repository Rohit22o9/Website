document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("Password").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password === "") {
        alert("Password is required");
        return false;
    }

    alert("Sign In successful!");
});
