import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    return (_jsxs("div", Object.assign({ id: "wd-variables-and-constants" }, { children: [_jsx("h4", { children: "Variables and Constants" }), "functionScoped = ", functionScoped, _jsx("br", {}), "blockScoped = ", blockScoped, _jsx("br", {}), "constant1 = ", constant1, _jsx("hr", {})] })));
}
