import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const hello = () => {
    alert("Hello World!");
};
const lifeIs = (good) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (_jsxs("div", Object.assign({ id: "wd-click-event" }, { children: [_jsx("h2", { children: "Click Event" }), _jsx("button", Object.assign({ onClick: hello, id: "wd-hello-world-click" }, { children: "Hello World!" })), _jsx("button", Object.assign({ onClick: () => lifeIs("Good!"), id: "wd-life-is-good-click" }, { children: "Life is Good!" })), _jsx("button", Object.assign({ onClick: () => {
                    hello();
                    lifeIs("Great!");
                }, id: "wd-life-is-great-click" }, { children: "Life is Great!" })), _jsx("hr", {})] })));
}
