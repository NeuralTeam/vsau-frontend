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

/***/ "(app-client)/./src/widgets/structure/StructureWidget.tsx":
/*!***************************************************!*\
  !*** ./src/widgets/structure/StructureWidget.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TestArrays_structureArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/TestArrays/structureArray */ \"(app-client)/./src/TestArrays/structureArray.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StructureSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StructureSection */ \"(app-client)/./src/widgets/structure/StructureSection.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction StructureWidget() {\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_TestArrays_structureArray__WEBPACK_IMPORTED_MODULE_1__.structureArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" min-h-screen  w-11/12 \",\n        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#0F91D6] p-10 my-10 rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StructureSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    ...item\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/structure/StructureWidget.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/structure/StructureWidget.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/structure/StructureWidget.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_s(StructureWidget, \"dDAFfHQb3s7eW5RBpN8jjlVp3ZA=\");\n_c = StructureWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StructureWidget);\nvar _c;\n$RefreshReg$(_c, \"StructureWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3dpZGdldHMvc3RydWN0dXJlL1N0cnVjdHVyZVdpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEQ7QUFDNUI7QUFDaUI7QUFFakQsU0FBU0c7O0lBQ1IsTUFBTSxDQUFDQyxNQUFNLEdBQUdILCtDQUFRQSxDQUFDRCxzRUFBY0E7SUFDdkMscUJBQ0MsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2JGLE1BQU1HLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1YsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDSix5REFBZ0JBO29CQUFFLEdBQUdNLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0FYU0w7S0FBQUE7QUFhVCwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy9zdHJ1Y3R1cmUvU3RydWN0dXJlV2lkZ2V0LnRzeD81NWQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVBcnJheSB9IGZyb20gJ0AvVGVzdEFycmF5cy9zdHJ1Y3R1cmVBcnJheSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3RydWN0dXJlU2VjdGlvbiBmcm9tICcuL1N0cnVjdHVyZVNlY3Rpb24nXG5cbmZ1bmN0aW9uIFN0cnVjdHVyZVdpZGdldCgpIHtcblx0Y29uc3QgW2l0ZW1zXSA9IHVzZVN0YXRlKHN0cnVjdHVyZUFycmF5KVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPScgbWluLWgtc2NyZWVuICB3LTExLzEyICc+XG5cdFx0XHR7aXRlbXMubWFwKGl0ZW0gPT4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctWyMwRjkxRDZdIHAtMTAgbXktMTAgcm91bmRlZC1sZyc+XG5cdFx0XHRcdFx0PFN0cnVjdHVyZVNlY3Rpb24gey4uLml0ZW19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RydWN0dXJlV2lkZ2V0XG4iXSwibmFtZXMiOlsic3RydWN0dXJlQXJyYXkiLCJ1c2VTdGF0ZSIsIlN0cnVjdHVyZVNlY3Rpb24iLCJTdHJ1Y3R1cmVXaWRnZXQiLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/widgets/structure/StructureWidget.tsx\n"));

/***/ })

});