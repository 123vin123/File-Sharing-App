import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';
export const uploadFile = async  (data) => {
    try {
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API', error.message);
    }
    
}