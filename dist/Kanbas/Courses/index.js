import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';
export default function Courses({ courses }) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    return (_jsxs("div", Object.assign({ id: "wd-courses" }, { children: [_jsxs("h2", Object.assign({ className: "text-danger" }, { children: [_jsx(FaAlignJustify, { className: "me-4 fs-4 mb-1" }), course && course.name, "  > ", pathname.split("/")[4]] })), " ", _jsx("hr", {}), _jsxs("div", Object.assign({ className: "d-flex" }, { children: [_jsx("div", Object.assign({ className: "d-none d-md-block" }, { children: _jsx(CoursesNavigation, {}) })), _jsx("div", Object.assign({ className: "flex-fill" }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "Home", element: _jsx(Home, {}) }), _jsx(Route, { path: "Modules", element: _jsx(Modules, {}) }), _jsx(Route, { path: "Assignments", element: _jsx(Assignments, {}) }), _jsx(Route, { path: "Assignments/:aid", element: _jsx(AssignmentEditor, {}) }), _jsx(Route, { path: "People", element: _jsx(PeopleTable, {}) })] }) }))] }))] })));
}
