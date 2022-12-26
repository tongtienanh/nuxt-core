import {CreateAxiosDefaults, default as axios} from "axios";
import {AxiosInstance} from "axios"


const baseUrl = "";
const options: CreateAxiosDefaults = {
    baseURL: baseUrl
}
const axiosInstance: AxiosInstance = axios.create(options)

export default axiosInstance;