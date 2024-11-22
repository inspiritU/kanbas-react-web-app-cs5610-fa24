import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Todo List" }), _jsx("ul", Object.assign({ className: "list-group" }, { children: todos.map(todo => {
                    return (_jsx(TodoItem, { todo: todo }));
                }) })), _jsx("hr", {})] }));
};
export default TodoList;
