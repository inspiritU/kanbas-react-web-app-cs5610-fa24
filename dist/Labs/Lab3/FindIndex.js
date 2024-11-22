import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];
    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');
    return (_jsxs("div", Object.assign({ id: "wd-find-function" }, { children: [_jsx("h4", { children: "Find Function" }), "fourIndex = ", fourIndex, " ", _jsx("br", {}), "string3Index = ", string3Index, " ", _jsx("hr", {})] })));
}
