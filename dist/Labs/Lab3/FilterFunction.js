import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
    const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
    return (_jsxs("div", Object.assign({ id: "wd-filter-function" }, { children: [_jsx("h4", { children: "Filter Function" }), "numbersGreaterThan2 = ", numbersGreaterThan2, "  ", _jsx("br", {}), "evenNumbers = ", evenNumbers, "    ", _jsx("br", {}), "oddNumbers = ", oddNumbers, "      ", _jsx("hr", {})] })));
}
