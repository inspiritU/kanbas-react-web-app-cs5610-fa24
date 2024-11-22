import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (_jsxs("div", Object.assign({ className: "d-flex", id: "wd-home" }, { children: [_jsx("div", Object.assign({ className: "flex-fill" }, { children: _jsx(Modules, {}) })), _jsx("div", Object.assign({ className: "d-none d-md-block ms-3" }, { children: _jsx(CourseStatus, {}) }))] })));
}
