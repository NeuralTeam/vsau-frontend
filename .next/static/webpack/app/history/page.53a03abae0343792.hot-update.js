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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HistoryItems = (param)=>{\n    let { ...item } = param;\n    const images = item.images;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: item.title\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: images.map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: img.img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n};\n_c = HistoryItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HistoryItems);\nvar _c;\n$RefreshReg$(_c, \"HistoryItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9oaXN0b3J5L0hpc3RvcnlJdGVtcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEI7QUFFOUIsTUFBTUMsZUFBZTtRQUFDLEVBQUUsR0FBR0MsTUFBZ0I7SUFDMUMsTUFBTUMsU0FBU0QsS0FBS0MsTUFBTTtJQUMxQixxQkFDQyw4REFBQ0M7OzBCQUNBLDhEQUFDQzswQkFBSUgsS0FBS0ksS0FBSzs7Ozs7OzBCQUNmLDhEQUFDRjtnQkFBSUcsV0FBVTswQkFDYkosT0FBT0ssR0FBRyxDQUFDQyxDQUFBQSxvQkFDWCw4REFBQ1QsbURBQUtBO3dCQUFDVSxLQUFLRCxJQUFJQSxHQUFHO3dCQUFFRSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtLQVpNVjtBQWNOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvaGlzdG9yeS9IaXN0b3J5SXRlbXMudHN4PzM1OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmNvbnN0IEhpc3RvcnlJdGVtcyA9ICh7IC4uLml0ZW0gfTogSUhpc3RvcnkpID0+IHtcblx0Y29uc3QgaW1hZ2VzID0gaXRlbS5pbWFnZXNcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgyPntpdGVtLnRpdGxlfTwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0e2ltYWdlcy5tYXAoaW1nID0+IChcblx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpbWcuaW1nfSBhbHQ9JycgLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5SXRlbXNcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkhpc3RvcnlJdGVtcyIsIml0ZW0iLCJpbWFnZXMiLCJkaXYiLCJoMiIsInRpdGxlIiwiY2xhc3NOYW1lIiwibWFwIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/history/HistoryItems.tsx\n"));

/***/ })

});