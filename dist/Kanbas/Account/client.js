var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const signin = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
});
export const profile = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
});
export const signup = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
});
export const signout = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
});
export const updateUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
});
export const findMyCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
});
export const createCourse = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
});
