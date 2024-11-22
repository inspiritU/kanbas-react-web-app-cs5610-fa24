import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TernaryOperator() {
    let loggedIn = true;
    return (_jsxs("div", Object.assign({ id: "wd-ternary-operator" }, { children: [_jsx("h4", { children: "Logged In" }), loggedIn ? _jsx("p", { children: "Welcome" }) : _jsx("p", { children: "Please login" }), " ", _jsx("hr", {})] })));
}
