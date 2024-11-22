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
import { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithObjectsAsynchronously() {
    const [assignment, setAssignment] = useState({});
    const fetchAssignment = () => __awaiter(this, void 0, void 0, function* () {
        const assignment = yield client.fetchAssignment();
        setAssignment(assignment);
    });
    useEffect(() => {
        fetchAssignment();
    }, []);
    const updateTitle = (title) => __awaiter(this, void 0, void 0, function* () {
        const updatedAssignment = yield client.updateTitle(title);
        setAssignment(updatedAssignment);
    });
    return (_jsxs("div", Object.assign({ id: "wd-asynchronous-objects" }, { children: [_jsx("h3", { children: "Working with Objects Asynchronously" }), _jsx("h4", { children: "Assignment" }), _jsx("input", { defaultValue: assignment.title, className: "form-control mb-2", onChange: (e) => setAssignment(Object.assign(Object.assign({}, assignment), { title: e.target.value })) }), _jsx("textarea", { defaultValue: assignment.description, className: "form-control mb-2", onChange: (e) => setAssignment(Object.assign(Object.assign({}, assignment), { description: e.target.value })) }), _jsx("input", { type: "date", className: "form-control mb-2", defaultValue: assignment.due, onChange: (e) => setAssignment(Object.assign(Object.assign({}, assignment), { due: e.target.value })) }), _jsxs("div", Object.assign({ className: "form-check form-switch" }, { children: [_jsx("input", { className: "form-check-input", type: "checkbox", id: "wd-completed", defaultChecked: assignment.completed, onChange: (e) => setAssignment(Object.assign(Object.assign({}, assignment), { completed: e.target.checked })) }), _jsx("label", Object.assign({ className: "form-check-label", htmlFor: "wd-completed" }, { children: " Completed " }))] })), _jsx("button", Object.assign({ className: "btn btn-primary me-2", onClick: () => updateTitle(assignment.title) }, { children: "Update Title" })), _jsx("pre", { children: JSON.stringify(assignment, null, 2) }), _jsx("hr", {})] })));
}
