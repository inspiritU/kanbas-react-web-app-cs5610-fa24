import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import CounterRedux from "./ReduxExamples/CounterRedux";
import HelloRedux from "./ReduxExamples/HelloRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./ReduxExamples/todos/TodoList";
export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (_jsxs("div", Object.assign({ id: "wd-passing-functions" }, { children: [_jsx("h2", { children: "Lab 4" }), _jsx(ClickEvent, {}), _jsx(PassingDataOnEvent, {}), _jsx(PassingFunctions, { theFunction: sayHello }), _jsx(EventObject, {}), _jsx(Counter, {}), _jsx(BooleanStateVariables, {}), _jsx(StringStateVariables, {}), _jsx(DateStateVariable, {}), _jsx(ObjectStateVariable, {}), _jsx(ArrayStateVariable, {}), _jsx(ParentStateComponent, {}), _jsx(ReduxExamples, {}), _jsx(HelloRedux, {}), _jsx(CounterRedux, {}), _jsx(AddRedux, {}), _jsx(TodoList, {})] })));
}
