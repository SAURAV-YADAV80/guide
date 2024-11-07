import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Academics from './Pages/Academics';
import Resume from './Pages/Resume';
import Storage from './Pages/Storage';
import DailyTodo from './Pages/DailyTodo';
import LongTermTodo from './Pages/LongTermTodo';
import Events from './Pages/Events';
import AcademicDiary from './Pages/AcademicDiary';
import PersonalDiary from './Pages/PersonalDiary';
import Todo from './Pages/Todo';
import Diary from './Pages/Diary';
import Error404 from './Pages/Error404';
import Profile from './Pages/Profile';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

// const App: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Overlay for mobile when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800/50 z-20 md:hidden transition-opacity duration-200 ease-in-out"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex min-h-screen">
//         {/* Sidebar */}
//         <div
//           className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
//             sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } md:translate-x-0`}
//         >
//           <Sidebar />
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1">
//           {/* Navbar with menu button */}
//           <div className="sticky top-0 z-10">
//             <div className="absolute left-4 top-4 md:hidden z-50">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-lg bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
//               >
//                 <svg
//                   className="w-6 h-6 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   {sidebarOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//             <Navbar />
//           </div>

//           {/* Main Content */}
//           <main className="p-6">
//             <Routes>
//               <Route index element={<Dashboard />} />
//               <Route path="/academics" element={<Academics />} />
//               <Route path="/resume" element={<Resume />} />
//               <Route path="/storage" element={<Storage />} />
//               <Route path="/todo" element={<Todo />} />
//               <Route path="/todo/daily" element={<DailyTodo />} />
//               <Route path="/todo/longterm" element={<LongTermTodo />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/diary" element={<Diary />} />
//               <Route path="/diary/academic" element={<AcademicDiary />} />
//               <Route path="/diary/personal" element={<PersonalDiary />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/forgotPassword" element={<ForgotPassword />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="*" element={<Error404 />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Persistent Navbar */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-800/50 z-30 md:hidden transition-opacity duration-200 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex pt-16"> {/* Add padding-top to account for fixed navbar */}
        {/* Sidebar */}
        <div
          className={`fixed md:sticky top-16 h-[calc(100vh-4rem)] z-40 w-64 transform transition-transform duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <Sidebar />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-3 left-4 z-50 md:hidden p-2 rounded-lg bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Main Content */}
        <div className="flex-1 min-h-screen transition-all duration-200">
          <main className="p-6">
          <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/storage" element={<Storage />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/todo/daily" element={<DailyTodo />} />
              <Route path="/todo/longterm" element={<LongTermTodo />} />
              <Route path="/events" element={<Events />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/diary/academic" element={<AcademicDiary />} />
              <Route path="/diary/personal" element={<PersonalDiary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;