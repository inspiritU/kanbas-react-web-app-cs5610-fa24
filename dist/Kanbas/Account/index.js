import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { useSelector } from "react-redux";
export default function Account() {
    const { currentUser } = useSelector((state) => state.accountReducer);
    return (_jsx("div", Object.assign({ id: "wd-account-screen" }, { children: _jsx("table", { children: _jsxs("tr", { children: [_jsx("td", Object.assign({ valign: "top" }, { children: _jsx(AccountNavigation, {}) })), _jsx("td", Object.assign({ valign: "top" }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }) }), _jsx(Route, { path: "/Signin", element: _jsx(Signin, {}) }), _jsx(Route, { path: "/Profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/Signup", element: _jsx(Signup, {}) })] }) }))] }) }) })));
}
