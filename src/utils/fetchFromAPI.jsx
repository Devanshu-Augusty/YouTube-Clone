import axios from "axios";

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',

  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_ID,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


// base_url/url
// eg -> BASE_URL/getVideos
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options); // gpt: Fetch API Data
    
    // console.log(url, "boom");
    // console.log(data);

    return data;
}

export default fetchFromAPI;