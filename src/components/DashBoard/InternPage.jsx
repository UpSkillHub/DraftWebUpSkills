import Sidebar from "./Sidebar";

const InternPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="fixed inset-y-0 left-0 z-30">
        <Sidebar />
      </div>

      <div className="flex-1 ml-16 md:ml-64 min-w-0">
        <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-6">
            Interns Information
          </h2>

          <div className="mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Search interns..."
              className="p-2 md:p-3 border border-gray-300 rounded w-full dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full table-auto min-w-[800px]">
                <thead className="bg-blue-400 text-white">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Username
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      First Name
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Last Name
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Role/Position
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Supervisor
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Start Date
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      End Date
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Status
                    </th>
                    <th className="py-3 px-4 border-b text-left text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Contact Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 border-b text-xs md:text-sm">nivek</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Kevin</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Ayite</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Software Intern</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Alice Smith</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">2024-06-01</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">2024-08-31</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Active</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">kevin@example.com</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Lea Ayite</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">David</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Eklou</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">UI/UX Intern</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Bob Johnson</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">2024-07-01</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">2024-09-30</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">Pending</td>
                    <td className="py-2 px-4 border-b text-xs md:text-sm">lea@example.com</td>
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

export default InternPage;
