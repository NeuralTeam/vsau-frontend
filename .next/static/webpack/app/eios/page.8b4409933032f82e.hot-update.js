"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/eios/page",{

/***/ "(app-client)/./src/shared/eios/EiosItem.tsx":
/*!**************************************!*\
  !*** ./src/shared/eios/EiosItem.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_navbar_Documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/navbar/Documents */ \"(app-client)/./src/shared/icons/navbar/Documents.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst EiosItem = (param)=>{\n    let { ...item } = param;\n    var _items;\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.description);\n    const [hr, setHr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white mr-10 mb-10 px-5 py-10 w-[450px] rounded-lg cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[70px] h-[70px] relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-30 absolute bottom-0 bg-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_navbar_Documents__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    fill: \"#0F91D6\",\n                                    width: 40\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute left-1 bottom-1 z-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_navbar_Documents__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    fill: \"#96c8e353\",\n                                    width: 50\n                                }, void 0, false, {\n                                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-6 w-3/4 font-semibold\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-default\",\n                children: [\n                    item.hasOwnProperty(\"description\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full my-7\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 6\n                    }, undefined) : \"\",\n                    (_items = items) === null || _items === void 0 ? void 0 : _items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-2 font-semibold\",\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/eios/EiosItem.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EiosItem, \"WD232YymTzmY+pTcOnyQl3+AmK0=\");\n_c = EiosItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EiosItem);\nvar _c;\n$RefreshReg$(_c, \"EiosItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9laW9zL0Vpb3NJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dDO0FBQ3FCO0FBRXJELE1BQU1FLFdBQVc7UUFBQyxFQUFFLEdBQUdDLE1BQWE7UUF1Qi9CQzs7SUF0QkosTUFBTSxDQUFDQSxNQUFNLEdBQUdKLCtDQUFRQSxDQUFDRyxLQUFLRSxXQUFXO0lBQ3pDLE1BQU0sQ0FBQ0MsSUFBSUMsTUFBTSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QixxQkFDQyw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEOztrQ0FDQSw4REFBQ0E7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ1IsK0RBQWFBO29DQUFDUyxNQUFLO29DQUFVQyxPQUFPOzs7Ozs7Ozs7OzswQ0FFdEMsOERBQUNIO2dDQUFJQyxXQUFVOzBDQUNkLDRFQUFDUiwrREFBYUE7b0NBQUNTLE1BQUs7b0NBQVlDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ0M7d0JBQUdILFdBQVU7a0NBQTRCTixLQUFLVSxLQUFLOzs7Ozs7Ozs7Ozs7MEJBRXJELDhEQUFDTDtnQkFBSUMsV0FBVTs7b0JBQ2JOLEtBQUtXLGNBQWMsQ0FBQywrQkFDcEIsOERBQUNSO3dCQUFHRyxXQUFVOzs7OztvQ0FFZDtxQkFFQUwsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPVyxHQUFHLENBQUNaLENBQUFBLHFCQUNYLDhEQUFDSzs0QkFBSUMsV0FBVTtzQ0FBc0JOLEtBQUtVLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRDtHQTdCTVg7S0FBQUE7QUErQk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9laW9zL0Vpb3NJdGVtLnRzeD84MDc0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBEb2N1bWVudHNJY29uIGZyb20gJy4uL2ljb25zL25hdmJhci9Eb2N1bWVudHMnXG5cbmNvbnN0IEVpb3NJdGVtID0gKHsgLi4uaXRlbSB9OiBJRWlvcykgPT4ge1xuXHRjb25zdCBbaXRlbXNdID0gdXNlU3RhdGUoaXRlbS5kZXNjcmlwdGlvbilcblx0Y29uc3QgW2hyLCBzZXRIcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBtci0xMCBtYi0xMCBweC01IHB5LTEwIHctWzQ1MHB4XSByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyJz5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LVs3MHB4XSBoLVs3MHB4XSByZWxhdGl2ZSc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3otMzAgYWJzb2x1dGUgYm90dG9tLTAgYmctd2hpdGUnPlxuXHRcdFx0XHRcdFx0PERvY3VtZW50c0ljb24gZmlsbD0nIzBGOTFENicgd2lkdGg9ezQwfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTEgYm90dG9tLTEgei0wJz5cblx0XHRcdFx0XHRcdDxEb2N1bWVudHNJY29uIGZpbGw9JyM5NmM4ZTM1Mycgd2lkdGg9ezUwfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbXQtNiB3LTMvNCBmb250LXNlbWlib2xkJz57aXRlbS50aXRsZX08L2gyPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY3Vyc29yLWRlZmF1bHQnPlxuXHRcdFx0XHR7aXRlbS5oYXNPd25Qcm9wZXJ0eSgnZGVzY3JpcHRpb24nKSA/IChcblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSd3LWZ1bGwgbXktNycgLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQnJ1xuXHRcdFx0XHQpfVxuXHRcdFx0XHR7aXRlbXM/Lm1hcChpdGVtID0+IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWItMiBmb250LXNlbWlib2xkJz57aXRlbS50aXRsZX08L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBFaW9zSXRlbVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRG9jdW1lbnRzSWNvbiIsIkVpb3NJdGVtIiwiaXRlbSIsIml0ZW1zIiwiZGVzY3JpcHRpb24iLCJociIsInNldEhyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsbCIsIndpZHRoIiwiaDIiLCJ0aXRsZSIsImhhc093blByb3BlcnR5IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/eios/EiosItem.tsx\n"));

/***/ })

});