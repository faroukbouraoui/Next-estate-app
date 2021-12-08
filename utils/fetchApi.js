import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '16b2c3ecf6mshab1e57fd4c04a09p192aa2jsn6991ffd36d43' ,
    },
  });
    
  return data;
}