import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TemplateLiterals() {
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    const result2 = `2 + 3 = ${2 + 3}`;
    const username = "alice";
    const greeting1 = `Welcome home ${username}`;
    const loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
    return (_jsxs("div", Object.assign({ id: "wd-template-literals" }, { children: [_jsx("h4", { children: "Template Literals" }), "result1 = ", result1, "     ", _jsx("br", {}), "result2 = ", result2, "     ", _jsx("br", {}), "greeting1 = ", greeting1, " ", _jsx("br", {}), "greeting2 = ", greeting2, " ", _jsx("hr", {})] })));
}
