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
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from "react-router";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state) => state.modulesReducer);
    const { currentUser } = useSelector((state) => state.accountReducer);
    const dispatch = useDispatch();
    const fetchModules = () => __awaiter(this, void 0, void 0, function* () {
        const modules = yield coursesClient.findModulesForCourse(cid);
        dispatch(setModules(modules));
    });
    useEffect(() => {
        fetchModules();
    }, []);
    const createModuleForCourse = () => __awaiter(this, void 0, void 0, function* () {
        if (!cid)
            return;
        const newModule = { name: moduleName, course: cid };
        const module = yield coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    });
    const removeModule = (moduleId) => __awaiter(this, void 0, void 0, function* () {
        yield modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    });
    const saveModule = (module) => __awaiter(this, void 0, void 0, function* () {
        yield modulesClient.updateModule(module);
        dispatch(updateModule(module));
    });
    return (_jsxs("div", Object.assign({ className: "wd-modules" }, { children: [(currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === "FACULTY" && (_jsx(ModulesControls, { moduleName: moduleName, setModuleName: setModuleName, addModule: createModuleForCourse })), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("ul", Object.assign({ id: "wd-modules", className: "list-group rounded-0" }, { children: modules
                    .map((module) => (_jsxs("li", Object.assign({ className: "wd-module list-group-item p-0 mb-5 fs-5 border-gray" }, { children: [_jsxs("div", Object.assign({ className: "wd-title p-3 ps-2 bg-secondary" }, { children: [_jsx(BsGripVertical, { className: "me-2 fs-3" }), !module.editing ? (_jsx("span", { children: module.name })) : ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === "FACULTY" && (_jsx("input", { className: "form-control w-50 d-inline-block", onChange: (e) => dispatch(updateModule(Object.assign(Object.assign({}, module), { name: e.target.value }))), onKeyDown: (e) => {
                                        if (e.key === "Enter") {
                                            saveModule(Object.assign(Object.assign({}, module), { editing: false }));
                                        }
                                    }, defaultValue: module.name }))), (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === "FACULTY" && (_jsx(ModuleControlButtons, { moduleId: module._id, deleteModule: (moduleId) => removeModule(moduleId), editModule: () => dispatch(editModule(module._id)) }))] })), module.lessons && (_jsx("ul", Object.assign({ className: "wd-lessons list-group rounded-0" }, { children: module.lessons.map((lesson) => (_jsxs("li", Object.assign({ className: "wd-lesson list-group-item p-3 ps-1" }, { children: [_jsx(BsGripVertical, { className: "me-2 fs-3" }), " ", lesson.name, _jsx(LessonControlButtons, {})] }), lesson._id))) })))] }), module._id))) }))] })));
}
