// functions/loginFunction.js

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    const { username, password } = data;

    // For testing purposes, consider the login as successful if username and password are present
    if (username && password) {
      console.log('Login successful for:', username);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Login successful', username }),
      };
    } else {
      console.error('Login failed: Invalid credentials');
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Login failed: Invalid credentials' }),
      };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
