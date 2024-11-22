import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function IfElse() {
    let true1 = true, false1 = false;
    return (_jsxs("div", Object.assign({ id: "wd-if-else" }, { children: [_jsx("h4", { children: "If Else" }), true1 && _jsx("p", { children: "true1" }), !false1 ? _jsx("p", { children: "!false1" }) : _jsx("p", { children: "false1" }), _jsx("hr", {})] })));
}
