import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a) => a * a;
    const todos = ["Buy milk", "Feed the pets"];
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a) => a * a * a);
    return (_jsxs("div", Object.assign({ id: "wd-map-function" }, { children: [_jsx("h4", { children: "Map Function" }), "squares = ", squares, " ", _jsx("br", {}), "cubes = ", cubes, " ", _jsx("br", {}), "Todos:", _jsx("ol", { children: todos.map((todo) => (_jsx("li", { children: todo }))) }), " ", _jsx("hr", {})] })));
}
