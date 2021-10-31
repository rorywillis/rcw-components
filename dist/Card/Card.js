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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, useColorModeValue, Image, LinkBox, Stack, LinkOverlay, AspectRatio, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
var WithLink = function (props) {
    return props.url ? (_jsx(LinkOverlay, __assign({ as: Link, to: props.url, w: "100%" }, { children: props.children }), void 0)) : (_jsx(Box, __assign({ w: "100%" }, { children: props.children }), void 0));
};
var Card = function (props) {
    var title = props.title, padding = props.padding, url = props.url, spacing = props.spacing, rest = __rest(props, ["title", "padding", "url", "spacing"]);
    return (_jsx(Box, __assign({ as: url ? LinkBox : undefined, _hover: { shadow: url ? "base" : "initial" }, bg: useColorModeValue("white", "gray.700"), rounded: "md", borderWidth: 1, overflow: "hidden" }, rest, { children: _jsxs(WithLink, __assign({ url: url }, { children: [props.img && (_jsx(AspectRatio, __assign({ ratio: 16 / 9 }, { children: _jsx(Image, { w: "100%", objectFit: "cover", src: props.img, fit: "fill" }, void 0) }), void 0)), _jsxs(Stack, __assign({ p: padding !== null && padding !== void 0 ? padding : 4, spacing: spacing !== null && spacing !== void 0 ? spacing : 2, w: "100%" }, { children: [title && (_jsx(Box, __assign({ fontWeight: "semibold", fontSize: "lg", noOfLines: 2 }, { children: title }), void 0)), props.children] }), void 0)] }), void 0) }), void 0));
};
export default Card;
//# sourceMappingURL=Card.js.map