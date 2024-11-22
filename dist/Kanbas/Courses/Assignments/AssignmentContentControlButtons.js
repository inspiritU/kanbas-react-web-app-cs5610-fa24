import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
export default function AssignmentContentControlButtons({ id, deleteAssignment, editAssignment }) {
    return (_jsxs("div", Object.assign({ className: "float-end" }, { children: [_jsx(FaPencil, { onClick: () => editAssignment(id), className: "text-primary me-3" }), _jsx(FaTrash, { className: "text-danger me-2 mb-1", onClick: () => deleteAssignment(id) }), _jsx(GreenCheckmark, {}), _jsx(IoEllipsisVertical, { className: "fs-4" })] })));
}
