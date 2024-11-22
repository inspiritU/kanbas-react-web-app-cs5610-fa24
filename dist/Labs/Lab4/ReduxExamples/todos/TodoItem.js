import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }) {
    const dispatch = useDispatch(); // Get the dispatch function
    return (_jsxs("li", Object.assign({ className: "list-group-item" }, { children: [_jsx("button", Object.assign({ onClick: () => dispatch(deleteTodo(todo.id)), id: "wd-delete-todo-click" }, { children: " Delete " })), _jsx("button", Object.assign({ onClick: () => dispatch(setTodo(todo)), id: "wd-set-todo-click" }, { children: " Edit " })), todo.title] }), todo.id));
}
