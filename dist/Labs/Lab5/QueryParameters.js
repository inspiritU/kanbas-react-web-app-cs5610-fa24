import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function QueryParameters() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    return (_jsxs("div", Object.assign({ id: "wd-query-parameters" }, { children: [_jsx("h3", { children: "Query Parameters" }), _jsx("input", { id: "wd-query-parameter-a", className: "form-control mb-2", defaultValue: a, type: "number", onChange: (e) => setA(Number(e.target.value)) }), _jsx("input", { id: "wd-query-parameter-b", className: "form-control mb-2", defaultValue: b, type: "number", onChange: (e) => setB(Number(e.target.value)) }), _jsxs("a", Object.assign({ id: "wd-query-parameter-add", href: `${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}` }, { children: ["Add ", a, " + ", b] })), _jsxs("a", Object.assign({ id: "wd-query-parameter-subtract", href: `${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}` }, { children: ["Subtract ", a, " - ", b] })), _jsxs("a", Object.assign({ id: "wd-query-parameter-multiply", href: `${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}` }, { children: ["Multiply ", a, " \u00D7 ", b] })), _jsxs("a", Object.assign({ id: "wd-query-parameter-divide", href: `${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}` }, { children: ["Divide ", a, " \u00F7 ", b] })), _jsx("hr", {})] })));
}
