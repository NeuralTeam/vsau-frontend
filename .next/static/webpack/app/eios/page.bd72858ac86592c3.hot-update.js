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

/***/ "(app-client)/./src/widgets/eios/EiosWidget.tsx":
/*!*****************************************!*\
  !*** ./src/widgets/eios/EiosWidget.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TestArrays_eios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/TestArrays/eios */ \"(app-client)/./src/TestArrays/eios.ts\");\n/* harmony import */ var _shared_eios_EiosItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/eios/EiosItem */ \"(app-client)/./src/shared/eios/EiosItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst EiosWidget = ()=>{\n    _s();\n    const [items] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_TestArrays_eios__WEBPACK_IMPORTED_MODULE_1__.eiosMainArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-20 flex items-center justify-start\",\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_eios_EiosItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...item\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/eios/EiosWidget.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/eios/EiosWidget.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/eios/EiosWidget.tsx\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/widgets/eios/EiosWidget.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EiosWidget, \"e6OgH5AJ4lTigLxC+BlZRNW3J48=\");\n_c = EiosWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EiosWidget);\nvar _c;\n$RefreshReg$(_c, \"EiosWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3dpZGdldHMvZWlvcy9FaW9zV2lkZ2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpRDtBQUNKO0FBQ2I7QUFFaEMsTUFBTUcsYUFBYTs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNLEdBQUdGLCtDQUFRQSxDQUFDRiwyREFBYUE7SUFFdEMscUJBQ0MsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYkYsTUFBTUcsR0FBRyxDQUFDQyxDQUFBQSxxQkFDViw4REFBQ1AsNkRBQVFBO3dCQUFFLEdBQUdPLElBQUk7Ozs7Ozs7Ozs7OzBCQUdwQiw4REFBQ0M7Z0JBQUdILFdBQVU7Ozs7Ozs7Ozs7OztBQUdqQjtHQWJNSDtLQUFBQTtBQWVOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL2Vpb3MvRWlvc1dpZGdldC50c3g/MGMzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IGVpb3NNYWluQXJyYXkgfSBmcm9tICdAL1Rlc3RBcnJheXMvZWlvcydcbmltcG9ydCBFaW9zSXRlbSBmcm9tICdAL3NoYXJlZC9laW9zL0Vpb3NJdGVtJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgRWlvc1dpZGdldCA9ICgpID0+IHtcblx0Y29uc3QgW2l0ZW1zXSA9IHVzZVN0YXRlKGVpb3NNYWluQXJyYXkpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteS0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0Jz5cblx0XHRcdFx0e2l0ZW1zLm1hcChpdGVtID0+IChcblx0XHRcdFx0XHQ8RWlvc0l0ZW0gey4uLml0ZW19IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aHIgY2xhc3NOYW1lPSd3LWZ1bGwnIC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWlvc1dpZGdldFxuIl0sIm5hbWVzIjpbImVpb3NNYWluQXJyYXkiLCJFaW9zSXRlbSIsInVzZVN0YXRlIiwiRWlvc1dpZGdldCIsIml0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/widgets/eios/EiosWidget.tsx\n"));

/***/ })

});