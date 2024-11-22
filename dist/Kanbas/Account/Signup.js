var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = () => __awaiter(this, void 0, void 0, function* () {
        const currentUser = yield client.signup(user);
        dispatch(setCurrentUser(currentUser));
        navigate("/Kanbas/Account/Profile");
    });
    return (_jsxs("div", Object.assign({ className: "wd-signup-screen" }, { children: [_jsx("h1", { children: "Sign up" }), _jsx("input", { value: user.username, onChange: (e) => setUser(Object.assign(Object.assign({}, user), { username: e.target.value })), className: "wd-username form-control mb-2", placeholder: "username" }), _jsx("input", { value: user.password, onChange: (e) => setUser(Object.assign(Object.assign({}, user), { password: e.target.value })), type: "password", className: "wd-password form-control mb-2", placeholder: "password" }), _jsx("button", Object.assign({ onClick: signup, className: "wd-signup-btn btn btn-primary mb-2 w-100" }, { children: " Sign up " })), _jsx("br", {}), _jsx(Link, Object.assign({ to: "/Kanbas/Account/Signin", className: "wd-signin-link" }, { children: "Sign in" }))] })));
}
