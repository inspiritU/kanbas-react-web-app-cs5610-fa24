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
export const fetchWelcomeMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
});
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(`${ASSIGNMENT_API}`);
    return response.data;
});
export const updateTitle = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
});
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(TODOS_API);
    return response.data;
});
export const removeTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
});
export const createTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(`${TODOS_API}/create`);
    return response.data;
});
export const postTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.post(`${TODOS_API}`, todo);
    return response.data;
});
export const deleteTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
});
export const updateTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
});
