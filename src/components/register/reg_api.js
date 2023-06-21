import axios from 'axios';

export const register = async (FormData) => {
  try {
    const response = await axios.post('https://nodeserver8.onrender.com/api/register', { 
      FormData
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
