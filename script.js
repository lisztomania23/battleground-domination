// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/.netlify/functions/loginFunction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // Redirect to the home page
        window.location.href = '/home.html';
      } else {
        // Handle login failure (e.g., show an error message)
        console.error('Login failed:', result.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  });
});
