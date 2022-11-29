"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout */ \"./layout/layout.tsx\");\n/* harmony import */ var _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_redux/slices/apiSlice */ \"./_redux/slices/apiSlice.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_mergeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/mergeData */ \"./helpers/mergeData.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst { Meta  } = antd__WEBPACK_IMPORTED_MODULE_6__.Card;\nfunction Home() {\n    _s();\n    const [initialLimit, setInitialLimit] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(20);\n    const [mergedData, setMergedData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [limitedData, setLimitedData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const postData = (0,_redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetPostsQuery)();\n    const commentData = (0,_redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetCommentsQuery)();\n    const userData = (0,_redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetUsersQuery)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (postData.data && commentData.data && userData.data) {\n            setMergedData((0,_helpers_mergeData__WEBPACK_IMPORTED_MODULE_4__.mergeData)(postData.data, commentData.data, userData.data));\n            console.log((0,_helpers_mergeData__WEBPACK_IMPORTED_MODULE_4__.mergeData)(postData.data, commentData.data, userData.data));\n        }\n    }, [\n        postData.data,\n        commentData.data,\n        userData.data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLimitedData(mergedData.slice(0, initialLimit));\n    }, [\n        initialLimit,\n        mergedData\n    ]);\n    const loadMore = ()=>{\n        setInitialLimit(initialLimit + 10);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        pageTitle: \"Softic-Blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Row, {\n            gutter: 24,\n            style: {\n                margin: \"20px auto\"\n            },\n            justify: \"center\",\n            align: \"middle\",\n            children: [\n                (postData === null || postData === void 0 ? void 0 : postData.isLoading) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    span: 24,\n                    style: {\n                        marginTop: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                        loading: postData === null || postData === void 0 ? void 0 : postData.isLoading,\n                        title: \"Loading\",\n                        bordered: false,\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                limitedData === null || limitedData === void 0 ? void 0 : limitedData.map((post)=>{\n                    var _post_user, _post_userId, _post_comment, _post_userId1;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        span: 24,\n                        style: {\n                            marginTop: \"20px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                style: {\n                                    width: 800\n                                },\n                                actions: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"/user/\".concat(post === null || post === void 0 ? void 0 : post.userId),\n                                            children: [\n                                                \"Post By: \",\n                                                post === null || post === void 0 ? void 0 : (_post_user = post.user) === null || _post_user === void 0 ? void 0 : _post_user.name\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    }, \"user\", false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: {\n                                                pathname: \"/post/\".concat(post === null || post === void 0 ? void 0 : post.id),\n                                                query: {\n                                                    userID: post === null || post === void 0 ? void 0 : (_post_userId = post.userId) === null || _post_userId === void 0 ? void 0 : _post_userId.toString()\n                                                }\n                                            },\n                                            children: [\n                                                \"Comments: \",\n                                                post === null || post === void 0 ? void 0 : (_post_comment = post.comment) === null || _post_comment === void 0 ? void 0 : _post_comment.length\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    }, \"comments\", false, void 0, void 0)\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Meta, {\n                                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: {\n                                            pathname: \"/post/\".concat(post === null || post === void 0 ? void 0 : post.id),\n                                            query: {\n                                                userID: post === null || post === void 0 ? void 0 : (_post_userId1 = post.userId) === null || _post_userId1 === void 0 ? void 0 : _post_userId1.toString()\n                                            }\n                                        },\n                                        children: post === null || post === void 0 ? void 0 : post.title\n                                    }, void 0, false, void 0, void 0),\n                                    description: post === null || post === void 0 ? void 0 : post.body\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this)\n                    }, post === null || post === void 0 ? void 0 : post.id, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    span: 24,\n                    style: {\n                        marginTop: \"20px\",\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        onClick: loadMore,\n                        children: \"Load More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"wVG1dqv305D93mNaQVKiapCS5NI=\", false, function() {\n    return [\n        _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetPostsQuery,\n        _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetCommentsQuery,\n        _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetUsersQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU29mdGljQmxvZ0xheW91dCBmcm9tIFwiLi4vbGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IHt1c2VHZXRDb21tZW50c1F1ZXJ5LCB1c2VHZXRQb3N0c1F1ZXJ5LCB1c2VHZXRVc2Vyc1F1ZXJ5fSBmcm9tIFwiLi4vX3JlZHV4L3NsaWNlcy9hcGlTbGljZVwiO1xuaW1wb3J0IHtBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgQ29sLCBSb3d9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHttZXJnZURhdGF9IGZyb20gXCIuLi9oZWxwZXJzL21lcmdlRGF0YVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtQb3N0fSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3Qge01ldGF9ID0gQ2FyZDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbaW5pdGlhbExpbWl0LCBzZXRJbml0aWFsTGltaXRdID0gdXNlU3RhdGUoMjApO1xuICAgIGNvbnN0IFttZXJnZWREYXRhLCBzZXRNZXJnZWREYXRhXSA9IHVzZVN0YXRlPFBvc3RbXT4oW10pO1xuICAgIGNvbnN0IFtsaW1pdGVkRGF0YSwgc2V0TGltaXRlZERhdGFdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XG4gICAgY29uc3QgcG9zdERhdGEgPSB1c2VHZXRQb3N0c1F1ZXJ5KCk7XG4gICAgY29uc3QgY29tbWVudERhdGEgPSB1c2VHZXRDb21tZW50c1F1ZXJ5KCk7XG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VHZXRVc2Vyc1F1ZXJ5KCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocG9zdERhdGEuZGF0YSAmJiBjb21tZW50RGF0YS5kYXRhICYmIHVzZXJEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIHNldE1lcmdlZERhdGEobWVyZ2VEYXRhKHBvc3REYXRhLmRhdGEsIGNvbW1lbnREYXRhLmRhdGEsIHVzZXJEYXRhLmRhdGEpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lcmdlRGF0YShwb3N0RGF0YS5kYXRhLCBjb21tZW50RGF0YS5kYXRhLCB1c2VyRGF0YS5kYXRhKSk7XG4gICAgICAgIH1cbiAgICB9LCBbcG9zdERhdGEuZGF0YSwgY29tbWVudERhdGEuZGF0YSwgdXNlckRhdGEuZGF0YV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TGltaXRlZERhdGEobWVyZ2VkRGF0YS5zbGljZSgwLCBpbml0aWFsTGltaXQpKTtcbiAgICB9LCBbaW5pdGlhbExpbWl0LCBtZXJnZWREYXRhXSk7XG5cbiAgICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SW5pdGlhbExpbWl0KGluaXRpYWxMaW1pdCArIDEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U29mdGljQmxvZ0xheW91dCBwYWdlVGl0bGU9e1wiU29mdGljLUJsb2dcIn0+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MjR9IHN0eWxlPXt7bWFyZ2luOiBcIjIwcHggYXV0b1wifX0ganVzdGlmeT17XCJjZW50ZXJcIn0gYWxpZ249e1wibWlkZGxlXCJ9PlxuICAgICAgICAgICAgICAgIHtwb3N0RGF0YT8uaXNMb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgbG9hZGluZz17cG9zdERhdGE/LmlzTG9hZGluZ30gdGl0bGU9e1wiTG9hZGluZ1wifSBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtsaW1pdGVkRGF0YT8ubWFwKChwb3N0OiBQb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IGtleT17cG9zdD8uaWR9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogODAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1widXNlclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0Py51c2VySWR9YH0+UG9zdCBCeToge3Bvc3Q/LnVzZXI/Lm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wiY29tbWVudHNcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBgL3Bvc3QvJHtwb3N0Py5pZH1gLCBxdWVyeToge3VzZXJJRDogcG9zdD8udXNlcklkPy50b1N0cmluZygpfX19PkNvbW1lbnRzOiB7cG9zdD8uY29tbWVudD8ubGVuZ3RofTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PExpbmsgaHJlZj17e3BhdGhuYW1lOiBgL3Bvc3QvJHtwb3N0Py5pZH1gLCBxdWVyeToge3VzZXJJRDogcG9zdD8udXNlcklkPy50b1N0cmluZygpfX19Pntwb3N0Py50aXRsZX08L0xpbms+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3Q/LmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtsb2FkTW9yZX0+TG9hZCBNb3JlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1NvZnRpY0Jsb2dMYXlvdXQ+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlNvZnRpY0Jsb2dMYXlvdXQiLCJ1c2VHZXRDb21tZW50c1F1ZXJ5IiwidXNlR2V0UG9zdHNRdWVyeSIsInVzZUdldFVzZXJzUXVlcnkiLCJCdXR0b24iLCJDYXJkIiwiQ29sIiwiUm93IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtZXJnZURhdGEiLCJMaW5rIiwiTWV0YSIsIkhvbWUiLCJpbml0aWFsTGltaXQiLCJzZXRJbml0aWFsTGltaXQiLCJtZXJnZWREYXRhIiwic2V0TWVyZ2VkRGF0YSIsImxpbWl0ZWREYXRhIiwic2V0TGltaXRlZERhdGEiLCJwb3N0RGF0YSIsImNvbW1lbnREYXRhIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwibG9hZE1vcmUiLCJwYWdlVGl0bGUiLCJndXR0ZXIiLCJzdHlsZSIsIm1hcmdpbiIsImp1c3RpZnkiLCJhbGlnbiIsImlzTG9hZGluZyIsInNwYW4iLCJtYXJnaW5Ub3AiLCJsb2FkaW5nIiwidGl0bGUiLCJib3JkZXJlZCIsIm1hcCIsInBvc3QiLCJkaXYiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImFjdGlvbnMiLCJocmVmIiwidXNlcklkIiwidXNlciIsIm5hbWUiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJ1c2VySUQiLCJ0b1N0cmluZyIsImNvbW1lbnQiLCJsZW5ndGgiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});