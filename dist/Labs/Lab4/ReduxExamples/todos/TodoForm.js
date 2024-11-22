import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm() {
    const { todo } = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();
    return (_jsxs("li", Object.assign({ className: "list-group-item" }, { children: [_jsx("button", Object.assign({ onClick: () => dispatch(addTodo(todo)), id: "wd-add-todo-click" }, { children: " Add " })), _jsx("button", Object.assign({ onClick: () => dispatch(updateTodo(todo)), id: "wd-update-todo-click" }, { children: " Update " })), _jsx("input", { defaultValue: todo.title, onChange: (e) => dispatch(setTodo(Object.assign(Object.assign({}, todo), { title: e.target.value }))) })] })));
}
