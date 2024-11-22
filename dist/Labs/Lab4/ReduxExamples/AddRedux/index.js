import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
export default function AddRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(23);
    const { sum } = useSelector((state) => state.addReducer);
    const dispatch = useDispatch();
    return (_jsxs("div", Object.assign({ className: "w-25", id: "wd-add-redux" }, { children: [_jsx("h1", { children: "Add Redux" }), _jsxs("h2", { children: [a, " + ", b, " = ", sum] }), _jsx("input", { type: "number", defaultValue: a, onChange: (e) => setA(parseInt(e.target.value)), className: "form-control" }), _jsx("input", { type: "number", defaultValue: b, onChange: (e) => setB(parseInt(e.target.value)), className: "form-control" }), _jsx("button", Object.assign({ className: "btn btn-primary", id: "wd-add-redux-click", onClick: () => dispatch(add({ a, b })) }, { children: "Add Redux " })), _jsx("hr", {})] })));
}
