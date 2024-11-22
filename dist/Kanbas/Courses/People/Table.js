import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;
    return (_jsx("div", Object.assign({ id: "wd-people-table" }, { children: _jsxs("table", Object.assign({ className: "table table-striped" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Name" }), _jsx("th", { children: "Login ID" }), _jsx("th", { children: "Section" }), _jsx("th", { children: "Role" }), _jsx("th", { children: "Last Activity" }), _jsx("th", { children: "Total Activity" })] }) }), _jsx("tbody", { children: users
                        .filter((usr) => enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid))
                        .map((user) => (_jsxs("tr", { children: [_jsxs("td", Object.assign({ className: "wd-full-name text-nowrap" }, { children: [_jsx(FaUserCircle, { className: "me-2 fs-1 text-secondary" }), _jsx("span", Object.assign({ className: "wd-first-name" }, { children: user.firstName })), _jsx("span", Object.assign({ className: "wd-last-name" }, { children: user.lastName }))] })), _jsx("td", Object.assign({ className: "wd-login-id" }, { children: user.loginId })), _jsx("td", Object.assign({ className: "wd-section" }, { children: user.section })), _jsx("td", Object.assign({ className: "wd-role" }, { children: user.role })), _jsx("td", Object.assign({ className: "wd-last-activity" }, { children: user.lastActivity })), _jsx("td", Object.assign({ className: "wd-total-activity" }, { children: user.totalActivity }))] }, user._id))) })] })) })));
}
