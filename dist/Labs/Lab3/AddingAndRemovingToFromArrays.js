import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [_jsx("li", { children: "Buy milk" }), _jsx("li", { children: "Feed the pets" })];
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    todoArray.push(_jsx("li", { children: "Walk the dogs" }));
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    return (_jsxs("div", Object.assign({ id: "wd-adding-removing-from-arrays" }, { children: [_jsx("h4", { children: "Add/remove to/from arrays" }), "numberArray1 = ", numberArray1, " ", _jsx("br", {}), "stringArray1 = ", stringArray1, " ", _jsx("br", {}), "Todo list:", _jsx("ol", { children: todoArray }), _jsx("hr", {})] })));
}
