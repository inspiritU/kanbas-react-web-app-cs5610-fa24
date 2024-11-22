var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState([]);
    const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
        const todos = yield client.fetchTodos();
        setTodos(todos);
    });
    useEffect(() => {
        fetchTodos();
    }, []);
    const removeTodo = (todo) => __awaiter(this, void 0, void 0, function* () {
        const updatedTodos = yield client.removeTodo(todo);
        setTodos(updatedTodos);
    });
    const createTodo = () => __awaiter(this, void 0, void 0, function* () {
        const todos = yield client.createTodo();
        setTodos(todos);
    });
    const postTodo = () => __awaiter(this, void 0, void 0, function* () {
        const newTodo = yield client.postTodo({ title: "New Posted Todo", completed: false, });
        setTodos([...todos, newTodo]);
    });
    const deleteTodo = (todo) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.deleteTodo(todo);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodos(newTodos);
        }
        catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    });
    const editTodo = (todo) => {
        const updatedTodos = todos.map((t) => t.id === todo.id ? Object.assign(Object.assign({}, todo), { editing: true }) : t);
        setTodos(updatedTodos);
    };
    const [errorMessage, setErrorMessage] = useState(null);
    const updateTodo = (todo) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.updateTodo(todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        }
        catch (error) {
            setErrorMessage(error.response.data.message);
        }
    });
    return (_jsxs("div", Object.assign({ id: "wd-asynchronous-arrays" }, { children: [_jsx("h3", { children: "Working with Arrays Asynchronously" }), errorMessage && (_jsx("div", Object.assign({ id: "wd-todo-error-message", className: "alert alert-danger mb-2 mt-2" }, { children: errorMessage }))), _jsxs("h4", { children: ["Todos", _jsx(FaPlusCircle, { onClick: createTodo, className: "text-success float-end fs-3", id: "wd-create-todo" }), _jsx(FaPlusCircle, { onClick: postTodo, className: "text-primary float-end fs-3 me-3", id: "wd-post-todo" })] }), _jsx("ul", Object.assign({ className: "list-group" }, { children: todos.map((todo) => (_jsxs("li", Object.assign({ className: "list-group-item" }, { children: [_jsx(FaTrash, { onClick: () => removeTodo(todo), className: "text-danger float-end mt-1", id: "wd-remove-todo" }), _jsx(TiDelete, { onClick: () => deleteTodo(todo), className: "text-danger float-end me-2 fs-3", id: "wd-delete-todo" }), _jsx(FaPencil, { onClick: () => editTodo(todo), className: "text-primary float-end me-2 mt-1" }), _jsx("input", { type: "checkbox", defaultChecked: todo.completed, className: "form-check-input me-2 float-start", onChange: (e) => updateTodo(Object.assign(Object.assign({}, todo), { completed: e.target.checked })) }), !todo.editing ? (todo.title) : (_jsx("input", { className: "form-control w-50 float-start", defaultValue: todo.title, onKeyDown: (e) => {
                                if (e.key === "Enter") {
                                    updateTodo(Object.assign(Object.assign({}, todo), { editing: false }));
                                }
                            }, onChange: (e) => updateTodo(Object.assign(Object.assign({}, todo), { title: e.target.value })) })), _jsx("span", Object.assign({ style: { textDecoration: todo.completed ? "line-through" : "none" } }, { children: todo.title }))] }), todo.id))) })), " ", _jsx("hr", {})] })));
}
