import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function EnvironmentVariables() {
    return (_jsxs("div", Object.assign({ id: "wd-environment-variables" }, { children: [_jsx("h3", { children: "Environment Variables" }), _jsxs("p", { children: ["Remote Server: ", REMOTE_SERVER] }), _jsx("hr", {})] })));
}
