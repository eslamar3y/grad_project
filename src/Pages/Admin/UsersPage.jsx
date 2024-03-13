import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AdminSidebar from "../../components/adminSidebar";
import AdminNav from "../../components/adminNav";
import { useState } from "react";
import AddUser from "../../components/AddUser";
import RemoveUser from "../../components/RemoveUser";
import EditUsers from "../../components/EditUsers";

const UsersPage = () => {
  const users = [
    {
      id: Math.random() * 100,
      name: "john doe",
      position: "Expert",
      email: "john@gmail.com",
      phonenumber: "015545123545",
      status: "enabled",
    },
    {
      id: Math.random() * 100,
      name: "jane smith",
      position: "Expert",
      email: "jane@gmail.com",
      phonenumber: "015545123546",
      status: "disabled",
    },
    {
      id: Math.random() * 100,
      name: "alexander brown",
      position: "Expert",
      email: "alexander@gmail.com",
      phonenumber: "015545123547",
      status: "enabled",
    },
    {
      id: Math.random() * 100,
      name: "emma wilson",
      position: "Expert",
      email: "emma@gmail.com",
      phonenumber: "015545123548",
      status: "disabled",
    },
    {
      id: Math.random() * 100,
      name: "william johnson",
      position: "Expert",
      email: "william@gmail.com",
      phonenumber: "015545123549",
      status: "enabled",
    },
    {
      id: Math.random() * 100,
      name: "olivia davis",
      position: "Farm Owner",
      email: "olivia@gmail.com",
      phonenumber: "015545123550",
      status: "disabled",
    },
    {
      id: Math.random() * 100,
      name: "liam miller",
      position: "Farm Owner",
      email: "liam@gmail.com",
      phonenumber: "015545123551",
      status: "enabled",
    },
    {
      id: Math.random() * 100,
      name: "sophia wilson",
      position: "Farm Owner",
      email: "sophia@gmail.com",
      phonenumber: "015545123552",
      status: "enabled",
    },
    {
      id: Math.random() * 100,
      name: "noah thompson",
      position: "Farm Owner",
      email: "noah@gmail.com",
      phonenumber: "015545123553",
      status: "enabled",
    },
    {
      id: Math.random() * 100,
      name: "ava anderson",
      position: "Farm Owner",
      email: "ava@gmail.com",
      phonenumber: "015545123554",
      status: "enabled",
    },
  ];

  const [Users, setUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState([]);
  const [modalState, setModalState] = useState({
    showAdd: false,
    showEdit: false,
    showRemove: false,
  });
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function handleShowModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: true }));
  }
  function handleCloseAddModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: false }));
  }

  function handleShowEditModal(existUser) {
    setModalState((prevState) => ({ ...prevState, showEdit: true }));
    setSelectedUser(() => existUser.id);
  }
  function handleCloseEditModal() {
    setModalState((prevState) => ({ ...prevState, showEdit: false }));
  }

  function handleShowRemoveModal(existUser) {
    setModalState((prevState) => ({ ...prevState, showRemove: true }));
    // setSelectedUser(() => existUser.id);
    setSelectedUser([]);
    // make it append to the list
    setSelectedUser((prevSelectedUser) => [...prevSelectedUser, existUser.id]);
  }

  function handleCloseRemoveModal() {
    setModalState((prevState) => ({ ...prevState, showRemove: false }));
  }

  function handleAdd(theNewUser) {
    const newUser = theNewUser;
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function handleDelete(userId) {
    const newUsers = Users.filter((eq) => eq.id !== userId);
    setUsers(() => newUsers);
  }

  function getCheckedUserIds() {
    setModalState((prevState) => ({ ...prevState, showRemove: true }));

    const checkboxes = document.querySelectorAll('tr input[type="checkbox"]');
    setSelectedUser([]);
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        // checkedUserIds.push(checkbox.id);
        setSelectedUser((prevSelectedUser) => [
          ...prevSelectedUser,
          parseFloat(checkbox.id),
        ]);
      }
    });

    // return checkedUserIds;

    // console.log(selectedUser);
  }

  function handleEdit(userId, newValues) {
    const updatedUsers = Users.map((user) => {
      return user.id === userId ? { ...user, ...newValues } : user;
    });
    setUsers(() => updatedUsers);
  }

  // make handleDisabled
  function handleDisabled(user) {
    const updatedUsers = Users.map((u) => {
      return u.id === user.id ? { ...u, status: "Enabled" } : u;
    });
    setUsers(() => updatedUsers);
  }

  // make handleEnabled
  function handleEnabled(user) {
    const updatedUsers = Users.map((u) => {
      return u.id === user.id ? { ...u, status: "Disabled" } : u;
    });
    setUsers(() => updatedUsers);
  }

  // handle filter
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function searchUsers(query) {
    setSearchQuery(query);
  }

  function filteredUsers() {
    let filtered = Users;
    if (filter) {
      filtered = filtered.filter(
        (user) => user.position.toLowerCase() === filter.toLowerCase()
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }

  return (
    <>
      <AddUser
        onAdd={handleAdd}
        onClose={handleCloseAddModal}
        showAddModal={modalState.showAdd}
      />

      <div className="min-h-screen bg-gray-100 flex font-popins">
        <AdminSidebar />
        {/* Main content */}
        <main className="flex-1 p-4">
          <AdminNav
            searchQuery={searchQuery}
            handleSearchChange={searchUsers}
          />
          {/* Filter */}
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-medium text-gray-800">Filter By:</h2>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="filter"
              id="filter"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="expert">Expert</option>
              <option value="farm owner">Farm Owner</option>
            </select>
          </div>
          {/* Your main content here */}
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table headers */}
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <button
                      className="SignInButon text-xs font-semibold font-popins mx-auto w-24 h-18 text-white rounded-2xl p-2 mr-2"
                      onClick={handleShowModal}
                    >
                      add user
                    </button>
                    <MdDelete
                      className="inline mr-4 text-2xl text-black cursor-pointer "
                      // onClick={getCheckedUserIds}
                      onClick={() => getCheckedUserIds()}
                    />
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {filteredUsers().length > 0 ? (
                  filteredUsers().map((user) => {
                    return (
                      <tr key={user.id} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <input
                            type="checkbox"
                            name="select"
                            id={`${user.id}`}
                            className="mr-4 selection"
                          />
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.phonenumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.status === "Disabled" ||
                          user.status === "disabled" ? (
                            <button
                              className=" bg-[#DF9C9C] hover:bg-[#e27373] text-white font-bold py-2 w-28 rounded opacity-75"
                              onClick={() => handleDisabled(user)}
                            >
                              Disabled
                            </button>
                          ) : (
                            <button
                              className="bg-[#585EC7] hover:bg-indigo-700 text-white font-bold py-2 w-28 rounded"
                              onClick={() => handleEnabled(user)}
                            >
                              Enabled
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          <MdEdit
                            onClick={() => handleShowEditModal(user)}
                            className="inline mr-4 text-2xl text-black cursor-pointer ml-16"
                          />
                          <MdDelete
                            onClick={() => handleShowRemoveModal(user)}
                            className="inline mr-4 text-2xl text-black cursor-pointer"
                          />
                          {modalState.showEdit && (
                            <EditUsers
                              existUser={selectedUser}
                              onEdit={handleEdit}
                              onClose={handleCloseEditModal}
                              showEditModal={modalState.showEdit}
                            />
                          )}

                          {modalState.showRemove && (
                            <RemoveUser
                              selectedUser={selectedUser}
                              onRemove={handleDelete}
                              onClose={handleCloseRemoveModal}
                              showRemoveModal={modalState.showRemove}
                            />
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-extrabold text-center"
                    >
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default UsersPage;
