import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ForLoops() {
    let stringArray1 = ["string1", "string3"];
    let stringArray2 = [];
    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase());
    }
    return (_jsxs("div", Object.assign({ id: "wd-for-loops" }, { children: [_jsx("h4", { children: "Looping through arrays" }), "stringArray2 = ", stringArray2, " ", _jsx("hr", {})] })));
}
