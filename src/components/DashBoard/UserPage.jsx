// import Sidebar from "./Sidebar";

// const UserPage = () => {
//   return (
//     <div className="flex">
//       <Sidebar/>
//       <div className="p-8">
//       <h2 className="text-2xl mb-4">Users</h2>

      
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by username, name, email..."
//           className="p-2 border border-gray-300 rounded w-full dark:bg-gray-800 dark:text-white"
//         />
//       </div>

      
//       <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
//         <table className="w-full table-auto">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left">Username</th>
//               <th className="py-2 px-4 border-b text-left">First Name</th>
//               <th className="py-2 px-4 border-b text-left">Last Name</th>
//               <th className="py-2 px-4 border-b text-left">Email</th>
//               <th className="py-2 px-4 border-b text-left">Phone Number</th>
//             </tr>
//           </thead>
//           <tbody>
            
//             <tr>
//               <td className="py-2 px-4 border-b">johndoe</td>
//               <td className="py-2 px-4 border-b">John</td>
//               <td className="py-2 px-4 border-b">Doe</td>
//               <td className="py-2 px-4 border-b">johndoe@example.com</td>
//               <td className="py-2 px-4 border-b">(123) 456-7890</td>
//             </tr>
//             <tr>
//               <td className="py-2 px-4 border-b">janedoe</td>
//               <td className="py-2 px-4 border-b">Jane</td>
//               <td className="py-2 px-4 border-b">Doe</td>
//               <td className="py-2 px-4 border-b">janedoe@example.com</td>
//               <td className="py-2 px-4 border-b">(234) 567-8901</td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default UserPage;



// import Sidebar from "./Sidebar";

// const UserPage = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
//         {/* Header */}
//         <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Users</h2>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search by username, name, email..."
//             className="p-3 border border-gray-300 rounded w-full dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* User Table */}
//         <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
//           <table className="w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Username</th>
//                 <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</th>
//                 <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</th>
//                 <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
//                 <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-3 px-4 border-b text-sm">johndoe</td>
//                 <td className="py-3 px-4 border-b text-sm">John</td>
//                 <td className="py-3 px-4 border-b text-sm">Doe</td>
//                 <td className="py-3 px-4 border-b text-sm">johndoe@example.com</td>
//                 <td className="py-3 px-4 border-b text-sm">(123) 456-7890</td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-4 border-b text-sm">janedoe</td>
//                 <td className="py-3 px-4 border-b text-sm">Jane</td>
//                 <td className="py-3 px-4 border-b text-sm">Doe</td>
//                 <td className="py-3 px-4 border-b text-sm">janedoe@example.com</td>
//                 <td className="py-3 px-4 border-b text-sm">(234) 567-8901</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPage;



// import Sidebar from "./Sidebar";

// const UserPage = () => {
//   return (
//     <div className="flex min-h-screen">
      
//       <div className="fixed inset-y-0 left-0">
//         <Sidebar />
//       </div>

      
//       <div className="flex-1 ml-64 min-w-0">
//         <div className="p-8 bg-gray-50 dark:bg-gray-900">
          
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Users</h2>

          
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Search by username, name, email..."
//               className="p-3 border border-gray-300 rounded w-full dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

          
//           <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
//             <table className="w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Username</th>
//                   <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</th>
//                   <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</th>
//                   <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
//                   <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
//                   <td className="py-3 px-4 border-b text-sm">johndoe</td>
//                   <td className="py-3 px-4 border-b text-sm">John</td>
//                   <td className="py-3 px-4 border-b text-sm">Doe</td>
//                   <td className="py-3 px-4 border-b text-sm">johndoe@example.com</td>
//                   <td className="py-3 px-4 border-b text-sm">(123) 456-7890</td>
//                 </tr>
//                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
//                   <td className="py-3 px-4 border-b text-sm">janedoe</td>
//                   <td className="py-3 px-4 border-b text-sm">Jane</td>
//                   <td className="py-3 px-4 border-b text-sm">Doe</td>
//                   <td className="py-3 px-4 border-b text-sm">janedoe@example.com</td>
//                   <td className="py-3 px-4 border-b text-sm">(234) 567-8901</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPage;


import Sidebar from "./Sidebar";

const UserPage = () => {
  return (
    <div className="flex min-h-screen">
      
      <div className="fixed inset-y-0 left-0 z-30">
        <Sidebar />
      </div>

      
      <div className="flex-1 ml-16 md:ml-64 min-w-0">
        <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-6">Users</h2>

          
          <div className="mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Search users..."
              className="p-2 md:p-3 border border-gray-300 rounded w-full dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            
            <div className="overflow-x-auto">
              <table className="w-full table-auto min-w-[800px]">
                <thead className="bg-blue-400 text-white">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">Username</th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 border-b text-xs md:text-sm">michou</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Michelle</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Obama</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">michou@example.com</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">+250783168747</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 border-b text-xs md:text-sm">dave</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">David</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Ayite</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">dave@example.com</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">+250783168747</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;