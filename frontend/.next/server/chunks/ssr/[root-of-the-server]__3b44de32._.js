module.exports = [
"[project]/Desktop/Smart-Engine/frontend/.next-internal/server/app/(components)/ResumeMatcher/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import React, { useState } from "react";
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
;
function ResumeMatcher() {
    const [jd, setJd] = useState(null);
    const [resume, setResume] = useState(null);
    const [result, setResult] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("jd", jd);
        formData.append("resume", resume);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/match-resume", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.data.success) {
                setResult(response.data.result);
            } else {
                setResult("Error: " + response.data.error);
            }
        } catch (err) {
            setResult("Error: " + err.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Resume Matcher"
            }, void 0, false, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        onChange: (e)=>setJd(e.target.files[0]),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        onChange: (e)=>setResume(e.target.files[0]),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "Match Resume"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                children: result
            }, void 0, false, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ResumeMatcher;
 // bootstrap version
 // import React, { useState } from "react";
 // import axios from "axios";
 // import { ProgressBar, Container, Row, Col, Card } from "react-bootstrap";
 // function ResumeMatcher() {
 //   const [jd, setJd] = useState(null);
 //   const [resume, setResume] = useState(null);
 //   const [result, setResult] = useState(null);
 //   const [loading, setLoading] = useState(false);
 //   const handleSubmit = async (e) => {
 //     e.preventDefault();
 //     if (!jd || !resume) return;
 //     setLoading(true);
 //     const formData = new FormData();
 //     formData.append("jd", jd);
 //     formData.append("resume", resume);
 //     try {
 //       const response = await axios.post(
 //         "http://localhost:5000/match-resume",
 //         formData,
 //         { headers: { "Content-Type": "multipart/form-data" } }
 //       );
 //       if (response.data.success) {
 //         setResult(response.data.result);
 //       } else {
 //         setResult({ error: response.data.error });
 //       }
 //     } catch (err) {
 //       setResult({ error: err.message });
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <Container className="mt-4">
 //       <h2>Resume Matcher</h2>
 //       <form onSubmit={handleSubmit} className="mb-3">
 //         <input
 //           type="file"
 //           onChange={(e) => setJd(e.target.files[0])}
 //           required
 //         />
 //         <input
 //           type="file"
 //           onChange={(e) => setResume(e.target.files[0])}
 //           required
 //         />
 //         <button type="submit" className="btn btn-primary ml-2">
 //           {loading ? "Matching..." : "Match Resume"}
 //         </button>
 //       </form>
 //       {result && result.error && (
 //         <p className="text-danger">Error: {result.error}</p>
 //       )}
 //       {result && !result.error && (
 //         <>
 //           <Card className="mb-3 p-3">
 //             <h4>Match Score</h4>
 //             <ProgressBar
 //               now={result.match_score}
 //               label={`${result.match_score}%`}
 //               variant={result.match_score > 80 ? "success" : "warning"}
 //             />
 //             <p>
 //               Coverage: {result.coverage}, TF-IDF: {result.tfidf}, Exact:{" "}
 //               {result.exact}
 //             </p>
 //           </Card>
 //           <Row>
 //             <Col md={6}>
 //               <Card className="mb-3 p-3">
 //                 <h5>Matched Terms ({result.matched_terms.length})</h5>
 //                 <ul>
 //                   {result.matched_terms.map((term, idx) => (
 //                     <li key={idx} style={{ color: "green" }}>
 //                       {term}
 //                     </li>
 //                   ))}
 //                 </ul>
 //               </Card>
 //             </Col>
 //             <Col md={6}>
 //               <Card className="mb-3 p-3">
 //                 <h5>Missing Terms ({result.missing_terms.length})</h5>
 //                 <ul>
 //                   {result.missing_terms.length > 0 ? (
 //                     result.missing_terms.map((term, idx) => (
 //                       <li key={idx} style={{ color: "red" }}>
 //                         {term}
 //                       </li>
 //                     ))
 //                   ) : (
 //                     <li style={{ color: "gray" }}>None missing ✅</li>
 //                   )}
 //                 </ul>
 //               </Card>
 //             </Col>
 //           </Row>
 //           <Card className="mb-3 p-3">
 //             <h5>Suggestions</h5>
 //             <ul>
 //               {result.suggestions.map((sug, idx) => (
 //                 <li key={idx}>{sug}</li>
 //               ))}
 //             </ul>
 //           </Card>
 //         </>
 //       )}
 //     </Container>
 //   );
 // }
 // export default ResumeMatcher;
 // tailwind version
 // import React, { useState } from "react";
 // import axios from "axios";
 // function ResumeMatcher() {
 //   const [jd, setJd] = useState(null);
 //   const [resume, setResume] = useState(null);
 //   const [result, setResult] = useState(null);
 //   const [loading, setLoading] = useState(false);
 //   const handleSubmit = async (e) => {
 //     e.preventDefault();
 //     if (!jd || !resume) return;
 //     setLoading(true);
 //     const formData = new FormData();
 //     formData.append("jd", jd);
 //     formData.append("resume", resume);
 //     try {
 //       const response = await axios.post(
 //         "http://localhost:5000/match-resume",
 //         formData,
 //         { headers: { "Content-Type": "multipart/form-data" } }
 //       );
 //       if (response.data.success) {
 //         setResult(response.data.result);
 //       } else {
 //         setResult({ error: response.data.error });
 //       }
 //     } catch (err) {
 //       setResult({ error: err.message });
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <div className="max-w-4xl mx-auto p-6">
 //       <h2 className="text-3xl font-bold mb-4 text-center">Resume Matcher</h2>
 //       <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
 //         <input
 //           type="file"
 //           onChange={(e) => setJd(e.target.files[0])}
 //           className="border p-2 rounded w-full md:w-1/2"
 //           required
 //         />
 //         <input
 //           type="file"
 //           onChange={(e) => setResume(e.target.files[0])}
 //           className="border p-2 rounded w-full md:w-1/2"
 //           required
 //         />
 //         <button
 //           type="submit"
 //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
 //         >
 //           {loading ? "Matching..." : "Match Resume"}
 //         </button>
 //       </form>
 //       {result && result.error && (
 //         <p className="text-red-600 font-semibold">{result.error}</p>
 //       )}
 //       {result && !result.error && (
 //         <>
 //           {/* Match Score */}
 //           <div className="bg-white shadow rounded p-4 mb-6">
 //             <h4 className="text-xl font-semibold mb-2">Match Score</h4>
 //             <div className="w-full bg-gray-200 rounded h-6 mb-2">
 //               <div
 //                 className={`h-6 rounded ${
 //                   result.match_score > 80 ? "bg-green-500" : "bg-yellow-500"
 //                 }`}
 //                 style={{ width: `${result.match_score}%` }}
 //               ></div>
 //             </div>
 //             <p className="text-gray-700">
 //               Coverage: {result.coverage}, TF-IDF: {result.tfidf}, Exact: {result.exact}
 //             </p>
 //           </div>
 //           {/* Matched & Missing Terms */}
 //           <div className="grid md:grid-cols-2 gap-4 mb-6">
 //             <div className="bg-white shadow rounded p-4">
 //               <h5 className="font-semibold mb-2">Matched Terms ({result.matched_terms.length})</h5>
 //               <ul className="list-disc list-inside text-green-600 max-h-64 overflow-auto">
 //                 {result.matched_terms.map((term, idx) => (
 //                   <li key={idx}>{term}</li>
 //                 ))}
 //               </ul>
 //             </div>
 //             <div className="bg-white shadow rounded p-4">
 //               <h5 className="font-semibold mb-2">Missing Terms ({result.missing_terms.length})</h5>
 //               <ul className="list-disc list-inside text-red-600 max-h-64 overflow-auto">
 //                 {result.missing_terms.length > 0 ? (
 //                   result.missing_terms.map((term, idx) => <li key={idx}>{term}</li>)
 //                 ) : (
 //                   <li className="text-gray-700">None missing ✅</li>
 //                 )}
 //               </ul>
 //             </div>
 //           </div>
 //           {/* Suggestions */}
 //           <div className="bg-white shadow rounded p-4">
 //             <h5 className="font-semibold mb-2">Suggestions</h5>
 //             <ul className="list-disc list-inside text-gray-800">
 //               {result.suggestions.map((sug, idx) => (
 //                 <li key={idx}>{sug}</li>
 //               ))}
 //             </ul>
 //           </div>
 //         </>
 //       )}
 //     </div>
 //   );
 // }
 // export default ResumeMatcher;
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b44de32._.js.map