"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/structure/page",{

/***/ "(app-client)/./src/shared/structure/StructureItem.tsx":
/*!************************************************!*\
  !*** ./src/shared/structure/StructureItem.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/navbar/Arrow */ \"(app-client)/./src/shared/icons/navbar/Arrow.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst StructureItem = (param)=>{\n    let { ...item } = param;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.admin);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const styleItemClose = {\n        height: \"100px\"\n    };\n    const styleItemOpen = {\n        height: \"100%\"\n    };\n    const openHandler = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: open ? styleItemOpen : styleItemClose,\n        className: \"p-10 bg-white text-white  overflow-hidden rounded-lg mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#0F91D6] text-xl font-semibold  flex items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: openHandler,\n                        className: \"mr-10 bg-[#0F91D6]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                fill: \"#0F91D6\",\n                                width: 15\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"11\",\n                                height: \"13\",\n                                viewBox: \"0 0 11 13\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M9.6252 5.64956C10.2571 6.04045 10.2571 6.95955 9.6252 7.35044L2.02607 12.0512C1.35987 12.4633 0.500001 11.9841 0.500001 11.2007L0.500001 1.79926C0.500001 1.0159 1.35987 0.536717 2.02607 0.948823L9.6252 5.64956Z\",\n                                    fill: \"#32B8FF\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"bg-[#0F91D6] h-[2px] my-8\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-full text-center mt-10 text-sm\",\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Наименование органа управления /структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"ФИО руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Должность руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес местонахождения структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Телефон\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес электронной почты структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Положение об органе управления /о структурном подразделении\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес официального сайта структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"bg-[#0F91D6] h-[2px] my-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminOrg\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.post\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.address\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.tel\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.docHref\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12 \",\n                                                children: item.ofWebSite\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StructureItem, \"YPebQzLtEl9FNEmP9oB9KkS6i5o=\");\n_c = StructureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureItem);\nvar _c;\n$RefreshReg$(_c, \"StructureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVnQztBQUNTO0FBRXpDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUUsR0FBR0MsTUFBd0I7O0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHSiwrQ0FBUUEsQ0FBQ0csS0FBS0UsS0FBSztJQUNuQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakMsTUFBTVEsaUJBQWlCO1FBQ3RCQyxRQUFRO0lBQ1Q7SUFDQSxNQUFNQyxnQkFBZ0I7UUFDckJELFFBQVE7SUFDVDtJQUNBLE1BQU1FLGNBQWM7UUFDbkJKLFFBQVEsQ0FBQ0Q7SUFDVjtJQUVBLHFCQUNDLDhEQUFDTTtRQUNBQyxPQUFPUCxPQUFPSSxnQkFBZ0JGO1FBQzlCTSxXQUFVOzswQkFFViw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNkLDhEQUFDRjt3QkFBSUcsU0FBU0o7d0JBQWFHLFdBQVU7OzBDQUNwQyw4REFBQ2IsMkRBQUtBO2dDQUFDZSxNQUFLO2dDQUFVQyxPQUFPOzs7Ozs7MENBQzdCLDhEQUFDQztnQ0FDQUQsT0FBTTtnQ0FDTlIsUUFBTztnQ0FDUFUsU0FBUTtnQ0FDUkgsTUFBSztnQ0FDTEksT0FBTTswQ0FFTiw0RUFBQ0M7b0NBQ0FDLEdBQUU7b0NBQ0ZOLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlSLDhEQUFDTztrQ0FBR3BCLEtBQUtxQixJQUFJOzs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNDO2dCQUFHWCxXQUFVOzs7Ozs7MEJBRWQsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDZCw4REFBQ1k7d0JBQUdaLFdBQVU7a0NBQVlYLEtBQUtxQixJQUFJOzs7Ozs7a0NBQ25DLDhEQUFDWjt3QkFBSUUsV0FBVTtrQ0FDYlYsTUFBTXVCLEdBQUcsQ0FBQ3hCLENBQUFBLHFCQUNWLDhEQUFDUztnQ0FBSUUsV0FBVTs7a0RBQ2QsOERBQUNGO3dDQUFJRSxXQUFVOzswREFDZCw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBQ3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7Ozs7Ozs7a0RBSXpCLDhEQUFDVzt3Q0FBR1gsV0FBVTs7Ozs7O2tEQUNkLDhEQUFDRjt3Q0FBSUUsV0FBVTs7MERBQ2QsOERBQUNTO2dEQUFFVCxXQUFVOzBEQUNYWCxLQUFLeUIsUUFBUTs7Ozs7OzBEQUVmLDhEQUFDTDtnREFBRVQsV0FBVTswREFDWFgsS0FBSzBCLFNBQVM7Ozs7OzswREFFaEIsOERBQUNOO2dEQUFFVCxXQUFVOzBEQUNYWCxLQUFLMkIsSUFBSTs7Ozs7OzBEQUVYLDhEQUFDUDtnREFBRVQsV0FBVTswREFDWFgsS0FBSzRCLE9BQU87Ozs7OzswREFFZCw4REFBQ1I7Z0RBQUVULFdBQVU7MERBQ1hYLEtBQUs2QixHQUFHOzs7Ozs7MERBRVYsOERBQUNUO2dEQUFFVCxXQUFVOzBEQUNYWCxLQUFLOEIsS0FBSzs7Ozs7OzBEQUVaLDhEQUFDVjtnREFBRVQsV0FBVTswREFDWFgsS0FBSytCLE9BQU87Ozs7OzswREFFZCw4REFBQ1g7Z0RBQUVULFdBQVU7MERBQStCWCxLQUFLZ0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEU7R0FuR01qQztLQUFBQTtBQXFHTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkL3N0cnVjdHVyZS9TdHJ1Y3R1cmVJdGVtLnRzeD8zZGJkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFycm93IGZyb20gJy4uL2ljb25zL25hdmJhci9BcnJvdydcblxuY29uc3QgU3RydWN0dXJlSXRlbSA9ICh7IC4uLml0ZW0gfTogSVN0cnVjdHVyZURlcGFydCkgPT4ge1xuXHRjb25zdCBbaXRlbXNdID0gdXNlU3RhdGUoaXRlbS5hZG1pbilcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3Qgc3R5bGVJdGVtQ2xvc2UgPSB7XG5cdFx0aGVpZ2h0OiAnMTAwcHgnLFxuXHR9XG5cdGNvbnN0IHN0eWxlSXRlbU9wZW4gPSB7XG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdH1cblx0Y29uc3Qgb3BlbkhhbmRsZXIgPSAoKSA9PiB7XG5cdFx0c2V0T3Blbighb3Blbilcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e29wZW4gPyBzdHlsZUl0ZW1PcGVuIDogc3R5bGVJdGVtQ2xvc2V9XG5cdFx0XHRjbGFzc05hbWU9J3AtMTAgYmctd2hpdGUgdGV4dC13aGl0ZSAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgbWItMTAnXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtWyMwRjkxRDZdIHRleHQteGwgZm9udC1zZW1pYm9sZCAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCc+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17b3BlbkhhbmRsZXJ9IGNsYXNzTmFtZT0nbXItMTAgYmctWyMwRjkxRDZdJz5cblx0XHRcdFx0XHQ8QXJyb3cgZmlsbD0nIzBGOTFENicgd2lkdGg9ezE1fSAvPlxuXHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdHdpZHRoPScxMSdcblx0XHRcdFx0XHRcdGhlaWdodD0nMTMnXG5cdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTEgMTMnXG5cdFx0XHRcdFx0XHRmaWxsPSdub25lJ1xuXHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdGQ9J005LjYyNTIgNS42NDk1NkMxMC4yNTcxIDYuMDQwNDUgMTAuMjU3MSA2Ljk1OTU1IDkuNjI1MiA3LjM1MDQ0TDIuMDI2MDcgMTIuMDUxMkMxLjM1OTg3IDEyLjQ2MzMgMC41MDAwMDEgMTEuOTg0MSAwLjUwMDAwMSAxMS4yMDA3TDAuNTAwMDAxIDEuNzk5MjZDMC41MDAwMDEgMS4wMTU5IDEuMzU5ODcgMC41MzY3MTcgMi4wMjYwNyAwLjk0ODgyM0w5LjYyNTIgNS42NDk1NlonXG5cdFx0XHRcdFx0XHRcdGZpbGw9JyMzMkI4RkYnXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxociBjbGFzc05hbWU9J2JnLVsjMEY5MUQ2XSBoLVsycHhdIG15LTgnIC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz5cblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0ndGV4dC14bCAnPntpdGVtLm5hbWV9PC9oND5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgdGV4dC1jZW50ZXIgbXQtMTAgdGV4dC1zbSc+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcChpdGVtID0+IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtOCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQvtGA0LPQsNC90LAg0YPQv9GA0LDQstC70LXQvdC40Y8gL9GB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00KTQmNCeINGA0YPQutC+0LLQvtC00LjRgtC10LvRjyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCU0L7Qu9C20L3QvtGB0YLRjCDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y8g0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQkNC00YDQtdGBINC80LXRgdGC0L7QvdCw0YXQvtC20LTQtdC90LjRjyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz7QotC10LvQtdGE0L7QvTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ysg0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQn9C+0LvQvtC20LXQvdC40LUg0L7QsSDQvtGA0LPQsNC90LUg0YPQv9GA0LDQstC70LXQvdC40Y8gL9C+INGB0YLRgNGD0LrRgtGD0YDQvdC+0Lwg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Lhcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCQ0LTRgNC10YEg0L7RhNC40YbQuNCw0LvRjNC90L7Qs9C+INGB0LDQudGC0LAg0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdiZy1bIzBGOTFENl0gaC1bMnB4XSBteS02JyAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtOCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uYWRtaW5Pcmd9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5hZG1pbk5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5wb3N0fVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uYWRkcmVzc31cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRlbH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmVtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZG9jSHJlZn1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAnPntpdGVtLm9mV2ViU2l0ZX08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RydWN0dXJlSXRlbVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXJyb3ciLCJTdHJ1Y3R1cmVJdGVtIiwiaXRlbSIsIml0ZW1zIiwiYWRtaW4iLCJvcGVuIiwic2V0T3BlbiIsInN0eWxlSXRlbUNsb3NlIiwiaGVpZ2h0Iiwic3R5bGVJdGVtT3BlbiIsIm9wZW5IYW5kbGVyIiwiZGl2Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZmlsbCIsIndpZHRoIiwic3ZnIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImQiLCJwIiwibmFtZSIsImhyIiwiaDQiLCJtYXAiLCJhZG1pbk9yZyIsImFkbWluTmFtZSIsInBvc3QiLCJhZGRyZXNzIiwidGVsIiwiZW1haWwiLCJkb2NIcmVmIiwib2ZXZWJTaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/structure/StructureItem.tsx\n"));

/***/ })

});