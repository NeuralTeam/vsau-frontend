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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst StructureItem = (param)=>{\n    let { ...item } = param;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.admin);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-white text-white rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#0F91D6] text-xl font-semibold flex items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1 w-4 mr-4 bg-[#0F91D6]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"bg-[#0F91D6] h-[2px] my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-8 justify-between w-full text-center mt-10 text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Наименование органа управления /структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"ФИО руководителя структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Должность руководителя структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Адрес местонахождения структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Телефон\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Адрес электронной почты структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Положение об органе управления /о структурном подразделении\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Адрес официального сайта структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            }, undefined),\n                            items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item.tel\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 7\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StructureItem, \"rVTHiuKucPypl38Z739kUPfz064=\");\n_c = StructureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureItem);\nvar _c;\n$RefreshReg$(_c, \"StructureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWdDO0FBRWhDLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUUsR0FBR0MsTUFBd0I7O0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHSCwrQ0FBUUEsQ0FBQ0UsS0FBS0UsS0FBSztJQUNuQyxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0M7a0NBQUdMLEtBQUtNLElBQUk7Ozs7Ozs7Ozs7OzswQkFFZCw4REFBQ0M7Z0JBQUdILFdBQVU7Ozs7OzswQkFFZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBWUosS0FBS00sSUFBSTs7Ozs7O2tDQUNuQyw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUd4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7OzswQ0FHeEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFTOzs7Ozs7MENBR3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUd4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7OzswQ0FDeEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFTOzs7Ozs7MENBR3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUd4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7Ozs0QkFHdkJILE1BQU1RLEdBQUcsQ0FBQ1QsQ0FBQUEscUJBQ1YsOERBQUNLOzhDQUFHTCxLQUFLVSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEI7R0ExQ01YO0tBQUFBO0FBNENOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvc3RydWN0dXJlL1N0cnVjdHVyZUl0ZW0udHN4PzNkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFN0cnVjdHVyZUl0ZW0gPSAoeyAuLi5pdGVtIH06IElTdHJ1Y3R1cmVEZXBhcnQpID0+IHtcblx0Y29uc3QgW2l0ZW1zXSA9IHVzZVN0YXRlKGl0ZW0uYWRtaW4pXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3AtMTAgYmctd2hpdGUgdGV4dC13aGl0ZSByb3VuZGVkLWxnJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsjMEY5MUQ2XSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoLTEgdy00IG1yLTQgYmctWyMwRjkxRDZdJz48L2Rpdj5cblx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxociBjbGFzc05hbWU9J2JnLVsjMEY5MUQ2XSBoLVsycHhdIG15LTQnIC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz5cblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0ndGV4dC14bCAnPntpdGVtLm5hbWV9PC9oND5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCB0ZXh0LWNlbnRlciBtdC0xMCB0ZXh0LXNtJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdNCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQvtGA0LPQsNC90LAg0YPQv9GA0LDQstC70LXQvdC40Y8gL9GB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx00KTQmNCeINGA0YPQutC+0LLQvtC00LjRgtC10LvRjyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdNCU0L7Qu9C20L3QvtGB0YLRjCDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y8g0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHTQkNC00YDQtdGBINC80LXRgdGC0L7QvdCw0YXQvtC20LTQtdC90LjRjyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz7QotC10LvQtdGE0L7QvTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx00JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ysg0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHTQn9C+0LvQvtC20LXQvdC40LUg0L7QsSDQvtGA0LPQsNC90LUg0YPQv9GA0LDQstC70LXQvdC40Y8gL9C+INGB0YLRgNGD0LrRgtGD0YDQvdC+0Lwg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Lhcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdNCQ0LTRgNC10YEg0L7RhNC40YbQuNCw0LvRjNC90L7Qs9C+INGB0LDQudGC0LAg0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcChpdGVtID0+IChcblx0XHRcdFx0XHRcdDxwPntpdGVtLnRlbH08L3A+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RydWN0dXJlSXRlbVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU3RydWN0dXJlSXRlbSIsIml0ZW0iLCJpdGVtcyIsImFkbWluIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm5hbWUiLCJociIsImg0IiwibWFwIiwidGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/structure/StructureItem.tsx\n"));

/***/ })

});