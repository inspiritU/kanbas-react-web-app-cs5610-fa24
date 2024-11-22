import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function ChildStateComponent({ counter, setCounter }) {
    return (_jsxs("div", Object.assign({ id: "wd-child-state" }, { children: [_jsxs("h3", { children: ["Counter ", counter] }), _jsx("button", Object.assign({ onClick: () => setCounter(counter + 1), id: "wd-increment-child-state-click" }, { children: "Increment" })), _jsx("button", Object.assign({ onClick: () => setCounter(counter - 1), id: "wd-decrement-child-state-click" }, { children: "Decrement" })), _jsx("hr", {})] })));
}
