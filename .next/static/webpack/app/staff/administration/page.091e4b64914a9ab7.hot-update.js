"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/staff/administration/page",{

/***/ "(app-client)/./src/widgets/staff/StaffWidget.tsx":
/*!*******************************************!*\
  !*** ./src/widgets/staff/StaffWidget.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TestArrays_adminArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/TestArrays/adminArray */ \"(app-client)/./src/TestArrays/adminArray.ts\");\n/* harmony import */ var _shared_admin_AdminItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/admin/AdminItem */ \"(app-client)/./src/shared/admin/AdminItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst StaffWidget = ()=>{\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_TestArrays_adminArray__WEBPACK_IMPORTED_MODULE_1__.adminArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-start\",\n            children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_admin_AdminItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: item.id,\n                    post: item.post,\n                    name: item.name,\n                    photo: item.photo,\n                    tel: item.tel,\n                    cabinet: item.cabinet,\n                    email: item.email\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/staff/StaffWidget.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 6\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/staff/StaffWidget.tsx\",\n            lineNumber: 12,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/staff/StaffWidget.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_s(StaffWidget, \"RROBq71fsvJxgfRWTHiBzGYEcmE=\");\n_c = StaffWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffWidget);\nvar _c;\n$RefreshReg$(_c, \"StaffWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3dpZGdldHMvc3RhZmYvU3RhZmZXaWRnZXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRW9EO0FBQ0o7QUFDaEI7QUFFaEMsTUFBTUcsY0FBYzs7SUFDbkIsTUFBTSxDQUFDQyxNQUFNLEdBQUdGLCtDQUFRQSxDQUFDRiw4REFBVUE7SUFFbkMscUJBQ0MsOERBQUNLO2tCQUNBLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNiRixNQUFNRyxHQUFHLENBQUNDLENBQUFBLHFCQUNWLDhEQUFDUCwrREFBU0E7b0JBQ1RRLElBQUlELEtBQUtDLEVBQUU7b0JBQ1hDLE1BQU1GLEtBQUtFLElBQUk7b0JBQ2ZDLE1BQU1ILEtBQUtHLElBQUk7b0JBQ2ZDLE9BQU9KLEtBQUtJLEtBQUs7b0JBQ2pCQyxLQUFLTCxLQUFLSyxHQUFHO29CQUNiQyxTQUFTTixLQUFLTSxPQUFPO29CQUNyQkMsT0FBT1AsS0FBS08sS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQXBCTVo7S0FBQUE7QUFzQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldHMvc3RhZmYvU3RhZmZXaWRnZXQudHN4PzQ1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGFkbWluQXJyYXkgfSBmcm9tICdAL1Rlc3RBcnJheXMvYWRtaW5BcnJheSdcbmltcG9ydCBBZG1pbkl0ZW0gZnJvbSAnQC9zaGFyZWQvYWRtaW4vQWRtaW5JdGVtJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU3RhZmZXaWRnZXQgPSAoKSA9PiB7XG5cdGNvbnN0IFtpdGVtc10gPSB1c2VTdGF0ZShhZG1pbkFycmF5KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0Jz5cblx0XHRcdFx0e2l0ZW1zLm1hcChpdGVtID0+IChcblx0XHRcdFx0XHQ8QWRtaW5JdGVtXG5cdFx0XHRcdFx0XHRpZD17aXRlbS5pZH1cblx0XHRcdFx0XHRcdHBvc3Q9e2l0ZW0ucG9zdH1cblx0XHRcdFx0XHRcdG5hbWU9e2l0ZW0ubmFtZX1cblx0XHRcdFx0XHRcdHBob3RvPXtpdGVtLnBob3RvfVxuXHRcdFx0XHRcdFx0dGVsPXtpdGVtLnRlbH1cblx0XHRcdFx0XHRcdGNhYmluZXQ9e2l0ZW0uY2FiaW5ldH1cblx0XHRcdFx0XHRcdGVtYWlsPXtpdGVtLmVtYWlsfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZmZXaWRnZXRcbiJdLCJuYW1lcyI6WyJhZG1pbkFycmF5IiwiQWRtaW5JdGVtIiwidXNlU3RhdGUiLCJTdGFmZldpZGdldCIsIml0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImlkIiwicG9zdCIsIm5hbWUiLCJwaG90byIsInRlbCIsImNhYmluZXQiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/widgets/staff/StaffWidget.tsx\n"));

/***/ })

});