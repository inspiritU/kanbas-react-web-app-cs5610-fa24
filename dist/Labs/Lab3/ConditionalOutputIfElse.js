import { jsx as _jsx } from "react/jsx-runtime";
const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if (loggedIn) {
        return (_jsx("h2", Object.assign({ id: "wd-conditional-output-if-else-welcome" }, { children: "Welcome If Else" })));
    }
    else {
        return (_jsx("h2", Object.assign({ id: "wd-conditional-output-if-else-login" }, { children: "Please login If Else" })));
    }
};
export default ConditionalOutputIfElse;
