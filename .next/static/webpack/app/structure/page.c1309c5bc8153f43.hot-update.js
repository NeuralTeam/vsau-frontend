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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst StructureItem = (param)=>{\n    let { ...item } = param;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.admin);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-white text-white h-[10%] overflow-hidden rounded-lg mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#0F91D6] text-xl font-semibold  flex items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1 w-4 mr-4 bg-[#0F91D6]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"bg-[#0F91D6] h-[2px] my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-full text-center mt-10 text-sm\",\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Наименование органа управления /структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 21,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"ФИО руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Должность руководителя структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес местонахождения структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Телефон\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес электронной почты структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Положение об органе управления /о структурном подразделении\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-9/12\",\n                                                children: \"Адрес официального сайта структурного подразделения\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"bg-[#0F91D6] h-[2px] my-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-8 justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminOrg\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.adminName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.post\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.address\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.tel\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12  overflow-hidden\",\n                                                children: item.docHref\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center text-sm w-9/12 \",\n                                                children: item.ofWebSite\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StructureItem, \"rVTHiuKucPypl38Z739kUPfz064=\");\n_c = StructureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureItem);\nvar _c;\n$RefreshReg$(_c, \"StructureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWdDO0FBRWhDLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUUsR0FBR0MsTUFBd0I7O0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHSCwrQ0FBUUEsQ0FBQ0UsS0FBS0UsS0FBSztJQUNuQyxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0M7a0NBQUdMLEtBQUtNLElBQUk7Ozs7Ozs7Ozs7OzswQkFFZCw4REFBQ0M7Z0JBQUdILFdBQVU7Ozs7OzswQkFFZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBWUosS0FBS00sSUFBSTs7Ozs7O2tDQUNuQyw4REFBQ0g7d0JBQUlDLFdBQVU7a0NBQ2JILE1BQU1RLEdBQUcsQ0FBQ1QsQ0FBQUEscUJBQ1YsOERBQUNHO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNkLDhEQUFDRDtnREFBSUMsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQVM7Ozs7OzswREFHeEIsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRDtnREFBSUMsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQVM7Ozs7OzswREFDeEIsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUFTOzs7Ozs7MERBR3hCLDhEQUFDRDtnREFBSUMsV0FBVTswREFBUzs7Ozs7OzBEQUd4Qiw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQVM7Ozs7Ozs7Ozs7OztrREFJekIsOERBQUNHO3dDQUFHSCxXQUFVOzs7Ozs7a0RBQ2QsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDZCw4REFBQ0M7Z0RBQUVELFdBQVU7MERBQ1hKLEtBQUtVLFFBQVE7Ozs7OzswREFFZiw4REFBQ0w7Z0RBQUVELFdBQVU7MERBQ1hKLEtBQUtXLFNBQVM7Ozs7OzswREFFaEIsOERBQUNOO2dEQUFFRCxXQUFVOzBEQUNYSixLQUFLWSxJQUFJOzs7Ozs7MERBRVgsOERBQUNQO2dEQUFFRCxXQUFVOzBEQUNYSixLQUFLYSxPQUFPOzs7Ozs7MERBRWQsOERBQUNSO2dEQUFFRCxXQUFVOzBEQUNYSixLQUFLYyxHQUFHOzs7Ozs7MERBRVYsOERBQUNUO2dEQUFFRCxXQUFVOzBEQUNYSixLQUFLZSxLQUFLOzs7Ozs7MERBRVosOERBQUNWO2dEQUFFRCxXQUFVOzBEQUNYSixLQUFLZ0IsT0FBTzs7Ozs7OzBEQUVkLDhEQUFDWDtnREFBRUQsV0FBVTswREFBK0JKLEtBQUtpQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRTtHQXRFTWxCO0tBQUFBO0FBd0VOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvc3RydWN0dXJlL1N0cnVjdHVyZUl0ZW0udHN4PzNkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFN0cnVjdHVyZUl0ZW0gPSAoeyAuLi5pdGVtIH06IElTdHJ1Y3R1cmVEZXBhcnQpID0+IHtcblx0Y29uc3QgW2l0ZW1zXSA9IHVzZVN0YXRlKGl0ZW0uYWRtaW4pXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3AtMTAgYmctd2hpdGUgdGV4dC13aGl0ZSBoLVsxMCVdIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIG1iLTEwJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsjMEY5MUQ2XSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC0xIHctNCBtci00IGJnLVsjMEY5MUQ2XSc+PC9kaXY+XG5cdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aHIgY2xhc3NOYW1lPSdiZy1bIzBGOTFENl0gaC1bMnB4XSBteS00JyAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayc+XG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9J3RleHQteGwgJz57aXRlbS5uYW1lfTwvaDQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScgdy1mdWxsIHRleHQtY2VudGVyIG10LTEwIHRleHQtc20nPlxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoaXRlbSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0L7RgNCz0LDQvdCwINGD0L/RgNCw0LLQu9C10L3QuNGPIC/RgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCk0JjQniDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y8g0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQlNC+0LvQttC90L7RgdGC0Ywg0YDRg9C60L7QstC+0LTQuNGC0LXQu9GPINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00JDQtNGA0LXRgSDQvNC10YHRgtC+0L3QsNGF0L7QttC00LXQvdC40Y8g0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+0KLQtdC70LXRhNC+0L08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdFx0XHRcdNCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx0XHRcdFx00J/QvtC70L7QttC10L3QuNC1INC+0LEg0L7RgNCz0LDQvdC1INGD0L/RgNCw0LLQu9C10L3QuNGPIC/QviDRgdGC0YDRg9C60YLRg9GA0L3QvtC8INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC4XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHRcdFx0XHTQkNC00YDQtdGBINC+0YTQuNGG0LjQsNC70YzQvdC+0LPQviDRgdCw0LnRgtCwINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nYmctWyMwRjkxRDZdIGgtWzJweF0gbXktNicgLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCc+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmFkbWluT3JnfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uYWRtaW5OYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20gdy05LzEyICBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ucG9zdH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmFkZHJlc3N9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50ZWx9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgIG92ZXJmbG93LWhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtIHctOS8xMiAgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRvY0hyZWZ9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSB3LTkvMTIgJz57aXRlbS5vZldlYlNpdGV9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cnVjdHVyZUl0ZW1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlN0cnVjdHVyZUl0ZW0iLCJpdGVtIiwiaXRlbXMiLCJhZG1pbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJuYW1lIiwiaHIiLCJoNCIsIm1hcCIsImFkbWluT3JnIiwiYWRtaW5OYW1lIiwicG9zdCIsImFkZHJlc3MiLCJ0ZWwiLCJlbWFpbCIsImRvY0hyZWYiLCJvZldlYlNpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/structure/StructureItem.tsx\n"));

/***/ })

});