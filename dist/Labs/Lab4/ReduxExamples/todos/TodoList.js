import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (_jsxs("div", Object.assign({ id: "wd-todo-list-redux" }, { children: [_jsx("h2", { children: "Todo List" }), _jsxs("ul", Object.assign({ className: "list-group" }, { children: [_jsx(TodoForm, {}), todos.map((todo) => (_jsx(TodoItem, { todo: todo })))] })), _jsx("hr", {})] })));
}
