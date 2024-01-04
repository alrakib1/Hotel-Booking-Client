import axios from "axios";
const apikey = import.meta.env.VITE_IMGBB_API_KEY;
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${apikey}`,
    formData
  );

  return data.data;
};
