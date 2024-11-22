import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PassingFunctions({ theFunction }) {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Passing Functions" }), _jsx("button", Object.assign({ onClick: theFunction, className: "btn btn-primary" }, { children: "Invoke the Function" })), _jsx("hr", {})] }));
}
