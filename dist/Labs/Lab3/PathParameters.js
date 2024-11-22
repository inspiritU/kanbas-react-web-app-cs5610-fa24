import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";
export default function PathParameters() {
    return (_jsxs("div", Object.assign({ id: "wd-path-parameters" }, { children: [_jsx("h2", { children: "Path Parameters" }), _jsx(Link, Object.assign({ to: "/Labs/Lab3/add/1/2" }, { children: "1 + 2" })), " ", _jsx("br", {}), _jsx(Link, Object.assign({ to: "/Labs/Lab3/add/3/4" }, { children: "3 + 4" })), _jsx(Routes, { children: _jsx(Route, { path: "add/:a/:b", element: _jsx(AddPathParameters, {}) }) })] })));
}
