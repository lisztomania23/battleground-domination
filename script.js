// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/.netlify/functions/loginFunction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const result = await response.json();
      console.log(result);

      // Handle the result accordingly (e.g., show a success or error message)
    } catch (error) {
      console.error('Error during login:', error);
    }
  });
});
