import axios from 'axios';

export const profile = async (FormData, id) => {
  try {
    const response = await axios.put(`https://nodeserver8.onrender.com/api/update_user/${id}`, { 
      FormData
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
