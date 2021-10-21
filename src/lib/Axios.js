import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: "https://aircall-job.herokuapp.com",
});

export default axiosApiInstance;
