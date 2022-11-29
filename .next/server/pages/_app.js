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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiSlice\": () => (/* binding */ apiSlice),\n/* harmony export */   \"useGetCommentsByPostIdQuery\": () => (/* binding */ useGetCommentsByPostIdQuery),\n/* harmony export */   \"useGetCommentsQuery\": () => (/* binding */ useGetCommentsQuery),\n/* harmony export */   \"useGetPostQuery\": () => (/* binding */ useGetPostQuery),\n/* harmony export */   \"useGetPostsQuery\": () => (/* binding */ useGetPostsQuery),\n/* harmony export */   \"useGetUserQuery\": () => (/* binding */ useGetUserQuery),\n/* harmony export */   \"useGetUsersQuery\": () => (/* binding */ useGetUsersQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"apiSlice\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://jsonplaceholder.typicode.com\"\n    }),\n    endpoints: (builder)=>({\n            getPosts: builder.query({\n                query: ()=>`/posts`\n            }),\n            getPost: builder.query({\n                query: (id)=>`/posts?id=${id}`\n            }),\n            getComments: builder.query({\n                query: ()=>`/comments`\n            }),\n            getCommentsByPostId: builder.query({\n                query: (postId)=>`/comments?postId=${postId}`\n            }),\n            getUsers: builder.query({\n                query: ()=>`/users`\n            }),\n            getUser: builder.query({\n                query: (userId)=>`/users?id=${userId}`\n            })\n        })\n});\nconst { useGetPostsQuery , useGetPostQuery , useGetCommentsQuery , useGetCommentsByPostIdQuery , useGetUsersQuery , useGetUserQuery  } = apiSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fcmVkdXgvc2xpY2VzL2FwaVNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUVoRSxNQUFNRSxXQUFXRix1RUFBU0EsQ0FBQztJQUM5QkcsYUFBYTtJQUNiQyxXQUFXSCw0RUFBY0EsQ0FBQztRQUFDSSxTQUFTO0lBQXNDO0lBQzFFQyxXQUFXLENBQUNDLFVBQWE7WUFDckJDLFVBQVVELFFBQVFFLEtBQUssQ0FBWTtnQkFDL0JBLE9BQU8sSUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN6QjtZQUNBQyxTQUFTSCxRQUFRRSxLQUFLLENBQWM7Z0JBQ2hDQSxPQUFPLENBQUNFLEtBQU8sQ0FBQyxVQUFVLEVBQUVBLEdBQUcsQ0FBQztZQUNwQztZQUNBQyxhQUFhTCxRQUFRRSxLQUFLLENBQVk7Z0JBQ2xDQSxPQUFPLElBQU0sQ0FBQyxTQUFTLENBQUM7WUFDNUI7WUFDQUkscUJBQXFCTixRQUFRRSxLQUFLLENBQWM7Z0JBQzVDQSxPQUFPLENBQUNLLFNBQVcsQ0FBQyxpQkFBaUIsRUFBRUEsT0FBTyxDQUFDO1lBQ25EO1lBQ0FDLFVBQVVSLFFBQVFFLEtBQUssQ0FBWTtnQkFDL0JBLE9BQU8sSUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN6QjtZQUNBTyxTQUFTVCxRQUFRRSxLQUFLLENBQWM7Z0JBQ2hDQSxPQUFPLENBQUNRLFNBQVcsQ0FBQyxVQUFVLEVBQUVBLE9BQU8sQ0FBQztZQUM1QztRQUNKO0FBQ0osR0FBRztBQUVJLE1BQU0sRUFBQ0MsaUJBQWdCLEVBQUVDLGdCQUFlLEVBQUVDLG9CQUFtQixFQUFFQyw0QkFBMkIsRUFBRUMsaUJBQWdCLEVBQUVDLGdCQUFlLEVBQUMsR0FBR3JCLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0aWMtYmxvZy8uL19yZWR1eC9zbGljZXMvYXBpU2xpY2UudHM/NTU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpU2xpY2UgPSBjcmVhdGVBcGkoe1xyXG4gICAgcmVkdWNlclBhdGg6IFwiYXBpU2xpY2VcIixcclxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe2Jhc2VVcmw6IFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tXCJ9KSxcclxuICAgIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICAgICAgZ2V0UG9zdHM6IGJ1aWxkZXIucXVlcnk8YW55LCB2b2lkPih7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiBgL3Bvc3RzYCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBnZXRQb3N0OiBidWlsZGVyLnF1ZXJ5PGFueSwgbnVtYmVyPih7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiAoaWQpID0+IGAvcG9zdHM/aWQ9JHtpZH1gLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdldENvbW1lbnRzOiBidWlsZGVyLnF1ZXJ5PGFueSwgdm9pZD4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gYC9jb21tZW50c2AsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ2V0Q29tbWVudHNCeVBvc3RJZDogYnVpbGRlci5xdWVyeTxhbnksIG51bWJlcj4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKHBvc3RJZCkgPT4gYC9jb21tZW50cz9wb3N0SWQ9JHtwb3N0SWR9YCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBnZXRVc2VyczogYnVpbGRlci5xdWVyeTxhbnksIHZvaWQ+KHtcclxuICAgICAgICAgICAgcXVlcnk6ICgpID0+IGAvdXNlcnNgLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdldFVzZXI6IGJ1aWxkZXIucXVlcnk8YW55LCBudW1iZXI+KHtcclxuICAgICAgICAgICAgcXVlcnk6ICh1c2VySWQpID0+IGAvdXNlcnM/aWQ9JHt1c2VySWR9YCxcclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHt1c2VHZXRQb3N0c1F1ZXJ5LCB1c2VHZXRQb3N0UXVlcnksIHVzZUdldENvbW1lbnRzUXVlcnksIHVzZUdldENvbW1lbnRzQnlQb3N0SWRRdWVyeSwgdXNlR2V0VXNlcnNRdWVyeSwgdXNlR2V0VXNlclF1ZXJ5fSA9IGFwaVNsaWNlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJhcGlTbGljZSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRQb3N0cyIsInF1ZXJ5IiwiZ2V0UG9zdCIsImlkIiwiZ2V0Q29tbWVudHMiLCJnZXRDb21tZW50c0J5UG9zdElkIiwicG9zdElkIiwiZ2V0VXNlcnMiLCJnZXRVc2VyIiwidXNlcklkIiwidXNlR2V0UG9zdHNRdWVyeSIsInVzZUdldFBvc3RRdWVyeSIsInVzZUdldENvbW1lbnRzUXVlcnkiLCJ1c2VHZXRDb21tZW50c0J5UG9zdElkUXVlcnkiLCJ1c2VHZXRVc2Vyc1F1ZXJ5IiwidXNlR2V0VXNlclF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_redux/slices/apiSlice.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_redux/slices/apiSlice */ \"./_redux/slices/apiSlice.ts\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit/dist/query/react */ \"@reduxjs/toolkit/dist/query/react\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_3__.ApiProvider, {\n        api: _redux_slices_apiSlice__WEBPACK_IMPORTED_MODULE_2__.apiSlice,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\softic-blog\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\softic-blog\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRXFCO0FBQ1c7QUFFL0MsU0FBU0UsSUFBSSxFQUFDQyxVQUFTLEVBQUVDLFVBQVMsRUFBVyxFQUFFO0lBQzFELHFCQUNJLDhEQUFDSCwwRUFBV0E7UUFBQ0ksS0FBS0wsNERBQVFBO2tCQUN0Qiw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGljLWJsb2cvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7QXBwUHJvcHN9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQge2FwaVNsaWNlfSBmcm9tIFwiLi4vX3JlZHV4L3NsaWNlcy9hcGlTbGljZVwiO1xyXG5pbXBvcnQge0FwaVByb3ZpZGVyfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9kaXN0L3F1ZXJ5L3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwaVByb3ZpZGVyIGFwaT17YXBpU2xpY2V9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BcGlQcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiYXBpU2xpY2UiLCJBcGlQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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