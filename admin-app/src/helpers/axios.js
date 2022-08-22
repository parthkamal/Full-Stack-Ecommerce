import axios from "axios";
import { BASEURL } from "../urlConfig";

const axiosInstance =axios.create({
    baseURL:BASEURL
})

export default axiosInstance;