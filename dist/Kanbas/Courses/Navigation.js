import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink, useParams, useLocation } from "react-router-dom";
const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
export default function CoursesNavigation() {
    const { cid } = useParams(); // Get course ID from URL
    const location = useLocation(); // Get current pathname
    return (_jsx("div", Object.assign({ id: "wd-courses-navigation", className: "wd list-group fs-5 rounded-0" }, { children: links.map((link) => {
            const path = `/Kanbas/Courses/${cid}/${link}`;
            return (_jsx(NavLink, Object.assign({ to: path, className: ({ isActive }) => "list-group-item border border-0" +
                    (isActive ? " list-group-item active" : " list-group-item text-danger") }, { children: link }), link));
        }) })));
}
