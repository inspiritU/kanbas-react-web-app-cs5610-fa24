import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (_jsxs("div", Object.assign({ id: "wd-implied-return" }, { children: [_jsx("h4", { children: "Implied return" }), "fourTimesFive = ", fourTimesFive, _jsx("br", {}), "multiply(4, 5) = ", multiply(4, 5), " ", _jsx("hr", {})] })));
}
