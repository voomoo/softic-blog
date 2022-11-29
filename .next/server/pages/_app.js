/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./_redux/slices/apiSlice.ts":
/*!***********************************!*\
  !*** ./_redux/slices/apiSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiSlice\": () => (/* binding */ apiSlice),\n/* harmony export */   \"useGetCommentsByPostIdQuery\": () => (/* binding */ useGetCommentsByPostIdQuery),\n/* harmony export */   \"useGetCommentsQuery\": () => (/* binding */ useGetCommentsQuery),\n/* harmony export */   \"useGetPostQuery\": () => (/* binding */ useGetPostQuery),\n/* harmony export */   \"useGetPostsQuery\": () => (/* binding */ useGetPostsQuery),\n/* harmony export */   \"useGetUserQuery\": () => (/* binding */ useGetUserQuery),\n/* harmony export */   \"useGetUsersQuery\": () => (/* binding */ useGetUsersQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"apiSlice\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://jsonplaceholder.typicode.com\"\n    }),\n    endpoints: (builder)=>({\n            getPosts: builder.query({\n                query: ()=>`/posts`\n            }),\n            getPost: builder.query({\n                query: (id)=>`/posts?id=${id}`\n            }),\n            getComments: builder.query({\n                query: ()=>`/comments`\n            }),\n            getCommentsByPostId: builder.query({\n                query: (postId)=>`/comments?postId=${postId}`\n            }),\n            getUsers: builder.query({\n                query: ()=>`/users`\n            }),\n            getUser: builder.query({\n                query: (userId)=>`/users?id=${userId}`\n            })\n        })\n});\nconst { useGetPostsQuery , useGetPostQuery , useGetCommentsQuery , useGetCommentsByPostIdQuery , useGetUsersQuery , useGetUserQuery  } = apiSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fcmVkdXgvc2xpY2VzL2FwaVNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUVoRSxNQUFNRSxXQUFXRix1RUFBU0EsQ0FBQztJQUM5QkcsYUFBYTtJQUNiQyxXQUFXSCw0RUFBY0EsQ0FBQztRQUFDSSxTQUFTO0lBQXNDO0lBQzFFQyxXQUFXLENBQUNDLFVBQWE7WUFDckJDLFVBQVVELFFBQVFFLEtBQUssQ0FBWTtnQkFDL0JBLE9BQU8sSUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN6QjtZQUNBQyxTQUFTSCxRQUFRRSxLQUFLLENBQWM7Z0JBQ2hDQSxPQUFPLENBQUNFLEtBQU8sQ0FBQyxVQUFVLEVBQUVBLEdBQUcsQ0FBQztZQUNwQztZQUNBQyxhQUFhTCxRQUFRRSxLQUFLLENBQVk7Z0JBQ2xDQSxPQUFPLElBQU0sQ0FBQyxTQUFTLENBQUM7WUFDNUI7WUFDQUkscUJBQXFCTixRQUFRRSxLQUFLLENBQWM7Z0JBQzVDQSxPQUFPLENBQUNLLFNBQVcsQ0FBQyxpQkFBaUIsRUFBRUEsT0FBTyxDQUFDO1lBQ25EO1lBQ0FDLFVBQVVSLFFBQVFFLEtBQUssQ0FBWTtnQkFDL0JBLE9BQU8sSUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN6QjtZQUNBTyxTQUFTVCxRQUFRRSxLQUFLLENBQWM7Z0JBQ2hDQSxPQUFPLENBQUNRLFNBQVcsQ0FBQyxVQUFVLEVBQUVBLE9BQU8sQ0FBQztZQUM1QztRQUNKO0FBQ0osR0FBRztBQUVJLE1BQU0sRUFBQ0MsaUJBQWdCLEVBQUVDLGdCQUFlLEVBQUVDLG9CQUFtQixFQUFFQyw0QkFBMkIsRUFBRUMsaUJBQWdCLEVBQUVDLGdCQUFlLEVBQUMsR0FBR3JCLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0aWMtYmxvZy8uL19yZWR1eC9zbGljZXMvYXBpU2xpY2UudHM/NTU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBhcGlTbGljZSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6IFwiYXBpU2xpY2VcIixcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtiYXNlVXJsOiBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbVwifSksXG4gICAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICAgICAgZ2V0UG9zdHM6IGJ1aWxkZXIucXVlcnk8YW55LCB2b2lkPih7XG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gYC9wb3N0c2AsXG4gICAgICAgIH0pLFxuICAgICAgICBnZXRQb3N0OiBidWlsZGVyLnF1ZXJ5PGFueSwgbnVtYmVyPih7XG4gICAgICAgICAgICBxdWVyeTogKGlkKSA9PiBgL3Bvc3RzP2lkPSR7aWR9YCxcbiAgICAgICAgfSksXG4gICAgICAgIGdldENvbW1lbnRzOiBidWlsZGVyLnF1ZXJ5PGFueSwgdm9pZD4oe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IGAvY29tbWVudHNgLFxuICAgICAgICB9KSxcbiAgICAgICAgZ2V0Q29tbWVudHNCeVBvc3RJZDogYnVpbGRlci5xdWVyeTxhbnksIG51bWJlcj4oe1xuICAgICAgICAgICAgcXVlcnk6IChwb3N0SWQpID0+IGAvY29tbWVudHM/cG9zdElkPSR7cG9zdElkfWAsXG4gICAgICAgIH0pLFxuICAgICAgICBnZXRVc2VyczogYnVpbGRlci5xdWVyeTxhbnksIHZvaWQ+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiBgL3VzZXJzYCxcbiAgICAgICAgfSksXG4gICAgICAgIGdldFVzZXI6IGJ1aWxkZXIucXVlcnk8YW55LCBudW1iZXI+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAodXNlcklkKSA9PiBgL3VzZXJzP2lkPSR7dXNlcklkfWAsXG4gICAgICAgIH0pLFxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IHt1c2VHZXRQb3N0c1F1ZXJ5LCB1c2VHZXRQb3N0UXVlcnksIHVzZUdldENvbW1lbnRzUXVlcnksIHVzZUdldENvbW1lbnRzQnlQb3N0SWRRdWVyeSwgdXNlR2V0VXNlcnNRdWVyeSwgdXNlR2V0VXNlclF1ZXJ5fSA9IGFwaVNsaWNlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiYXBpU2xpY2UiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0UG9zdHMiLCJxdWVyeSIsImdldFBvc3QiLCJpZCIsImdldENvbW1lbnRzIiwiZ2V0Q29tbWVudHNCeVBvc3RJZCIsInBvc3RJZCIsImdldFVzZXJzIiwiZ2V0VXNlciIsInVzZXJJZCIsInVzZUdldFBvc3RzUXVlcnkiLCJ1c2VHZXRQb3N0UXVlcnkiLCJ1c2VHZXRDb21tZW50c1F1ZXJ5IiwidXNlR2V0Q29tbWVudHNCeVBvc3RJZFF1ZXJ5IiwidXNlR2V0VXNlcnNRdWVyeSIsInVzZUdldFVzZXJRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_redux/slices/apiSlice.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_redux/slices/apiSlice */ \"./_redux/slices/apiSlice.ts\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit/dist/query/react */ \"@reduxjs/toolkit/dist/query/react\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3__.ApiProvider, {\n        api: _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.apiSlice,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Learning Space\\\\softic-blog\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRXFCO0FBQ1c7QUFFL0MsU0FBU0UsSUFBSSxFQUFDQyxVQUFTLEVBQUVDLFVBQVMsRUFBVyxFQUFFO0lBQzFELHFCQUNJLDhEQUFDSCwwRUFBV0E7UUFBQ0ksS0FBS0wsNERBQVFBO2tCQUN0Qiw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGljLWJsb2cvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7YXBpU2xpY2V9IGZyb20gXCIuLi9fcmVkdXgvc2xpY2VzL2FwaVNsaWNlXCI7XG5pbXBvcnQge0FwaVByb3ZpZGVyfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9kaXN0L3F1ZXJ5L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGlQcm92aWRlciBhcGk9e2FwaVNsaWNlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BcGlQcm92aWRlcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiYXBpU2xpY2UiLCJBcGlQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit/dist/query/react":
/*!****************************************************!*\
  !*** external "@reduxjs/toolkit/dist/query/react" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/dist/query/react");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();