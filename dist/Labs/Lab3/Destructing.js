import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;
    return (_jsxs("div", Object.assign({ id: "wd-destructing" }, { children: [_jsx("h2", { children: "Destructing" }), _jsx("h3", { children: "Object Destructing" }), "const { name, age } = { name: \"John\", age: 25 }", _jsx("br", {}), _jsx("br", {}), "name = ", name, _jsx("br", {}), "age = ", age, _jsx("h3", { children: "Array Destructing" }), "const [first, second, third] = [\"one\",\"two\",\"three\"]", _jsx("br", {}), _jsx("br", {}), "first = ", first, _jsx("br", {}), "second = ", second, _jsx("br", {}), "third = ", third, _jsx("hr", {})] })));
}
