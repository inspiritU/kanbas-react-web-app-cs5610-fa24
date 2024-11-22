import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from './Lab4';
import Lab5 from './Lab5';
import store from "./store";
import { Provider } from "react-redux";
export default function Labs() {
    return (_jsx(Provider, Object.assign({ store: store }, { children: _jsxs("div", Object.assign({ id: "wd-labs" }, { children: [_jsx("h1", { children: "Labs" }), _jsx(TOC, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "Lab1" }) }), _jsx(Route, { path: "Lab1", element: _jsx(Lab1, {}) }), _jsx(Route, { path: "Lab2", element: _jsx(Lab2, {}) }), _jsx(Route, { path: "Lab3/*", element: _jsx(Lab3, {}) }), _jsx(Route, { path: "Lab4", element: _jsx(Lab4, {}) }), _jsx(Route, { path: "Lab5/*", element: _jsx(Lab5, {}) })] })] })) })));
}
