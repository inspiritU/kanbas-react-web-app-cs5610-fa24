import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    return (_jsxs("div", Object.assign({ id: "wd-account-navigation", className: "wd list-group fs-5 rounded-0" }, { children: [_jsx(NavLink, Object.assign({ id: "wd-account-profile-link", to: "/Kanbas/Account/Signin", className: ({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0") }, { children: "Signin" })), _jsx(NavLink, Object.assign({ id: "wd-account-profile-link", to: "/Kanbas/Account/Signup", className: ({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0") }, { children: "Signup" })), _jsx(NavLink, Object.assign({ id: "wd-account-profile-link", to: "/Kanbas/Account/Profile", className: ({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0") }, { children: "Profile" }))] })));
}
