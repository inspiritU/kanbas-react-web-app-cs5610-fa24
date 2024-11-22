import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineViewStream } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function CourseStatus() {
    return (_jsxs("div", Object.assign({ id: "wd-course-status", style: { width: "300px" } }, { children: [_jsx("h2", { children: "Course Status" }), _jsxs("div", Object.assign({ className: "d-flex" }, { children: [_jsx("div", Object.assign({ className: "w-50 pe-1" }, { children: _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 text-nowrap " }, { children: [_jsx(MdDoNotDisturbAlt, { className: "me-2 fs-5" }), " Unpublish "] })) })), _jsx("div", Object.assign({ className: "w-50" }, { children: _jsxs("button", Object.assign({ className: "btn btn-lg btn-success w-100" }, { children: [_jsx(FaCheckCircle, { className: "me-2 fs-5" }), " Publish "] })) }))] })), _jsx("br", {}), _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 mt-1 text-start" }, { children: [_jsx(BiImport, { className: "me-2 fs-5" }), " Import Existing Content "] })), _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 mt-1 text-start" }, { children: [_jsx(LiaFileImportSolid, { className: "me-2 fs-5" }), " Import from Commons "] })), _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 mt-1 text-start" }, { children: [_jsx(IoHomeOutline, { className: "me-2 fs-5" }), "  Choose Home Page "] })), _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 mt-1 text-start" }, { children: [_jsx(MdOutlineViewStream, { className: "me-2 fs-5" }), "  View Course Stream "] })), _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 mt-1 text-start" }, { children: [_jsx(TfiAnnouncement, { className: "me-2 fs-5" }), "  New Announcement "] })), _jsxs("button", Object.assign({ className: "btn btn-lg btn-secondary w-100 mt-1 text-start" }, { children: [_jsx(IoIosNotificationsOutline, { className: "me-2 fs-5" }), "  View Course Notifications "] }))] })));
}
