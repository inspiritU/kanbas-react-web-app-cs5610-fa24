import { jsx as _jsx } from "react/jsx-runtime";
export default function Highlight({ children }) {
    return (_jsx("span", Object.assign({ id: "wd-highlight", style: { backgroundColor: "yellow", color: "red" } }, { children: children })));
}
