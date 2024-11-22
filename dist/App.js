import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
    return (_jsx(HashRouter, { children: _jsx(Provider, Object.assign({ store: store }, { children: _jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "Kanbas" }) }), _jsx(Route, { path: "/Labs/*", element: _jsx(Labs, {}) }), _jsx(Route, { path: "/Kanbas/*", element: _jsx(Kanbas, {}) })] }) }) })) }));
}
