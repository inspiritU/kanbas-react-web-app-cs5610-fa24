import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (_jsxs("div", Object.assign({ id: "wd-conditional-output-inline" }, { children: [loggedIn && _jsx("h2", { children: "Welcome Inline" }), !loggedIn && _jsx("h2", { children: "Please login Inline" })] })));
};
export default ConditionalOutputInline;
