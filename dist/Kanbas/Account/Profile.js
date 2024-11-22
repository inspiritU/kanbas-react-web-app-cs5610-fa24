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
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Profile() {
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.accountReducer);
    const updateProfile = () => __awaiter(this, void 0, void 0, function* () {
        const updatedProfile = yield client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    });
    const fetchProfile = () => {
        if (!currentUser)
            return navigate("/Kanbas/Account/Signin");
        setProfile(currentUser);
    };
    const signout = () => __awaiter(this, void 0, void 0, function* () {
        yield client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    });
    useEffect(() => { fetchProfile(); }, []);
    return (_jsxs("div", Object.assign({ className: "wd-profile-screen" }, { children: [_jsx("h3", { children: "Profile" }), profile && (_jsxs("div", { children: [_jsx("input", { defaultValue: profile.username, id: "wd-username", className: "form-control mb-2", onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { username: e.target.value })) }), _jsx("input", { defaultValue: profile.password, id: "wd-password", className: "form-control mb-2", onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { password: e.target.value })) }), _jsx("input", { defaultValue: profile.firstName, id: "wd-firstname", className: "form-control mb-2", onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { firstName: e.target.value })) }), _jsx("input", { defaultValue: profile.lastName, id: "wd-lastname", className: "form-control mb-2", onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { lastName: e.target.value })) }), _jsx("input", { defaultValue: profile.dob, id: "wd-dob", className: "form-control mb-2", onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { dob: e.target.value })), type: "date" }), _jsx("input", { defaultValue: profile.email, id: "wd-email", className: "form-control mb-2", onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { email: e.target.value })) }), _jsxs("select", Object.assign({ onChange: (e) => setProfile(Object.assign(Object.assign({}, profile), { role: e.target.value })), className: "form-control mb-2", id: "wd-role" }, { children: [_jsx("option", Object.assign({ value: "USER" }, { children: "User" })), "            ", _jsx("option", Object.assign({ value: "ADMIN" }, { children: "Admin" })), _jsx("option", Object.assign({ value: "FACULTY" }, { children: "Faculty" })), "      ", _jsx("option", Object.assign({ value: "STUDENT" }, { children: "Student" }))] })), _jsx("button", Object.assign({ onClick: updateProfile, className: "btn btn-primary w-100 mb-2" }, { children: " Update " })), _jsx("button", Object.assign({ onClick: signout, className: "btn btn-danger w-100 mb-2", id: "wd-signout-btn" }, { children: "Sign out" }))] }))] })));
}
