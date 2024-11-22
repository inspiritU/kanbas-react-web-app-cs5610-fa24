import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from './BackgroundColors';
import Borders from './Borders';
import Paddings from './Padding';
import Margins from './Margins';
import RoundedCorners from './Corners';
import Dimensions from './Dimensions';
import Positions from './Positions';
import Zindex from './Zindex';
import Float from './Float';
import GridLayout from './GridLayout';
import Flex from './Flex';
import BootstrapGrids from './BootstrapGrids';
import ScreenSizeLabel from './ScreenSizeLabel';
import BootstrapTables from './BootstrapTables';
import BootstrapLists from './BootstrapLists';
import BootstrapForms from './BootstrapForms';
import BootstrapNavigation from './BootstrapNavigation';
export default function Lab2() {
    return (_jsxs("div", Object.assign({ className: "container" }, { children: [_jsx("h2", { children: "Lab 2 - Cascading Style Sheets" }), _jsx("h3", { children: "Styling with the STYLE attribute" }), _jsxs("div", Object.assign({ id: "wd-css-id-selectors" }, { children: [_jsx("h3", { children: "ID selectors" }), _jsx("p", Object.assign({ id: "wd-id-selector-1" }, { children: "Instead of changing the look and feel of all the elements of the same name, e.g., P, we can refer to a specific element by its ID" })), _jsx("p", Object.assign({ id: "wd-id-selector-2" }, { children: "Here's another paragraph using a different ID and a different look and feel" }))] })), _jsxs("div", Object.assign({ id: "wd-css-class-selectors" }, { children: [_jsx("h3", { children: "Class selectors" }), _jsx("p", Object.assign({ className: "wd-class-selector" }, { children: "Instead of using IDs to refer to elements, you can use an element's CLASS attribute" })), _jsx("h4", Object.assign({ className: "wd-class-selector" }, { children: "This heading has same style as paragraph above" }))] })), _jsx("div", Object.assign({ id: "wd-css-document-structure" }, { children: _jsxs("div", Object.assign({ className: "wd-selector-1" }, { children: [_jsx("h3", { children: "Document structure selectors" }), _jsxs("div", Object.assign({ className: "wd-selector-2" }, { children: ["Selectors can be combined to refer elements in particular places in the document", _jsxs("p", Object.assign({ className: "wd-selector-3" }, { children: ["This paragraph's red background is referenced as", _jsx("br", {}), ".selector-2 .selector3", _jsx("br", {}), "meaning the descendant of some ancestor.", _jsx("br", {}), _jsx("span", Object.assign({ className: "wd-selector-4" }, { children: "Whereas this span is a direct child of its parent" })), _jsx("br", {}), "You can combine these relationships to create specific styles depending on the document structure"] }))] }))] })) })), _jsx(ForegroundColors, {}), _jsx(BackgroundColors, {}), _jsx(Borders, {}), _jsx(Paddings, {}), _jsx(Margins, {}), _jsx(RoundedCorners, {}), _jsx(Dimensions, {}), _jsx(Positions, {}), _jsx(Zindex, {}), _jsx(Float, {}), _jsx(GridLayout, {}), _jsx(Flex, {}), _jsx(BootstrapGrids, {}), _jsx(ScreenSizeLabel, {}), _jsx(BootstrapTables, {}), _jsx(BootstrapLists, {}), _jsx(BootstrapForms, {}), _jsx(BootstrapNavigation, {})] })));
}
