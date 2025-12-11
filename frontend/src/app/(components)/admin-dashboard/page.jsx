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