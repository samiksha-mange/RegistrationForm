function validateForm() {
  const email = document.getElementById("email").value;
  const firstName = document.getElementById("first-name").value;
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("re-password").value;

  if (!email || !firstName || !password || !rePassword) {
    alert("Please fill in all required fields.");
    return;
  }

  if (password !== rePassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Thank you for submitting the form!");

  document.querySelector("form").reset();
}
