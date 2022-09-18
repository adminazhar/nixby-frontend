"use strict";
exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 5110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8369);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8220);
// ** MUI Imports


// ** Hooks Imports

const Chip = (props)=>{
    // ** Props
    const { sx , skin , color  } = props;
    // ** Hook
    const bgColors = (0,src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const colors = {
        primary: {
            ...bgColors.primaryLight
        },
        secondary: {
            ...bgColors.secondaryLight
        },
        success: {
            ...bgColors.successLight
        },
        error: {
            ...bgColors.errorLight
        },
        warning: {
            ...bgColors.warningLight
        },
        info: {
            ...bgColors.infoLight
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...props,
        variant: "filled",
        ...skin === "light" && {
            className: "MuiChip-light"
        },
        sx: skin === "light" && color ? Object.assign(colors[color], sx) : sx
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chip);


/***/ })

};
;