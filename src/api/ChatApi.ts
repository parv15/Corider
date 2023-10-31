// chatApi.ts
import axios from 'axios';

export async function fetchChatData(page: number) {
  try {
    const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chat data', error);
    return [];
  }
}
