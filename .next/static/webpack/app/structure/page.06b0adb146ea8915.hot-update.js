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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/navbar/Arrow */ \"(app-client)/./src/shared/icons/navbar/Arrow.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst StructureItem = (param)=>{\n    let { ...item } = param;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.admin);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const styleItemClose = {\n        height: \"100px\"\n    };\n    const styleItemOpen = {\n        height: \"100%\"\n    };\n    const openHandler = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: open ? styleItemOpen : styleItemClose,\n        className: \"p-10 bg-white text-white  overflow-hidden rounded-lg mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#0F91D6] text-xl font-semibold  flex items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: openHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_navbar_Arrow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            fill: \"#0F91D6\",\n                            width: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"bg-[#0F91D6] h-[2px] my-8\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-full text-center mt-10 text-sm\",\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Наименование органа управления /структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"ФИО руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Должность руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес местонахождения структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Телефон\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес электронной почты структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Положение об органе управления /о структурном подразделении\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес официального сайта структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"bg-[#0F91D6] h-[2px] my-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminOrg\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.post\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.address\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.tel\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.docHref\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12 \",\n                                                children: item.ofWebSite\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StructureItem, \"YPebQzLtEl9FNEmP9oB9KkS6i5o=\");\n_c = StructureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureItem);\nvar _c;\n$RefreshReg$(_c, \"StructureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVnQztBQUNTO0FBRXpDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUUsR0FBR0MsTUFBd0I7O0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHSiwrQ0FBUUEsQ0FBQ0csS0FBS0UsS0FBSztJQUNuQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakMsTUFBTVEsaUJBQWlCO1FBQ3RCQyxRQUFRO0lBQ1Q7SUFDQSxNQUFNQyxnQkFBZ0I7UUFDckJELFFBQVE7SUFDVDtJQUNBLE1BQU1FLGNBQWM7UUFDbkJKLFFBQVEsQ0FBQ0Q7SUFDVjtJQUVBLHFCQUNDLDhEQUFDTTtRQUNBQyxPQUFPUCxPQUFPSSxnQkFBZ0JGO1FBQzlCTSxXQUFVOzswQkFFViw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNkLDhEQUFDRjt3QkFBSUcsU0FBU0o7a0NBQ2IsNEVBQUNWLDJEQUFLQTs0QkFBQ2UsTUFBSzs0QkFBVUMsT0FBTzs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDQztrQ0FBR2YsS0FBS2dCLElBQUk7Ozs7Ozs7Ozs7OzswQkFFZCw4REFBQ0M7Z0JBQUdOLFdBQVU7Ozs7OzswQkFFZCw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNkLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FBWVgsS0FBS2dCLElBQUk7Ozs7OztrQ0FDbkMsOERBQUNQO3dCQUFJRSxXQUFVO2tDQUNiVixNQUFNa0IsR0FBRyxDQUFDbkIsQ0FBQUEscUJBQ1YsOERBQUNTO2dDQUFJRSxXQUFVOztrREFDZCw4REFBQ0Y7d0NBQUlFLFdBQVU7OzBEQUNkLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7OzswREFDeEIsOERBQUNGO2dEQUFJRSxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRjtnREFBSUUsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Y7Z0RBQUlFLFdBQVU7MERBQVM7Ozs7Ozs7Ozs7OztrREFJekIsOERBQUNNO3dDQUFHTixXQUFVOzs7Ozs7a0RBQ2QsOERBQUNGO3dDQUFJRSxXQUFVOzswREFDZCw4REFBQ0k7Z0RBQUVKLFdBQVU7MERBQ1hYLEtBQUtvQixRQUFROzs7Ozs7MERBRWYsOERBQUNMO2dEQUFFSixXQUFVOzBEQUNYWCxLQUFLcUIsU0FBUzs7Ozs7OzBEQUVoQiw4REFBQ047Z0RBQUVKLFdBQVU7MERBQ1hYLEtBQUtzQixJQUFJOzs7Ozs7MERBRVgsOERBQUNQO2dEQUFFSixXQUFVOzBEQUNYWCxLQUFLdUIsT0FBTzs7Ozs7OzBEQUVkLDhEQUFDUjtnREFBRUosV0FBVTswREFDWFgsS0FBS3dCLEdBQUc7Ozs7OzswREFFViw4REFBQ1Q7Z0RBQUVKLFdBQVU7MERBQ1hYLEtBQUt5QixLQUFLOzs7Ozs7MERBRVosOERBQUNWO2dEQUFFSixXQUFVOzBEQUNYWCxLQUFLMEIsT0FBTzs7Ozs7OzBEQUVkLDhEQUFDWDtnREFBRUosV0FBVTswREFBK0JYLEtBQUsyQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRTtHQXZGTTVCO0tBQUFBO0FBeUZOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvc3RydWN0dXJlL1N0cnVjdHVyZUl0ZW0udHN4PzNkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vaWNvbnMvbmF2YmFyL0Fycm93J1xuXG5jb25zdCBTdHJ1Y3R1cmVJdGVtID0gKHsgLi4uaXRlbSB9OiBJU3RydWN0dXJlRGVwYXJ0KSA9PiB7XG5cdGNvbnN0IFtpdGVtc10gPSB1c2VTdGF0ZShpdGVtLmFkbWluKVxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCBzdHlsZUl0ZW1DbG9zZSA9IHtcblx0XHRoZWlnaHQ6ICcxMDBweCcsXG5cdH1cblx0Y29uc3Qgc3R5bGVJdGVtT3BlbiA9IHtcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0fVxuXHRjb25zdCBvcGVuSGFuZGxlciA9ICgpID0+IHtcblx0XHRzZXRPcGVuKCFvcGVuKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17b3BlbiA/IHN0eWxlSXRlbU9wZW4gOiBzdHlsZUl0ZW1DbG9zZX1cblx0XHRcdGNsYXNzTmFtZT0ncC0xMCBiZy13aGl0ZSB0ZXh0LXdoaXRlICBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBtYi0xMCdcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1bIzBGOTFENl0gdGV4dC14bCBmb250LXNlbWlib2xkICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0Jz5cblx0XHRcdFx0PGRpdiBvbkNsaWNrPXtvcGVuSGFuZGxlcn0+XG5cdFx0XHRcdFx0PEFycm93IGZpbGw9JyMwRjkxRDYnIHdpZHRoPXsxNX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aHIgY2xhc3NOYW1lPSdiZy1bIzBGOTFENl0gaC1bMnB4XSBteS04JyAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayc+XG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9J3RleHQteGwgJz57aXRlbS5uYW1lfTwvaDQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgdy1mdWxsIHRleHQtY2VudGVyIG10LTEwIHRleHQtc20nPlxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoaXRlbSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0L7RgNCz0LDQvdCwINGD0L/RgNCw0LLQu9C10L3QuNGPIC/RgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCk0JjQniDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y8g0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQlNC+0LvQttC90L7RgdGC0Ywg0YDRg9C60L7QstC+0LTQuNGC0LXQu9GPINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00JDQtNGA0LXRgSDQvNC10YHRgtC+0L3QsNGF0L7QttC00LXQvdC40Y8g0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+0KLQtdC70LXRhNC+0L08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00J/QvtC70L7QttC10L3QuNC1INC+0LEg0L7RgNCz0LDQvdC1INGD0L/RgNCw0LLQu9C10L3QuNGPIC/QviDRgdGC0YDRg9C60YLRg9GA0L3QvtC8INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC4XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQkNC00YDQtdGBINC+0YTQuNGG0LjQsNC70YzQvdC+0LPQviDRgdCw0LnRgtCwINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nYmctWyMwRjkxRDZdIGgtWzJweF0gbXktNicgLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCc+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmFkbWluT3JnfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uYWRtaW5OYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ucG9zdH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmFkZHJlc3N9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50ZWx9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRvY0hyZWZ9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgJz57aXRlbS5vZldlYlNpdGV9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cnVjdHVyZUl0ZW1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFycm93IiwiU3RydWN0dXJlSXRlbSIsIml0ZW0iLCJpdGVtcyIsImFkbWluIiwib3BlbiIsInNldE9wZW4iLCJzdHlsZUl0ZW1DbG9zZSIsImhlaWdodCIsInN0eWxlSXRlbU9wZW4iLCJvcGVuSGFuZGxlciIsImRpdiIsInN0eWxlIiwiY2xhc3NOYW1lIiwib25DbGljayIsImZpbGwiLCJ3aWR0aCIsInAiLCJuYW1lIiwiaHIiLCJoNCIsIm1hcCIsImFkbWluT3JnIiwiYWRtaW5OYW1lIiwicG9zdCIsImFkZHJlc3MiLCJ0ZWwiLCJlbWFpbCIsImRvY0hyZWYiLCJvZldlYlNpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/structure/StructureItem.tsx\n"));

/***/ })

});