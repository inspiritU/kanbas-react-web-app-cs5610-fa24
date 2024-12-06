import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import {
    addModule,
    deleteModule,
    updateModule,
    editModule,
    setModules,
} from "./reducer";
import * as courseClient from "../client";
import * as moduleClient from "./client";

export default function Modules() {
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [moduleName, setModuleName] = useState("");

    const isStudent = currentUser?.role === "STUDENT";

    const createModule = async () => {
        if (!cid || isStudent) return;
        const newModule = { name: moduleName, course: cid };
        const module = await courseClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };

    const fetchModules = async () => {
        const modules = await courseClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };

    const removeModule = async (moduleId: string) => {
        if (isStudent) return;
        const status = await moduleClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        if (isStudent) return;
        await moduleClient.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div>
            {!isStudent && (
                <ModulesControls
                    moduleName={moduleName}
                    setModuleName={setModuleName}
                    addModule={createModule}
                />
            )}
            <br />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules.map((module: any) => (
                    <li
                        key={module._id}
                        className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
                    >
                        <div className="wd-title p-3 ps-2 text-white bg-secondary">
                            {!module.editing && module.name}
                            {module.editing && !isStudent && (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) =>
                                        dispatch(
                                            updateModule({ ...module, name: e.target.value })
                                        )
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({ ...module, editing: false });
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            )}
                            {!isStudent && (
                                <ModuleControlButtons
                                    deleteModule={(moduleId) => removeModule(moduleId)}
                                    moduleId={module._id}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            )}
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li
                                        key={lesson._id}
                                        className="wd-lesson list-group-item p-3 ps-1"
                                    >
                                        <span className="wd-title">{lesson.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}