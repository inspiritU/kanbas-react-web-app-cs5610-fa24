import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    return (_jsxs("div", Object.assign({ id: "wd-variable-types" }, { children: [_jsx("h4", { children: "Variables Types" }), "numberVariable = ", numberVariable, _jsx("br", {}), "floatingPointNumber = ", floatingPointNumber, _jsx("br", {}), "stringVariable = ", stringVariable, _jsx("br", {}), "booleanVariable = ", booleanVariable + "", _jsx("br", {}), "isNumber = ", isNumber, _jsx("br", {}), "isString = ", isString, _jsx("br", {}), "isBoolean = ", isBoolean, _jsx("hr", {})] })));
}
