import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SimpleArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [_jsx("li", { children: "Buy milk" }), _jsx("li", { children: "Feed the pets" })];
    let variableArray1 = [functionScoped, blockScoped, constant1,
        numberArray1, stringArray1];
    return (_jsxs("div", Object.assign({ id: "wd-simple-arrays" }, { children: [_jsx("h4", { children: "Simple Arrays" }), "numberArray1 = ", numberArray1, "     ", _jsx("br", {}), "stringArray1 = ", stringArray1, "     ", _jsx("br", {}), "variableArray1 = ", variableArray1, " ", _jsx("br", {}), "Todo list:", _jsx("ol", { children: htmlArray1 }), _jsx("hr", {})] })));
}
