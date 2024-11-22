import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return (_jsxs("div", Object.assign({ id: "wd-array-index-and-length" }, { children: [_jsx("h4", { children: "Array index and length" }), "length1 = ", length1, " ", _jsx("br", {}), "index1 = ", index1, "   ", _jsx("hr", {})] })));
}
