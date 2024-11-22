import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
export default function AddPathParameters() {
    const { a, b } = useParams();
    return (_jsxs("div", Object.assign({ id: "wd-add" }, { children: [" ", _jsx("h4", { children: "Add Path Parameters" }), a, " + ", b, " = ", parseInt(a) + parseInt(b)] })));
}
