document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
      errorMessage.textContent = "Please enter a valid email address";
      errorMessage.style.visibility = "visible";
      emailInput.style.borderColor = "hsl(0, 93%, 68%)";
    } else {
      errorMessage.textContent = "";
      errorMessage.style.visibility = "hidden";
      emailInput.style.borderColor = "hsl(0, 36%, 70%)";

      alert("Thank you! You have been subscribed.");
      emailInput.value = "";
    }
  });
