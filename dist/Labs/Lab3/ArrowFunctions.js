import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const subtract = (a, b) => {
    return a - b;
};
export default function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);
    return (_jsxs("div", Object.assign({ id: "wd-arrow-functions" }, { children: [_jsx("h4", { children: "New ES6 arrow functions" }), "threeMinusOne = ", threeMinusOne, "   ", _jsx("br", {}), "subtract(3, 1) = ", subtract(3, 1), " ", _jsx("hr", {})] })));
}
