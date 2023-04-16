import axios from "axios";
export const getQuranApi = async () => {
  const url = await axios.get(`https://api.quran.gading.dev/surah`);
  return await url.data;
};
