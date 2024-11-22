import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
export default function HelloRedux() {
    const { message } = useSelector((state) => state.helloReducer);
    return (_jsxs("div", Object.assign({ id: "wd-hello-redux" }, { children: [_jsx("h3", { children: "Hello Redux" }), _jsx("h4", { children: message }), " ", _jsx("hr", {})] })));
}
