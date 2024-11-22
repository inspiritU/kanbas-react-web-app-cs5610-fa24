import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (_jsxs("div", { children: [_jsx("h2", { children: "Object State Variables" }), _jsx("pre", { children: JSON.stringify(person, null, 2) }), _jsx("input", { defaultValue: person.name, onChange: (e) => setPerson(Object.assign(Object.assign({}, person), { name: e.target.value })) }), _jsx("input", { defaultValue: person.age, onChange: (e) => setPerson(Object.assign(Object.assign({}, person), { age: parseInt(e.target.value) })) }), _jsx("hr", {})] }));
}
