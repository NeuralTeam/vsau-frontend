"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/history/page",{

/***/ "(app-client)/./src/shared/history/HistoryItems.tsx":
/*!*********************************************!*\
  !*** ./src/shared/history/HistoryItems.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _history_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/history.png */ \"(app-client)/./src/history.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst HistoryItems = (param)=>{\n    let { ...item } = param;\n    const images = item.image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white m-2 p-4 rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-slate-500\",\n                children: item.title\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: images.map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _history_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n};\n_c = HistoryItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HistoryItems);\nvar _c;\n$RefreshReg$(_c, \"HistoryItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9oaXN0b3J5L0hpc3RvcnlJdGVtcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ0w7QUFFOUIsTUFBTUUsZUFBZTtRQUFDLEVBQUUsR0FBR0MsTUFBZ0I7SUFDMUMsTUFBTUMsU0FBU0QsS0FBS0UsS0FBSztJQUN6QixxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFrQkosS0FBS00sS0FBSzs7Ozs7OzBCQUMxQyw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2JILE9BQU9NLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ1gsOERBQUNMO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDTixtREFBS0E7NEJBQUNXLEtBQUtaLG9EQUFPQTs0QkFBRWEsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQjtLQWRNWDtBQWdCTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkL2hpc3RvcnkvSGlzdG9yeUl0ZW1zLnRzeD8zNTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoaXN0b3J5IGZyb20gJ0AvaGlzdG9yeS5wbmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuY29uc3QgSGlzdG9yeUl0ZW1zID0gKHsgLi4uaXRlbSB9OiBJSGlzdG9yeSkgPT4ge1xuXHRjb25zdCBpbWFnZXMgPSBpdGVtLmltYWdlXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIG0tMiBwLTQgcm91bmRlZCc+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTUwMCc+e2l0ZW0udGl0bGV9PC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG5cdFx0XHRcdHtpbWFnZXMubWFwKGltZyA9PiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J214LTMnPlxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz17aGlzdG9yeX0gYWx0PScnIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUl0ZW1zXG4iXSwibmFtZXMiOlsiaGlzdG9yeSIsIkltYWdlIiwiSGlzdG9yeUl0ZW1zIiwiaXRlbSIsImltYWdlcyIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ0aXRsZSIsIm1hcCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/history/HistoryItems.tsx\n"));

/***/ })

});