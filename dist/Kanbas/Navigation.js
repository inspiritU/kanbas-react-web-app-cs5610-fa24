import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "Labs", path: "/Labs", icon: LiaCogSolid },
    ];
    return (_jsxs("div", Object.assign({ id: "wd-kanbas-navigation", style: { width: 120 }, className: "list-group rounded-0 position-fixed\n         bottom-0 top-0 d-none d-md-block bg-black z-2" }, { children: [_jsx("a", Object.assign({ id: "wd-neu-link", target: "_blank", href: "https://www.northeastern.edu/", className: "list-group-item bg-black border-0 text-center" }, { children: _jsx("img", { src: "/images/NEU.png", width: "75px" }) })), _jsxs(Link, Object.assign({ to: "/Kanbas/Account", className: `list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}` }, { children: [_jsx(FaRegCircleUser, { className: `fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}` }), _jsx("br", {}), "Account"] })), links.map((link) => (_jsxs(Link, Object.assign({ to: link.path, className: `list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}` }, { children: [link.icon({ className: "fs-1 text-danger" }), _jsx("br", {}), link.label] }), link.path)))] })));
}
