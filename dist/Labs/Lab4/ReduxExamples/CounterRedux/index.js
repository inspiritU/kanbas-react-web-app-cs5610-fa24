import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
export default function CounterRedux() {
    const { count } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    return (_jsxs("div", Object.assign({ id: "wd-counter-redux" }, { children: [_jsx("h2", { children: "Counter Redux" }), _jsx("h3", { children: count }), _jsx("button", Object.assign({ onClick: () => dispatch(increment()), id: "wd-counter-redux-increment-click" }, { children: " Increment " })), _jsx("button", Object.assign({ onClick: () => dispatch(decrement()), id: "wd-counter-redux-decrement-click" }, { children: " Decrement " })), _jsx("hr", {})] })));
}
