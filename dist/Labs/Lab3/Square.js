import { jsx as _jsx } from "react/jsx-runtime";
export default function Square({ children }) {
    const num = Number(children);
    return _jsx("span", Object.assign({ id: "wd-square" }, { children: num * num }));
}
