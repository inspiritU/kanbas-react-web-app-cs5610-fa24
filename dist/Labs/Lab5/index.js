import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
    return (_jsxs("div", Object.assign({ id: "wd-lab5" }, { children: [_jsx("h2", { children: "Lab 5" }), _jsx("div", Object.assign({ className: "list-group" }, { children: _jsx("a", Object.assign({ href: `${REMOTE_SERVER}/lab5/welcome`, className: "list-group-item" }, { children: "Welcome" })) })), _jsx("hr", {}), _jsx(EnvironmentVariables, {}), _jsx(PathParameters, {}), _jsx(QueryParameters, {}), _jsx(WorkingWithObjects, {}), _jsx(WorkingWithArrays, {}), _jsx(HttpClient, {}), _jsx(WorkingWithObjectsAsynchronously, {}), _jsx(WorkingWithArraysAsynchronously, {})] })));
}
