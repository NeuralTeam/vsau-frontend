"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"91c6a70e4b77\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5zY3NzP2MzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5MWM2YTcwZTRiNzdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/styles/globals.scss\n"));

/***/ }),

/***/ "(app-client)/./src/widgets/navbar/Navbar.tsx":
/*!***************************************!*\
  !*** ./src/widgets/navbar/Navbar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_icons_logo_ShortLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/icons/logo/ShortLogo */ \"(app-client)/./src/shared/icons/logo/ShortLogo.tsx\");\n/* harmony import */ var _shared_icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/icons/navbar/Arrow */ \"(app-client)/./src/shared/icons/navbar/Arrow.tsx\");\n/* harmony import */ var _shared_icons_navbar_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/icons/navbar/Button */ \"(app-client)/./src/shared/icons/navbar/Button.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _navbarLinks_NavLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbarLinks/NavLinks */ \"(app-client)/./src/widgets/navbar/navbarLinks/NavLinks.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [openNav, setOpenNav] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const handleClick = ()=>{\n        var _bodyClass, _refTitle;\n        const bodyClass = document.querySelector(\"body\");\n        const refTitle = document.querySelector(\".all-refs\");\n        setOpenNav(!openNav);\n        (_bodyClass = bodyClass) === null || _bodyClass === void 0 ? void 0 : _bodyClass.classList.toggle(\"close-navbar\");\n        (_refTitle = refTitle) === null || _refTitle === void 0 ? void 0 : _refTitle.classList.toggle(\"close-navbar-refs\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: openNav ? \"open h-screen relative overflow-x-hidden \" : \"h-screen relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between px-5 py-5 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[120px] relative transition-all\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_icons_logo_ShortLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        fill: \"white\",\n                                        width: 120\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 7\n                                }, undefined),\n                                openNav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex text-white justify-between transition-all visible top-auto relative  items-center w-[300px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"no-wrap text-[11px] leading-3 min-w-[250px] max-w-[full] transition-all  font-thin ml-5 overflow-hidden max-h-[150px]\",\n                                                children: \"Федеральное государственное бюджетное образовательное учреждение высшего образования\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 10\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"no-wrap text-[20px] mt-1 leading-[22px] min-w-[320px] max-w-[320px] transition-all  font-normal ml-5 overflow-hidden max-h-[150px]\",\n                                                children: [\n                                                    \"Воронежский государственный аграрный университет \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 60\n                                                    }, undefined),\n                                                    \" \",\n                                                    \"имени Петра I\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 8\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex text-white  absolute justify-between delay-200 flex-nowrap right-full invisible transition-all items-center w-[0] overflow-hidden\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Федеральное государственное бюджетное образовательное учреждение высшего образования\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"no-wrap text-[16px] transition-all  font-semibold ml-5 min-w-[250px]\",\n                                            children: \"Воронежский государственный аграрный университет имени Петра I\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleClick,\n                        className: \"absolute -right-0 flex items-center justify-start cursor-pointer rounded-2xl top-[300px] \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_icons_navbar_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 6\n                            }, undefined),\n                            openNav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute  left-1/3 transition-all delay-150 ease-in\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    fill: \"grey\",\n                                    width: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-rotate-180 absolute  left-1/3 transition-all delay-150 ease-in\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    fill: \"grey\",\n                                    width: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"all-refs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbarLinks_NavLinks__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n                lineNumber: 79,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/navbar/Navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navbar, \"ahgMroyAA80agMMavEhTLosNHgo=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3dpZGdldHMvbmF2YmFyL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ047QUFDRTtBQUNyQjtBQUNJO0FBQ2E7QUFFN0MsTUFBTU0sU0FBUzs7SUFDZCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkMsTUFBTUssY0FBYztZQUluQkMsWUFDQUM7UUFKQSxNQUFNRCxZQUFZRSxTQUFTQyxhQUFhLENBQUM7UUFDekMsTUFBTUYsV0FBV0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3hDTCxXQUFXLENBQUNEO1NBQ1pHLGFBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBV0ksU0FBUyxDQUFDQyxNQUFNLENBQUM7U0FDNUJKLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUcsU0FBUyxDQUFDQyxNQUFNLENBQUM7SUFDNUI7SUFDQSxxQkFDQyw4REFBQ0M7UUFDQUMsV0FDQ1YsVUFDRyw4Q0FDQTs7MEJBR0osOERBQUNXO2dCQUFJRCxXQUFVOztrQ0FDZCw4REFBQ2Qsa0RBQUlBO3dCQUFDZ0IsTUFBTztrQ0FDWiw0RUFBQ0Q7NEJBQUlELFdBQVU7OzhDQUNkLDhEQUFDQztvQ0FBSUQsV0FBVTs4Q0FDZCw0RUFBQ2pCLG9FQUFTQTt3Q0FBQ29CLE1BQUs7d0NBQVFDLE9BQU87Ozs7Ozs7Ozs7O2dDQUcvQmQsd0JBQ0EsOERBQUNXO29DQUFJRCxXQUFVOzhDQUNkLDRFQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2QsOERBQUNLO2dEQUFFTCxXQUFVOzBEQUF3SDs7Ozs7OzBEQUlySSw4REFBQ0s7Z0RBQUVMLFdBQVU7O29EQUFxSTtrRUFDaEcsOERBQUNNOzs7OztvREFBTTtvREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBTS9ELDhEQUFDTDtvQ0FBSUQsV0FBVTs7c0RBQ2QsOERBQUNLO3NEQUFFOzs7Ozs7c0RBSUgsOERBQUNBOzRDQUFFTCxXQUFVO3NEQUF1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT3hGLDhEQUFDQzt3QkFDQU0sU0FBU2Y7d0JBQ1RRLFdBQVU7OzBDQUVWLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDZCw0RUFBQ2YsbUVBQU1BOzs7Ozs7Ozs7OzRCQUdQSyx3QkFDQSw4REFBQ1c7Z0NBQUlELFdBQVU7MENBQ2QsNEVBQUNoQixrRUFBS0E7b0NBQUNtQixNQUFLO29DQUFPQyxPQUFPOzs7Ozs7Ozs7OzBEQUczQiw4REFBQ0g7Z0NBQUlELFdBQVU7MENBQ2QsNEVBQUNoQixrRUFBS0E7b0NBQUNtQixNQUFLO29DQUFPQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLOUIsOERBQUNIO2dCQUFJRCxXQUFVOzBCQUNkLDRFQUFDWiw2REFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQTNFTUM7S0FBQUE7QUE2RU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldHMvbmF2YmFyL05hdmJhci50c3g/MWY1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBTaG9ydExvZ28gZnJvbSAnQC9zaGFyZWQvaWNvbnMvbG9nby9TaG9ydExvZ28nXG5pbXBvcnQgQXJyb3cgZnJvbSAnQC9zaGFyZWQvaWNvbnMvbmF2YmFyL0Fycm93J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL3NoYXJlZC9pY29ucy9uYXZiYXIvQnV0dG9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZMaW5rcyBmcm9tICcuL25hdmJhckxpbmtzL05hdkxpbmtzJ1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtvcGVuTmF2LCBzZXRPcGVuTmF2XSA9IHVzZVN0YXRlKHRydWUpXG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYm9keUNsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cdFx0Y29uc3QgcmVmVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXJlZnMnKVxuXHRcdHNldE9wZW5OYXYoIW9wZW5OYXYpXG5cdFx0Ym9keUNsYXNzPy5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZS1uYXZiYXInKVxuXHRcdHJlZlRpdGxlPy5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZS1uYXZiYXItcmVmcycpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8bmF2XG5cdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRvcGVuTmF2XG5cdFx0XHRcdFx0PyAnb3BlbiBoLXNjcmVlbiByZWxhdGl2ZSBvdmVyZmxvdy14LWhpZGRlbiAnXG5cdFx0XHRcdFx0OiAnaC1zY3JlZW4gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuJ1xuXHRcdFx0fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNSBweS01IHctZnVsbCc+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvYH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBmbGV4Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LVsxMjBweF0gcmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwnPlxuXHRcdFx0XHRcdFx0XHQ8U2hvcnRMb2dvIGZpbGw9J3doaXRlJyB3aWR0aD17MTIwfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdHtvcGVuTmF2ID8gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCB0ZXh0LXdoaXRlIGp1c3RpZnktYmV0d2VlbiB0cmFuc2l0aW9uLWFsbCB2aXNpYmxlIHRvcC1hdXRvIHJlbGF0aXZlICBpdGVtcy1jZW50ZXIgdy1bMzAwcHhdJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbm8td3JhcCB0ZXh0LVsxMXB4XSBsZWFkaW5nLTMgbWluLXctWzI1MHB4XSBtYXgtdy1bZnVsbF0gdHJhbnNpdGlvbi1hbGwgIGZvbnQtdGhpbiBtbC01IG92ZXJmbG93LWhpZGRlbiBtYXgtaC1bMTUwcHhdJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx00KTQtdC00LXRgNCw0LvRjNC90L7QtSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LUg0LHRjtC00LbQtdGC0L3QvtC1INC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90L7QtVxuXHRcdFx0XHRcdFx0XHRcdFx0XHTRg9GH0YDQtdC20LTQtdC90LjQtSDQstGL0YHRiNC10LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J25vLXdyYXAgdGV4dC1bMjBweF0gbXQtMSBsZWFkaW5nLVsyMnB4XSBtaW4tdy1bMzIwcHhdIG1heC13LVszMjBweF0gdHJhbnNpdGlvbi1hbGwgIGZvbnQtbm9ybWFsIG1sLTUgb3ZlcmZsb3ctaGlkZGVuIG1heC1oLVsxNTBweF0nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHTQktC+0YDQvtC90LXQttGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNCz0YDQsNGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgPGJyIC8+eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx00LjQvNC10L3QuCDQn9C10YLRgNCwIElcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCB0ZXh0LXdoaXRlICBhYnNvbHV0ZSBqdXN0aWZ5LWJldHdlZW4gZGVsYXktMjAwIGZsZXgtbm93cmFwIHJpZ2h0LWZ1bGwgaW52aXNpYmxlIHRyYW5zaXRpb24tYWxsIGl0ZW1zLWNlbnRlciB3LVswXSBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx00KTQtdC00LXRgNCw0LvRjNC90L7QtSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LUg0LHRjtC00LbQtdGC0L3QvtC1INC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90L7QtVxuXHRcdFx0XHRcdFx0XHRcdFx00YPRh9GA0LXQttC00LXQvdC40LUg0LLRi9GB0YjQtdCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J25vLXdyYXAgdGV4dC1bMTZweF0gdHJhbnNpdGlvbi1hbGwgIGZvbnQtc2VtaWJvbGQgbWwtNSBtaW4tdy1bMjUwcHhdJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCS0L7RgNC+0L3QtdC20YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCw0LPRgNCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCf0LXRgtGA0LAgSVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDbGlja31cblx0XHRcdFx0XHRjbGFzc05hbWU9J2Fic29sdXRlIC1yaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0yeGwgdG9wLVszMDBweF0gJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7b3Blbk5hdiA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSAgbGVmdC0xLzMgdHJhbnNpdGlvbi1hbGwgZGVsYXktMTUwIGVhc2UtaW4nPlxuXHRcdFx0XHRcdFx0XHQ8QXJyb3cgZmlsbD0nZ3JleScgd2lkdGg9ezEwMH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nLXJvdGF0ZS0xODAgYWJzb2x1dGUgIGxlZnQtMS8zIHRyYW5zaXRpb24tYWxsIGRlbGF5LTE1MCBlYXNlLWluJz5cblx0XHRcdFx0XHRcdFx0PEFycm93IGZpbGw9J2dyZXknIHdpZHRoPXsxMDB9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsbC1yZWZzJz5cblx0XHRcdFx0PE5hdkxpbmtzIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25hdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJuYW1lcyI6WyJTaG9ydExvZ28iLCJBcnJvdyIsIkJ1dHRvbiIsIkxpbmsiLCJ1c2VTdGF0ZSIsIk5hdkxpbmtzIiwiTmF2YmFyIiwib3Blbk5hdiIsInNldE9wZW5OYXYiLCJoYW5kbGVDbGljayIsImJvZHlDbGFzcyIsInJlZlRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImZpbGwiLCJ3aWR0aCIsInAiLCJiciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/widgets/navbar/Navbar.tsx\n"));

/***/ })

});