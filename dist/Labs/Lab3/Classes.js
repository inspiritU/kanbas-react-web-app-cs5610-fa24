import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Classes.css';
export default function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (_jsxs("div", { children: [_jsx("h2", { children: "Classes" }), _jsx("div", Object.assign({ className: "wd-bg-yellow wd-fg-black wd-padding-10px" }, { children: "Yellow background  " })), _jsx("div", Object.assign({ className: "wd-bg-blue wd-fg-black wd-padding-10px" }, { children: "Blue background    " })), _jsx("div", Object.assign({ className: "wd-bg-red wd-fg-black wd-padding-10px" }, { children: "Red background     " })), _jsx("div", Object.assign({ className: `${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px` }, { children: "Dangerous background" })), _jsx("div", Object.assign({ className: `wd-bg-${color} wd-fg-black wd-padding-10px` }, { children: "Dynamic Blue background" })), _jsx("hr", {})] }));
}
;
