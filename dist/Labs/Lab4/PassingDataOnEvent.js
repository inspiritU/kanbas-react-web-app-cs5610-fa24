import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const add = (a, b) => {
    alert(`${a} + ${b} = ${a + b}`);
};
export default function PassingDataOnEvent() {
    return (_jsxs("div", Object.assign({ id: "wd-passing-data-on-event" }, { children: [_jsx("h2", { children: "Passing Data on Event" }), _jsx("button", Object.assign({ onClick: () => add(2, 3), className: "btn btn-primary", id: "wd-pass-data-click" }, { children: "Pass 2 and 3 to add()" })), _jsx("hr", {})] })));
}
