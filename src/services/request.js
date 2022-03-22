import axios from "axios";

// eslint-disable-next-line consistent-return
const sendGetRequest = async () => {
  try {
    const file = "./data.json";
    const response = await axios.get(file);

    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default sendGetRequest;
