// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Submitting login with:', { username, password });

    try {
      const response = await fetch('/.netlify/functions/loginFunction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      console.log('Login result:', result);

      if (response.ok) {
        // Redirect to the home page
        console.log('Redirecting to home page...');
        window.location.href = 'home/home.html';
      } else {
        // Handle login failure (e.g., show an error message)
        console.error('Login failed:', result.message);
        // Optionally, display an error message on the page
        const errorElement = document.getElementById('login-error');
        errorElement.textContent = 'Login failed. Please check your credentials.';
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Optionally, display an error message on the page
      const errorElement = document.getElementById('login-error');
      errorElement.textContent = 'An unexpected error occurred. Please try again later.';
    }
  });
});
