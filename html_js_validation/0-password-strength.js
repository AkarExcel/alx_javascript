// Get references to the form and error message elements
const passwordForm = document.getElementById('passwordForm');
const errorElement = document.getElementById('error');

// Attach an event listener to the form's submit event
passwordForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the password input value
  const password = document.getElementById('password').value;

  // Validate the password and set error messages
  const errors = validatePassword(password);

  if (errors.length === 0) {
    // If there are no errors, clear any previous error message
    errorElement.textContent = '';
    // Allow the form submission
    passwordForm.submit();
  } else {
    // If there are errors, display them as a list
    errorElement.innerHTML = `<ul>${errors.map((error) => `<li>${error}</li>`).join('')}</ul>`;
  }
});

// Function to validate the password based on the criteria and return error messages
function validatePassword(password) {
  const errors = [];

  // Define regular expressions for each criteria
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*]/;

  // Check each criteria and add error messages if unmet
  if (!lengthRegex.test(password)) {
    errors.push('Password must be at least 8 characters long.');
  }
  if (!uppercaseRegex.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }
  if (!lowercaseRegex.test(password)) {
    errors.push('Password must contain at least one lowercase letter.');
  }
  if (!digitRegex.test(password)) {
    errors.push('Password must contain at least one numeric digit.');
  }
  if (!specialCharRegex.test(password)) {
    errors.push('Password must contain at least one special character (!@#$%^&*).');
  }

  return errors;
}
