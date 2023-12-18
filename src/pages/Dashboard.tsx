import { useState } from "react";
import { useGetUsersDataQuery } from "../redux/features/auth/authApi";
import { UserDataType } from "../types";

const Dashboard = () => {
  //eslint-disable-next-line
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);

  query["page"] = page;
  const { data } = useGetUsersDataQuery({ ...query });

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="max-w-7xl mx-auto relative overflow-x-auto  sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row my-8">
        <h2 className="text-[#101828] font-medium text-2xl">Users</h2>
        <div className="flex items-center justify-between gap-6">
          <button className="px-4 py-2 border-[#34405450] border rounded-lg text-[14px]">
            <img
              className="inline-block mr-2"
              src="assets/dashboard/upload-cloud.png"
              alt=""
            />
            Import
          </button>
          <button className="px-4 py-2 bg-[#7F56D9] text-white border rounded-lg text-[14px]">
            <img
              className="inline-block mr-2"
              src="assets/dashboard/plus.png"
              alt=""
            />
            Add User
          </button>
        </div>
      </div>
      <table
        style={{
          border: "1px solid var(--Gray-200, #EAECF0)",
          borderBottom: "none",
          boxShadow:
            "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        }}
        className="w-full text-sm rounded-lg rounded-b-none"
      >
        <thead className="text-xs rounded-t-lg text-gray-500 text-left bg-gray-50 ">
          <tr>
            <th className="p-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th className="px-6 py-3">User Info</th>
            <th className="px-6 py-3">About</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((user: UserDataType, index: number) => (
            <tr key={index}>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2  "
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.avatar}
                  alt="Avatar"
                />
                <div className="ps-3">
                  <p className="text-base font-semibold text-left">
                    {user.first_name} {user.last_name}
                  </p>
                  <div className="font-normal text-gray-500">{user.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <p className="text-base font-semibold text-left">
                  Some Dummy Text
                </p>
                <div className="font-normal text-gray-500">
                  Brings all your news into one place
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="">
                  <span className="px-2 py-1 text-xs font-semibold text-green-600 bg-green-200 rounded-full">
                    Active
                  </span>
                </p>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-6">
                  <img src="assets/dashboard/trash-2.png" alt="trash" />
                  <img src="assets/dashboard/edit-2.png" alt="trash" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-gray-50 w-full text-gray-700 flex items-center justify-between py-3 px-6 border rounded-b-lg">
        <button
          className="px-4 py-2 border-[#34405450] border rounded-lg text-[14px]"
          onClick={() => handlePreviousPage()}
        >
          Previous
        </button>
        <p className="text-[14px]">
          Page {data?.page} of {data?.total_pages}
        </p>
        <button
          className="px-4 py-2 border-[#34405450] border rounded-lg text-[14px]"
          disabled={data?.page === data?.total_pages}
          onClick={() => handleNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
