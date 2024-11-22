import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
export default function ParentStateComponent() {
    const [counter, setCounter] = useState(123);
    return (_jsxs("div", { children: [_jsxs("h2", { children: ["Counter ", counter] }), _jsx(ChildStateComponent, { counter: counter, setCounter: setCounter }), _jsx("hr", {})] }));
}
