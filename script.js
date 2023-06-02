var btn = document.getElementById("btn");
var email = document.getElementById("text")
var inputcon = document.getElementById("inputcontainer")
var thanks = document.getElementById("thanks")
btn.addEventListener("click", function() {
    if (email.value === "") {
        showError(email, " email is required")
        btn.style.transform = "translateX(50px)"
        inputcon.style.borderColor = "red"
            // inputcon.style.overflow = "visible"
        thanks.style.color = "red"

    } else if (!validateEmail(email.value)) {
        showError(email, "please provide a valid email address")
        btn.style.transform = "translateX(50px)"
        inputcon.style.borderColor = "red"
            // inputcon.style.overflow = "visible"
        thanks.style.color = "red"
            // thanks.innerText = ""
    } else {

        // thanks.innerText = ""
        btn.style.transform = "translateX(0)"
            // thanks.innerText = "Thank you"
        thanks.style.color = "hsl(0, 74%, 74%)"
        inputcon.style.borderColor = "hsl(0, 74%, 74%)"
        showSuccess(email, "Thank You")


    }

    function showError(input, message) {
        thanks.innerText = message;
    }

    function showSuccess(input, message) {
        thanks.innerText = message;
    }


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);

    }
})