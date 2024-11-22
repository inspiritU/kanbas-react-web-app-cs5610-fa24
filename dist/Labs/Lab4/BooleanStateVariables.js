import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function BooleanStateVariables() {
    const [done, setDone] = useState(true);
    return (_jsxs("div", Object.assign({ id: "wd-boolean-state-variables" }, { children: [_jsx("h2", { children: "Boolean State Variables" }), _jsx("p", { children: done ? "Done" : "Not done" }), _jsxs("label", Object.assign({ className: "form-control" }, { children: [_jsx("input", { type: "checkbox", checked: done, onChange: () => setDone(!done) }), " Done"] })), done && _jsx("div", Object.assign({ className: "alert alert-success" }, { children: "Yay! you are done" })), _jsx("hr", {})] })));
}
