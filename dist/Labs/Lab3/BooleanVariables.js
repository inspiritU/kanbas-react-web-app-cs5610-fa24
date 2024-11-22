import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BooleanVariables() {
    let numberVariable = 123, floatingPointNumber = 234.345;
    let true1 = true, false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123; // always use === not ==
    let true5 = floatingPointNumber !== 321.432;
    let false3 = numberVariable < 100;
    return (_jsxs("div", Object.assign({ id: "wd-boolean-variables" }, { children: [_jsx("h4", { children: "Boolean Variables" }), "true1     = ", true1 + "", "     ", _jsx("br", {}), "false1    = ", false1 + "", "    ", _jsx("br", {}), "false2    = ", false2 + "", "    ", _jsx("br", {}), "true2     = ", true2 + "", "     ", _jsx("br", {}), "true3     = ", true3 + "", "     ", _jsx("br", {}), "true4     = ", true4 + "", "     ", _jsx("br", {}), "true5     = ", true5 + "", "     ", _jsx("br", {}), "false3    = ", false3 + "", "    ", _jsx("hr", {})] })));
}
