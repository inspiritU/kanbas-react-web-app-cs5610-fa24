import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TodoItem = ({ todo = { done: true, title: 'Buy milk',
    status: 'COMPLETED' } }) => {
    return (_jsxs("li", Object.assign({ className: "list-group-item" }, { children: [_jsx("input", { type: "checkbox", className: "me-2", defaultChecked: todo.done }), todo.title, " (", todo.status, ")"] })));
};
export default TodoItem;
