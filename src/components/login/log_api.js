import axios from 'axios';

export const login = async (FormData) => {
  try {
    const response = await axios.post('https://nodeserv-production.up.railway.app/stud', {
      FormData,
      headers: {
          "Content-Type": "application/json"
      },
    });
    // Handle the response data
    return response.data;
  } catch (error) {
    // Handle the error
    throw error.response.data;
  }
};

