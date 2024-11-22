import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    return (_jsxs("div", { children: [_jsx("h2", { children: "String State Variables" }), _jsx("p", { children: firstName }), _jsx("input", { className: "form-control", defaultValue: firstName, onChange: (e) => setFirstName(e.target.value) }), _jsx("hr", {})] }));
}
