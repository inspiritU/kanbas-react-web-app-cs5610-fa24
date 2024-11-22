import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (_jsxs("div", Object.assign({ className: "wd-json-stringify" }, { children: [_jsx("h3", { children: "JSON Stringify" }), "squares = ", JSON.stringify(squares), _jsx("hr", {})] })));
}
