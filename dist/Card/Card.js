"use strict";
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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var WithLink = function (props) {
    return props.url ? ((0, jsx_runtime_1.jsx)(react_1.LinkOverlay, __assign({ as: react_router_dom_1.Link, to: props.url, w: "100%" }, { children: props.children }), void 0)) : ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({ w: "100%" }, { children: props.children }), void 0));
};
var Card = function (props) {
    var title = props.title, padding = props.padding, url = props.url, spacing = props.spacing, _a = props.width, width = _a === void 0 ? "100%" : _a;
    return ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({ as: url ? react_1.LinkBox : undefined, _hover: { shadow: url ? "base" : "initial" }, bg: (0, react_1.useColorModeValue)("white", "gray.700"), rounded: "md", borderWidth: 1, overflow: "hidden", width: width }, { children: (0, jsx_runtime_1.jsxs)(WithLink, __assign({ url: url }, { children: [props.img && ((0, jsx_runtime_1.jsx)(react_1.AspectRatio, __assign({ ratio: 16 / 9 }, { children: (0, jsx_runtime_1.jsx)(react_1.Image, { w: "100%", objectFit: "cover", src: props.img, fit: "fill" }, void 0) }), void 0)), (0, jsx_runtime_1.jsxs)(react_1.Stack, __assign({ p: padding !== null && padding !== void 0 ? padding : 4, spacing: spacing !== null && spacing !== void 0 ? spacing : 2, w: "100%" }, { children: [title && ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({ fontWeight: "semibold", fontSize: "lg", noOfLines: 2 }, { children: title }), void 0)), props.children] }), void 0)] }), void 0) }), void 0));
};
exports["default"] = Card;
