import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
export default function GreenCheckmark() {
    return (_jsxs("span", Object.assign({ className: "me-1 position-relative" }, { children: [_jsx(FaCheckCircle, { style: { top: "2px" }, className: "text-success me-1 position-absolute fs-5" }), _jsx(FaCircle, { className: "text-white me-1 fs-6" })] })));
}
