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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _history_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/history.png */ \"(app-client)/./src/history.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst HistoryItems = (param)=>{\n    let { ...item } = param;\n    const images = item.image;\n    const imageViewOpen = ()=>{\n        var _currentImage, _currentPage;\n        const currentImage = document.querySelector(\".history-image\");\n        const currentPage = document.querySelector(\".history-page\");\n        (_currentImage = currentImage) === null || _currentImage === void 0 ? void 0 : _currentImage.classList.add(\"active-image\");\n        (_currentPage = currentPage) === null || _currentPage === void 0 ? void 0 : _currentPage.classList.add(\"overflow-y-hidden\");\n    };\n    const imageViewClose = ()=>{\n        var _currentImage;\n        const currentImage = document.querySelector(\".history-image\");\n        (_currentImage = currentImage) === null || _currentImage === void 0 ? void 0 : _currentImage.classList.remove(\"active-image\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white m-2 p-4 rounded \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-slate-500 px-2\",\n                children: item.title\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: images.map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-3  w-full p-0 mx-2 relative history-image transition-all delay-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"exit cursor-pointer\",\n                                onClick: imageViewClose,\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _history_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                                alt: \"\",\n                                className: \"cursor-pointer\",\n                                onClick: imageViewOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/vsau-frontend/src/shared/history/HistoryItems.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_c = HistoryItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HistoryItems);\nvar _c;\n$RefreshReg$(_c, \"HistoryItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9oaXN0b3J5L0hpc3RvcnlJdGVtcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ0w7QUFFOUIsTUFBTUUsZUFBZTtRQUFDLEVBQUUsR0FBR0MsTUFBZ0I7SUFDMUMsTUFBTUMsU0FBU0QsS0FBS0UsS0FBSztJQUV6QixNQUFNQyxnQkFBZ0I7WUFHckJDLGVBQ0FDO1FBSEEsTUFBTUQsZUFBZUUsU0FBU0MsYUFBYSxDQUFDO1FBQzVDLE1BQU1GLGNBQWNDLFNBQVNDLGFBQWEsQ0FBQztTQUMzQ0gsZ0JBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBY0ksU0FBUyxDQUFDQyxHQUFHLENBQUM7U0FDNUJKLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYUcsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDNUI7SUFDQSxNQUFNQyxpQkFBaUI7WUFFdEJOO1FBREEsTUFBTUEsZUFBZUUsU0FBU0MsYUFBYSxDQUFDO1NBQzVDSCxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFjSSxTQUFTLENBQUNHLE1BQU0sQ0FBQztJQUNoQztJQUNBLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXVCYixLQUFLZSxLQUFLOzs7Ozs7MEJBQy9DLDhEQUFDSDtnQkFBSUMsV0FBVTswQkFDYlosT0FBT2UsR0FBRyxDQUFDQyxDQUFBQSxvQkFDWCw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTtnQ0FBc0JLLFNBQVNSOzBDQUFnQjs7Ozs7OzBDQUc5RCw4REFBQ1osbURBQUtBO2dDQUNMcUIsS0FBS3RCLG9EQUFPQTtnQ0FDWnVCLEtBQUk7Z0NBQ0pQLFdBQVU7Z0NBQ1ZLLFNBQVNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQjtLQWpDTUo7QUFtQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9oaXN0b3J5L0hpc3RvcnlJdGVtcy50c3g/MzU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGlzdG9yeSBmcm9tICdAL2hpc3RvcnkucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmNvbnN0IEhpc3RvcnlJdGVtcyA9ICh7IC4uLml0ZW0gfTogSUhpc3RvcnkpID0+IHtcblx0Y29uc3QgaW1hZ2VzID0gaXRlbS5pbWFnZVxuXG5cdGNvbnN0IGltYWdlVmlld09wZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnktaW1hZ2UnKVxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnktcGFnZScpXG5cdFx0Y3VycmVudEltYWdlPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtaW1hZ2UnKVxuXHRcdGN1cnJlbnRQYWdlPy5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LWhpZGRlbicpXG5cdH1cblx0Y29uc3QgaW1hZ2VWaWV3Q2xvc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnktaW1hZ2UnKVxuXHRcdGN1cnJlbnRJbWFnZT8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWltYWdlJylcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBtLTIgcC00IHJvdW5kZWQgJz5cblx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtc2xhdGUtNTAwIHB4LTInPntpdGVtLnRpdGxlfTwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuXHRcdFx0XHR7aW1hZ2VzLm1hcChpbWcgPT4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteS0zICB3LWZ1bGwgcC0wIG14LTIgcmVsYXRpdmUgaGlzdG9yeS1pbWFnZSB0cmFuc2l0aW9uLWFsbCBkZWxheS0yMDAnPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2V4aXQgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2ltYWdlVmlld0Nsb3NlfT5cblx0XHRcdFx0XHRcdFx0WFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0c3JjPXtoaXN0b3J5fVxuXHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aW1hZ2VWaWV3T3Blbn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUl0ZW1zXG4iXSwibmFtZXMiOlsiaGlzdG9yeSIsIkltYWdlIiwiSGlzdG9yeUl0ZW1zIiwiaXRlbSIsImltYWdlcyIsImltYWdlIiwiaW1hZ2VWaWV3T3BlbiIsImN1cnJlbnRJbWFnZSIsImN1cnJlbnRQYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW1hZ2VWaWV3Q2xvc2UiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwibWFwIiwiaW1nIiwib25DbGljayIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/history/HistoryItems.tsx\n"));

/***/ })

});