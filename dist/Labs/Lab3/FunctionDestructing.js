import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FunctionDestructing() {
    const add = (a, b) => a + b;
    const sum = add(1, 2);
    const subtract = ({ a, b }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    return (_jsxs("div", Object.assign({ id: "wd-function-destructing" }, { children: [_jsx("h2", { children: "Function Destructing" }), "const add = (a, b) => a + b;", _jsx("br", {}), "const sum = add(1, 2);", _jsx("br", {}), "const subtract = ({ a, b }) => a - b;", _jsx("br", {}), "const difference = subtract({ a: 4, b: 2 });", _jsx("br", {}), "sum = ", sum, _jsx("br", {}), "difference = ", difference, " ", _jsx("hr", {})] })));
}
