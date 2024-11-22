import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (_jsxs("div", Object.assign({ id: "wd-array-state-variables" }, { children: [_jsx("h2", { children: "Array State Variable" }), _jsx("button", Object.assign({ onClick: addElement }, { children: "Add Element" })), _jsx("ul", { children: array.map((item, index) => (_jsxs("li", { children: [item, _jsx("button", Object.assign({ onClick: () => deleteElement(index), id: "wd-delete-element-click" }, { children: "Delete" }))] }, index))) }), _jsx("hr", {})] })));
}
