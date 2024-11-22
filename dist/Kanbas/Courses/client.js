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
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const fetchAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get(COURSES_API);
    return data;
});
export const deleteCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.delete(`${COURSES_API}/${id}`);
    return data;
});
export const updateCourse = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
});
export const findModulesForCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
});
export const createModuleForCourse = (courseId, module) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
});
