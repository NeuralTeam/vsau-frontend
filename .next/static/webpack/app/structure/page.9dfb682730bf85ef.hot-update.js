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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_arrow_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/arrow/Arrow */ \"(app-client)/./src/shared/icons/arrow/Arrow.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst StructureItem = (param)=>{\n    let { ...item } = param;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.admin);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const styleItemClose = {\n        height: \"100px\"\n    };\n    const styleItemOpen = {\n        height: \"100%\"\n    };\n    const openHandler = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: open ? styleItemOpen : styleItemClose,\n        className: \"p-10 bg-white text-white  overflow-hidden rounded-lg mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#0F91D6] text-xl font-semibold  flex items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: openHandler,\n                        className: open ? \"mr-3 transform-cpu\" : \"mr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_arrow_Arrow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            fill: \"#0F91D6\",\n                            width: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"bg-[#0F91D6] h-[2px] my-8\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-full text-center mt-10 text-sm\",\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Наименование органа управления /структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"ФИО руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Должность руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес местонахождения структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Телефон\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес электронной почты структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Положение об органе управления /о структурном подразделении\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес официального сайта структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"bg-[#0F91D6] h-[2px] my-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminOrg\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.post\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.address\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.tel\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.docHref\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12 \",\n                                                children: item.ofWebSite\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StructureItem, \"YPebQzLtEl9FNEmP9oB9KkS6i5o=\");\n_c = StructureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureItem);\nvar _c;\n$RefreshReg$(_c, \"StructureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVnQztBQUNRO0FBRXhDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUUsR0FBR0MsTUFBd0I7O0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHSiwrQ0FBUUEsQ0FBQ0csS0FBS0UsS0FBSztJQUNuQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakMsTUFBTVEsaUJBQWlCO1FBQ3RCQyxRQUFRO0lBQ1Q7SUFDQSxNQUFNQyxnQkFBZ0I7UUFDckJELFFBQVE7SUFDVDtJQUNBLE1BQU1FLGNBQWM7UUFDbkJKLFFBQVEsQ0FBQ0Q7SUFDVjtJQUVBLHFCQUNDLDhEQUFDTTtRQUNBQyxPQUFPUCxPQUFPSSxnQkFBZ0JGO1FBQzlCTSxXQUFVOzswQkFFViw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNkLDhEQUFDRjt3QkFDQUcsU0FBU0o7d0JBQ1RHLFdBQVdSLE9BQU8sdUJBQXVCO2tDQUV6Qyw0RUFBQ0wsMERBQUtBOzRCQUFDZSxNQUFLOzRCQUFVQyxPQUFPOzs7Ozs7Ozs7OztrQ0FFOUIsOERBQUNDO2tDQUFHZixLQUFLZ0IsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDQztnQkFBR04sV0FBVTs7Ozs7OzBCQUVkLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2QsOERBQUNPO3dCQUFHUCxXQUFVO2tDQUFZWCxLQUFLZ0IsSUFBSTs7Ozs7O2tDQUNuQyw4REFBQ1A7d0JBQUlFLFdBQVU7a0NBQ2JWLE1BQU1rQixHQUFHLENBQUNuQixDQUFBQSxxQkFDViw4REFBQ1M7Z0NBQUlFLFdBQVU7O2tEQUNkLDhEQUFDRjt3Q0FBSUUsV0FBVTs7MERBQ2QsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUN4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7Ozs7Ozs7O2tEQUl6Qiw4REFBQ007d0NBQUdOLFdBQVU7Ozs7OztrREFDZCw4REFBQ0Y7d0NBQUlFLFdBQVU7OzBEQUNkLDhEQUFDSTtnREFBRUosV0FBVTswREFDWFgsS0FBS29CLFFBQVE7Ozs7OzswREFFZiw4REFBQ0w7Z0RBQUVKLFdBQVU7MERBQ1hYLEtBQUtxQixTQUFTOzs7Ozs7MERBRWhCLDhEQUFDTjtnREFBRUosV0FBVTswREFDWFgsS0FBS3NCLElBQUk7Ozs7OzswREFFWCw4REFBQ1A7Z0RBQUVKLFdBQVU7MERBQ1hYLEtBQUt1QixPQUFPOzs7Ozs7MERBRWQsOERBQUNSO2dEQUFFSixXQUFVOzBEQUNYWCxLQUFLd0IsR0FBRzs7Ozs7OzBEQUVWLDhEQUFDVDtnREFBRUosV0FBVTswREFDWFgsS0FBS3lCLEtBQUs7Ozs7OzswREFFWiw4REFBQ1Y7Z0RBQUVKLFdBQVU7MERBQ1hYLEtBQUswQixPQUFPOzs7Ozs7MERBRWQsOERBQUNYO2dEQUFFSixXQUFVOzBEQUErQlgsS0FBSzJCLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxFO0dBMUZNNUI7S0FBQUE7QUE0Rk4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3g/M2RiZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnJvdyBmcm9tICcuLi9pY29ucy9hcnJvdy9BcnJvdydcblxuY29uc3QgU3RydWN0dXJlSXRlbSA9ICh7IC4uLml0ZW0gfTogSVN0cnVjdHVyZURlcGFydCkgPT4ge1xuXHRjb25zdCBbaXRlbXNdID0gdXNlU3RhdGUoaXRlbS5hZG1pbilcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3Qgc3R5bGVJdGVtQ2xvc2UgPSB7XG5cdFx0aGVpZ2h0OiAnMTAwcHgnLFxuXHR9XG5cdGNvbnN0IHN0eWxlSXRlbU9wZW4gPSB7XG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdH1cblx0Y29uc3Qgb3BlbkhhbmRsZXIgPSAoKSA9PiB7XG5cdFx0c2V0T3Blbighb3Blbilcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e29wZW4gPyBzdHlsZUl0ZW1PcGVuIDogc3R5bGVJdGVtQ2xvc2V9XG5cdFx0XHRjbGFzc05hbWU9J3AtMTAgYmctd2hpdGUgdGV4dC13aGl0ZSAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgbWItMTAnXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtWyMwRjkxRDZdIHRleHQteGwgZm9udC1zZW1pYm9sZCAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCc+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXtvcGVuSGFuZGxlcn1cblx0XHRcdFx0XHRjbGFzc05hbWU9e29wZW4gPyAnbXItMyB0cmFuc2Zvcm0tY3B1JyA6ICdtci0zJ31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxBcnJvdyBmaWxsPScjMEY5MUQ2JyB3aWR0aD17MTV9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGhyIGNsYXNzTmFtZT0nYmctWyMwRjkxRDZdIGgtWzJweF0gbXktOCcgLz5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtYmxhY2snPlxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSd0ZXh0LXhsICc+e2l0ZW0ubmFtZX08L2g0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIHctZnVsbCB0ZXh0LWNlbnRlciBtdC0xMCB0ZXh0LXNtJz5cblx0XHRcdFx0XHR7aXRlbXMubWFwKGl0ZW0gPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy04IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC+0YDQs9Cw0L3QsCDRg9C/0YDQsNCy0LvQtdC90LjRjyAv0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQpNCY0J4g0YDRg9C60L7QstC+0LTQuNGC0LXQu9GPINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00JTQvtC70LbQvdC+0YHRgtGMINGA0YPQutC+0LLQvtC00LjRgtC10LvRjyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCQ0LTRgNC10YEg0LzQtdGB0YLQvtC90LDRhdC+0LbQtNC10L3QuNGPINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPtCi0LXQu9C10YTQvtC9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCf0L7Qu9C+0LbQtdC90LjQtSDQvtCxINC+0YDQs9Cw0L3QtSDRg9C/0YDQsNCy0LvQtdC90LjRjyAv0L4g0YHRgtGA0YPQutGC0YPRgNC90L7QvCDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQuFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00JDQtNGA0LXRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtCz0L4g0YHQsNC50YLQsCDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9J2JnLVsjMEY5MUQ2XSBoLVsycHhdIG15LTYnIC8+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy04IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwnPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5hZG1pbk9yZ31cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmFkbWluTmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnBvc3R9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5hZGRyZXNzfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGVsfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kb2NIcmVmfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICc+e2l0ZW0ub2ZXZWJTaXRlfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJ1Y3R1cmVJdGVtXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBcnJvdyIsIlN0cnVjdHVyZUl0ZW0iLCJpdGVtIiwiaXRlbXMiLCJhZG1pbiIsIm9wZW4iLCJzZXRPcGVuIiwic3R5bGVJdGVtQ2xvc2UiLCJoZWlnaHQiLCJzdHlsZUl0ZW1PcGVuIiwib3BlbkhhbmRsZXIiLCJkaXYiLCJzdHlsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmaWxsIiwid2lkdGgiLCJwIiwibmFtZSIsImhyIiwiaDQiLCJtYXAiLCJhZG1pbk9yZyIsImFkbWluTmFtZSIsInBvc3QiLCJhZGRyZXNzIiwidGVsIiwiZW1haWwiLCJkb2NIcmVmIiwib2ZXZWJTaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/structure/StructureItem.tsx\n"));

/***/ })

});