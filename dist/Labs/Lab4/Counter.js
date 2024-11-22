import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (_jsxs("div", { children: [_jsxs("h2", { children: ["Counter: ", count] }), _jsx("button", Object.assign({ onClick: () => setCount(count + 1), id: "wd-counter-up-click" }, { children: "Up" })), _jsx("button", Object.assign({ onClick: () => setCount(count - 1), id: "wd-counter-down-click" }, { children: "Down" })), _jsx("hr", {})] }));
}
