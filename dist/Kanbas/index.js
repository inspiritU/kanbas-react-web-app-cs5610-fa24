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
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Account from "./Account";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import './styles.css';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
export default function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const addNewCourse = () => __awaiter(this, void 0, void 0, function* () {
        const newCourse = yield userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    });
    const deleteCourse = (courseId) => __awaiter(this, void 0, void 0, function* () {
        const status = yield courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    });
    const updateCourse = () => __awaiter(this, void 0, void 0, function* () {
        yield courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            }
            else {
                return c;
            }
        }));
    });
    const { currentUser } = useSelector((state) => state.accountReducer);
    const fetchCourses = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const courses = yield userClient.findMyCourses();
            setCourses(courses);
        }
        catch (error) {
            console.error(error);
        }
    });
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);
    return (_jsx(Provider, Object.assign({ store: store }, { children: _jsx(Session, { children: _jsxs("div", Object.assign({ id: "wd-kanbas" }, { children: [_jsx(KanbasNavigation, {}), _jsx("div", Object.assign({ className: "wd-main-content-offset p-3" }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "Dashboard" }) }), _jsx(Route, { path: "Account/*", element: _jsx(Account, {}) }), _jsx(Route, { path: "Dashboard", element: _jsx(ProtectedRoute, { children: _jsx(Dashboard, { courses: courses, course: course, setCourse: setCourse, addNewCourse: addNewCourse, deleteCourse: deleteCourse, updateCourse: updateCourse }) }) }), _jsx(Route, { path: "Courses/:cid/*", element: _jsx(ProtectedRoute, { children: _jsx(Courses, { courses: courses }) }) }), _jsx(Route, { path: "Calendar", element: _jsx("h1", { children: "Calendar" }) }), _jsx(Route, { path: "Inbox", element: _jsx("h1", { children: "Inbox" }) })] }) }))] })) }) })));
}
