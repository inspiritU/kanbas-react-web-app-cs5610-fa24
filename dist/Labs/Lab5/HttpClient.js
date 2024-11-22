var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import * as client from "./client";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    const fetchWelcomeOnClick = () => __awaiter(this, void 0, void 0, function* () {
        const message = yield client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    });
    const fetchWelcomeOnLoad = () => __awaiter(this, void 0, void 0, function* () {
        const welcome = yield client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    });
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);
    return (_jsxs("div", { children: [_jsx("h3", { children: "HTTP Client" }), " ", _jsx("hr", {}), _jsx("h4", { children: "Requesting on Click" }), _jsx("button", Object.assign({ className: "btn btn-primary me-2", onClick: fetchWelcomeOnClick }, { children: "Fetch Welcome" })), " ", _jsx("br", {}), "Response from server: ", _jsx("b", { children: welcomeOnClick }), _jsx("h4", { children: "Requesting on Load" }), "Response from server: ", _jsx("b", { children: welcomeOnLoad }), _jsx("hr", {})] }));
}
