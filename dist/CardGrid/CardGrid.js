var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
var CardGrid = function (props) {
    var items = props.items;
    if (!items) {
        return null;
    }
    return (_jsx(SimpleGrid, __assign({ columns: { sm: 1, md: 2, lg: 3, xl: 4 }, spacing: 4, gap: 4 }, { children: items.map(function (item) { return (_jsx(Card, __assign({}, item), void 0)); }) }), void 0));
};
export default CardGrid;
