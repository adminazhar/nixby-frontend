"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const createEmotionCache = ()=>{
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "css"
    });
};


/***/ }),

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ hexToRGBA)
/* harmony export */ });
/**
 ** Hex color to RGBA color
 */ const hexToRGBA = (hexCode, opacity)=>{
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


/***/ }),

/***/ 1391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/configs/themeConfig.ts
var themeConfig = __webpack_require__(7187);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "axios-mock-adapter"
const external_axios_mock_adapter_namespaceObject = require("axios-mock-adapter");
var external_axios_mock_adapter_default = /*#__PURE__*/__webpack_require__.n(external_axios_mock_adapter_namespaceObject);
;// CONCATENATED MODULE: ./src/@fake-db/mock.ts


const mock = new (external_axios_mock_adapter_default())((external_axios_default()));
/* harmony default export */ const _fake_db_mock = (mock);

;// CONCATENATED MODULE: ./src/@fake-db/index.ts

_fake_db_mock.onAny().passThrough();

;// CONCATENATED MODULE: external "react-hot-toast"
const external_react_hot_toast_namespaceObject = require("react-hot-toast");
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "mdi-material-ui/ArrowUp"
const ArrowUp_namespaceObject = require("mdi-material-ui/ArrowUp");
var ArrowUp_default = /*#__PURE__*/__webpack_require__.n(ArrowUp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.ts
var hex_to_rgba = __webpack_require__(969);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/appBar/index.tsx
// ** React Imports

// ** MUI Imports




// ** Util Import

const AppBar = (0,styles_.styled)((AppBar_default()))(({ theme  })=>({
        transition: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 6),
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const Toolbar = (0,styles_.styled)((Toolbar_default()))(({ theme  })=>({
        width: "100%",
        padding: "0 !important",
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition: "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out"
    }));
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings , verticalAppBarContent: userVerticalAppBarContent  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    const scrollTrigger = useScrollTrigger_default()({
        threshold: 0,
        disableHysteresis: true
    });
    // ** Vars
    const { skin , appBar , appBarBlur , contentWidth  } = settings;
    const appBarFixedStyles = ()=>{
        return {
            px: `${theme.spacing(6)} !important`,
            ...appBarBlur && {
                backdropFilter: "blur(8px)"
            },
            boxShadow: theme.shadows[skin === "bordered" ? 0 : 3],
            backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, appBarBlur ? 0.9 : 1),
            ...skin === "bordered" && {
                border: `1px solid ${theme.palette.divider}`,
                borderTopWidth: 0
            }
        };
    };
    if (appBar === "hidden") {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        position: appBar === "fixed" ? "sticky" : "static",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...appBar === "fixed" && scrollTrigger && {
                    ...appBarFixedStyles()
                },
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
                    }
                }
            },
            children: userVerticalAppBarContent && userVerticalAppBarContent(props) || null
        })
    });
};
/* harmony default export */ const appBar = (LayoutAppBar);

;// CONCATENATED MODULE: external "react-perfect-scrollbar"
const external_react_perfect_scrollbar_namespaceObject = require("react-perfect-scrollbar");
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Radio"
const Radio_namespaceObject = require("@mui/material/Radio");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Switch"
const Switch_namespaceObject = require("@mui/material/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/InputLabel"
const InputLabel_namespaceObject = require("@mui/material/InputLabel");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/RadioGroup"
const RadioGroup_namespaceObject = require("@mui/material/RadioGroup");
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/Cog"
var Cog_ = __webpack_require__(5489);
var Cog_default = /*#__PURE__*/__webpack_require__.n(Cog_);
;// CONCATENATED MODULE: external "mdi-material-ui/Check"
const Check_namespaceObject = require("mdi-material-ui/Check");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/Close"
const Close_namespaceObject = require("mdi-material-ui/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: ./src/@core/hooks/useSettings.ts
var useSettings = __webpack_require__(8975);
;// CONCATENATED MODULE: ./src/@core/components/customizer/index.tsx
// ** React Imports


// ** Third Party Components

// ** MUI Imports











// ** Icons Imports



// ** Hook Import

const Toggler = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        right: 0,
        top: "50%",
        display: "flex",
        cursor: "pointer",
        position: "fixed",
        zIndex: theme.zIndex.modal,
        padding: theme.spacing(2.5),
        transform: "translateY(-50%)",
        backgroundColor: theme.palette.primary.main,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius
    }));
const Drawer = (0,styles_.styled)((Drawer_default()))(({ theme  })=>({
        width: 400,
        zIndex: theme.zIndex.modal,
        "& .MuiFormControlLabel-root": {
            marginRight: "0.6875rem"
        },
        "& .MuiDrawer-paper": {
            border: 0,
            width: 400,
            zIndex: theme.zIndex.modal,
            boxShadow: theme.shadows[9]
        }
    }));
const CustomizerSpacing = (0,styles_.styled)("div")(({ theme  })=>({
        padding: theme.spacing(5, 6)
    }));
const ColorBox = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 8,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        margin: theme.spacing(0, 1.5),
        color: theme.palette.common.white,
        transition: "box-shadow .25s ease"
    }));
const Customizer = ()=>{
    // ** State
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    // ** Hook
    const { settings , saveSettings  } = (0,useSettings/* useSettings */.r)();
    // ** Vars
    const { mode , skin , appBar , footer , layout , navHidden , direction , appBarBlur , themeColor , navCollapsed , contentWidth , verticalNavToggleType  } = settings;
    const handleChange = (field, value)=>{
        saveSettings({
            ...settings,
            [field]: value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "customizer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Toggler, {
                className: "customizer-toggler",
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx((Cog_default()), {
                    fontSize: "small",
                    sx: {
                        color: "common.white"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Drawer, {
                open: open,
                hideBackdrop: true,
                anchor: "right",
                variant: "persistent",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        className: "customizer-header",
                        sx: {
                            position: "relative",
                            p: (theme)=>theme.spacing(3.5, 5),
                            borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                sx: {
                                    fontWeight: 600,
                                    textTransform: "uppercase"
                                },
                                children: "Theme Customizer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: "Customize & Preview in Real Time"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: ()=>setOpen(false),
                                sx: {
                                    right: 20,
                                    top: "50%",
                                    position: "absolute",
                                    color: "text.secondary",
                                    transform: "translateY(-50%)"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                    fontSize: "small"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_perfect_scrollbar_default()), {
                        options: {
                            wheelPropagation: false
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                                className: "customizer-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "p",
                                        variant: "caption",
                                        sx: {
                                            mb: 4,
                                            color: "text.disabled",
                                            textTransform: "uppercase"
                                        },
                                        children: "Theming"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Skin"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                row: true,
                                                value: skin,
                                                onChange: (e)=>handleChange("skin", e.target.value),
                                                sx: {
                                                    "& .MuiFormControlLabel-label": {
                                                        fontSize: ".875rem",
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "default",
                                                        label: "Default",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "bordered",
                                                        label: "Bordered",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    layout === "horizontal" ? null : /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "semi-dark",
                                                        label: "Semi Dark",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Mode"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        htmlFor: "change-mode",
                                                        sx: {
                                                            cursor: "pointer",
                                                            fontSize: "0.875rem",
                                                            color: "text.secondary"
                                                        },
                                                        children: "Light"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                        id: "change-mode",
                                                        name: "change-mode",
                                                        checked: mode === "dark",
                                                        onChange: (e)=>handleChange("mode", e.target.checked ? "dark" : "light")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        htmlFor: "change-mode",
                                                        sx: {
                                                            cursor: "pointer",
                                                            fontSize: "0.875rem",
                                                            color: "text.secondary"
                                                        },
                                                        children: "Dark"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    mb: 2.5
                                                },
                                                children: "Primary Color"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                        onClick: ()=>handleChange("themeColor", "primary"),
                                                        sx: {
                                                            ml: 0,
                                                            backgroundColor: "#666CFF",
                                                            ...themeColor === "primary" ? {
                                                                boxShadow: 9
                                                            } : {
                                                                "&:hover": {
                                                                    boxShadow: 4
                                                                }
                                                            }
                                                        },
                                                        children: themeColor === "primary" ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                            fontSize: "small"
                                                        }) : null
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                        onClick: ()=>handleChange("themeColor", "secondary"),
                                                        sx: {
                                                            backgroundColor: "secondary.main",
                                                            ...themeColor === "secondary" ? {
                                                                boxShadow: 9
                                                            } : {
                                                                "&:hover": {
                                                                    boxShadow: 4
                                                                }
                                                            }
                                                        },
                                                        children: themeColor === "secondary" ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                            fontSize: "small"
                                                        }) : null
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                        onClick: ()=>handleChange("themeColor", "success"),
                                                        sx: {
                                                            backgroundColor: "success.main",
                                                            ...themeColor === "success" ? {
                                                                boxShadow: 9
                                                            } : {
                                                                "&:hover": {
                                                                    boxShadow: 4
                                                                }
                                                            }
                                                        },
                                                        children: themeColor === "success" ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                            fontSize: "small"
                                                        }) : null
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                        onClick: ()=>handleChange("themeColor", "error"),
                                                        sx: {
                                                            backgroundColor: "error.main",
                                                            ...themeColor === "error" ? {
                                                                boxShadow: 9
                                                            } : {
                                                                "&:hover": {
                                                                    boxShadow: 4
                                                                }
                                                            }
                                                        },
                                                        children: themeColor === "error" ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                            fontSize: "small"
                                                        }) : null
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                        onClick: ()=>handleChange("themeColor", "warning"),
                                                        sx: {
                                                            backgroundColor: "warning.main",
                                                            ...themeColor === "warning" ? {
                                                                boxShadow: 9
                                                            } : {
                                                                "&:hover": {
                                                                    boxShadow: 4
                                                                }
                                                            }
                                                        },
                                                        children: themeColor === "warning" ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                            fontSize: "small"
                                                        }) : null
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                        onClick: ()=>handleChange("themeColor", "info"),
                                                        sx: {
                                                            mr: 0,
                                                            backgroundColor: "info.main",
                                                            ...themeColor === "info" ? {
                                                                boxShadow: 9
                                                            } : {
                                                                "&:hover": {
                                                                    boxShadow: 4
                                                                }
                                                            }
                                                        },
                                                        children: themeColor === "info" ? /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                            fontSize: "small"
                                                        }) : null
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                sx: {
                                    m: 0
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                                className: "customizer-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "p",
                                        variant: "caption",
                                        sx: {
                                            mb: 4,
                                            color: "text.disabled",
                                            textTransform: "uppercase"
                                        },
                                        children: "Layout"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Content Width"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                row: true,
                                                value: contentWidth,
                                                onChange: (e)=>handleChange("contentWidth", e.target.value),
                                                sx: {
                                                    "& .MuiFormControlLabel-label": {
                                                        fontSize: ".875rem",
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "full",
                                                        label: "Full",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "boxed",
                                                        label: "Boxed",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "AppBar Type"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                row: true,
                                                value: appBar,
                                                onChange: (e)=>handleChange("appBar", e.target.value),
                                                sx: {
                                                    "& .MuiFormControlLabel-label": {
                                                        fontSize: ".875rem",
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "fixed",
                                                        label: "Fixed",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "static",
                                                        label: "Static",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    layout === "horizontal" ? null : /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "hidden",
                                                        label: "Hidden",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Footer Type"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                row: true,
                                                value: footer,
                                                onChange: (e)=>handleChange("footer", e.target.value),
                                                sx: {
                                                    "& .MuiFormControlLabel-label": {
                                                        fontSize: ".875rem",
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "fixed",
                                                        label: "Fixed",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "static",
                                                        label: "Static",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "hidden",
                                                        label: "Hidden",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "AppBar Blur"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                name: "appBarBlur",
                                                checked: appBarBlur,
                                                onChange: (e)=>handleChange("appBarBlur", e.target.checked)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "RTL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                name: "direction",
                                                checked: direction === "rtl",
                                                onChange: (e)=>handleChange("direction", e.target.checked ? "rtl" : "ltr")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                sx: {
                                    m: 0
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                                className: "customizer-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "p",
                                        variant: "caption",
                                        sx: {
                                            mb: 4,
                                            color: "text.disabled",
                                            textTransform: "uppercase"
                                        },
                                        children: "Menu"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: layout === "horizontal" && appBar === "hidden" ? {} : 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Menu Layout"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                row: true,
                                                value: layout,
                                                onChange: (e)=>{
                                                    saveSettings({
                                                        ...settings,
                                                        layout: e.target.value,
                                                        lastLayout: e.target.value
                                                    });
                                                },
                                                sx: {
                                                    "& .MuiFormControlLabel-label": {
                                                        fontSize: ".875rem",
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "vertical",
                                                        label: "Vertical",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "horizontal",
                                                        label: "Horizontal",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    navHidden || layout === "horizontal" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Menu Toggle"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                row: true,
                                                value: verticalNavToggleType,
                                                onChange: (e)=>handleChange("verticalNavToggleType", e.target.value),
                                                sx: {
                                                    "& .MuiFormControlLabel-label": {
                                                        fontSize: ".875rem",
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "accordion",
                                                        label: "Accordion",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        value: "collapse",
                                                        label: "Collapse",
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    navHidden || layout === "horizontal" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Menu Collapsed"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                name: "navCollapsed",
                                                checked: navCollapsed,
                                                onChange: (e)=>handleChange("navCollapsed", e.target.checked)
                                            })
                                        ]
                                    }),
                                    layout === "horizontal" && appBar === "hidden" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "Menu Hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                name: "navHidden",
                                                checked: navHidden,
                                                onChange: (e)=>handleChange("navHidden", e.target.checked)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const customizer = (Customizer);

;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/SwipeableDrawer"
const SwipeableDrawer_namespaceObject = require("@mui/material/SwipeableDrawer");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/Drawer.tsx
// ** React Imports

// ** MUI Imports


const SwipeableDrawer = (0,styles_.styled)((SwipeableDrawer_default()))({
    overflowX: "hidden",
    transition: "width .25s ease-in-out",
    "& ul": {
        listStyle: "none"
    },
    "& .MuiListItem-gutters": {
        paddingLeft: 4,
        paddingRight: 4
    },
    "& .MuiDrawer-paper": {
        left: "unset",
        right: "unset",
        overflowX: "hidden",
        transition: "width .25s ease-in-out, box-shadow .25s ease-in-out"
    }
});
const Drawer_Drawer = (props)=>{
    // ** Props
    const { hidden , children , navHover , navWidth , settings , navVisible , setNavHover , setNavVisible , collapsedNavWidth , navigationBorderWidth  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { skin , navCollapsed  } = settings;
    const drawerColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                "& .MuiTypography-root": {
                    color: `rgba(${theme.palette.customColors.dark}, 0.87)`
                }
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                "& .MuiTypography-root": {
                    color: `rgba(${theme.palette.customColors.light}, 0.87)`
                }
            };
        } else return {};
    };
    const drawerBgColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                backgroundColor: theme.palette.customColors.darkBg
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                backgroundColor: theme.palette.customColors.lightBg
            };
        } else {
            return {
                backgroundColor: theme.palette.background.default
            };
        }
    };
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true),
        onClose: ()=>setNavVisible(false),
        ModalProps: {
            keepMounted: true // Better open performance on mobile.
        }
    };
    // Drawer Props for Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null,
        onClose: ()=>null,
        onMouseEnter: ()=>{
            setNavHover(true);
        },
        onMouseLeave: ()=>{
            setNavHover(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? "temporary" : "permanent",
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        sx: {
            width: navCollapsed ? collapsedNavWidth : navWidth
        },
        PaperProps: {
            sx: {
                ...drawerColor(),
                ...drawerBgColor(),
                width: navCollapsed && !navHover ? collapsedNavWidth : navWidth,
                ...!hidden && navCollapsed && navHover ? {
                    boxShadow: 10
                } : {},
                borderRight: navigationBorderWidth === 0 ? 0 : `${navigationBorderWidth}px solid ${theme.palette.divider}`
            }
        },
        children: children
    });
};
/* harmony default export */ const navigation_Drawer = (Drawer_Drawer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/components/UserIcon.tsx
// ** React Imports

const UserIcon = (props)=>{
    // ** Props
    const { icon , iconProps , componentType  } = props;
    const IconTag = icon;
    let styles;
    if (componentType === "search") {
    // Conditional Props based on component type, like have different font size or icon color
    /* styles = {
      color: 'blue',
      fontSize: '2rem'
    } */ } else if (componentType === "vertical-menu") {
    // Conditional Props based on component type, like have different font size or icon color
    /* styles = {
      color: 'red',
      fontSize: '1.5rem'
    } */ } else if (componentType === "horizontal-menu") {
    // Conditional Props based on component type, like have different font size or icon color
    /* styles = {
      color: 'green',
      fontSize: '1rem'
    } */ } else {
        return null;
    }
    // @ts-ignore
    return /*#__PURE__*/ jsx_runtime_.jsx(IconTag, {
        ...iconProps,
        style: {
            ...styles
        }
    });
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./src/layouts/components/Translations.tsx

const Translations = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: text
    });
};
/* harmony default export */ const components_Translations = (Translations);

;// CONCATENATED MODULE: ./src/@core/layouts/utils.ts
// ** Types
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (router, path)=>{
    if (Object.keys(router.query).length && path) {
        const arr = Object.keys(router.query);
        return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== "/";
    }
    return false;
};
/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */ const hasActiveChild = (item, currentURL)=>{
    const { children  } = item;
    if (!children) {
        return false;
    }
    for (const child of children){
        if (child.children) {
            if (hasActiveChild(child, currentURL)) {
                return true;
            }
        }
        const childPath = child.path;
        // Check if the child has a link and is active
        if (child && childPath && currentURL && (childPath === currentURL || currentURL.includes(childPath) && childPath !== "/")) {
            return true;
        }
    }
    return false;
};
/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */ const removeChildren = (children, openGroup, currentActiveGroup)=>{
    children.forEach((child)=>{
        if (!currentActiveGroup.includes(child.title)) {
            const index = openGroup.indexOf(child.title);
            if (index > -1) openGroup.splice(index, 1);
            // @ts-ignore
            if (child.children) removeChildren(child.children, openGroup, currentActiveGroup);
        }
    });
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavLink.tsx
// ** React Imports

// ** Next Imports


// ** MUI Imports







// ** Configs Import

// ** Custom Components Imports


// ** Utils

// ** Styled Components
const MenuNavLink = (0,styles_.styled)((ListItemButton_default()))(({ theme  })=>({
        width: "100%",
        borderRadius: 8,
        transition: "padding-left .25s ease-in-out",
        "&.active": {
            "&, &:hover": {
                backgroundColor: theme.palette.primary.light
            },
            "& .MuiTypography-root": {
                fontWeight: 500,
                color: `${theme.palette.common.white} !important`
            },
            "& .MuiListItemIcon-root": {
                color: `${theme.palette.common.white} !important`
            }
        }
    }));
const MenuItemTextMetaWrapper = (0,styles_.styled)((Box_default()))({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "opacity .25s ease-in-out",
    ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
        overflow: "hidden"
    }
});
const VerticalNavLink = ({ item , parent , navHover , settings , navVisible , isSubToSub , collapsedNavWidth , toggleNavVisibility , navigationBorderWidth  })=>{
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    const router = (0,router_.useRouter)();
    // ** Vars
    const { skin , navCollapsed  } = settings;
    const IconTag = parent && !item.icon ? themeConfig/* default.navSubItemIcon */.Z.navSubItemIcon : item.icon;
    const conditionalIconColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                color: `rgba(${theme.palette.customColors.dark}, ${parent ? 0.68 : 0.87})`
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                color: `rgba(${theme.palette.customColors.light}, ${parent ? 0.68 : 0.87})`
            };
        } else return {
            color: parent ? theme.palette.text.secondary : theme.palette.text.primary
        };
    };
    const conditionalBgColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                "&:hover": {
                    backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.05)`
                }
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                "&:hover": {
                    backgroundColor: `rgba(${theme.palette.customColors.light}, 0.05)`
                }
            };
        } else return {};
    };
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
        disablePadding: true,
        className: "nav-link",
        disabled: item.disabled || false,
        sx: {
            mt: 1.5,
            transition: "padding .25s ease-in-out",
            px: parent ? "0 !important" : `${theme.spacing(navCollapsed && !navHover ? 2 : 3)} !important`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            passHref: true,
            href: item.path === undefined ? "/" : `${item.path}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuNavLink, {
                component: "a",
                className: isNavLinkActive() ? "active" : "",
                ...item.openInNewTab ? {
                    target: "_blank"
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    py: 2.25,
                    ...conditionalBgColor(),
                    ...item.disabled ? {
                        pointerEvents: "none"
                    } : {
                        cursor: "pointer"
                    },
                    pr: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 3,
                    pl: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 4
                },
                children: [
                    isSubToSub ? null : /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                        sx: {
                            ...conditionalIconColor(),
                            transition: "margin .25s ease-in-out",
                            ...navCollapsed && !navHover ? {
                                mr: 0
                            } : {
                                mr: 2
                            },
                            ...parent ? {
                                ml: 2,
                                mr: 4
                            } : {} // This line should be after (navCollapsed && !navHover) condition for proper styling
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                            icon: IconTag,
                            componentType: "vertical-menu",
                            iconProps: {
                                sx: {
                                    ...!parent ? {
                                        fontSize: "1.5rem"
                                    } : {
                                        fontSize: "0.5rem"
                                    },
                                    ...parent && item.icon ? {
                                        fontSize: "0.875rem"
                                    } : {}
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextMetaWrapper, {
                        sx: {
                            ...isSubToSub ? {
                                ml: 8
                            } : {},
                            ...navCollapsed && !navHover ? {
                                opacity: 0
                            } : {
                                opacity: 1
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                ...(themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate || !themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && navCollapsed && !navHover) && {
                                    noWrap: true
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                                    text: item.title
                                })
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                size: "small",
                                label: item.badgeContent,
                                color: item.badgeColor || "primary",
                                sx: {
                                    ml: 1.5,
                                    "& .MuiChip-label": {
                                        px: 2.5,
                                        lineHeight: 1.385,
                                        textTransform: "capitalize"
                                    }
                                }
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

;// CONCATENATED MODULE: external "@mui/material/Collapse"
const Collapse_namespaceObject = require("@mui/material/Collapse");
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_namespaceObject);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: external "mdi-material-ui/ChevronLeft"
const ChevronLeft_namespaceObject = require("mdi-material-ui/ChevronLeft");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/ChevronRight"
var ChevronRight_ = __webpack_require__(8973);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavGroup.tsx
// ** React Imports


// ** Next Import

// ** MUI Imports








// ** Third Party Imports

// ** Icons Imports


// ** Configs Import

// ** Utils

// ** Custom Components Imports



const MenuItemTextWrapper = (0,styles_.styled)((Box_default()))(()=>({
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        transition: "opacity .25s ease-in-out",
        ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
            overflow: "hidden"
        }
    }));
const MenuGroupToggleRightIcon = (0,styles_.styled)((ChevronRight_default()))(({ theme  })=>({
        color: theme.palette.text.secondary,
        transition: "transform .25s ease-in-out"
    }));
const MenuGroupToggleLeftIcon = (0,styles_.styled)((ChevronLeft_default()))(({ theme  })=>({
        color: theme.palette.text.secondary,
        transition: "transform .25s ease-in-out"
    }));
const VerticalNavGroup = (props)=>{
    // ** Props
    const { item , parent , settings , navHover , navVisible , isSubToSub , groupActive , setGroupActive , collapsedNavWidth , currentActiveGroup , setCurrentActiveGroup , navigationBorderWidth  } = props;
    // ** Hooks & Vars
    const theme = (0,styles_.useTheme)();
    const router = (0,router_.useRouter)();
    const currentURL = router.pathname;
    const { skin , direction , navCollapsed , verticalNavToggleType  } = settings;
    // ** Accordion menu group open toggle
    const toggleActiveGroup = (item, parent)=>{
        let openGroup = groupActive;
        // ** If Group is already open and clicked, close the group
        if (openGroup.includes(item.title)) {
            openGroup.splice(openGroup.indexOf(item.title), 1);
            // If clicked Group has open group children, Also remove those children to close those groups
            if (item.children) {
                removeChildren(item.children, openGroup, currentActiveGroup);
            }
        } else if (parent) {
            // ** If Group clicked is the child of an open group, first remove all the open groups under that parent
            if (parent.children) {
                removeChildren(parent.children, openGroup, currentActiveGroup);
            }
            // ** After removing all the open groups under that parent, add the clicked group to open group array
            if (!openGroup.includes(item.title)) {
                openGroup.push(item.title);
            }
        } else {
            // ** If clicked on another group that is not active or open, create openGroup array from scratch
            // ** Empty Open Group array
            openGroup = [];
            // ** push Current Active Group To Open Group array
            if (currentActiveGroup.every((elem)=>groupActive.includes(elem))) {
                openGroup.push(...currentActiveGroup);
            }
            // ** Push current clicked group item to Open Group array
            if (!openGroup.includes(item.title)) {
                openGroup.push(item.title);
            }
        }
        setGroupActive([
            ...openGroup
        ]);
    };
    // ** Menu Group Click
    const handleGroupClick = ()=>{
        const openGroup = groupActive;
        if (verticalNavToggleType === "collapse") {
            if (openGroup.includes(item.title)) {
                openGroup.splice(openGroup.indexOf(item.title), 1);
            } else {
                openGroup.push(item.title);
            }
            setGroupActive([
                ...openGroup
            ]);
        } else {
            toggleActiveGroup(item, parent);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (hasActiveChild(item, currentURL)) {
            if (!groupActive.includes(item.title)) groupActive.push(item.title);
        } else {
            const index = groupActive.indexOf(item.title);
            if (index > -1) groupActive.splice(index, 1);
        }
        setGroupActive([
            ...groupActive
        ]);
        setCurrentActiveGroup([
            ...groupActive
        ]);
        // Empty Active Group When Menu is collapsed and not hovered, to fix issue route change
        if (navCollapsed && !navHover) {
            setGroupActive([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.asPath
    ]);
    (0,external_react_.useEffect)(()=>{
        if (navCollapsed && !navHover) {
            setGroupActive([]);
        }
        if (navCollapsed && navHover || groupActive.length === 0 && !navCollapsed) {
            setGroupActive([
                ...currentActiveGroup
            ]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        navCollapsed,
        navHover
    ]);
    (0,external_react_.useEffect)(()=>{
        if (groupActive.length === 0 && !navCollapsed) {
            setGroupActive([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        navHover
    ]);
    const IconTag = parent && !item.icon ? themeConfig/* default.navSubItemIcon */.Z.navSubItemIcon : item.icon;
    const menuGroupCollapsedStyles = navCollapsed && !navHover ? {
        opacity: 0
    } : {
        opacity: 1
    };
    const conditionalIconColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                color: `rgba(${theme.palette.customColors.dark}, ${parent && item.children ? 0.68 : 0.87})`
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                color: `rgba(${theme.palette.customColors.light}, ${parent && item.children ? 0.68 : 0.87})`
            };
        } else return {
            color: parent && item.children ? theme.palette.text.secondary : theme.palette.text.primary
        };
    };
    const conditionalArrowIconColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                color: `rgba(${theme.palette.customColors.dark}, 0.68)`
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                color: `rgba(${theme.palette.customColors.light}, 0.68)`
            };
        } else return {};
    };
    const conditionalBgColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                "&:hover": {
                    backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.05)`
                },
                "&.Mui-selected": {
                    backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.08)`,
                    "&:hover": {
                        backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.08)`
                    }
                }
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                "&:hover": {
                    backgroundColor: `rgba(${theme.palette.customColors.light}, 0.05)`
                },
                "&.Mui-selected": {
                    backgroundColor: `rgba(${theme.palette.customColors.light}, 0.08)`,
                    "&:hover": {
                        backgroundColor: `rgba(${theme.palette.customColors.light}, 0.08)`
                    }
                }
            };
        } else {
            return {
                "&.Mui-selected": {
                    backgroundColor: theme.palette.action.selected,
                    "&:hover": {
                        backgroundColor: theme.palette.action.selected
                    }
                }
            };
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
            disablePadding: true,
            className: "nav-group",
            onClick: handleGroupClick,
            sx: {
                mt: 1.5,
                flexDirection: "column",
                transition: "padding .25s ease-in-out",
                px: parent && item.children ? "0 !important" : `${theme.spacing(navCollapsed && !navHover ? 2 : 3)} !important`
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                    className: external_clsx_default()({
                        "Mui-selected": groupActive.includes(item.title) || currentActiveGroup.includes(item.title)
                    }),
                    sx: {
                        py: 2.25,
                        width: "100%",
                        borderRadius: "8px",
                        ...conditionalBgColor(),
                        transition: "padding-left .25s ease-in-out",
                        pr: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 3,
                        pl: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 4
                    },
                    children: [
                        isSubToSub ? null : /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                            sx: {
                                ...conditionalIconColor(),
                                transition: "margin .25s ease-in-out",
                                ...parent && navCollapsed && !navHover ? {} : {
                                    mr: 2
                                },
                                ...navCollapsed && !navHover ? {
                                    mr: 0
                                } : {},
                                ...parent && item.children ? {
                                    ml: 2,
                                    mr: 4
                                } : {}
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                                icon: IconTag,
                                componentType: "vertical-menu",
                                iconProps: {
                                    sx: {
                                        ...parent ? {
                                            fontSize: "0.5rem"
                                        } : {}
                                    }
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextWrapper, {
                            sx: {
                                ...menuGroupCollapsedStyles,
                                ...isSubToSub ? {
                                    ml: 8
                                } : {}
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    ...(themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate || !themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && navCollapsed && !navHover) && {
                                        noWrap: true
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                                        text: item.title
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    className: "menu-item-meta",
                                    sx: {
                                        ml: 1.5,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                            size: "small",
                                            label: item.badgeContent,
                                            color: item.badgeColor || "primary",
                                            sx: {
                                                mr: 0.75,
                                                "& .MuiChip-label": {
                                                    px: 2.5,
                                                    lineHeight: 1.385,
                                                    textTransform: "capitalize"
                                                }
                                            }
                                        }) : null,
                                        direction === "ltr" ? /*#__PURE__*/ jsx_runtime_.jsx(MenuGroupToggleRightIcon, {
                                            sx: {
                                                ...conditionalArrowIconColor(),
                                                ...groupActive.includes(item.title) ? {
                                                    transform: "rotate(90deg)"
                                                } : {}
                                            }
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(MenuGroupToggleLeftIcon, {
                                            sx: {
                                                ...conditionalArrowIconColor(),
                                                ...groupActive.includes(item.title) ? {
                                                    transform: "rotate(-90deg)"
                                                } : {}
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    component: "ul",
                    onClick: (e)=>e.stopPropagation(),
                    in: groupActive.includes(item.title),
                    sx: {
                        pl: 0,
                        width: "100%",
                        ...menuGroupCollapsedStyles,
                        transition: "all .25s ease-in-out"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                        ...props,
                        parent: item,
                        navVisible: navVisible,
                        verticalNavItems: item.children,
                        isSubToSub: parent && item.children ? item : undefined
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navigation_VerticalNavGroup = (VerticalNavGroup);

;// CONCATENATED MODULE: external "@mui/material/ListSubheader"
const ListSubheader_namespaceObject = require("@mui/material/ListSubheader");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavSectionTitle.tsx
// ** MUI Imports





// ** Custom Components Imports

// ** Styled Components
const ListSubheader = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    }))(({ theme  })=>({
        lineHeight: 1,
        display: "flex",
        position: "static",
        padding: theme.spacing(3),
        marginTop: theme.spacing(6.25),
        backgroundColor: "transparent",
        color: theme.palette.text.disabled,
        transition: "padding-left .25s ease-in-out"
    }));
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item , navHover , settings , collapsedNavWidth , navigationBorderWidth  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { skin , navCollapsed  } = settings;
    const conditionalBorderColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                "&, &:before": {
                    borderColor: `rgba(${theme.palette.customColors.dark}, 0.12)`
                }
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                "&, &:before": {
                    borderColor: `rgba(${theme.palette.customColors.light}, 0.12)`
                }
            };
        } else return {};
    };
    const conditionalColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return {
                color: `rgba(${theme.palette.customColors.dark}, 0.38) !important`
            };
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return {
                color: `rgba(${theme.palette.customColors.light}, 0.38) !important`
            };
        } else {
            return {
                color: theme.palette.text.disabled
            };
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ListSubheader, {
        className: "nav-section-title",
        sx: {
            ...navCollapsed && !navHover ? {
                py: 4.75,
                px: (collapsedNavWidth - navigationBorderWidth - 22) / 8
            } : {
                pl: 0
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
            textAlign: "left",
            sx: {
                m: 0,
                lineHeight: "normal",
                ...conditionalBorderColor(),
                "&:after": {
                    display: "none"
                },
                ...navCollapsed && !navHover ? {
                    width: 22
                } : {
                    width: "100%",
                    "&:before": {
                        top: 7,
                        transform: "none",
                        width: theme.spacing(4)
                    },
                    "& .MuiDivider-wrapper": {
                        px: 4,
                        fontSize: "0.75rem",
                        letterSpacing: "0.21px"
                    }
                }
            },
            children: navCollapsed && !navHover ? null : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                noWrap: true,
                variant: "caption",
                sx: {
                    ...conditionalColor()
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                    text: item.sectionTitle
                })
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavItems.tsx
// ** Types Import


// ** Custom Menu Components



const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    if (item.children) return navigation_VerticalNavGroup;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems  } = props;
    const RenderMenuItems = verticalNavItems?.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return /*#__PURE__*/ (0,external_react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    });
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavHeader.tsx
// ** React Import

// ** Next Import

// ** MUI Imports




// ** Icons

// ** Configs

// ** Styled Components
const MenuHeaderWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        paddingRight: theme.spacing(4),
        justifyContent: "space-between",
        transition: "padding .25s ease-in-out",
        minHeight: theme.mixins.toolbar.minHeight
    }));
const HeaderTitle = (0,styles_.styled)((Typography_default()))({
    fontWeight: 700,
    lineHeight: 1.2,
    transition: "opacity .25s ease-in-out, margin .25s ease-in-out"
});
const StyledLink = (0,styles_.styled)("a")({
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { hidden , navHover , settings , saveSettings , collapsedNavWidth , toggleNavVisibility , navigationBorderWidth , menuLockedIcon: userMenuLockedIcon , menuUnlockedIcon: userMenuUnlockedIcon , verticalNavMenuBranding: userVerticalNavMenuBranding  } = props;
    // ** Hooks & Vars
    const theme = (0,styles_.useTheme)();
    const { skin , direction , navCollapsed  } = settings;
    const menuCollapsedStyles = navCollapsed && !navHover ? {
        opacity: 0
    } : {
        opacity: 1
    };
    const svgFillSecondary = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return `rgba(${theme.palette.customColors.dark}, 0.68)`;
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return `rgba(${theme.palette.customColors.light}, 0.68)`;
        } else {
            return theme.palette.text.secondary;
        }
    };
    const svgFillDisabled = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return `rgba(${theme.palette.customColors.dark}, 0.38)`;
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return `rgba(${theme.palette.customColors.light}, 0.38)`;
        } else {
            return theme.palette.text.disabled;
        }
    };
    const menuHeaderPaddingLeft = ()=>{
        if (navCollapsed && !navHover) {
            if (userVerticalNavMenuBranding) {
                return 0;
            } else {
                return (collapsedNavWidth - navigationBorderWidth - 40) / 8;
            }
        } else {
            return 5.5;
        }
    };
    const svgRotationDeg = ()=>{
        if (navCollapsed) {
            if (direction === "rtl") {
                if (navHover) {
                    return 0;
                } else {
                    return 180;
                }
            } else {
                if (navHover) {
                    return 180;
                } else {
                    return 0;
                }
            }
        } else {
            if (direction === "rtl") {
                return 180;
            } else {
                return 0;
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: menuHeaderPaddingLeft()
        },
        children: [
            userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledLink, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            width: 40,
                            fill: "none",
                            height: 22,
                            viewBox: "0 0 268 150",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fillOpacity: "0.4",
                                    fill: "url(#paint0_linear_7821_79167)",
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fillOpacity: "0.4",
                                    fill: "url(#paint1_linear_7821_79167)",
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                            y1: "0",
                                            x1: "25.1443",
                                            x2: "25.1443",
                                            y2: "143.953",
                                            id: "paint0_linear_7821_79167",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                    offset: "1",
                                                    stopOpacity: "0"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                            y1: "0",
                                            x1: "25.1443",
                                            x2: "25.1443",
                                            y2: "143.953",
                                            id: "paint1_linear_7821_79167",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                    offset: "1",
                                                    stopOpacity: "0"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(HeaderTitle, {
                            variant: "h6",
                            sx: {
                                ...menuCollapsedStyles,
                                ...navCollapsed && !navHover ? {} : {
                                    ml: 2
                                }
                            },
                            children: themeConfig/* default.templateName */.Z.templateName
                        })
                    ]
                })
            }),
            hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                disableRipple: true,
                disableFocusRipple: true,
                onClick: toggleNavVisibility,
                sx: {
                    p: 0,
                    backgroundColor: "transparent !important"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                    fontSize: "small"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                disableRipple: true,
                disableFocusRipple: true,
                onClick: ()=>saveSettings({
                        ...settings,
                        navCollapsed: !navCollapsed
                    }),
                sx: {
                    p: 0,
                    color: "text.primary",
                    backgroundColor: "transparent !important"
                },
                children: userMenuLockedIcon && userMenuUnlockedIcon ? navCollapsed ? userMenuUnlockedIcon : userMenuLockedIcon : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    width: 22,
                    fill: "none",
                    height: 22,
                    component: "svg",
                    viewBox: "0 0 22 22",
                    xmlns: "http://www.w3.org/2000/svg",
                    sx: {
                        transform: `rotate(${svgRotationDeg()}deg)`,
                        transition: "transform .25s ease-in-out .35s"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: svgFillSecondary(),
                            d: "M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: svgFillDisabled(),
                            d: "M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/index.tsx
// ** React Import


// ** MUI Import



// ** Third Party Components


// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        top: 60,
        left: -8,
        zIndex: 2,
        display: "none",
        position: "absolute",
        pointerEvents: "none",
        width: "calc(100% + 15px)",
        height: theme.mixins.toolbar.minHeight,
        "&.d-block": {
            display: "block"
        }
    }));
const Navigation = (props)=>{
    // ** Props
    const { hidden , settings , afterVerticalNavMenuContent , beforeVerticalNavMenuContent , verticalNavMenuContent: userVerticalNavMenuContent  } = props;
    // ** States
    const { 0: groupActive , 1: setGroupActive  } = (0,external_react_.useState)([]);
    const { 0: currentActiveGroup , 1: setCurrentActiveGroup  } = (0,external_react_.useState)([]);
    // ** Ref
    const shadowRef = (0,external_react_.useRef)(null);
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Var
    const { skin  } = settings;
    const { afterVerticalNavMenuContentPosition , beforeVerticalNavMenuContentPosition  } = themeConfig/* default */.Z;
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        if (beforeVerticalNavMenuContentPosition === "static" || !beforeVerticalNavMenuContent) {
            container = hidden ? container.target : container;
            if (shadowRef && container.scrollTop > 0) {
                // @ts-ignore
                if (!shadowRef.current.classList.contains("d-block")) {
                    // @ts-ignore
                    shadowRef.current.classList.add("d-block");
                }
            } else {
                // @ts-ignore
                shadowRef.current.classList.remove("d-block");
            }
        }
    };
    const shadowBgColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return `linear-gradient(${theme.palette.customColors.darkBg} 5%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.darkBg, 0.85)} 30%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.darkBg, 0.5)} 65%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.darkBg, 0.3)} 75%,transparent)`;
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return `linear-gradient(${theme.palette.customColors.lightBg} 5%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.lightBg, 0.85)} 30%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.lightBg, 0.5)} 65%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.lightBg, 0.3)} 75%,transparent)`;
        } else {
            return `linear-gradient(${theme.palette.background.default} 5%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.85)} 30%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.5)} 65%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.3)} 75%,transparent)`;
        }
    };
    const ScrollWrapper = hidden ? (Box_default()) : (external_react_perfect_scrollbar_default());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Drawer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavHeader, {
                ...props
            }),
            beforeVerticalNavMenuContent && beforeVerticalNavMenuContentPosition === "fixed" ? beforeVerticalNavMenuContent(props) : null,
            (beforeVerticalNavMenuContentPosition === "static" || !beforeVerticalNavMenuContent) && /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: shadowBgColor()
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    position: "relative",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                    containerRef: (ref)=>handleInfiniteScroll(ref),
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container),
                        sx: {
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden"
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container)
                    },
                    children: [
                        beforeVerticalNavMenuContent && beforeVerticalNavMenuContentPosition === "static" ? beforeVerticalNavMenuContent(props) : null,
                        userVerticalNavMenuContent ? userVerticalNavMenuContent(props) : /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                            className: "nav-items",
                            sx: {
                                pt: 0,
                                "& > :first-child": {
                                    mt: "0"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                                groupActive: groupActive,
                                setGroupActive: setGroupActive,
                                currentActiveGroup: currentActiveGroup,
                                setCurrentActiveGroup: setCurrentActiveGroup,
                                ...props
                            })
                        }),
                        afterVerticalNavMenuContent && afterVerticalNavMenuContentPosition === "static" ? afterVerticalNavMenuContent(props) : null
                    ]
                })
            }),
            afterVerticalNavMenuContent && afterVerticalNavMenuContentPosition === "fixed" ? afterVerticalNavMenuContent(props) : null
        ]
    });
};
/* harmony default export */ const navigation = (Navigation);

;// CONCATENATED MODULE: external "@mui/material/Link"
const Link_namespaceObject = require("@mui/material/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/FooterContent.tsx
// ** MUI Imports





const FooterContent = ()=>{
    // ** Var
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("md"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                sx: {
                    mr: 2
                },
                children: [
                    `© ${new Date().getFullYear()}, Made with `,
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "span",
                        sx: {
                            color: "error.main"
                        },
                        children: "❤️"
                    }),
                    ` by `,
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        target: "_blank",
                        href: "https://azhark.com/",
                        children: "Azhar Khan"
                    })
                ]
            }),
            hidden ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    "& :not(:last-child)": {
                        mr: 4
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        target: "_blank",
                        href: "#",
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        target: "_blank",
                        href: "#",
                        children: "Contact"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        target: "_blank",
                        href: "#",
                        children: "Support"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/index.tsx
// ** React Imports

// ** MUI Imports

// ** Footer Content Component

const Footer = (props)=>{
    // ** Props
    const { settings , footerContent: userFooterContent  } = props;
    // ** Vars
    const { skin , footer , contentWidth  } = settings;
    if (footer === "hidden") {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        className: "layout-footer",
        sx: {
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...footer === "fixed" && {
                bottom: 0,
                px: [
                    4,
                    6
                ],
                position: "sticky"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            className: "footer-content-container",
            sx: {
                py: 4,
                px: [
                    4,
                    6
                ],
                width: "100%",
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: 1440
                    }
                },
                ...footer === "fixed" && {
                    backgroundColor: (theme)=>theme.palette.background.paper,
                    boxShadow: (theme)=>theme.shadows[skin === "bordered" ? 0 : 4],
                    ...contentWidth === "boxed" && {
                        "@media (min-width:1440px)": {
                            maxWidth: (theme)=>`calc(1440px - ${theme.spacing(6)} * 2)`
                        }
                    },
                    ...skin === "bordered" ? {
                        border: (theme)=>`1px solid ${theme.palette.divider}`,
                        borderBottomWidth: 0
                    } : {
                        boxShadow: (theme)=>`0 -4px 8px -2px rgba(${theme.palette.mode === "light" ? theme.palette.customColors.main : "20, 21, 33"}, ${theme.palette.mode === "light" ? 0.2 : 0.42})`
                    }
                }
            },
            children: userFooterContent ? userFooterContent(props) : /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterContent, {})
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/components/scroll-to-top/index.tsx
// ** React Imports

// ** MUI Imports



const ScrollToTopStyled = (0,styles_.styled)("div")(({ theme  })=>({
        zIndex: 11,
        position: "fixed",
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    }));
const ScrollToTop = (props)=>{
    // ** Props
    const { children , className  } = props;
    // ** init trigger
    const trigger = useScrollTrigger_default()({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector("body");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Zoom_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    });
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

;// CONCATENATED MODULE: ./src/@core/styles/libs/react-datepicker/index.ts
// ** MUI imports


// ** Hooks

// ** Util Import

const DatePickerWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>{
    // ** Hook
    const { settings  } = (0,useSettings/* useSettings */.r)();
    return {
        "& .react-datepicker-popper": {
            zIndex: 5
        },
        "& .react-datepicker-wrapper": {
            width: "100%"
        },
        "& .react-datepicker": {
            padding: theme.spacing(2, 0),
            color: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius,
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[settings.skin === "bordered" ? 0 : 6],
            border: settings.skin === "bordered" ? `1px solid ${theme.palette.divider}` : "none",
            "& .react-datepicker__header": {
                padding: 0,
                border: "none",
                fontWeight: 400,
                backgroundColor: theme.palette.background.paper,
                "& .react-datepicker__day-name": {
                    margin: 0
                }
            },
            "& .react-datepicker-year-header": {
                lineHeight: 2.1,
                fontSize: "1rem",
                marginBottom: "0.5rem",
                color: theme.palette.text.primary
            },
            "& .react-datepicker__triangle": {
                display: "none"
            },
            "& > .react-datepicker__navigation": {
                top: theme.spacing(3),
                "&.react-datepicker__navigation--previous": {
                    width: 24,
                    height: 24,
                    border: "none",
                    backgroundImage: `${"url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\\' /%3E%3C/svg%3E')".replace("currentColor", theme.palette.action.active).replace("#", "%23")}`,
                    "& .react-datepicker__navigation-icon": {
                        display: "none"
                    }
                },
                "&.react-datepicker__navigation--next": {
                    width: 24,
                    height: 24,
                    border: "none",
                    backgroundImage: `${"url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\\' /%3E%3C/svg%3E')".replace("currentColor", theme.palette.action.active).replace("#", "%23")}`,
                    "& .react-datepicker__navigation-icon": {
                        display: "none"
                    }
                },
                "&.react-datepicker__navigation--next--with-time": {
                    right: 122
                },
                "&:focus, &:active": {
                    outline: 0
                }
            },
            "& .react-datepicker__current-month": {
                fontWeight: 400,
                lineHeight: 2.1,
                fontSize: "1rem",
                letterSpacing: "0.15px",
                marginBottom: theme.spacing(3),
                color: theme.palette.text.primary
            },
            "& .react-datepicker__day-names": {
                marginBottom: theme.spacing(3),
                "& .react-datepicker__day-name": {
                    lineHeight: 1.5,
                    fontWeight: 500,
                    width: "2.25rem",
                    fontSize: "0.875rem",
                    letterSpacing: "0.1px",
                    color: theme.palette.text.primary
                }
            },
            "& .react-datepicker__day": {
                margin: 0,
                width: "2.25rem",
                lineHeight: 2.75,
                height: "2.25rem",
                borderRadius: "50%",
                color: theme.palette.text.primary,
                "&.react-datepicker__day--selected, &.react-datepicker__day--keyboard-selected": {
                    color: theme.palette.common.white,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                "&.react-datepicker__day--in-range, &.react-datepicker__day--in-selecting-range": {
                    borderRadius: 0,
                    color: theme.palette.primary.main,
                    backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.06)} !important`,
                    "&:empty": {
                        backgroundColor: "transparent !important"
                    }
                },
                "&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start": {
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    color: theme.palette.common.white,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                "&.react-datepicker__day--range-end": {
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                    color: theme.palette.common.white,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                "&:focus, &:active": {
                    outline: 0
                },
                "&.react-datepicker__day--outside-month": {
                    height: "auto"
                },
                "&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)": {
                    color: theme.palette.text.disabled,
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                },
                "&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover": {
                    color: theme.palette.success.main,
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)
                },
                "&.react-datepicker__day--today": {
                    fontWeight: 400,
                    "&:not(.react-datepicker__day--selected)": {
                        border: `1px solid ${theme.palette.divider}`
                    }
                }
            },
            "& .react-datepicker__header__dropdown": {
                "& .react-datepicker__month-dropdown-container:not(:last-child)": {
                    marginRight: theme.spacing(8)
                },
                "& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container": {
                    marginBottom: theme.spacing(4)
                },
                "& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year": {
                    fontSize: "0.875rem",
                    marginRight: theme.spacing(1),
                    color: theme.palette.text.primary
                },
                "& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow": {
                    borderTopColor: theme.palette.action.active,
                    borderRightColor: theme.palette.action.active
                },
                "& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow": {
                    top: 4,
                    borderTopColor: theme.palette.action.active,
                    borderRightColor: theme.palette.action.active
                },
                "& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown": {
                    paddingTop: theme.spacing(1.5),
                    paddingBottom: theme.spacing(1.5),
                    borderColor: theme.palette.divider,
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.palette.mode === "light" ? theme.shadows[8] : theme.shadows[9]
                },
                "& .react-datepicker__month-option, & .react-datepicker__year-option": {
                    paddingTop: theme.spacing(0.5),
                    paddingBottom: theme.spacing(0.5),
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                "& .react-datepicker__month-option.react-datepicker__month-option--selected_month": {
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08),
                    "&:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)
                    },
                    "& .react-datepicker__month-option--selected": {
                        display: "none"
                    }
                },
                "& .react-datepicker__year-option.react-datepicker__year-option--selected_year": {
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08),
                    "&:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)
                    },
                    "& .react-datepicker__year-option--selected": {
                        display: "none"
                    }
                },
                "& .react-datepicker__year-option": {
                    // TODO: Remove some of the following styles for arrow in Year dropdown when react-datepicker give arrows in Year dropdown
                    "& .react-datepicker__navigation--years-upcoming": {
                        width: 9,
                        height: 9,
                        borderStyle: "solid",
                        borderWidth: "3px 3px 0 0",
                        transform: "rotate(-45deg)",
                        borderTopColor: theme.palette.text.disabled,
                        borderRightColor: theme.palette.text.disabled,
                        margin: `${theme.spacing(2.75)} auto ${theme.spacing(0)}`
                    },
                    "&:hover .react-datepicker__navigation--years-upcoming": {
                        borderTopColor: theme.palette.text.secondary,
                        borderRightColor: theme.palette.text.secondary
                    },
                    "& .react-datepicker__navigation--years-previous": {
                        width: 9,
                        height: 9,
                        borderStyle: "solid",
                        borderWidth: "0 0 3px 3px",
                        transform: "rotate(-45deg)",
                        borderLeftColor: theme.palette.text.disabled,
                        borderBottomColor: theme.palette.text.disabled,
                        margin: `${theme.spacing(0)} auto ${theme.spacing(2.75)}`
                    },
                    "&:hover .react-datepicker__navigation--years-previous": {
                        borderLeftColor: theme.palette.text.secondary,
                        borderBottomColor: theme.palette.text.secondary
                    }
                }
            },
            "& .react-datepicker__month": {
                marginTop: theme.spacing(3)
            },
            [theme.breakpoints.down("sm")]: {
                "& .react-datepicker__month": {
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0
                }
            },
            "& .react-datepicker__month, & .react-datepicker__year": {
                "& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text": {
                    height: "2rem",
                    alignItems: "center",
                    display: "inline-flex",
                    justifyContent: "center",
                    "&:hover": {
                        borderRadius: theme.shape.borderRadius
                    },
                    "&:focus, &:active": {
                        outline: 0
                    }
                },
                "& .react-datepicker__quarter--selected, & .react-datepicker__year-text--selected, & .react-datepicker__month--selected, & .react-datepicker__quarter-text--keyboard-selected, & .react-datepicker__month-text--keyboard-selected, & .react-datepicker__year-text--keyboard-selected": {
                    color: theme.palette.common.white,
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                "& .react-datepicker__week-number": {
                    fontWeight: 600,
                    color: theme.palette.text.primary
                }
            },
            "& .react-datepicker__year-wrapper": {
                maxWidth: 205,
                justifyContent: "center"
            },
            "& .react-datepicker__input-time-container": {
                display: "flex",
                alignItems: "center",
                ...theme.direction === "rtl" ? {
                    flexDirection: "row-reverse"
                } : {}
            },
            "& .react-datepicker__today-button": {
                borderRadius: "1rem",
                margin: "0 1rem 0.3rem",
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main
            },
            "& .react-datepicker__monthPicker": {
                "& .react-datepicker__month-text": {
                    borderRadius: 8
                },
                "& .react-datepicker__month-text--today": {
                    fontWeight: 400
                }
            },
            // ** Time Picker
            "& .react-datepicker__time-container": {
                borderLeftColor: theme.palette.divider
            },
            "&.react-datepicker--time-only, & .react-datepicker__time-container": {
                width: "7rem",
                padding: theme.spacing(1.2, 0),
                "& .react-datepicker-time__header": {
                    fontWeight: 500,
                    letterSpacing: "0.1px",
                    marginBottom: theme.spacing(3),
                    color: theme.palette.text.primary,
                    fontSize: theme.typography.body2.fontSize
                },
                "& .react-datepicker__time": {
                    background: theme.palette.background.paper,
                    "& .react-datepicker__time-box .react-datepicker__time-list-item--disabled": {
                        color: theme.palette.text.disabled
                    }
                },
                "& .react-datepicker__time-list-item": {
                    borderRadius: 8,
                    lineHeight: 1.429,
                    fontSize: "0.875rem",
                    height: "auto !important",
                    marginLeft: theme.spacing(3.2),
                    marginRight: theme.spacing(1.2),
                    color: theme.palette.text.primary,
                    paddingTop: `${theme.spacing(1.75)} !important`,
                    paddingBottom: `${theme.spacing(1.75)} !important`,
                    "&:focus, &:active": {
                        outline: 0
                    },
                    "&:hover": {
                        backgroundColor: `${theme.palette.action.hover} !important`
                    },
                    "&.react-datepicker__time-list-item--selected": {
                        fontWeight: "400 !important",
                        color: `${theme.palette.common.white} !important`,
                        backgroundColor: `${theme.palette.primary.main} !important`
                    }
                },
                "& .react-datepicker__time-box": {
                    width: "100%"
                },
                "& .react-datepicker__time-list": {
                    "&::-webkit-scrollbar": {
                        width: 8
                    },
                    /* Track */ "&::-webkit-scrollbar-track": {
                        background: theme.palette.background.paper
                    },
                    /* Handle */ "&::-webkit-scrollbar-thumb": {
                        background: "#aaa",
                        borderRadius: "10px"
                    },
                    /* Handle on hover */ "&::-webkit-scrollbar-thumb:hover": {
                        background: "#999"
                    }
                }
            },
            "&.react-datepicker--time-only .react-datepicker__time-container": {
                width: "calc(7rem - 2px)"
            },
            "& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover": {
                backgroundColor: theme.palette.action.hover
            }
        },
        "& .react-datepicker__close-icon": {
            paddingRight: theme.spacing(4),
            ...theme.direction === "rtl" ? {
                right: 0,
                left: "auto"
            } : {},
            "&:after": {
                width: "unset",
                height: "unset",
                fontSize: "1.5rem",
                color: theme.palette.text.primary,
                backgroundColor: "transparent !important"
            }
        }
    };
});
/* harmony default export */ const react_datepicker = (DatePickerWrapper);

;// CONCATENATED MODULE: ./src/@core/layouts/VerticalLayout.tsx
// ** React Imports


// ** MUI Imports



// ** Icons Imports

// ** Theme Config Import

// ** Components





// ** Styled Component

const VerticalLayoutWrapper = (0,styles_.styled)("div")({
    height: "100%",
    display: "flex"
});
const MainContentWrapper = (0,styles_.styled)((Box_default()))({
    flexGrow: 1,
    minWidth: 0,
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
});
const ContentWrapper = (0,styles_.styled)("main")(({ theme  })=>({
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(6),
        transition: "padding .25s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const VerticalLayout = (props)=>{
    // ** Props
    const { hidden , settings , children , scrollToTop  } = props;
    // ** Vars
    const { skin , navHidden , contentWidth  } = settings;
    const { navigationSize , disableCustomizer , collapsedNavigationSize  } = themeConfig/* default */.Z;
    const navWidth = navigationSize;
    const navigationBorderWidth = skin === "bordered" ? 1 : 0;
    const collapsedNavWidth = collapsedNavigationSize;
    // ** States
    const { 0: navHover , 1: setNavHover  } = (0,external_react_.useState)(false);
    const { 0: navVisible , 1: setNavVisible  } = (0,external_react_.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    navHidden && themeConfig/* default.layout */.Z.layout === "vertical" && !(navHidden && settings.lastLayout === "horizontal") ? null : /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                        navWidth: navWidth,
                        navHover: navHover,
                        navVisible: navVisible,
                        setNavHover: setNavHover,
                        setNavVisible: setNavVisible,
                        collapsedNavWidth: collapsedNavWidth,
                        toggleNavVisibility: toggleNavVisibility,
                        navigationBorderWidth: navigationBorderWidth,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appBar, {
                                toggleNavVisibility: toggleNavVisibility,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentWidth === "boxed" && {
                                        mx: "auto",
                                        "@media (min-width:1440px)": {
                                            maxWidth: 1440
                                        },
                                        "@media (min-width:1200px)": {
                                            maxWidth: "100%"
                                        }
                                    }
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker, {
                                sx: {
                                    zIndex: 11
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    id: "react-datepicker-portal"
                                })
                            })
                        ]
                    })
                ]
            }),
            disableCustomizer || hidden ? null : /*#__PURE__*/ jsx_runtime_.jsx(customizer, {}),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUp_default()), {})
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_VerticalLayout = (VerticalLayout);

;// CONCATENATED MODULE: ./src/@core/layouts/components/horizontal/navigation/HorizontalNavLink.tsx
// ** React Imports


// ** Next Imports


// ** MUI Imports







// ** Third Party Imports

// ** Theme Config Import

// ** Custom Components Imports


// ** Util Import

const ListItem = (0,styles_.styled)((ListItem_default()))(({ theme  })=>({
        width: "auto",
        paddingTop: theme.spacing(2.25),
        color: theme.palette.text.primary,
        paddingBottom: theme.spacing(2.25),
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        },
        "&.active, &.active:hover": {
            backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08)
        },
        "&.active .MuiTypography-root, &.active .MuiListItemIcon-root": {
            color: theme.palette.primary.main
        }
    }));
const HorizontalNavLink = (props)=>{
    // ** Props
    const { item , settings , hasParent  } = props;
    // ** Hook & Vars
    const router = (0,router_.useRouter)();
    const { navSubItemIcon , menuTextTruncate  } = themeConfig/* default */.Z;
    const IconTag = item.icon ? item.icon : navSubItemIcon;
    const Wrapper = !hasParent ? (List_default()) : external_react_.Fragment;
    const handleURLQueries = ()=>{
        if (Object.keys(router.query).length && item.path) {
            const arr = Object.keys(router.query);
            return router.asPath.includes(item.path) && router.asPath.includes(router.query[arr[0]]);
        }
    };
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries()) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        ...!hasParent ? {
            component: "div",
            sx: {
                py: settings.skin === "bordered" ? 2.625 : 2.75
            }
        } : {},
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `${item.path}`,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                component: "a",
                disabled: item.disabled,
                className: external_clsx_default()({
                    active: isNavLinkActive()
                }),
                target: item.openInNewTab ? "_blank" : undefined,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                sx: {
                    ...item.disabled ? {
                        pointerEvents: "none"
                    } : {
                        cursor: "pointer"
                    },
                    ...!hasParent ? {
                        borderRadius: "8px",
                        "&.active, &.active:hover": {
                            backgroundColor: (theme)=>theme.palette.primary.main,
                            "& .MuiTypography-root, & .MuiListItemIcon-root": {
                                color: "common.white"
                            }
                        }
                    } : {}
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                ...menuTextTruncate && {
                                    overflow: "hidden"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                    sx: {
                                        mr: hasParent ? 3 : 2.5,
                                        color: "text.primary"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                                        icon: IconTag,
                                        componentType: "horizontal-menu",
                                        iconProps: {
                                            sx: IconTag === navSubItemIcon ? {
                                                fontSize: "0.5rem"
                                            } : {}
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    ...menuTextTruncate && {
                                        noWrap: true
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                                        text: item.title
                                    })
                                })
                            ]
                        }),
                        item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: item.badgeContent,
                            color: item.badgeColor || "primary",
                            sx: {
                                ml: 1.5,
                                "& .MuiChip-label": {
                                    px: 2.5,
                                    lineHeight: 1.385,
                                    textTransform: "capitalize"
                                }
                            }
                        }) : null
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const navigation_HorizontalNavLink = (HorizontalNavLink);

;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/material/ClickAwayListener"
const ClickAwayListener_namespaceObject = require("@mui/material/ClickAwayListener");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_namespaceObject);
;// CONCATENATED MODULE: external "react-popper"
const external_react_popper_namespaceObject = require("react-popper");
// EXTERNAL MODULE: external "mdi-material-ui/ChevronDown"
var ChevronDown_ = __webpack_require__(8867);
var ChevronDown_default = /*#__PURE__*/__webpack_require__.n(ChevronDown_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/horizontal/navigation/HorizontalNavGroup.tsx
// ** React Imports


// ** Next Import

// ** MUI Imports










// ** Third Party Imports


// ** Icons Imports



// ** Theme Config Import

// ** Custom Components Imports



// ** Utils


// ** Styled Components
const HorizontalNavGroup_ListItem = (0,styles_.styled)((ListItem_default()))(({ theme  })=>({
        cursor: "pointer",
        paddingTop: theme.spacing(2.25),
        paddingBottom: theme.spacing(2.25),
        "&:hover": {
            background: theme.palette.action.hover
        }
    }));
const NavigationMenu = (0,styles_.styled)((Paper_default()))(({ theme  })=>({
        overflowY: "auto",
        padding: theme.spacing(2, 0),
        backgroundColor: theme.palette.background.paper,
        ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate ? {
            width: 260
        } : {
            minWidth: 260
        },
        "&::-webkit-scrollbar": {
            width: 6
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: 20,
            background: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.mode === "light" ? "#BFBFD5" : "#57596C", 0.6)
        },
        "&::-webkit-scrollbar-track": {
            borderRadius: 20,
            background: "transparent"
        },
        "& .MuiList-root": {
            paddingTop: 0,
            paddingBottom: 0
        },
        "& .menu-group.Mui-selected": {
            borderRadius: 0,
            backgroundColor: theme.palette.action.hover
        }
    }));
const HorizontalNavGroup = (props)=>{
    // ** Props
    const { item , hasParent , settings  } = props;
    // ** Hooks & Vars
    const theme = (0,styles_.useTheme)();
    const router = (0,router_.useRouter)();
    const currentURL = router.pathname;
    const { skin , direction  } = settings;
    const { navSubItemIcon , menuTextTruncate , horizontalMenuToggle , horizontalMenuAnimation  } = themeConfig/* default */.Z;
    const popperOffsetHorizontal = direction === "rtl" ? 16 : -16;
    const popperPlacement = direction === "rtl" ? "bottom-end" : "bottom-start";
    const popperPlacementSubMenu = direction === "rtl" ? "left-start" : "right-start";
    // ** States
    const { 0: menuOpen , 1: setMenuOpen  } = (0,external_react_.useState)(false);
    const { 0: popperElement , 1: setPopperElement  } = (0,external_react_.useState)(null);
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const { 0: referenceElement , 1: setReferenceElement  } = (0,external_react_.useState)(null);
    const { styles , attributes , update  } = (0,external_react_popper_namespaceObject.usePopper)(referenceElement, popperElement, {
        placement: hasParent ? popperPlacementSubMenu : popperPlacement,
        modifiers: [
            {
                enabled: true,
                name: "offset",
                options: {
                    offset: hasParent ? [
                        -8,
                        15
                    ] : [
                        popperOffsetHorizontal,
                        5
                    ]
                }
            }
        ]
    });
    const handleGroupOpen = (event)=>{
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
        update ? update() : null;
    };
    const handleGroupClose = ()=>{
        setAnchorEl(null);
        setMenuOpen(false);
    };
    const handleMenuToggleOnClick = (event)=>{
        if (anchorEl) {
            handleGroupClose();
        } else {
            handleGroupOpen(event);
        }
    };
    (0,external_react_.useEffect)(()=>{
        handleGroupClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.asPath
    ]);
    const IconTag = item.icon ? item.icon : navSubItemIcon;
    const ToggleIcon = direction === "rtl" ? (ChevronLeft_default()) : (ChevronRight_default());
    const WrapperCondition = horizontalMenuToggle === "click";
    const MainWrapper = WrapperCondition ? (ClickAwayListener_default()) : "div";
    const ChildWrapper = WrapperCondition ? "div" : external_react_.Fragment;
    const AnimationWrapper = horizontalMenuAnimation ? (Fade_default()) : external_react_.Fragment;
    const childMenuGroupStyles = ()=>{
        if (attributes && attributes.popper) {
            if (direction === "ltr") {
                if (attributes.popper["data-popper-placement"] === "right-start") {
                    return "left";
                }
                if (attributes.popper["data-popper-placement"] === "left-start") {
                    return "right";
                }
            } else {
                if (attributes.popper["data-popper-placement"] === "right-start") {
                    return "right";
                }
                if (attributes.popper["data-popper-placement"] === "left-start") {
                    return "left";
                }
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MainWrapper, {
            onClickAway: handleGroupClose,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ChildWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                    component: "div",
                    sx: {
                        py: skin === "bordered" ? 2.625 : 2.75
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(HorizontalNavGroup_ListItem, {
                            "aria-haspopup": "true",
                            ...WrapperCondition ? {} : {
                                onMouseEnter: handleGroupOpen
                            },
                            className: external_clsx_default()("menu-group", {
                                "Mui-selected": hasActiveChild(item, currentURL)
                            }),
                            ...horizontalMenuToggle === "click" ? {
                                onClick: handleMenuToggleOnClick
                            } : {},
                            sx: {
                                ...menuOpen ? {
                                    backgroundColor: theme.palette.action.hover
                                } : {},
                                ...!hasParent ? {
                                    borderRadius: "8px",
                                    "&.Mui-selected": {
                                        backgroundColor: theme.palette.primary.main,
                                        "& .MuiTypography-root, & .MuiListItemIcon-root, & .MuiSvgIcon-root": {
                                            color: "common.white"
                                        }
                                    }
                                } : {}
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                ref: setReferenceElement,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            ...menuTextTruncate && {
                                                overflow: "hidden"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                sx: {
                                                    mr: hasParent ? 3 : 2.5,
                                                    color: "text.primary"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                                                    icon: IconTag,
                                                    componentType: "horizontal-menu",
                                                    iconProps: {
                                                        sx: IconTag === navSubItemIcon ? {
                                                            fontSize: "0.5rem"
                                                        } : {}
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                ...menuTextTruncate && {
                                                    noWrap: true
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                                                    text: item.title
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            ml: 1.5,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                                size: "small",
                                                label: item.badgeContent,
                                                color: item.badgeColor || "primary",
                                                sx: {
                                                    mr: 0.75,
                                                    "& .MuiChip-label": {
                                                        px: 2.5,
                                                        lineHeight: 1.385,
                                                        textTransform: "capitalize"
                                                    }
                                                }
                                            }) : null,
                                            hasParent ? /*#__PURE__*/ jsx_runtime_.jsx(ToggleIcon, {
                                                sx: {
                                                    color: "text.secondary"
                                                }
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((ChevronDown_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AnimationWrapper, {
                            ...horizontalMenuAnimation && {
                                in: menuOpen,
                                timeout: {
                                    exit: 300,
                                    enter: 400
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                style: styles.popper,
                                ref: setPopperElement,
                                ...attributes.popper,
                                sx: {
                                    zIndex: theme.zIndex.appBar,
                                    ...!horizontalMenuAnimation && {
                                        display: menuOpen ? "block" : "none"
                                    },
                                    pl: childMenuGroupStyles() === "left" ? skin === "bordered" ? 1.5 : 1.25 : 0,
                                    pr: childMenuGroupStyles() === "right" ? skin === "bordered" ? 1.5 : 1.25 : 0,
                                    ...hasParent ? {
                                        position: "fixed !important"
                                    } : {
                                        pt: skin === "bordered" ? 5.25 : 5.5
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationMenu, {
                                    sx: {
                                        ...hasParent ? {
                                            overflowX: "visible",
                                            maxHeight: "calc(100vh - 21rem)"
                                        } : {
                                            maxHeight: "calc(100vh - 13rem)"
                                        },
                                        ...skin === "bordered" ? {
                                            boxShadow: theme.shadows[0],
                                            border: `1px solid ${theme.palette.divider}`
                                        } : {
                                            boxShadow: theme.shadows[4]
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_HorizontalNavItems, {
                                        ...props,
                                        hasParent: true,
                                        horizontalNavItems: item.children
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const navigation_HorizontalNavGroup = (HorizontalNavGroup);

;// CONCATENATED MODULE: ./src/@core/layouts/components/horizontal/navigation/HorizontalNavItems.tsx
// ** Types


// ** Custom Navigation Components


const resolveComponent = (item)=>{
    if (item.children) return navigation_HorizontalNavGroup;
    return navigation_HorizontalNavLink;
};
const HorizontalNavItems = (props)=>{
    const RenderMenuItems = props.horizontalNavItems?.map((item, index)=>{
        const TagName = resolveComponent(item);
        return /*#__PURE__*/ (0,external_react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    });
};
/* harmony default export */ const navigation_HorizontalNavItems = (HorizontalNavItems);

;// CONCATENATED MODULE: ./src/@core/layouts/components/horizontal/navigation/index.tsx
// ** MUI Imports


// ** Config Import

// ** Utils
// import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
// ** Menu Components

const navigation_Navigation = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        className: "menu-content",
        sx: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            "& > *": {
                "&:not(:last-child)": {
                    mr: 2
                },
                ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
                    maxWidth: 220
                }
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_HorizontalNavItems, {
            ...props
        })
    });
};
/* harmony default export */ const horizontal_navigation = (navigation_Navigation);

;// CONCATENATED MODULE: ./src/@core/layouts/components/horizontal/app-bar-content/index.tsx
// ** React Imports

// ** Next Import

// ** MUI Imports



// ** Theme Config Import

const app_bar_content_StyledLink = (0,styles_.styled)("a")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        marginRight: theme.spacing(8)
    }));
const AppBarContent = (props)=>{
    // ** Props
    const { horizontalAppBarContent: userHorizontalAppBarContent , horizontalAppBarBranding: userHorizontalAppBarBranding  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            userHorizontalAppBarBranding ? userHorizontalAppBarBranding(props) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(app_bar_content_StyledLink, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            width: 40,
                            fill: "none",
                            height: 22,
                            viewBox: "0 0 268 150",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fillOpacity: "0.4",
                                    fill: "url(#paint0_linear_7821_79167)",
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fillOpacity: "0.4",
                                    fill: "url(#paint1_linear_7821_79167)",
                                    transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    rx: "25.1443",
                                    width: "50.2886",
                                    height: "143.953",
                                    fill: theme.palette.primary.main,
                                    transform: "matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                            y1: "0",
                                            x1: "25.1443",
                                            x2: "25.1443",
                                            y2: "143.953",
                                            id: "paint0_linear_7821_79167",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                    offset: "1",
                                                    stopOpacity: "0"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                            y1: "0",
                                            x1: "25.1443",
                                            x2: "25.1443",
                                            y2: "143.953",
                                            id: "paint1_linear_7821_79167",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                    offset: "1",
                                                    stopOpacity: "0"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                ml: 2,
                                fontWeight: 700,
                                lineHeight: 1.2
                            },
                            children: themeConfig/* default.templateName */.Z.templateName
                        })
                    ]
                })
            }),
            userHorizontalAppBarContent ? userHorizontalAppBarContent(props) : null
        ]
    });
};
/* harmony default export */ const app_bar_content = (AppBarContent);

;// CONCATENATED MODULE: ./src/@core/layouts/HorizontalLayout.tsx
// ** MUI Imports






// ** Icons Imports

// ** Theme Config Import

// ** Components





// ** Util Import

// ** Styled Component

const HorizontalLayoutWrapper = (0,styles_.styled)("div")({
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    ...themeConfig/* default.horizontalMenuAnimation */.Z.horizontalMenuAnimation && {
        overflow: "clip"
    }
});
const HorizontalLayout_Toolbar = (0,styles_.styled)((Toolbar_default()))(({ theme  })=>({
        width: "100%",
        padding: `${theme.spacing(0, 6)} !important`,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    }));
const HorizontalLayout_ContentWrapper = (0,styles_.styled)("main")(({ theme  })=>({
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(6),
        transition: "padding .25s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const HorizontalLayout = (props)=>{
    // ** Props
    const { hidden , children , settings , scrollToTop , saveSettings , horizontalNavMenuContent: userHorizontalNavMenuContent  } = props;
    // ** Vars
    const { skin , appBar , navHidden , appBarBlur , contentWidth  } = settings;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HorizontalLayoutWrapper, {
        className: "layout-wrapper",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
                color: "default",
                elevation: skin === "bordered" ? 0 : 3,
                className: "layout-navbar-and-nav-container",
                position: appBar === "fixed" ? "sticky" : "static",
                sx: {
                    alignItems: "center",
                    color: "text.primary",
                    justifyContent: "center",
                    ...appBar === "static" && {
                        zIndex: 13
                    },
                    backgroundColor: (theme)=>theme.palette.background.paper,
                    ...skin === "bordered" && {
                        borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                    },
                    transition: "border-bottom 0.2s ease-in-out, backdrop-filter .25s ease-in-out, box-shadow .25s ease-in-out",
                    ...appBar === "fixed" ? appBarBlur && {
                        backdropFilter: "blur(8px)",
                        backgroundColor: (theme)=>(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, 0.9)
                    } : {}
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        className: "layout-navbar",
                        sx: {
                            width: "100%",
                            ...navHidden ? {} : {
                                borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayout_Toolbar, {
                            className: "navbar-content-container",
                            sx: {
                                mx: "auto",
                                ...contentWidth === "boxed" && {
                                    "@media (min-width:1440px)": {
                                        maxWidth: 1440
                                    }
                                },
                                minHeight: (theme)=>`${theme.mixins.toolbar.minHeight - 1}px !important`
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(app_bar_content, {
                                ...props,
                                hidden: hidden,
                                settings: settings,
                                saveSettings: saveSettings
                            })
                        })
                    }),
                    navHidden ? null : /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        className: "layout-horizontal-nav",
                        sx: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayout_Toolbar, {
                            className: "horizontal-nav-content-container",
                            sx: {
                                mx: "auto",
                                ...contentWidth === "boxed" && {
                                    "@media (min-width:1440px)": {
                                        maxWidth: 1440
                                    }
                                },
                                minHeight: (theme)=>`${theme.mixins.toolbar.minHeight - (skin === "bordered" ? 1 : 0)}px !important`
                            },
                            children: userHorizontalNavMenuContent && userHorizontalNavMenuContent(props) || /*#__PURE__*/ jsx_runtime_.jsx(horizontal_navigation, {
                                ...props
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayout_ContentWrapper, {
                className: "layout-page-content",
                sx: {
                    ...contentWidth === "boxed" && {
                        mx: "auto",
                        "@media (min-width:1440px)": {
                            maxWidth: 1440
                        },
                        "@media (min-width:1200px)": {
                            maxWidth: "100%"
                        }
                    }
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker, {
                sx: {
                    zIndex: 11
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    id: "react-datepicker-portal"
                })
            }),
            themeConfig/* default.disableCustomizer */.Z.disableCustomizer || hidden ? null : /*#__PURE__*/ jsx_runtime_.jsx(customizer, {}),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUp_default()), {})
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_HorizontalLayout = (HorizontalLayout);

;// CONCATENATED MODULE: ./src/@core/layouts/Layout.tsx
// ** React Import


// ** Layout Components


const Layout = (props)=>{
    // ** Props
    const { hidden , children , settings , saveSettings  } = props;
    // ** Ref
    const isCollapsed = (0,external_react_.useRef)(settings.navCollapsed);
    (0,external_react_.useEffect)(()=>{
        if (hidden) {
            if (settings.navCollapsed) {
                saveSettings({
                    ...settings,
                    navCollapsed: false,
                    layout: "vertical"
                });
                isCollapsed.current = true;
            } else {
                saveSettings({
                    ...settings,
                    layout: "vertical"
                });
            }
        } else {
            if (isCollapsed.current) {
                saveSettings({
                    ...settings,
                    navCollapsed: true,
                    layout: settings.lastLayout
                });
                isCollapsed.current = false;
            } else {
                saveSettings({
                    ...settings,
                    layout: settings.lastLayout
                });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hidden
    ]);
    if (settings.layout === "horizontal") {
        return /*#__PURE__*/ jsx_runtime_.jsx(layouts_HorizontalLayout, {
            ...props,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_VerticalLayout, {
        ...props,
        children: children
    });
};
/* harmony default export */ const layouts_Layout = (Layout);

;// CONCATENATED MODULE: external "mdi-material-ui/HomeOutline"
const HomeOutline_namespaceObject = require("mdi-material-ui/HomeOutline");
var HomeOutline_default = /*#__PURE__*/__webpack_require__.n(HomeOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/Finance"
const Finance_namespaceObject = require("mdi-material-ui/Finance");
var Finance_default = /*#__PURE__*/__webpack_require__.n(Finance_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/Cellphone"
var Cellphone_ = __webpack_require__(8255);
var Cellphone_default = /*#__PURE__*/__webpack_require__.n(Cellphone_);
;// CONCATENATED MODULE: ./src/navigation/vertical/index.ts
// ** Icon imports



const vertical_navigation = ()=>[
        {
            title: "Home",
            icon: (HomeOutline_default()),
            path: "/home"
        },
        {
            title: "Mobile",
            icon: (Cellphone_default()),
            path: "/mobile"
        },
        {
            title: "Finance",
            icon: (Finance_default()),
            path: "/second-page"
        }
    ];
/* harmony default export */ const vertical = (vertical_navigation);

;// CONCATENATED MODULE: external "mdi-material-ui/CurrencyBtc"
const CurrencyBtc_namespaceObject = require("mdi-material-ui/CurrencyBtc");
var CurrencyBtc_default = /*#__PURE__*/__webpack_require__.n(CurrencyBtc_namespaceObject);
;// CONCATENATED MODULE: ./src/navigation/horizontal/index.ts
// ** Icon imports




const navigation_horizontal_navigation = ()=>[
        {
            title: "Home",
            icon: (HomeOutline_default()),
            path: "/home"
        },
        {
            icon: (Cellphone_default()),
            title: "Mobile",
            children: [
                {
                    icon: (Cellphone_default()),
                    title: "Mobile Details",
                    path: "/mobile"
                }
            ]
        },
        {
            title: "Finance",
            icon: (Finance_default()),
            path: "/second-page"
        },
        {
            title: "Crypto",
            icon: (CurrencyBtc_default()),
            path: "/crypto"
        }
    ];
/* harmony default export */ const horizontal = (navigation_horizontal_navigation);

;// CONCATENATED MODULE: external "mdi-material-ui/Menu"
const Menu_namespaceObject = require("mdi-material-ui/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherNight"
const WeatherNight_namespaceObject = require("mdi-material-ui/WeatherNight");
var WeatherNight_default = /*#__PURE__*/__webpack_require__.n(WeatherNight_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherSunny"
const WeatherSunny_namespaceObject = require("mdi-material-ui/WeatherSunny");
var WeatherSunny_default = /*#__PURE__*/__webpack_require__.n(WeatherSunny_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/ModeToggler.tsx
// ** MUI Imports


// ** Icons Imports


const ModeToggler = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === "light") {
            handleModeChange("dark");
        } else {
            handleModeChange("light");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: settings.mode === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx((WeatherSunny_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((WeatherNight_default()), {})
    });
};
/* harmony default export */ const shared_components_ModeToggler = (ModeToggler);

;// CONCATENATED MODULE: external "@mui/material/Menu"
const material_Menu_namespaceObject = require("@mui/material/Menu");
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(material_Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(5168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/CogOutline"
const CogOutline_namespaceObject = require("mdi-material-ui/CogOutline");
var CogOutline_default = /*#__PURE__*/__webpack_require__.n(CogOutline_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/CurrencyUsd"
var CurrencyUsd_ = __webpack_require__(5890);
var CurrencyUsd_default = /*#__PURE__*/__webpack_require__.n(CurrencyUsd_);
;// CONCATENATED MODULE: external "mdi-material-ui/EmailOutline"
const EmailOutline_namespaceObject = require("mdi-material-ui/EmailOutline");
var EmailOutline_default = /*#__PURE__*/__webpack_require__.n(EmailOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/LogoutVariant"
const LogoutVariant_namespaceObject = require("mdi-material-ui/LogoutVariant");
var LogoutVariant_default = /*#__PURE__*/__webpack_require__.n(LogoutVariant_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountOutline"
var AccountOutline_ = __webpack_require__(7143);
var AccountOutline_default = /*#__PURE__*/__webpack_require__.n(AccountOutline_);
;// CONCATENATED MODULE: external "mdi-material-ui/MessageOutline"
const MessageOutline_namespaceObject = require("mdi-material-ui/MessageOutline");
var MessageOutline_default = /*#__PURE__*/__webpack_require__.n(MessageOutline_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/HelpCircleOutline"
const HelpCircleOutline_namespaceObject = require("mdi-material-ui/HelpCircleOutline");
var HelpCircleOutline_default = /*#__PURE__*/__webpack_require__.n(HelpCircleOutline_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/components/UserDropdown.tsx
// ** React Imports


// ** Next Import

// ** MUI Imports








// ** Icons Imports







// ** Styled Components
const BadgeContentSpan = (0,styles_.styled)("span")(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }));
const UserDropdown = (props)=>{
    // ** Props
    const { settings  } = props;
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    // ** Hooks
    const router = (0,router_.useRouter)();
    // ** Vars
    const { direction  } = settings;
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = (url)=>{
        if (url) {
            router.push(url);
        }
        setAnchorEl(null);
    };
    const styles = {
        py: 2,
        px: 4,
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        textDecoration: "none",
        "& svg": {
            fontSize: "1.375rem",
            color: "text.secondary"
        }
    };
    const handleLogout = ()=>{
        handleDropdownClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                overlap: "circular",
                onClick: handleDropdownOpen,
                sx: {
                    ml: 2,
                    cursor: "pointer"
                },
                badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {}),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    alt: "John Doe",
                    onClick: handleDropdownOpen,
                    sx: {
                        width: 40,
                        height: 40
                    },
                    src: "/images/avatars/1.png"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Menu_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: ()=>handleDropdownClose(),
                sx: {
                    "& .MuiMenu-paper": {
                        width: 230,
                        marginTop: 4
                    }
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: direction === "ltr" ? "right" : "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: direction === "ltr" ? "right" : "left"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            pt: 2,
                            pb: 3,
                            px: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                    overlap: "circular",
                                    badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {}),
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        alt: "John Doe",
                                        src: "/images/avatars/1.png",
                                        sx: {
                                            width: "2.5rem",
                                            height: "2.5rem"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        marginLeft: 3,
                                        alignItems: "flex-start",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: "John Doe"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontSize: "0.8rem",
                                                color: "text.disabled"
                                            },
                                            children: "Admin"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            mt: 0,
                            mb: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((AccountOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Profile"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((EmailOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Inbox"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((MessageOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Chat"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CogOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Settings"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CurrencyUsd_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Pricing"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((HelpCircleOutline_default()), {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "FAQ"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        sx: {
                            py: 2
                        },
                        onClick: handleLogout,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((LogoutVariant_default()), {
                                sx: {
                                    marginRight: 2,
                                    fontSize: "1.375rem",
                                    color: "text.secondary"
                                }
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_UserDropdown = (UserDropdown);

;// CONCATENATED MODULE: ./src/layouts/components/vertical/AppBarContent.tsx
// ** MUI Imports



// ** Icons Imports

// ** Components


const AppBarContent_AppBarContent = (props)=>{
    // ** Props
    const { hidden , settings , saveSettings , toggleNavVisibility  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: "inherit",
                        sx: {
                            ml: -2.75
                        },
                        onClick: toggleNavVisibility,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                        settings: settings,
                        saveSettings: saveSettings
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                className: "actions-right",
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserDropdown, {
                    settings: settings
                })
            })
        ]
    });
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent_AppBarContent);

;// CONCATENATED MODULE: ./src/layouts/components/horizontal/AppBarContent.tsx
// ** MUI Imports


// ** Components


const horizontal_AppBarContent_AppBarContent = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                settings: settings,
                saveSettings: saveSettings
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_UserDropdown, {
                settings: settings
            })
        ]
    });
};
/* harmony default export */ const horizontal_AppBarContent = (horizontal_AppBarContent_AppBarContent);

;// CONCATENATED MODULE: ./src/layouts/UserLayout.tsx
// ** React Imports


// ** Layout Imports
// !Do not remove this Layout import

// ** Navigation Imports


// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'


// ** Hook Import



const AppBrand = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/nixby-icon.png",
                alt: "logo",
                width: "40",
                height: "40"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                sx: {
                    ml: 2,
                    fontWeight: 700,
                    lineHeight: 1.2
                },
                children: "Nixby"
            })
        ]
    });
};
const UserLayout = ({ children  })=>{
    // ** Hooks
    const { settings , saveSettings  } = (0,useSettings/* useSettings */.r)();
    /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */ const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("lg"));
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_Layout, {
        hidden: hidden,
        settings: settings,
        saveSettings: saveSettings,
        ...settings.layout === "horizontal" ? {
            // ** Navigation Items
            horizontalNavItems: horizontal(),
            // Uncomment the below line when using server-side menu in horizontal layout and comment the above line
            // horizontalNavItems: ServerSideHorizontalNavItems(),
            // ** AppBar Content
            horizontalAppBarContent: ()=>/*#__PURE__*/ jsx_runtime_.jsx(horizontal_AppBarContent, {
                    settings: settings,
                    saveSettings: saveSettings
                }),
            horizontalAppBarBranding: ()=>/*#__PURE__*/ jsx_runtime_.jsx(AppBrand, {})
        } : {
            // ** Navigation Items
            verticalNavItems: vertical(),
            // Uncomment the below line when using server-side menu in vertical layout and comment the above line
            // verticalNavItems: ServerSideVerticalNavItems(),
            // ** AppBar Content
            verticalAppBarContent: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(vertical_AppBarContent, {
                    hidden: hidden,
                    settings: settings,
                    saveSettings: saveSettings,
                    toggleNavVisibility: props.toggleNavVisibility
                })
        },
        children: children
    });
};
/* harmony default export */ const layouts_UserLayout = (UserLayout);

;// CONCATENATED MODULE: external "@mui/utils"
const external_mui_utils_namespaceObject = require("@mui/utils");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/GlobalStyles"
const GlobalStyles_namespaceObject = require("@mui/material/GlobalStyles");
var GlobalStyles_default = /*#__PURE__*/__webpack_require__.n(GlobalStyles_namespaceObject);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
;// CONCATENATED MODULE: ./src/layouts/components/Direction.tsx
// ** React Imports


// ** Emotion Imports


const styleCache = ()=>cache_default()({
        key: "rtl",
        prepend: true
    });
const Direction = (props)=>{
    const { children , direction  } = props;
    (0,external_react_.useEffect)(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === "rtl") {
        return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
            value: styleCache(),
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const components_Direction = (Direction);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/fab.ts
// ** MUI Imports
const Button = (theme)=>{
    return {
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[5]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_fab = (Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/card.ts
// ** MUI Imports
const Card = (theme, skin)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: skin !== "bordered" ? theme.shadows[6] : theme.shadows[0],
                    ...skin === "bordered" && {
                        border: `1px solid ${theme.palette.divider}`
                    },
                    "& .card-more-options": {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "& .MuiCardHeader-subheader": {
                        fontSize: "0.875rem"
                    }
                },
                title: {
                    lineHeight: 1.6,
                    fontWeight: 500,
                    fontSize: "1.25rem"
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "&:last-of-type": {
                        paddingBottom: theme.spacing(5)
                    },
                    "& + .MuiCardActions-root": {
                        paddingTop: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "&.card-action-dense": {
                        padding: theme.spacing(0, 2.5, 2.5),
                        ".MuiCard-root .MuiCardMedia-root + &": {
                            paddingTop: theme.spacing(2.5)
                        },
                        ".MuiCard-root &:first-of-type": {
                            paddingTop: theme.spacing(5),
                            paddingBottom: theme.spacing(5),
                            "& + .MuiCardContent-root": {
                                paddingTop: 0
                            },
                            "& + .MuiCardHeader-root": {
                                paddingTop: 0
                            }
                        }
                    },
                    "& .MuiButton-text": {
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/chip.ts
// ** MUI Imports
// ** Util Imports

const Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                outlined: {
                    "&.MuiChip-colorDefault": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                avatar: {
                    color: theme.palette.text.primary
                },
                iconColorDefault: {
                    color: theme.palette.text.primary
                },
                deletableColorPrimary: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7),
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }
                },
                deletableColorSecondary: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.7),
                        "&:hover": {
                            color: theme.palette.secondary.main
                        }
                    }
                },
                deletableColorSuccess: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.7),
                        "&:hover": {
                            color: theme.palette.success.main
                        }
                    }
                },
                deletableColorError: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.7),
                        "&:hover": {
                            color: theme.palette.error.main
                        }
                    }
                },
                deletableColorWarning: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.7),
                        "&:hover": {
                            color: theme.palette.warning.main
                        }
                    }
                },
                deletableColorInfo: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.7),
                        "&:hover": {
                            color: theme.palette.info.main
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (Chip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/link.ts
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecorationColor: "transparent"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/list.ts
// ** MUI Imports
const List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(3),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    "& .MuiListItemText-primary": {
                        color: theme.palette.text.primary
                    },
                    "& .MuiListItemText-primary, & .MuiListItemText-secondary": {
                        lineHeight: 1.43
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (List);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/menu.ts
// ** MUI Imports
const Menu = (theme, skin)=>{
    const boxShadow = ()=>{
        if (skin === "bordered") {
            return theme.shadows[0];
        } else if (theme.palette.mode === "light") {
            return theme.shadows[8];
        } else return theme.shadows[9];
    };
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiMenu-paper": {
                        borderRadius: 5,
                        boxShadow: boxShadow(),
                        ...skin === "bordered" && {
                            border: `1px solid ${theme.palette.divider}`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (Menu);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tabs.ts
// ** MUI Imports
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    "& .MuiTab-root": {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    lineHeight: 1.5
                },
                textColorSecondary: {
                    "&.Mui-selected": {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/input.ts
// ** MUI Imports
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    lineHeight: "1.5rem",
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&.Mui-disabled:before": {
                        borderBottomStyle: "solid"
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
                    "&:hover:not(.Mui-disabled)": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&.Mui-disabled": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
                        "&:before": {
                            borderBottomStyle: "solid"
                        }
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    "&:hover:not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.error.main
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.text.disabled
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/paper.ts
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/table.ts
// ** MUI Imports
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase",
                    "& .MuiTableCell-head": {
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        lineHeight: "1.959rem",
                        letterSpacing: "0.17px"
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-body": {
                        fontWeight: 400,
                        fontSize: "0.875rem",
                        lineHeight: "1.358rem",
                        letterSpacing: "0.15px",
                        "&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)": {
                            paddingTop: theme.spacing(4),
                            paddingBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ": {
                        paddingLeft: theme.spacing(5)
                    },
                    "& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child": {
                        paddingRight: theme.spacing(5)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    "& .MuiButton-root": {
                        textTransform: "uppercase",
                        color: theme.palette.text.secondary
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    "& .MuiIconButton-root.Mui-disabled": {
                        color: theme.palette.action.active
                    }
                },
                displayedRows: {
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/alerts.ts
// ** MUI Imports

// ** Util Import

const Alert = (theme)=>{
    const getColor = theme.palette.mode === "light" ? styles_.darken : styles_.lighten;
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(1)
                    },
                    "& a": {
                        fontWeight: 500,
                        color: "inherit"
                    }
                },
                standardSuccess: {
                    color: getColor(theme.palette.success.main, 0.1),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.success.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.success.main, 0.1)
                    }
                },
                standardInfo: {
                    color: getColor(theme.palette.info.main, 0.1),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.info.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.info.main, 0.1)
                    }
                },
                standardWarning: {
                    color: getColor(theme.palette.warning.main, 0.1),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.warning.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.warning.main, 0.1)
                    }
                },
                standardError: {
                    color: getColor(theme.palette.error.main, 0.1),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.error.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.error.main, 0.1)
                    }
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: getColor(theme.palette.success.main, 0.1),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.success.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.success.main
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: getColor(theme.palette.info.main, 0.1),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.info.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.info.main
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: getColor(theme.palette.warning.main, 0.1),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.warning.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.warning.main
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: getColor(theme.palette.error.main, 0.1),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.error.main, 0.1)
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.error.main
                    }
                },
                filled: {
                    fontWeight: 400
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/button.ts
// ** MUI Imports
// ** Theme Config Imports

// ** Util Import

const button_Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 8,
                    lineHeight: 1.715,
                    padding: `${theme.spacing(1.75, 3)}`,
                    "&.MuiButton-textPrimary:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08)
                    },
                    "&.MuiButton-textSecondary:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.08)
                    },
                    "&.MuiButton-textSuccess:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.08)
                    },
                    "&.MuiButton-textError:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.08)
                    },
                    "&.MuiButton-textWarning:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.08)
                    },
                    "&.MuiButton-textInfo:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.08)
                    }
                },
                contained: {
                    boxShadow: theme.shadows[3],
                    padding: `${theme.spacing(1.75, 5.5)}`
                },
                outlined: {
                    lineHeight: 1.572,
                    padding: `${theme.spacing(1.75, 5.25)}`,
                    "&.MuiButton-outlinedPrimary:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08)
                    },
                    "&.MuiButton-outlinedSecondary:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.08)
                    },
                    "&.MuiButton-outlinedSuccess:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.08)
                    },
                    "&.MuiButton-outlinedError:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.08)
                    },
                    "&.MuiButton-outlinedWarning:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.08)
                    },
                    "&.MuiButton-outlinedInfo:hover": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.08)
                    }
                },
                sizeSmall: {
                    lineHeight: 1.693,
                    padding: `${theme.spacing(1, 2.25)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(1, 3.25)}`
                    },
                    "&.MuiButton-outlined": {
                        lineHeight: 1.539,
                        padding: `${theme.spacing(1, 3)}`
                    }
                },
                sizeLarge: {
                    lineHeight: 1.734,
                    padding: `${theme.spacing(2, 5.5)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(2, 6.5)}`
                    },
                    "&.MuiButton-outlined": {
                        lineHeight: 1.6,
                        padding: `${theme.spacing(2, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: themeConfig/* default.disableRipple */.Z.disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (button_Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dialog.ts
// ** MUI Imports
// ** Util Import

const Dialog = (theme, skin)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[skin === "bordered" ? 0 : 10],
                    ...skin === "bordered" && {
                        border: `1px solid ${theme.palette.divider}`
                    },
                    "&:not(.MuiDialog-paperFullScreen)": {
                        "@media (max-width:599px)": {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    "& > .MuiList-root": {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiDialogContent-root": {
                        paddingTop: 0
                    },
                    "& + .MuiDialogActions-root": {
                        paddingTop: 0
                    },
                    // Styling for Mobile Date Picker starts
                    "& .PrivatePickersToolbar-root": {
                        padding: theme.spacing(4, 5),
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        "& .MuiTypography-root": {
                            color: theme.palette.primary.contrastText
                        },
                        "& span.MuiTypography-overline": {
                            fontSize: "1rem",
                            lineHeight: "24px",
                            letterSpacing: "0.15px"
                        },
                        '& ~ div[class^="css-"] > div[class^="css-"]': {
                            marginTop: theme.spacing(6),
                            marginBottom: theme.spacing(6),
                            '& > div[class^="css-"]': {
                                backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                                "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                                    color: "inherit"
                                }
                            }
                        },
                        "& .PrivateTimePickerToolbar-hourMinuteLabel": {
                            alignItems: "center",
                            "& > .MuiButton-root span.MuiTypography-root": {
                                fontWeight: 500,
                                lineHeight: "72px",
                                fontSize: "3.75rem",
                                letterSpacing: "-0.5px"
                            },
                            "& > .MuiTypography-root": {
                                color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54),
                                "& + .MuiButton-root > span.MuiTypography-root": {
                                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        },
                        "& .PrivateTimePickerToolbar-ampmSelection": {
                            "& .MuiButton-root": {
                                marginBottom: theme.spacing(2)
                            },
                            ".PrivateTimePickerToolbar-ampmLabel": {
                                lineHeight: 1.5,
                                fontWeight: 400,
                                fontSize: "1rem",
                                letterSpacing: "0.15px",
                                "&:not(.Mui-selected)": {
                                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        }
                    },
                    '& [role="listbox"] > span[role="option"]': {
                        lineHeight: 1.25,
                        fontSize: "0.875rem"
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "&.dialog-actions-dense": {
                        padding: theme.spacing(2.5),
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/rating.ts
// ** MUI Imports
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main
                },
                iconEmpty: {
                    color: `rgba(${theme.palette.customColors.main}, 0.22)`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/select.ts
// ** MUI Imports
const select_select = (theme)=>{
    return {
        MuiSelect: {
            styleOverrides: {
                select: {
                    minWidth: "6rem !important",
                    "&.MuiTablePagination-select": {
                        minWidth: "1.5rem !important"
                    },
                    "&.Mui-disabled ~ .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_select = (select_select);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/avatars.ts
// ** MUI Imports
const Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.action.selected
                },
                rounded: {
                    borderRadius: 8
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    justifyContent: "flex-end",
                    ".MuiCard-root & .MuiAvatar-root": {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (Avatar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/progress.ts
// ** MUI Imports
// ** Util Import

const Progress = (theme)=>{
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 6,
                    borderRadius: theme.shape.borderRadius,
                    "&.MuiLinearProgress-colorPrimary": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)
                    },
                    "&.MuiLinearProgress-colorSecondary": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12)
                    },
                    "&.MuiLinearProgress-colorSuccess": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)
                    },
                    "&.MuiLinearProgress-colorError": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12)
                    },
                    "&.MuiLinearProgress-colorWarning": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12)
                    },
                    "&.MuiLinearProgress-colorInfo": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12)
                    }
                },
                bar: {
                    borderRadius: theme.shape.borderRadius
                }
            }
        }
    };
};
/* harmony default export */ const overrides_progress = (Progress);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/divider.ts
// ** MUI Imports
const Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: `${theme.spacing(2)} 0`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (Divider);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/popover.ts
// ** MUI Imports
const Popover = (theme, skin)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    "& .MuiPopover-paper": {
                        boxShadow: theme.shadows[skin === "bordered" ? 0 : 6],
                        ...skin === "bordered" && {
                            border: `1px solid ${theme.palette.divider}`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tooltip.ts
// ** MUI Imports
// ** Util Import

const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 6,
                    lineHeight: 1.455,
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.tooltipBg, 0.9)
                },
                arrow: {
                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.tooltipBg, 0.9)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/backdrop.ts
// ** MUI Imports
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === "light" ? `rgba(${theme.palette.customColors.main}, 0.5)` : (0,hex_to_rgba/* hexToRGBA */.E)("#101121", 0.87)
                },
                invisible: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dataGrid.ts
// ** MUI Imports
const DataGrid = (theme)=>{
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 0,
                    color: theme.palette.text.primary,
                    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
                        outline: "none"
                    }
                },
                toolbarContainer: {
                    paddingRight: `${theme.spacing(5)} !important`,
                    paddingLeft: `${theme.spacing(3.25)} !important`
                },
                columnHeaders: {
                    maxHeight: "54px !important",
                    minHeight: "54px !important",
                    lineHeight: "24px !important",
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                },
                columnHeader: {
                    height: "54px",
                    "&:not(.MuiDataGrid-columnHeaderCheckbox)": {
                        padding: theme.spacing(4),
                        "&:first-of-type": {
                            paddingLeft: theme.spacing(5)
                        }
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(5)
                    }
                },
                columnHeaderCheckbox: {
                    maxWidth: "58px !important",
                    minWidth: "58px !important"
                },
                columnHeaderTitleContainer: {
                    padding: 0
                },
                columnHeaderTitle: {
                    fontSize: "0.75rem",
                    letterSpacing: "0.17px",
                    textTransform: "uppercase"
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                virtualScroller: {
                    marginTop: "54px !important"
                },
                virtualScrollerRenderZone: {
                    "& .MuiDataGrid-row": {
                        maxHeight: "50px !important",
                        minHeight: "50px !important"
                    }
                },
                row: {
                    "&:last-child": {
                        "& .MuiDataGrid-cell": {
                            borderBottom: 0
                        }
                    }
                },
                cell: {
                    maxHeight: "50px !important",
                    minHeight: "50px !important",
                    lineHeight: "20px !important",
                    borderColor: theme.palette.divider,
                    "&:not(.MuiDataGrid-cellCheckbox)": {
                        padding: theme.spacing(4),
                        "&:first-of-type": {
                            paddingLeft: theme.spacing(5)
                        }
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(5)
                    },
                    "&:focus, &:focus-within": {
                        outline: "none"
                    }
                },
                cellCheckbox: {
                    maxWidth: "58px !important",
                    minWidth: "58px !important"
                },
                editInputCell: {
                    padding: 0,
                    color: theme.palette.text.primary,
                    "& .MuiInputBase-input": {
                        padding: 0
                    }
                },
                footerContainer: {
                    minHeight: "50px !important",
                    borderTop: `1px solid ${theme.palette.divider}`,
                    "& .MuiTablePagination-toolbar": {
                        minHeight: "50px !important"
                    },
                    "& .MuiTablePagination-select": {
                        color: theme.palette.text.primary
                    }
                }
            },
            defaultProps: {
                rowHeight: 50,
                headerHeight: 54
            }
        }
    };
};
/* harmony default export */ const overrides_dataGrid = (DataGrid);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/snackbar.ts
// ** MUI Imports
const Snackbar = (theme, skin)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: theme.spacing(1.75, 4),
                    ...skin === "bordered" && {
                        boxShadow: "none"
                    },
                    backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[900] : theme.palette.grey[100],
                    "& .MuiSnackbarContent-message": {
                        lineHeight: 1.429
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/switches.ts
// ** MUI Imports
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    "& .MuiSwitch-track": {
                        borderRadius: theme.shape.borderRadius
                    },
                    "& .MuiSwitch-switchBase": {
                        "&:not(.Mui-checked)": {
                            "& .MuiSwitch-thumb": {
                                color: theme.palette.grey[50]
                            }
                        }
                    },
                    "& .Mui-disabled + .MuiSwitch-track": {
                        backgroundColor: `rgb(${theme.palette.customColors.main})`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/timeline.ts
// ** MUI Imports
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    "&:not(:last-of-type)": {
                        "& .MuiTimelineContent-root": {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[400], 0.12)}`
                },
                outlinedPrimary: {
                    "& svg": {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    "& svg": {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    "& svg": {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    "& svg": {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    "& svg": {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    "& svg": {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    "& svg": {
                        color: theme.palette.grey[400]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/accordion.ts
// ** MUI Imports
const Accordion = (theme)=>{
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&:first-of-type": {
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    },
                    "&:last-of-type": {
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8
                    },
                    "&.Mui-disabled": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    "&.Mui-expanded": {
                        boxShadow: theme.shadows[3]
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: `0 ${theme.spacing(5)}`,
                    "& + .MuiCollapse-root": {
                        "& .MuiAccordionDetails-root:first-child": {
                            paddingTop: 0
                        }
                    }
                },
                content: {
                    margin: `${theme.spacing(3.25)} 0`
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiAccordionDetails-root": {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/pagination.ts
// ** MUI Imports
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12),
                        "&:hover": {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.24)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12),
                        "&:hover": {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.24)} !important`
                        }
                    }
                },
                rounded: {
                    borderRadius: 8
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/typography.ts
// ** MUI Imports
const Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (Typography);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/breadcrumbs.ts
/* harmony default export */ const breadcrumbs = ({
    MuiBreadcrumbs: {
        styleOverrides: {
            li: {
                "& > .MuiLink-root": {
                    textDecoration: "none"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/buttonGroup.ts
/* harmony default export */ const buttonGroup = ({
    MuiButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 8
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/autocomplete.ts
// ** MUI Imports
const Autocomplete = (theme, skin)=>{
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[6],
                    ...skin === "bordered" && {
                        boxShadow: "none",
                        border: `1px solid ${theme.palette.divider}`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_autocomplete = (Autocomplete);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/toggleButton.ts
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 8
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 8
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dateTimePicker.ts
// ** MUI Imports
const DateTimePicker = (theme)=>{
    return {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    '& [role="presentation"]': {
                        fontWeight: 400,
                        "& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div": {
                            marginRight: 0
                        },
                        "& .MuiIconButton-sizeSmall": {
                            padding: theme.spacing(0.5)
                        },
                        "& + div .MuiIconButton-root:not(.Mui-disabled)": {
                            color: theme.palette.text.secondary
                        }
                    },
                    "& .PrivatePickersSlideTransition-root": {
                        minHeight: 240
                    },
                    "& .MuiCalendarPicker-viewTransitionContainer .MuiTypography-root": {
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem",
                    letterSpacing: "0.15px"
                }
            }
        },
        MuiClockPicker: {
            styleOverrides: {
                arrowSwitcher: {
                    "& .MuiIconButton-root:not(.Mui-disabled)": {
                        color: theme.palette.text.secondary
                    },
                    "& + div": {
                        "& > div": {
                            backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                            "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                                color: "inherit"
                            }
                        }
                    }
                }
            }
        },
        MuiMonthPicker: {
            styleOverrides: {
                root: {
                    "& > .MuiTypography-root.Mui-selected": {
                        fontSize: "1rem"
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dateTimePicker = (DateTimePicker);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/index.ts
// ** MUI Imports
// ** Overrides Imports

































const Overrides = (theme, settings)=>{
    const { skin  } = settings;
    const fab = overrides_fab(theme);
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const tabs = overrides_tabs(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const button = overrides_button(theme);
    const rating = overrides_rating(theme);
    const select = overrides_select(theme);
    const avatars = overrides_avatars(theme);
    const progress = overrides_progress(theme);
    const divider = overrides_divider(theme);
    const menu = overrides_menu(theme, skin);
    const tooltip = overrides_tooltip(theme);
    const cards = card(theme, skin);
    const backdrop = overrides_backdrop(theme);
    const dataGrid = overrides_dataGrid(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const dialog = overrides_dialog(theme, skin);
    const pagination = overrides_pagination(theme);
    const popover = overrides_popover(theme, skin);
    const snackbar = overrides_snackbar(theme, skin);
    const dateTimePicker = overrides_dateTimePicker(theme);
    const autocomplete = overrides_autocomplete(theme, skin);
    return Object.assign(fab, chip, list, menu, tabs, cards, input, select, alerts, button, dialog, rating, tables, avatars, divider, popover, tooltip, overrides_link, backdrop, dataGrid, paper, progress, snackbar, switches, timeline, accordion, pagination, autocomplete, typography, dateTimePicker, breadcrumbs, buttonGroup, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./src/@core/theme/typography/index.ts
// ** Theme Type Import
const typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            letterSpacing: "-1.5px",
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            letterSpacing: "-0.5px",
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            letterSpacing: "0.25px",
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h6: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        subtitle1: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        subtitle2: {
            letterSpacing: "0.1px",
            color: theme.palette.text.secondary
        },
        body1: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        body2: {
            lineHeight: 1.429,
            letterSpacing: "0.15px",
            color: theme.palette.text.secondary
        },
        button: {
            letterSpacing: "0.4px",
            color: theme.palette.text.primary
        },
        caption: {
            lineHeight: 1.25,
            letterSpacing: "0.4px",
            color: theme.palette.text.secondary
        },
        overline: {
            letterSpacing: "1px",
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (typography_Typography);

;// CONCATENATED MODULE: ./src/layouts/UserThemeOptions.ts
// ** MUI Imports
// ** To use core palette, uncomment the below import
// import corePalette from 'src/@core/theme/palette'
// ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
// import { useSettings } from 'src/@core/hooks/useSettings'
const UserThemeOptions = ()=>{
    // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
    // const { settings } = useSettings()
    // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
    // const { mode, skin } = settings
    // ** To use core palette, uncomment the below line
    // const palette = corePalette(mode, skin)
    return {
    };
};
/* harmony default export */ const layouts_UserThemeOptions = (UserThemeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/palette/index.ts
// ** Type Imports
const DefaultPalette = (mode, skin)=>{
    // ** Vars
    const lightColor = "76, 78, 100";
    const darkColor = "234, 234, 255";
    const mainColor = mode === "light" ? lightColor : darkColor;
    const defaultBgColor = ()=>{
        if (skin === "bordered" && mode === "light") {
            return "#FFF";
        } else if (skin === "bordered" && mode === "dark") {
            return "#30334E";
        } else if (mode === "light") {
            return "#F7F7F9";
        } else return "#282A42";
    };
    return {
        customColors: {
            dark: darkColor,
            main: mainColor,
            light: lightColor,
            darkBg: "#282A42",
            lightBg: "#F7F7F9",
            bodyBg: mode === "light" ? "#F7F7F9" : "#282A42",
            tooltipBg: mode === "light" ? "#262732" : "#464A65",
            tableHeaderBg: mode === "light" ? "#F5F5F7" : "#3A3E5B"
        },
        common: {
            black: "#000",
            white: "#FFF"
        },
        mode: mode,
        primary: {
            light: "#787EFF",
            main: "#666CFF",
            dark: "#5A5FE0",
            contrastText: "#FFF"
        },
        secondary: {
            light: "#7F889B",
            main: "#6D788D",
            dark: "#606A7C",
            contrastText: "#FFF"
        },
        success: {
            light: "#83E542",
            main: "#72E128",
            dark: "#64C623",
            contrastText: "#FFF"
        },
        error: {
            light: "#FF625F",
            main: "#FF4D49",
            dark: "#E04440",
            contrastText: "#FFF"
        },
        warning: {
            light: "#FDBE42",
            main: "#FDB528",
            dark: "#DF9F23",
            contrastText: "#FFF"
        },
        info: {
            light: "#40CDFA",
            main: "#26C6F9",
            dark: "#21AEDB",
            contrastText: "#FFF"
        },
        grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#D5D5D5",
            A200: "#AAAAAA",
            A400: "#616161",
            A700: "#303030"
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === "light" ? "#FFF" : "#30334E",
            default: defaultBgColor()
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.05)`,
            hoverOpacity: 0.05,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.26)`,
            disabledBackground: `rgba(${mainColor}, 0.12)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./src/@core/theme/spacing/index.ts
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./src/@core/theme/shadows/index.ts
// ** Theme Type Import
const Shadows = (mode)=>{
    if (mode === "light") {
        return [
            "none",
            "0px 2px 1px -1px rgba(76, 78, 100, 0.2), 0px 1px 1px 0px rgba(76, 78, 100, 0.14), 0px 1px 3px 0px rgba(76, 78, 100, 0.12)",
            "0px 3px 1px -2px rgba(76, 78, 100, 0.2), 0px 2px 2px 0px rgba(76, 78, 100, 0.14), 0px 1px 5px 0px rgba(76, 78, 100, 0.12)",
            "0px 4px 8px -4px rgba(76, 78, 100, 0.42)",
            "0px 6px 18px -8px rgba(76, 78, 100, 0.56)",
            "0px 3px 5px -1px rgba(76, 78, 100, 0.2), 0px 5px 8px 0px rgba(76, 78, 100, 0.14), 0px 1px 14px 0px rgba(76, 78, 100, 0.12)",
            "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
            "0px 4px 5px -2px rgba(76, 78, 100, 0.2), 0px 7px 10px 1px rgba(76, 78, 100, 0.14), 0px 2px 16px 1px rgba(76, 78, 100, 0.12)",
            "0px 5px 5px -3px rgba(76, 78, 100, 0.2), 0px 8px 10px 1px rgba(76, 78, 100, 0.14), 0px 3px 14px 2px rgba(76, 78, 100, 0.12)",
            "0px 5px 6px -3px rgba(76, 78, 100, 0.2), 0px 9px 12px 1px rgba(76, 78, 100, 0.14), 0px 3px 16px 2px rgba(76, 78, 100, 0.12)",
            "0px 6px 6px -3px rgba(76, 78, 100, 0.2), 0px 10px 14px 1px rgba(76, 78, 100, 0.14), 0px 4px 18px 3px rgba(76, 78, 100, 0.12)",
            "0px 6px 7px -4px rgba(76, 78, 100, 0.2), 0px 11px 15px 1px rgba(76, 78, 100, 0.14), 0px 4px 20px 3px rgba(76, 78, 100, 0.12)",
            "0px 7px 8px -4px rgba(76, 78, 100, 0.2), 0px 12px 17px 2px rgba(76, 78, 100, 0.14), 0px 5px 22px 4px rgba(76, 78, 100, 0.12)",
            "0px 7px 8px -4px rgba(76, 78, 100, 0.2), 0px 13px 19px 2px rgba(76, 78, 100, 0.14), 0px 5px 24px 4px rgba(76, 78, 100, 0.12)",
            "0px 7px 9px -4px rgba(76, 78, 100, 0.2), 0px 14px 21px 2px rgba(76, 78, 100, 0.14), 0px 5px 26px 4px rgba(76, 78, 100, 0.12)",
            "0px 8px 9px -5px rgba(76, 78, 100, 0.2), 0px 15px 22px 2px rgba(76, 78, 100, 0.14), 0px 6px 28px 5px rgba(76, 78, 100, 0.12)",
            "0px 8px 10px -5px rgba(76, 78, 100, 0.2), 0px 16px 24px 2px rgba(76, 78, 100, 0.14), 0px 6px 30px 5px rgba(76, 78, 100, 0.12)",
            "0px 8px 11px -5px rgba(76, 78, 100, 0.2), 0px 17px 26px 2px rgba(76, 78, 100, 0.14), 0px 6px 32px 5px rgba(76, 78, 100, 0.12)",
            "0px 9px 11px -5px rgba(76, 78, 100, 0.2), 0px 18px 28px 2px rgba(76, 78, 100, 0.14), 0px 7px 34px 6px rgba(76, 78, 100, 0.12)",
            "0px 9px 12px -6px rgba(76, 78, 100, 0.2), 0px 19px 29px 2px rgba(76, 78, 100, 0.14), 0px 7px 36px 6px rgba(76, 78, 100, 0.12)",
            "0px 10px 13px -6px rgba(76, 78, 100, 0.2), 0px 20px 31px 3px rgba(76, 78, 100, 0.14), 0px 8px 38px 7px rgba(76, 78, 100, 0.12)",
            "0px 10px 13px -6px rgba(76, 78, 100, 0.2), 0px 21px 33px 3px rgba(76, 78, 100, 0.14), 0px 8px 40px 7px rgba(76, 78, 100, 0.12)",
            "0px 10px 14px -6px rgba(76, 78, 100, 0.2), 0px 22px 35px 3px rgba(76, 78, 100, 0.14), 0px 8px 42px 7px rgba(76, 78, 100, 0.12)",
            "0px 11px 14px -7px rgba(76, 78, 100, 0.2), 0px 23px 36px 3px rgba(76, 78, 100, 0.14), 0px 9px 44px 8px rgba(76, 78, 100, 0.12)",
            "0px 11px 15px -7px rgba(76, 78, 100, 0.2), 0px 24px 38px 3px rgba(76, 78, 100, 0.14), 0px 9px 46px 8px rgba(76, 78, 100, 0.12)"
        ];
    } else {
        return [
            "none",
            "0px 2px 1px -1px rgba(20, 21, 33, 0.2), 0px 1px 1px 0px rgba(20, 21, 33, 0.14), 0px 1px 3px 0px rgba(20, 21, 33, 0.12)",
            "0px 3px 1px -2px rgba(20, 21, 33, 0.2), 0px 2px 2px 0px rgba(20, 21, 33, 0.14), 0px 1px 5px 0px rgba(20, 21, 33, 0.12)",
            "0px 4px 8px -4px rgba(20, 21, 33, 0.42)",
            "0px 6px 18px -8px rgba(20, 21, 33, 0.56)",
            "0px 3px 5px -1px rgba(20, 21, 33, 0.2), 0px 5px 8px 0px rgba(20, 21, 33, 0.14), 0px 1px 14px 0px rgba(20, 21, 33, 0.12)",
            "0px 2px 10px 0px rgba(20, 21, 33,  0.18)",
            "0px 4px 5px -2px rgba(20, 21, 33, 0.2), 0px 7px 10px 1px rgba(20, 21, 33, 0.14), 0px 2px 16px 1px rgba(20, 21, 33, 0.12)",
            "0px 5px 5px -3px rgba(20, 21, 33, 0.2), 0px 8px 10px 1px rgba(20, 21, 33, 0.14), 0px 3px 14px 2px rgba(20, 21, 33, 0.12)",
            "0px 5px 6px -3px rgba(20, 21, 33, 0.2), 0px 9px 12px 1px rgba(20, 21, 33, 0.14), 0px 3px 16px 2px rgba(20, 21, 33, 0.12)",
            "0px 6px 6px -3px rgba(20, 21, 33, 0.2), 0px 10px 14px 1px rgba(20, 21, 33, 0.14), 0px 4px 18px 3px rgba(20, 21, 33, 0.12)",
            "0px 6px 7px -4px rgba(20, 21, 33, 0.2), 0px 11px 15px 1px rgba(20, 21, 33, 0.14), 0px 4px 20px 3px rgba(20, 21, 33, 0.12)",
            "0px 7px 8px -4px rgba(20, 21, 33, 0.2), 0px 12px 17px 2px rgba(20, 21, 33, 0.14), 0px 5px 22px 4px rgba(20, 21, 33, 0.12)",
            "0px 7px 8px -4px rgba(20, 21, 33, 0.2), 0px 13px 19px 2px rgba(20, 21, 33, 0.14), 0px 5px 24px 4px rgba(20, 21, 33, 0.12)",
            "0px 7px 9px -4px rgba(20, 21, 33, 0.2), 0px 14px 21px 2px rgba(20, 21, 33, 0.14), 0px 5px 26px 4px rgba(20, 21, 33, 0.12)",
            "0px 8px 9px -5px rgba(20, 21, 33, 0.2), 0px 15px 22px 2px rgba(20, 21, 33, 0.14), 0px 6px 28px 5px rgba(20, 21, 33, 0.12)",
            "0px 8px 10px -5px rgba(20, 21, 33, 0.2), 0px 16px 24px 2px rgba(20, 21, 33, 0.14), 0px 6px 30px 5px rgba(20, 21, 33, 0.12)",
            "0px 8px 11px -5px rgba(20, 21, 33, 0.2), 0px 17px 26px 2px rgba(20, 21, 33, 0.14), 0px 6px 32px 5px rgba(20, 21, 33, 0.12)",
            "0px 9px 11px -5px rgba(20, 21, 33, 0.2), 0px 18px 28px 2px rgba(20, 21, 33, 0.14), 0px 7px 34px 6px rgba(20, 21, 33, 0.12)",
            "0px 9px 12px -6px rgba(20, 21, 33, 0.2), 0px 19px 29px 2px rgba(20, 21, 33, 0.14), 0px 7px 36px 6px rgba(20, 21, 33, 0.12)",
            "0px 10px 13px -6px rgba(20, 21, 33, 0.2), 0px 20px 31px 3px rgba(20, 21, 33, 0.14), 0px 8px 38px 7px rgba(20, 21, 33, 0.12)",
            "0px 10px 13px -6px rgba(20, 21, 33, 0.2), 0px 21px 33px 3px rgba(20, 21, 33, 0.14), 0px 8px 40px 7px rgba(20, 21, 33, 0.12)",
            "0px 10px 14px -6px rgba(20, 21, 33, 0.2), 0px 22px 35px 3px rgba(20, 21, 33, 0.14), 0px 8px 42px 7px rgba(20, 21, 33, 0.12)",
            "0px 11px 14px -7px rgba(20, 21, 33, 0.2), 0px 23px 36px 3px rgba(20, 21, 33, 0.14), 0px 9px 44px 8px rgba(20, 21, 33, 0.12)",
            "0px 11px 15px -7px rgba(20, 21, 33, 0.2), 0px 24px 38px 3px rgba(20, 21, 33, 0.14), 0px 9px 46px 8px rgba(20, 21, 33, 0.12)"
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./src/@core/theme/breakpoints/index.ts
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    });
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeOptions.ts
// ** MUI Theme Provider

// ** User Theme Options

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { skin , mode , direction , themeColor  } = settings;
    // ** Create New object before removing user component overrides and typography objects from userThemeOptions
    const userThemeConfig = Object.assign({}, layouts_UserThemeOptions());
    const userFontFamily = userThemeConfig.typography?.fontFamily;
    // ** Remove component overrides and typography objects from userThemeOptions
    delete userThemeConfig.components;
    delete userThemeConfig.typography;
    const mergedThemeConfig = (0,external_mui_utils_namespaceObject.deepmerge)({
        direction,
        palette: palette(mode, skin),
        typography: {
            fontFamily: userFontFamily || [
                "Inter",
                "sans-serif",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(",")
        },
        shadows: shadows(mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 10
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    }, userThemeConfig);
    return (0,external_mui_utils_namespaceObject.deepmerge)(mergedThemeConfig, {
        palette: {
            primary: {
                ...mergedThemeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/globalStyles.ts
// ** MUI Imports
const GlobalStyles = (theme, settings)=>{
    // ** Vars
    const { skin  } = settings;
    const perfectScrollbarThumbBgColor = ()=>{
        if (skin === "semi-dark" && theme.palette.mode === "light") {
            return "#57596C !important";
        } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
            return "#BFBFD5 !important";
        } else if (theme.palette.mode === "light") {
            return "#BFBFD5 !important";
        } else {
            return "#57596C !important";
        }
    };
    return {
        'body[style^="padding-right"] header::after, body[style^="padding-right"] footer::after': {
            content: '""',
            position: "absolute",
            left: "100%",
            top: 0,
            height: "100%",
            backgroundColor: theme.palette.background.paper,
            width: "30px"
        },
        ".demo-space-x > *": {
            marginTop: "1rem !important",
            marginRight: "1rem !important",
            'body[dir="rtl"] &': {
                marginRight: "0 !important",
                marginLeft: "1rem !important"
            }
        },
        ".demo-space-y > *:not(:last-of-type)": {
            marginBottom: "1rem"
        },
        ".MuiGrid-container.match-height .MuiCard-root": {
            height: "100%"
        },
        ".ps__rail-y": {
            zIndex: 1,
            right: "0 !important",
            left: "auto !important",
            "&:hover, &:focus, &.ps--clicking": {
                backgroundColor: theme.palette.mode === "light" ? "#F3F3F8 !important" : "#393B51 !important"
            },
            "& .ps__thumb-y": {
                right: "3px !important",
                left: "auto !important",
                backgroundColor: theme.palette.mode === "light" ? "#BFBFD5 !important" : "#57596C !important"
            },
            ".layout-vertical-nav &": {
                "& .ps__thumb-y": {
                    width: 4,
                    backgroundColor: perfectScrollbarThumbBgColor()
                },
                "&:hover, &:focus, &.ps--clicking": {
                    backgroundColor: "transparent !important",
                    "& .ps__thumb-y": {
                        width: 6
                    }
                }
            }
        },
        "#nprogress": {
            pointerEvents: "none",
            "& .bar": {
                left: 0,
                top: 0,
                height: 3,
                width: "100%",
                zIndex: 2000,
                position: "fixed",
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (GlobalStyles);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeComponent.tsx
// ** React Imports

// ** MUI Imports




// ** Theme Config

// ** Direction component for LTR or RTL

// ** Theme Override Imports


// ** Theme


// ** Global Styles

const ThemeComponent = (props)=>{
    // ** Props
    const { settings , children  } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,styles_.createTheme)(coreThemeConfig);
    // ** Deep Merge Component overrides of core and user
    const mergeComponentOverrides = (theme, settings)=>(0,external_mui_utils_namespaceObject.deepmerge)({
            ...overrides(theme, settings)
        }, layouts_UserThemeOptions()?.components);
    // ** Deep Merge Typography of core and user
    const mergeTypography = (theme)=>(0,external_mui_utils_namespaceObject.deepmerge)(theme_typography(theme), layouts_UserThemeOptions()?.typography);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,styles_.createTheme)(theme, {
        components: {
            ...mergeComponentOverrides(theme, settings)
        },
        typography: {
            ...mergeTypography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (themeConfig/* default.responsiveFontSizes */.Z.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Direction, {
            direction: settings.direction,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                /*#__PURE__*/ jsx_runtime_.jsx((GlobalStyles_default()), {
                    styles: ()=>globalStyles(theme, settings)
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

;// CONCATENATED MODULE: ./src/@core/components/window-wrapper/index.tsx
// ** React Imports


// ** Next Import

const WindowWrapper = ({ children  })=>{
    // ** State
    const { 0: windowReadyFlag , 1: setWindowReadyFlag  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        router.route
    ]);
    if (windowReadyFlag) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        });
    } else {
        return null;
    }
};
/* harmony default export */ const window_wrapper = (WindowWrapper);

// EXTERNAL MODULE: ./src/@core/context/settingsContext.tsx
var settingsContext = __webpack_require__(7464);
;// CONCATENATED MODULE: ./src/@core/styles/libs/react-hot-toast/index.ts
// ** MUI Imports


// ** Hook Import

const ReactHotToast = (0,styles_.styled)((Box_default()))(({ theme  })=>{
    // ** Hook & Var
    const { settings  } = (0,useSettings/* useSettings */.r)();
    const { layout , navHidden  } = settings;
    return {
        "& > div": {
            left: `${theme.spacing(6)} !important`,
            right: `${theme.spacing(6)} !important`,
            bottom: `${theme.spacing(6)} !important`,
            top: layout === "horizontal" && !navHidden ? "139px !important" : "75px !important"
        },
        "& .react-hot-toast": {
            fontWeight: 400,
            borderRadius: 8,
            fontSize: "1rem",
            letterSpacing: "0.14px",
            boxShadow: theme.shadows[3],
            zIndex: theme.zIndex.snackbar,
            color: theme.palette.text.primary,
            background: theme.palette.background.paper,
            "&>:first-of-type:not([role])>:first-of-type": {
                width: 14,
                height: 14
            }
        }
    };
});
/* harmony default export */ const react_hot_toast = (ReactHotToast);

// EXTERNAL MODULE: ./src/@core/utils/create-emotion-cache.ts
var create_emotion_cache = __webpack_require__(4017);
;// CONCATENATED MODULE: external "prismjs"
const external_prismjs_namespaceObject = require("prismjs");
;// CONCATENATED MODULE: external "prismjs/components/prism-jsx"
const prism_jsx_namespaceObject = require("prismjs/components/prism-jsx");
;// CONCATENATED MODULE: external "prismjs/components/prism-tsx"
const prism_tsx_namespaceObject = require("prismjs/components/prism-tsx");
;// CONCATENATED MODULE: ./src/pages/_app.tsx
// ** Next Imports



// ** Loader Import

// ** Emotion Imports

// ** Config Imports

// ** Fake-DB Import

// ** Third Party Import

// ** Component Imports




// ** Styled Components

// ** Utils Imports

// ** Prismjs Styles




// ** React Perfect Scrollbar Style

// ** Global css styles

const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
// ** Pace Loader
if (themeConfig/* default.routingLoader */.Z.routingLoader) {
    router_.Router.events.on("routeChangeStart", ()=>{
        external_nprogress_default().start();
    });
    router_.Router.events.on("routeChangeError", ()=>{
        external_nprogress_default().done();
    });
    router_.Router.events.on("routeChangeComplete", ()=>{
        external_nprogress_default().done();
    });
}
// ** Configure JSS & ClassName
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    // Variables
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ jsx_runtime_.jsx(layouts_UserLayout, {
            children: page
        }));
    const setConfig = Component.setConfig ?? undefined;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `${themeConfig/* default.templateName */.Z.templateName} - Crypto Finance Tech`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${themeConfig/* default.templateName */.Z.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Material Design, MUI, Admin Template, React Admin Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(settingsContext/* SettingsProvider */.mu, {
                ...setConfig ? {
                    pageSettings: setConfig()
                } : {},
                children: /*#__PURE__*/ jsx_runtime_.jsx(settingsContext/* SettingsConsumer */.ix, {
                    children: ({ settings  })=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(theme_ThemeComponent, {
                            settings: settings,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(window_wrapper, {
                                    children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                        ...pageProps
                                    }))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_hot_toast, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_hot_toast_namespaceObject.Toaster, {
                                        position: settings.toastPosition,
                                        toastOptions: {
                                            className: "react-hot-toast"
                                        }
                                    })
                                })
                            ]
                        });
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 5168:
/***/ ((module) => {

module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 7143:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountOutline");

/***/ }),

/***/ 8255:
/***/ ((module) => {

module.exports = require("mdi-material-ui/Cellphone");

/***/ }),

/***/ 8867:
/***/ ((module) => {

module.exports = require("mdi-material-ui/ChevronDown");

/***/ }),

/***/ 8973:
/***/ ((module) => {

module.exports = require("mdi-material-ui/ChevronRight");

/***/ }),

/***/ 2340:
/***/ ((module) => {

module.exports = require("mdi-material-ui/Circle");

/***/ }),

/***/ 5489:
/***/ ((module) => {

module.exports = require("mdi-material-ui/Cog");

/***/ }),

/***/ 5890:
/***/ ((module) => {

module.exports = require("mdi-material-ui/CurrencyUsd");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,975], () => (__webpack_exec__(1391)));
module.exports = __webpack_exports__;

})();