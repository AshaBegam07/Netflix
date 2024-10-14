document.getElementById('emailForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('error-message');
  
    if (!validateEmail(emailInput.value)) {
      event.preventDefault(); // Prevent form submission
      errorMessage.style.display = 'block'; // Show error message
    } else {
      errorMessage.style.display = 'none'; // Hide error message if valid
    }
  });