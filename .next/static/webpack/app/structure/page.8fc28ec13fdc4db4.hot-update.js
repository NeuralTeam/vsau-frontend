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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst StructureItem = (param)=>{\n    let { ...item } = param;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.admin);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 bg-white text-white rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#0F91D6] text-xl font-semibold flex items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1 w-4 mr-4 bg-[#0F91D6]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"bg-[#0F91D6] h-[2px] my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl \",\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-8 justify-between w-full text-center mt-10 text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Наименование органа управления /структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"ФИО руководителя структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Должность руководителя структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Адрес местонахождения структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Телефон\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Адрес электронной почты структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Положение об органе управления /о структурном подразделении\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-9/12\",\n                                children: \"Адрес официального сайта структурного подразделения\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            }, undefined),\n                            items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"w-full\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-center text-sm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 7\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/structure/StructureItem.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StructureItem, \"rVTHiuKucPypl38Z739kUPfz064=\");\n_c = StructureItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureItem);\nvar _c;\n$RefreshReg$(_c, \"StructureItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWdDO0FBRWhDLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUUsR0FBR0MsTUFBd0I7O0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHSCwrQ0FBUUEsQ0FBQ0UsS0FBS0UsS0FBSztJQUNuQyxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0M7a0NBQUdMLEtBQUtNLElBQUk7Ozs7Ozs7Ozs7OzswQkFFZCw4REFBQ0M7Z0JBQUdILFdBQVU7Ozs7OzswQkFFZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBWUosS0FBS00sSUFBSTs7Ozs7O2tDQUNuQyw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUd4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7OzswQ0FHeEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFTOzs7Ozs7MENBR3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUd4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7OzswQ0FDeEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFTOzs7Ozs7MENBR3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUd4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7Ozs0QkFJdkJILE1BQU1RLEdBQUcsQ0FBQ1QsQ0FBQUEscUJBQ1YsOERBQUNHO29DQUFJQyxXQUFVOztzREFDZCw4REFBQ0c7NENBQUdILFdBQVU7Ozs7OztzREFDZCw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7OztzREFDYiw4REFBQ0M7NENBQUVELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtHQXJETUw7S0FBQUE7QUF1RE4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9zdHJ1Y3R1cmUvU3RydWN0dXJlSXRlbS50c3g/M2RiZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU3RydWN0dXJlSXRlbSA9ICh7IC4uLml0ZW0gfTogSVN0cnVjdHVyZURlcGFydCkgPT4ge1xuXHRjb25zdCBbaXRlbXNdID0gdXNlU3RhdGUoaXRlbS5hZG1pbilcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncC0xMCBiZy13aGl0ZSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtWyMwRjkxRDZdIHRleHQteGwgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtMSB3LTQgbXItNCBiZy1bIzBGOTFENl0nPjwvZGl2PlxuXHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGhyIGNsYXNzTmFtZT0nYmctWyMwRjkxRDZdIGgtWzJweF0gbXktNCcgLz5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtYmxhY2snPlxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSd0ZXh0LXhsICc+e2l0ZW0ubmFtZX08L2g0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtOCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHRleHQtY2VudGVyIG10LTEwIHRleHQtc20nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx00J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC+0YDQs9Cw0L3QsCDRg9C/0YDQsNCy0LvQtdC90LjRjyAv0YHRgtGA0YPQutGC0YPRgNC90L7Qs9C+INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHTQpNCY0J4g0YDRg9C60L7QstC+0LTQuNGC0LXQu9GPINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx00JTQvtC70LbQvdC+0YHRgtGMINGA0YPQutC+0LLQvtC00LjRgtC10LvRjyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdNCQ0LTRgNC10YEg0LzQtdGB0YLQvtC90LDRhdC+0LbQtNC10L3QuNGPINGB0YLRgNGD0LrRgtGD0YDQvdC+0LPQviDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjRj1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPtCi0LXQu9C10YTQvtC9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctOS8xMic+XG5cdFx0XHRcdFx0XHTQkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy05LzEyJz5cblx0XHRcdFx0XHRcdNCf0L7Qu9C+0LbQtdC90LjQtSDQvtCxINC+0YDQs9Cw0L3QtSDRg9C/0YDQsNCy0LvQtdC90LjRjyAv0L4g0YHRgtGA0YPQutGC0YPRgNC90L7QvCDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQuFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTkvMTInPlxuXHRcdFx0XHRcdFx00JDQtNGA0LXRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtCz0L4g0YHQsNC50YLQsCDRgdGC0YDRg9C60YLRg9GA0L3QvtCz0L4g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y9cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoaXRlbSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20nPjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtJz48L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSc+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20nPjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtJz48L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1zbSc+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc20nPjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNtJz48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJ1Y3R1cmVJdGVtXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTdHJ1Y3R1cmVJdGVtIiwiaXRlbSIsIml0ZW1zIiwiYWRtaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibmFtZSIsImhyIiwiaDQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/structure/StructureItem.tsx\n"));

/***/ })

});