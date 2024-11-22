import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];
    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");
    return (_jsxs("div", Object.assign({ id: "wd-find-function" }, { children: [_jsx("h4", { children: "Find Function" }), "four = ", four, " ", _jsx("br", {}), "string3 = ", string3, " ", _jsx("hr", {})] })));
}
