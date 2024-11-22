import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Event Object" }), _jsx("button", Object.assign({ onClick: (e) => handleClick(e), className: "btn btn-primary", id: "wd-display-event-obj-click" }, { children: "Display Event Object" })), _jsx("pre", { children: JSON.stringify(event, null, 2) }), _jsx("hr", {})] }));
}
