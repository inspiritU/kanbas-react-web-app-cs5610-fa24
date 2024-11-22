import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function ModuleControlButtons({ moduleId, deleteModule, editModule }) {
    return (_jsxs("div", Object.assign({ className: "float-end" }, { children: [_jsx(FaPencil, { onClick: () => editModule(moduleId), className: "text-primary me-3" }), _jsx(FaTrash, { className: "text-danger me-2 mb-1", onClick: () => deleteModule(moduleId) }), _jsx(GreenCheckmark, {}), _jsx(BsPlus, { className: "fs-1" }), _jsx(IoEllipsisVertical, { className: "fs-4" })] })));
}
