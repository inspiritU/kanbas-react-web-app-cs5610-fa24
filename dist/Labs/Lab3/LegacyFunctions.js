import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function add(a, b) {
    return a + b;
}
export default function LegacyFunctions() {
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);
    return (_jsxs("div", Object.assign({ id: "wd-legacy-functions" }, { children: [_jsx("h4", { children: "Functions" }), _jsx("h5", { children: "Legacy ES5 functions" }), "twoPlusFour = ", twoPlusFour, "    ", _jsx("br", {}), "add(2, 4) = ", add(2, 4), "        ", _jsx("hr", {})] })));
}
