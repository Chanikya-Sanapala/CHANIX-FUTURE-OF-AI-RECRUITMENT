module.exports = [
"[project]/Desktop/Smart-Engine/frontend/.next-internal/server/app/(components)/Dashboard/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Smart-Engine/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Dashboard/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // app/dashboard/page.js
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
// import JobSeekerDashboard from "../../components/JobSeekerDashboard";
// import CompanyDashboard from "../../components/CompanyDashboard";
// import AdminDashboard from "../../components/AdminDashboard";
// export default function Dashboard() {
//   const [activeUser, setActiveUser] = useState("jobseeker");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   useEffect(() => {
//     // Check if user is logged in
//     const userData = localStorage.getItem("user");
//     const token = localStorage.getItem("token");
//     if (!userData || !token) {
//       router.push("/");
//       return;
//     }
//     setUser(JSON.parse(userData));
//     setLoading(false);
//   }, [router]);
//   const renderDashboard = () => {
//     switch (activeUser) {
//       case "jobseeker":
//         return <JobSeekerDashboard user={user} />;
//       case "company":
//         return <CompanyDashboard user={user} />;
//       case "admin":
//         return <AdminDashboard user={user} />;
//       default:
//         return <JobSeekerDashboard user={user} />;
//     }
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     router.push("/");
//   };
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header 
//         activeUser={activeUser} 
//         setActiveUser={setActiveUser}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         user={user}
//         onLogout={handleLogout}
//       />
//       <div className="flex">
//         <Sidebar 
//           activeUser={activeUser} 
//           sidebarOpen={sidebarOpen}
//         />
//         <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
//           <div className="p-6">
//             {renderDashboard()}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Dashboard/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Dashboard/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d734af59._.js.map