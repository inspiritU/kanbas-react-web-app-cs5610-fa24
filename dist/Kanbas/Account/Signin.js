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
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";
export default function Signin() {
    const [credentials, setCredentials] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = () => __awaiter(this, void 0, void 0, function* () {
        const user = yield client.signin(credentials);
        if (!user)
            return;
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    });
    return (_jsxs("div", Object.assign({ id: "wd-signin-screen" }, { children: [_jsx("h1", { children: "Sign in" }), _jsx("input", { defaultValue: credentials.username, onChange: (e) => setCredentials(Object.assign(Object.assign({}, credentials), { username: e.target.value })), className: "form-control mb-2", placeholder: "username", id: "wd-username" }), _jsx("input", { defaultValue: credentials.password, onChange: (e) => setCredentials(Object.assign(Object.assign({}, credentials), { password: e.target.value })), className: "form-control mb-2", placeholder: "password", type: "password", id: "wd-password" }), _jsx("button", Object.assign({ onClick: signin, id: "wd-signin-btn", className: "btn btn-primary w-100" }, { children: " Sign in " })), _jsx(Link, Object.assign({ id: "wd-signup-link", to: "/Kanbas/Account/Signup" }, { children: " Sign up " }))] })));
}
