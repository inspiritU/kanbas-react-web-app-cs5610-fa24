import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function PathParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (_jsxs("div", { children: [_jsx("h3", { children: "Path Parameters" }), _jsx("input", { className: "form-control mb-2", id: "wd-path-parameter-a", type: "number", defaultValue: a, onChange: (e) => setA(e.target.value) }), _jsx("input", { className: "form-control mb-2", id: "wd-path-parameter-b", type: "number", defaultValue: b, onChange: (e) => setB(e.target.value) }), _jsxs("a", Object.assign({ className: "btn btn-primary me-2", id: "wd-path-parameter-add", href: `${REMOTE_SERVER}/lab5/add/${a}/${b}` }, { children: ["Add ", a, " + ", b] })), _jsxs("a", Object.assign({ className: "btn btn-danger", id: "wd-path-parameter-subtract", href: `${REMOTE_SERVER}/lab5/subtract/${a}/${b}` }, { children: ["Substract ", a, " - ", b] })), _jsx("hr", {})] }));
}
