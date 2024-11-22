import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHtmlDateString = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
    return (_jsxs("div", Object.assign({ id: "wd-date-state-variables" }, { children: [_jsx("h2", { children: "Date State Variables" }), _jsx("h3", { children: JSON.stringify(startDate) }), _jsx("h3", { children: dateObjectToHtmlDateString(startDate) }), _jsx("input", { className: "form-control", type: "date", defaultValue: dateObjectToHtmlDateString(startDate), onChange: (e) => setStartDate(new Date(e.target.value)) }), _jsx("hr", {})] })));
}
