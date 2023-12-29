// functions/loginFunction.js

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const { username, password } = data;

    // For testing purposes, consider the login as successful if username and password are present
    if (username && password) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Login successful', username }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Login failed' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
