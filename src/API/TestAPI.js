import axios from "axios";


const axiosInstance = axios.create({
	baseURL: "https://127.0.0.1:8000/",
	withCredentials: true
});

export const testStatus = () => {
	return axiosInstance.get(`hello`);
}

// const getProfile = (userId) => {
// 	return axiosInstance.get(`profile/` + userId);
// }