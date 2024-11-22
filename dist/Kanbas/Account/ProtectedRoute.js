import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
    const { currentUser } = useSelector((state) => state.accountReducer);
    if (currentUser) {
        return children;
    }
    else {
        return _jsx(Navigate, { to: "/Kanbas/Account/Signin" });
    }
}
