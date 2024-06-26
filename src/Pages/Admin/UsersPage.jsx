import {
  // MdEdit,
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import AdminSidebar from "../../components/adminSidebar";
import AdminNav from "../../components/adminNav";
import { useEffect, useState } from "react";
import AddUser from "../../components/AddUser";
import RemoveUser from "../../components/RemoveUser";
// import EditUsers from "../../components/EditUsers";
import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const UsersPage = () => {
  const [Users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  const [isLoading, setIsLoading] = useState(true); // New state for loading indicator

  const [modalState, setModalState] = useState({
    showAdd: false,
    showEdit: false,
    showRemove: false,
  });
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [ResearchQuery, setReSearchQuery] = useState(false);
  const [enabledisableAccount, setEnabledisableAccount] = useState(false);
  const [handleDeleteToggle, setHandleDeleteToggle] = useState(false);
  const [handleAd, setHandleAd] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [CertificateImg, SetCertificateImg] = useState("");

  useEffect(() => {
    fetch("https://localhost:7289/api/Accounts?PageSize=50")
      .then((response) => {
        // console.log(response.headers);
        return response.json();
      })
      .then((data) => {
        setIsLoading(false); // Data fetched, set isLoading to false
        setUsers(data);
      });
  }, [enabledisableAccount, handleDeleteToggle, ResearchQuery, handleAd]);

  function handleShowModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: true }));
  }
  function handleCloseAddModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: false }));
  }

  function handleShowRemoveModal(id) {
    setModalState((prevState) => ({ ...prevState, showRemove: true }));
    setSelectedUser([id]);
  }

  function getCheckedUserIds() {
    const checkboxes = document.querySelectorAll('tr input[type="checkbox"]');
    const selectedIds = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedIds.push(checkbox.id);
      }
    });
    if (selectedIds.length > 0) {
      setModalState((prevState) => ({ ...prevState, showRemove: true }));
      setSelectedUser(selectedIds);
    }
    // console.log(selectedIds.length);
  }

  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);

  function handleCloseRemoveModal() {
    setModalState((prevState) => ({ ...prevState, showRemove: false }));
  }

  function handleAdd() {
    setHandleAd(true);
  }

  function handleDelete() {
    setHandleDeleteToggle(!handleDeleteToggle);
  }

  // make handleEnabled
  function EnableAndDisableAccount(id) {
    fetch(`https://localhost:7289/api/Accounts/EnableAndDisableAccount`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    }).then((response) => {
      // console.log(JSON.stringify([id])
      // console.log(response);
      setEnabledisableAccount(!enabledisableAccount);
      return response.json();
    });
  }

  // handle filter
  function handleFilterChange(event) {
    const newFilter = event.target.value;
    setFilter(newFilter); // Update filter state first

    // Fetch data based on the updated filter state
    if (newFilter !== "all") {
      fetch(
        `https://localhost:7289/api/Accounts?Discriminator=${newFilter}&PageSize=50`
      )
        .then((response) => response.json())
        .then((data) => {
          setUsers(data); // Update users state with fetched data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      fetch(`https://localhost:7289/api/Accounts?PageSize=50`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data); // Update users state with fetched data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }

  function searchUsers(query) {
    if (typeof query !== "string") {
      setUsers(query);
    }
    if (query === "") {
      setReSearchQuery(!ResearchQuery);
    }
  }

  const handleRowClick = (userId) => {
    if (selectedUserId === userId) {
      setSelectedUserId(null); // Close details if already open
    } else {
      setSelectedUserId(userId); // Open details for clicked user
      // if the user Doctor console.log(doc)
      // if the user FarmOwner console.log(farm)
      // if the user Admin console.log(admin)
      const selectedUser = Users.find((user) => user.id === userId);
      // setSelectedUserData(selectedUser);
      if (selectedUser.discriminator === "Doctor") {
        setSelectedUserType("Doctor");
        // Fetch data for the selected user
        fetch(`https://localhost:7289/api/Accounts/doctor/${userId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((userData) => {
            // Update state with fetched user data
            SetCertificateImg(userData.certificate);
            console.log(userData);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else if (selectedUser.discriminator === "FarmOwner") {
        setSelectedUserType("FarmOwner");
        // Fetch data for the selected user
        fetch(`https://localhost:7289/api/${userId}/Detects/generateReportData`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((userData) => {
            // Update state with fetched user data
            setSelectedUserData(userData);
            console.log(userData);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      }
    }
  };

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
              <option value="all">All</option>
              <option value="admin">Admin</option>
              <option value="Doctor">Specialist</option>
              <option value="farmOwner">Farm Owner</option>
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
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider "
                  >
                    Details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                    {modalState.showRemove && (
                      <RemoveUser
                        selectedUser={selectedUser}
                        onRemove={handleDelete}
                        onClose={handleCloseRemoveModal}
                        showRemoveModal={modalState.showRemove}
                      />
                    )}
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {isLoading ? ( // Check if data is loading
                  <tr>
                    <td colSpan="7">
                      <LoadingSpinner />
                    </td>
                  </tr>
                ) : Users.length > 0 ? (
                  Users.map((user) => {
                    return (
                      <React.Fragment key={user.id}>
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                            <input
                              type="checkbox"
                              name="select"
                              id={`${user.id}`}
                              className="mr-4 selection"
                            />
                            {user.userName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {user.discriminator}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {user.email ? user.email : "Null"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {user.phoneNumber ? user.phoneNumber : "Null"}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {user.disabled === true ? (
                              <button
                                className=" bg-[#DF9C9C] hover:bg-[#e27373] text-white font-bold py-2 w-28 rounded opacity-75"
                                onClick={() => EnableAndDisableAccount(user.id)}
                              >
                                Disabled
                              </button>
                            ) : (
                              <button
                                className="bg-secondColor hover:bg-[#02717c] text-white font-bold py-2 w-28 rounded"
                                onClick={() => EnableAndDisableAccount(user.id)}
                              >
                                Enabled
                              </button>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {user.discriminator === "FarmOwner" ||
                            user.discriminator === "Doctor" ? (
                              <button
                                onClick={() => handleRowClick(user.id)}
                                className="focus:outline-none"
                              >
                                {selectedUserId === user.id ? (
                                  <MdKeyboardArrowUp />
                                ) : (
                                  <MdKeyboardArrowDown />
                                )}
                              </button>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {/* <MdEdit
                              onClick={() => handleShowEditModal(user)}
                              className="inline mr-4 text-2xl text-black cursor-pointer ml-16"
                            /> */}
                            <MdDelete
                              onClick={() => handleShowRemoveModal(user.id)}
                              className="inline mr-4 text-2xl text-black cursor-pointer"
                            />
                            {/* {modalState.showEdit && (
                              <EditUsers
                                existUser={selectedUser}
                                onEdit={handleEdit}
                                onClose={handleCloseEditModal}
                                showEditModal={modalState.showEdit}
                              />
                            )} */}

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
                        {selectedUserId === user.id &&
                          selectedUserData &&
                          selectedUserType === "FarmOwner" && (
                            <tr>
                              <td
                                colSpan="7"
                                className={`text-center details-cell ${
                                  selectedUserId === user.id ? "open" : ""
                                }`}
                                style={{ transition: "all 2s ease" }}
                              >
                                <div className="flex px-3 mx-3 shadow-xl rounded-lg mb-10">
                                  <div className="w-full text-left leading-10 flex flex-row">
                                    {/* User details component for {user.name} */}
                                    <div>
                                      <div className="DetectionNumber text-gray-500">
                                        <span className="text-black">
                                          Number of Detections:{" "}
                                        </span>
                                        {selectedUserData.numberOfDetections}
                                      </div>
                                      <div className="text-gray-500">
                                        <span className="text-black">
                                          Last Detection:{" "}
                                        </span>
                                        {selectedUserData.lastDetection}
                                      </div>
                                      <div className="text-gray-500">
                                        <span className="text-black">
                                          Most Common Disease:{" "}
                                        </span>
                                        {selectedUserData.mostCommonDisease
                                          ? selectedUserData.mostCommonDisease
                                          : "No disease detected"}
                                      </div>
                                      <div className="text-gray-500">
                                        <span className="text-black">
                                          Other Diseases Appeared:{" "}
                                        </span>
                                        {selectedUserData.otherDiseaseApperred
                                          ? selectedUserData.otherDiseaseApperred.join(
                                              ", "
                                            )
                                          : "No disease detected"}
                                      </div>
                                    </div>
                                    <div className="ml-96">
                                      <h2>Detection History:</h2>

                                      {selectedUserData.detectionHistory
                                        ? selectedUserData.detectionHistory.map(
                                            (historyItem) => (
                                              <div key={historyItem.date}>
                                                <span className="text-gray-300">
                                                  {
                                                    historyItem.dateTime.split(
                                                      "."
                                                    )[0]
                                                  }
                                                </span>{" "}
                                                -{" "}
                                                {
                                                  historyItem.nameOfDisFromAIModel
                                                }
                                              </div>
                                            )
                                          )
                                        : "No data found"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        {selectedUserId === user.id &&
                          selectedUserData &&
                          selectedUserType === "Doctor" && (
                            <tr>
                              <td
                                colSpan="7"
                                className={`text-center details-cell ${
                                  selectedUserId === user.id ? "open" : ""
                                }`}
                                style={{ transition: "all 2s ease" }}
                              >
                                <div className="flex px-3 mx-3 shadow-xl rounded-lg mb-10">
                                  <div className="w-full text-left leading-10 flex flex-row">
                                    {/* User details component for {user.name} */}
                                    <div className="w-full flex justify-around items-center pt-16 pb-16">
                                      Certificate:
                                      <img
                                        src={CertificateImg}
                                        alt=""
                                        className="w-72 rounded"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                      </React.Fragment>
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
