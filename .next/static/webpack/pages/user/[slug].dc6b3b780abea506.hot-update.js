"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[slug]",{

/***/ "./layout/layout.tsx":
/*!***************************!*\
  !*** ./layout/layout.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SofticBlogLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst { Search  } = antd__WEBPACK_IMPORTED_MODULE_3__.Input;\nfunction SofticBlogLayout(param) {\n    let { children , pageTitle  } = param;\n    const { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\n    const onSearch = (value)=>console.log(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pageTitle\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A sample blog for the assessment of softice.ai\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Softic-Blog\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"A sample blog for the assessment of softice.ai\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"blog\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://www.softic.ai/\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://softic.ai/wp-content/uploads/2022/04/Untitled-2-1.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:title\",\n                        content: \"oftic-Blog\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:description\",\n                        content: \"A sample blog for the assessment of softice.ai\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:image\",\n                        content: \"https://softic.ai/wp-content/uploads/2022/04/Untitled-2-1.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                className: \"layout\",\n                style: {\n                    minHeight: \"100vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        style: {\n                            position: \"sticky\",\n                            top: 0,\n                            zIndex: 1,\n                            width: \"100%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                            gutter: 12,\n                            align: \"middle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                                className: \"gutter-row\",\n                                span: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    style: {\n                                        margin: 0,\n                                        color: \"white\"\n                                    },\n                                    children: \"Softic-Blog\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            padding: \"0 50px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"site-layout-content\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        style: {\n                            textAlign: \"center\",\n                            background: \"#e5e5e5\"\n                        },\n                        children: \"Softic-Blog \\xa92022 Created by Rakibul Hasan\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\layout\\\\layout.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = SofticBlogLayout;\nvar _c;\n$RefreshReg$(_c, \"SofticBlogLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvbGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ2dCO0FBQ2hCO0FBTzdCLE1BQU0sRUFBQ00sT0FBTSxFQUFDLEdBQUdILHVDQUFLQTtBQUVQLFNBQVNJLGlCQUFpQixLQUE0QixFQUFFO1FBQTlCLEVBQUNDLFNBQVEsRUFBRUMsVUFBUyxFQUFRLEdBQTVCO0lBQ3JDLE1BQU0sRUFBQ0MsT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBQyxHQUFHVix3Q0FBTUE7SUFDeEMsTUFBTVcsV0FBVyxDQUFDQyxRQUFrQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoRCxxQkFDSSw4REFBQ0c7OzBCQUNHLDhEQUFDakIsa0RBQUlBOztrQ0FDRCw4REFBQ2tCO2tDQUNJVDs7Ozs7O2tDQUVMLDhEQUFDVTt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLRyxVQUFTO3dCQUFXRCxTQUFROzs7Ozs7a0NBQ2xDLDhEQUFDRjt3QkFBS0csVUFBUzt3QkFBaUJELFNBQVE7Ozs7OztrQ0FDeEMsOERBQUNGO3dCQUFLRyxVQUFTO3dCQUFVRCxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0csVUFBUzt3QkFBU0QsU0FBUTs7Ozs7O2tDQUNoQyw4REFBQ0Y7d0JBQUtHLFVBQVM7d0JBQVdELFNBQVE7Ozs7OztrQ0FDbEMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFnQkMsU0FBUTs7Ozs7O2tDQUNuQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQXNCQyxTQUFROzs7Ozs7a0NBQ3pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBZ0JDLFNBQVE7Ozs7OztrQ0FDbkMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFlQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR3RDLDhEQUFDbkIsd0NBQU1BO2dCQUFDcUIsV0FBVTtnQkFBU0MsT0FBTztvQkFBQ0MsV0FBVztnQkFBTzs7a0NBQ2pELDhEQUFDZjt3QkFBT2MsT0FBTzs0QkFBRUUsVUFBVTs0QkFBVUMsS0FBSzs0QkFBR0MsUUFBUTs0QkFBR0MsT0FBTzt3QkFBTztrQ0FDbEUsNEVBQUN6QixxQ0FBR0E7NEJBQUMwQixRQUFROzRCQUFJQyxPQUFPO3NDQUNwQiw0RUFBQzlCLHFDQUFHQTtnQ0FBQ3NCLFdBQVc7Z0NBQWNTLE1BQU07MENBQ2hDLDRFQUFDM0Isa0RBQUlBO29DQUFDNEIsTUFBTTtvQ0FBS1QsT0FBTzt3Q0FBQ1UsUUFBUTt3Q0FBR0MsT0FBTztvQ0FBTzs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlqRSw4REFBQ3hCO3dCQUFRYSxPQUFPOzRCQUFDWSxTQUFTO3dCQUFRO2tDQUM5Qiw0RUFBQ25COzRCQUFJTSxXQUFVO3NDQUF1QmY7Ozs7Ozs7Ozs7O2tDQUUxQyw4REFBQ0k7d0JBQU9ZLE9BQU87NEJBQUNhLFdBQVc7NEJBQVVDLFlBQVk7d0JBQVM7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03RSxDQUFDO0tBdkN1Qi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9sYXlvdXQudHN4PzJkMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHtDb2wsIExheW91dCwgSW5wdXQsIFJvd30gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBwYWdlVGl0bGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHtTZWFyY2h9ID0gSW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZnRpY0Jsb2dMYXlvdXQoe2NoaWxkcmVuLCBwYWdlVGl0bGV9OiBQcm9wcykge1xuICAgIGNvbnN0IHtIZWFkZXIsIENvbnRlbnQsIEZvb3Rlcn0gPSBMYXlvdXQ7XG4gICAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWU6IHN0cmluZykgPT4gY29uc29sZS5sb2codmFsdWUpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlVGl0bGV9XG4gICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBzYW1wbGUgYmxvZyBmb3IgdGhlIGFzc2Vzc21lbnQgb2Ygc29mdGljZS5haVwiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlNvZnRpYy1CbG9nXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBzYW1wbGUgYmxvZyBmb3IgdGhlIGFzc2Vzc21lbnQgb2Ygc29mdGljZS5haVwiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYmxvZ1wiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5zb2Z0aWMuYWkvXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9zb2Z0aWMuYWkvd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDQvVW50aXRsZWQtMi0xLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJvZnRpYy1CbG9nXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgc2FtcGxlIGJsb2cgZm9yIHRoZSBhc3Nlc3NtZW50IG9mIHNvZnRpY2UuYWlcIi8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9zb2Z0aWMuYWkvd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDQvVW50aXRsZWQtMi0xLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIi8+XG5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCIgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgc3R5bGU9e3sgcG9zaXRpb246ICdzdGlja3knLCB0b3A6IDAsIHpJbmRleDogMSwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezEyfSBhbGlnbj17XCJtaWRkbGVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT17XCJndXR0ZXItcm93XCJ9IHNwYW49ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifSBzdHlsZT17e21hcmdpbjogMCwgY29sb3I6IFwid2hpdGVcIn19PlNvZnRpYy1CbG9nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7cGFkZGluZzogJzAgNTBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgYmFja2dyb3VuZDogXCIjZTVlNWU1XCJ9fT5Tb2Z0aWMtQmxvZyDCqTIwMjIgQ3JlYXRlZCBieSBSYWtpYnVsXG4gICAgICAgICAgICAgICAgICAgIEhhc2FuPC9Gb290ZXI+XG4gICAgICAgICAgICA8L0xheW91dD5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJDb2wiLCJMYXlvdXQiLCJJbnB1dCIsIlJvdyIsIkxpbmsiLCJTZWFyY2giLCJTb2Z0aWNCbG9nTGF5b3V0IiwiY2hpbGRyZW4iLCJwYWdlVGl0bGUiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwib25TZWFyY2giLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsIndpZHRoIiwiZ3V0dGVyIiwiYWxpZ24iLCJzcGFuIiwiaHJlZiIsIm1hcmdpbiIsImNvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/layout.tsx\n"));

/***/ })

});