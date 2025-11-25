module.exports = [
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/ResumeMatcher/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

 // import React, { useState } from "react";
 // import axios from "axios";
 // function ResumeMatcher() {
 //   const [jd, setJd] = useState(null);
 //   const [resume, setResume] = useState(null);
 //   const [result, setResult] = useState("");
 //   const handleSubmit = async (e) => {
 //     e.preventDefault();
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
 //         setResult("Error: " + response.data.error);
 //       }
 //     } catch (err) {
 //       setResult("Error: " + err.message);
 //     }
 //   };
 //   return (
 //     <div>
 //       <h1>Resume Matcher</h1>
 //       <form onSubmit={handleSubmit}>
 //         <input type="file" onChange={(e) => setJd(e.target.files[0])} required />
 //         <input type="file" onChange={(e) => setResume(e.target.files[0])} required />
 //         <button type="submit">Match Resume</button>
 //       </form>
 //       <pre>{result}</pre>
 //     </div>
 //   );
 // }
 // export default ResumeMatcher;
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
];

//# sourceMappingURL=3d860_Smart-Engine_frontend_src_app_%28components%29_ResumeMatcher_page_jsx_288f00a5._.js.map