import axios from 'axios';

async function login(email: string, password: string) {
  try {
    const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
      email,
      password,
    });
    console.log("API response " , response)
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
}

export default login;
