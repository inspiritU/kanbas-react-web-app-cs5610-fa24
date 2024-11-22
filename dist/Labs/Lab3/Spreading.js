import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Spreading() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5, 6];
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = Object.assign(Object.assign({}, obj1), { d: 4, e: 5, f: 6 });
    const obj3 = Object.assign(Object.assign({}, obj1), { b: 4 });
    return (_jsxs("div", Object.assign({ id: "wd-spreading" }, { children: [_jsx("h2", { children: "Spread Operator" }), _jsx("h3", { children: "Array Spread" }), "arr1 = ", JSON.stringify(arr1), "  ", _jsx("br", {}), "arr2 = ", JSON.stringify(arr2), "  ", _jsx("br", {}), _jsx("h3", { children: "Object Spread" }), JSON.stringify(obj1), "         ", _jsx("br", {}), JSON.stringify(obj2), "         ", _jsx("br", {}), JSON.stringify(obj3), "         ", _jsx("br", {}), "  ", _jsx("hr", {})] })));
}
