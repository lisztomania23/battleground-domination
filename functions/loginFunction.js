// functions/loginFunction.js

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const { username, password } = data;

    // For testing purposes, always consider the login as successful
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Login successful', username }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
