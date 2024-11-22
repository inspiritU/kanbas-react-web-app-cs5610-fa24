import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Styles() {
    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = Object.assign({ "backgroundColor": "lightblue", "color": "black" }, padding10px);
    const bgRed = Object.assign(Object.assign({ "backgroundColor": "lightcoral" }, colorBlack), padding10px);
    return (_jsxs("div", Object.assign({ id: "wd-styles" }, { children: [_jsx("h2", { children: "Styles" }), _jsx("div", Object.assign({ style: { "backgroundColor": "lightyellow",
                    "color": "black", padding: "10px" } }, { children: "Yellow background" })), _jsx("div", Object.assign({ style: bgRed }, { children: " Red background " })), _jsx("div", Object.assign({ style: bgBlue }, { children: "Blue background" }))] })));
}
;
