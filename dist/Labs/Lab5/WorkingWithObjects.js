import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [module, setModule] = useState({
        id: "CS5610",
        name: "Web Development",
        description: "Learn modern web development techniques",
        course: "CS5610 Web Development",
    });
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    return (_jsxs("div", Object.assign({ id: "wd-working-with-objects" }, { children: [_jsx("h3", { children: "Working With Objects" }), _jsx("h4", { children: "Module Operations" }), _jsx("a", Object.assign({ id: "wd-get-module", className: "btn btn-primary me-2", href: `${MODULE_API_URL}` }, { children: "Get Module" })), _jsx("a", Object.assign({ id: "wd-get-module-name", className: "btn btn-primary", href: `${MODULE_API_URL}/name` }, { children: "Get Module Name" })), _jsx("input", { className: "form-control w-75", id: "wd-module-name", defaultValue: module.name, onChange: (e) => setModule(Object.assign(Object.assign({}, module), { name: e.target.value })) }), _jsx("a", Object.assign({ id: "wd-update-module-name", className: "btn btn-primary", href: `${MODULE_API_URL}/name/${module.name}` }, { children: "Update Module Name" })), _jsx("input", { className: "form-control w-75", id: "wd-module-description", defaultValue: module.description, onChange: (e) => setModule(Object.assign(Object.assign({}, module), { description: e.target.value })) }), _jsx("a", Object.assign({ id: "wd-update-module-description", className: "btn btn-primary", href: `${MODULE_API_URL}/description/${module.description}` }, { children: "Update Module Description" })), _jsx("hr", {}), _jsx("h4", { children: "Assignment Operations" }), _jsx("a", Object.assign({ id: "wd-get-assignment", className: "btn btn-primary", href: `${ASSIGNMENT_API_URL}` }, { children: "Get Assignment" })), _jsx("h4", { children: "Retrieving Properties" }), _jsx("a", Object.assign({ id: "wd-retrieve-assignment-title", className: "btn btn-primary", href: `${REMOTE_SERVER}/lab5/assignment/title` }, { children: "Get Title" })), _jsx("hr", {}), _jsx("h4", { children: "Modifying Properties" }), _jsx("a", Object.assign({ id: "wd-update-assignment-title", className: "btn btn-primary float-end", href: `${ASSIGNMENT_API_URL}/title/${assignment.title}` }, { children: "Update Title" })), _jsx("input", { className: "form-control w-75", id: "wd-assignment-title", defaultValue: assignment.title, onChange: (e) => setAssignment(Object.assign(Object.assign({}, assignment), { title: e.target.value })) }), _jsx("hr", {}), _jsx("hr", {})] })));
}
