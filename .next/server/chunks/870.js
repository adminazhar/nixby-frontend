"use strict";
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 7870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_core_components_mui_chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5110);
/* harmony import */ var src_core_components_mui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8769);
/* harmony import */ var mdi_material_ui_ChevronUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7188);
/* harmony import */ var mdi_material_ui_ChevronUp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ChevronUp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mdi_material_ui_ChevronDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8867);
/* harmony import */ var mdi_material_ui_ChevronDown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ChevronDown__WEBPACK_IMPORTED_MODULE_8__);
// ** MUI Imports





// ** Custom Components Imports


// ** Icons Imports


const CardStatsVertical = (props)=>{
    // ** Props
    const { title , color , icon , stats , trend , chipText , trendNumber  } = props;
    const TrendIcon = trend === "positive" ? (mdi_material_ui_ChevronUp__WEBPACK_IMPORTED_MODULE_7___default()) : (mdi_material_ui_ChevronDown__WEBPACK_IMPORTED_MODULE_8___default());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), {
            sx: {
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                    sx: {
                        mb: 6,
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_mui_avatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            skin: "light",
                            variant: "rounded",
                            color: color,
                            children: icon
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    variant: "subtitle2",
                                    sx: {
                                        color: trend === "positive" ? "success.main" : "error.main"
                                    },
                                    children: trendNumber
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TrendIcon, {
                                    fontSize: "small",
                                    sx: {
                                        color: trend === "positive" ? "success.main" : "error.main"
                                    }
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                    variant: "h6",
                    sx: {
                        mb: 1
                    },
                    children: stats
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                    variant: "body2",
                    sx: {
                        mb: 5
                    },
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_mui_chip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    skin: "light",
                    size: "small",
                    label: chipText,
                    color: "secondary",
                    sx: {
                        height: 20,
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        alignSelf: "flex-start",
                        color: "text.secondary"
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardStatsVertical);
CardStatsVertical.defaultProps = {
    color: "primary",
    trend: "positive"
};


/***/ })

};
;