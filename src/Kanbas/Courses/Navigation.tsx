import { NavLink, useParams, useLocation } from "react-router-dom";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CoursesNavigation() {
    const { cid } = useParams();  // Get course ID from URL
    const location = useLocation();  // Get current pathname

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                const path = `/Kanbas/Courses/${cid}/${link}`;
                return (
                    <NavLink
                        key={link}
                        to={path}
                        className={({ isActive }) =>
                            "list-group-item border border-0" +
                            (isActive ? " list-group-item active" : " list-group-item text-danger")
                        }
                    >
                        {link}
                    </NavLink>
                );
            })}
        </div>
    );
}