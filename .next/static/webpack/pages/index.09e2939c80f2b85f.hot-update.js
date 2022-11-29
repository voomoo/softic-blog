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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout */ \"./layout/layout.tsx\");\n/* harmony import */ var _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_redux/slices/apiSlice */ \"./_redux/slices/apiSlice.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_mergeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/mergeData */ \"./helpers/mergeData.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst { Meta  } = antd__WEBPACK_IMPORTED_MODULE_6__.Card;\nfunction Home() {\n    _s();\n    const [initialLimit, setInitialLimit] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(20);\n    const [mergedData, setMergedData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [limitedData, setLimitedData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const postData = (0,_redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetPostsQuery)();\n    const commentData = (0,_redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetCommentsQuery)();\n    const userData = (0,_redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetUsersQuery)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (postData.data && commentData.data && userData.data) {\n            setMergedData((0,_helpers_mergeData__WEBPACK_IMPORTED_MODULE_4__.mergeData)(postData.data, commentData.data, userData.data));\n            console.log((0,_helpers_mergeData__WEBPACK_IMPORTED_MODULE_4__.mergeData)(postData.data, commentData.data, userData.data));\n        }\n    }, [\n        postData.data,\n        commentData.data,\n        userData.data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLimitedData(mergedData.slice(0, initialLimit));\n    }, [\n        initialLimit,\n        mergedData\n    ]);\n    const loadMore = ()=>{\n        setInitialLimit(initialLimit + 10);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        pageTitle: \"Softic-Blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Row, {\n            gutter: 24,\n            style: {\n                margin: \"20px auto\"\n            },\n            justify: \"center\",\n            align: \"middle\",\n            children: [\n                (postData === null || postData === void 0 ? void 0 : postData.isLoading) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    span: 24,\n                    style: {\n                        marginTop: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                        loading: postData === null || postData === void 0 ? void 0 : postData.isLoading,\n                        title: \"Loading\",\n                        bordered: false,\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this),\n                limitedData === null || limitedData === void 0 ? void 0 : limitedData.map((post)=>{\n                    var _post_user, _post_userId, _post_comment, _post_userId1;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        span: 24,\n                        style: {\n                            marginTop: \"20px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                style: {\n                                    width: 800\n                                },\n                                actions: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"/user/\".concat(post === null || post === void 0 ? void 0 : post.userId),\n                                            children: [\n                                                \"Post By: \",\n                                                post === null || post === void 0 ? void 0 : (_post_user = post.user) === null || _post_user === void 0 ? void 0 : _post_user.name\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    }, \"user\", false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: {\n                                                pathname: \"/post/\".concat(post === null || post === void 0 ? void 0 : post.id),\n                                                query: {\n                                                    userID: post === null || post === void 0 ? void 0 : (_post_userId = post.userId) === null || _post_userId === void 0 ? void 0 : _post_userId.toString()\n                                                }\n                                            },\n                                            children: [\n                                                \"Comments: \",\n                                                post === null || post === void 0 ? void 0 : (_post_comment = post.comment) === null || _post_comment === void 0 ? void 0 : _post_comment.length\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    }, \"comments\", false, void 0, void 0)\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Meta, {\n                                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: {\n                                            pathname: \"/post/\".concat(post === null || post === void 0 ? void 0 : post.id),\n                                            query: {\n                                                userID: post === null || post === void 0 ? void 0 : (_post_userId1 = post.userId) === null || _post_userId1 === void 0 ? void 0 : _post_userId1.toString()\n                                            }\n                                        },\n                                        children: post === null || post === void 0 ? void 0 : post.title\n                                    }, void 0, false, void 0, void 0),\n                                    description: post === null || post === void 0 ? void 0 : post.body\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 25\n                        }, this)\n                    }, post === null || post === void 0 ? void 0 : post.id, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    span: 24,\n                    style: {\n                        marginTop: \"20px\",\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        onClick: loadMore,\n                        children: \"Load More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\index.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"wVG1dqv305D93mNaQVKiapCS5NI=\", false, function() {\n    return [\n        _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetPostsQuery,\n        _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetCommentsQuery,\n        _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.useGetUsersQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvZnRpY0Jsb2dMYXlvdXQgZnJvbSBcIi4uL2xheW91dC9sYXlvdXRcIjtcbmltcG9ydCB7dXNlR2V0Q29tbWVudHNRdWVyeSwgdXNlR2V0UG9zdHNRdWVyeSwgdXNlR2V0VXNlcnNRdWVyeX0gZnJvbSBcIi4uL19yZWR1eC9zbGljZXMvYXBpU2xpY2VcIjtcbmltcG9ydCB7QXZhdGFyLCBCdXR0b24sIENhcmQsIENvbCwgUm93fSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7bWVyZ2VEYXRhfSBmcm9tIFwiLi4vaGVscGVycy9tZXJnZURhdGFcIjtcbmltcG9ydCB7RWRpdE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBTZXR0aW5nT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgUG9zdCB7XG4gICAgYm9keT86IHN0cmluZztcbiAgICBpZD86IG51bWJlcjtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB1c2VySWQ/OiBudW1iZXI7XG4gICAgdXNlcj86IGFueTtcbiAgICBjb21tZW50PzogYW55O1xufVxuXG5pbnRlcmZhY2UgVXNlcntcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICAgIHBob25lPzogc3RyaW5nO1xuICAgIHdlYnNpdGU/OiBzdHJpbmc7XG4gICAgY29tcGFueT86IGFueTtcbiAgICBhZGRyZXNzPzogYW55O1xuXG59XG5cbmNvbnN0IHtNZXRhfSA9IENhcmQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2luaXRpYWxMaW1pdCwgc2V0SW5pdGlhbExpbWl0XSA9IHVzZVN0YXRlKDIwKTtcbiAgICBjb25zdCBbbWVyZ2VkRGF0YSwgc2V0TWVyZ2VkRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgICBjb25zdCBbbGltaXRlZERhdGEsIHNldExpbWl0ZWREYXRhXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICAgIGNvbnN0IHBvc3REYXRhID0gdXNlR2V0UG9zdHNRdWVyeSgpO1xuICAgIGNvbnN0IGNvbW1lbnREYXRhID0gdXNlR2V0Q29tbWVudHNRdWVyeSgpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlR2V0VXNlcnNRdWVyeSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBvc3REYXRhLmRhdGEgJiYgY29tbWVudERhdGEuZGF0YSAmJiB1c2VyRGF0YS5kYXRhKSB7XG4gICAgICAgICAgICBzZXRNZXJnZWREYXRhKG1lcmdlRGF0YShwb3N0RGF0YS5kYXRhLCBjb21tZW50RGF0YS5kYXRhLCB1c2VyRGF0YS5kYXRhKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXJnZURhdGEocG9zdERhdGEuZGF0YSwgY29tbWVudERhdGEuZGF0YSwgdXNlckRhdGEuZGF0YSkpO1xuICAgICAgICB9XG4gICAgfSwgW3Bvc3REYXRhLmRhdGEsIGNvbW1lbnREYXRhLmRhdGEsIHVzZXJEYXRhLmRhdGFdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExpbWl0ZWREYXRhKG1lcmdlZERhdGEuc2xpY2UoMCwgaW5pdGlhbExpbWl0KSk7XG4gICAgfSwgW2luaXRpYWxMaW1pdCwgbWVyZ2VkRGF0YV0pO1xuXG4gICAgY29uc3QgbG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgICAgIHNldEluaXRpYWxMaW1pdChpbml0aWFsTGltaXQgKyAxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNvZnRpY0Jsb2dMYXlvdXQgcGFnZVRpdGxlPXtcIlNvZnRpYy1CbG9nXCJ9PlxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezI0fSBzdHlsZT17e21hcmdpbjogXCIyMHB4IGF1dG9cIn19IGp1c3RpZnk9e1wiY2VudGVyXCJ9IGFsaWduPXtcIm1pZGRsZVwifT5cbiAgICAgICAgICAgICAgICB7cG9zdERhdGE/LmlzTG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGxvYWRpbmc9e3Bvc3REYXRhPy5pc0xvYWRpbmd9IHRpdGxlPXtcIkxvYWRpbmdcIn0gYm9yZGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7bGltaXRlZERhdGE/Lm1hcCgocG9zdDogUG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBrZXk9e3Bvc3Q/LmlkfSBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IDgwMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcInVzZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdD8udXNlcklkfWB9PlBvc3QgQnk6IHtwb3N0Py51c2VyPy5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcImNvbW1lbnRzXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogYC9wb3N0LyR7cG9zdD8uaWR9YCwgcXVlcnk6IHt1c2VySUQ6IHBvc3Q/LnVzZXJJZD8udG9TdHJpbmcoKX19fT5Db21tZW50czoge3Bvc3Q/LmNvbW1lbnQ/Lmxlbmd0aH08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxMaW5rIGhyZWY9e3twYXRobmFtZTogYC9wb3N0LyR7cG9zdD8uaWR9YCwgcXVlcnk6IHt1c2VySUQ6IHBvc3Q/LnVzZXJJZD8udG9TdHJpbmcoKX19fT57cG9zdD8udGl0bGV9PC9MaW5rPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0Py5ib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17bG9hZE1vcmV9PkxvYWQgTW9yZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Tb2Z0aWNCbG9nTGF5b3V0PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJTb2Z0aWNCbG9nTGF5b3V0IiwidXNlR2V0Q29tbWVudHNRdWVyeSIsInVzZUdldFBvc3RzUXVlcnkiLCJ1c2VHZXRVc2Vyc1F1ZXJ5IiwiQnV0dG9uIiwiQ2FyZCIsIkNvbCIsIlJvdyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWVyZ2VEYXRhIiwiTGluayIsIk1ldGEiLCJIb21lIiwiaW5pdGlhbExpbWl0Iiwic2V0SW5pdGlhbExpbWl0IiwibWVyZ2VkRGF0YSIsInNldE1lcmdlZERhdGEiLCJsaW1pdGVkRGF0YSIsInNldExpbWl0ZWREYXRhIiwicG9zdERhdGEiLCJjb21tZW50RGF0YSIsInVzZXJEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzbGljZSIsImxvYWRNb3JlIiwicGFnZVRpdGxlIiwiZ3V0dGVyIiwic3R5bGUiLCJtYXJnaW4iLCJqdXN0aWZ5IiwiYWxpZ24iLCJpc0xvYWRpbmciLCJzcGFuIiwibWFyZ2luVG9wIiwibG9hZGluZyIsInRpdGxlIiwiYm9yZGVyZWQiLCJtYXAiLCJwb3N0IiwiZGl2IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJhY3Rpb25zIiwiaHJlZiIsInVzZXJJZCIsInVzZXIiLCJuYW1lIiwicGF0aG5hbWUiLCJpZCIsInF1ZXJ5IiwidXNlcklEIiwidG9TdHJpbmciLCJjb21tZW50IiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJib2R5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});