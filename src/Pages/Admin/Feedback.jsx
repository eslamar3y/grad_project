// import { MdDelete } from "react-icons/md";
// import AdminSidebar from "../../components/adminSidebar";
// import AdminNav from "../../components/adminNav";
// import { useState } from "react";
// // import AddUser from "../../components/AddUser";
// import RemoveFeedback from "../../components/RemoveFeedback";
// // import EditUsers from "../../components/EditUsers";

// const FeedbacksPage = () => {
//   const feedbacks = [
//     {
//       id: Math.random() * 100,
//       name: "jane doe",
//       email: "jane@gmail.com",
//       phonenumber: "015545123546",
//       messgae: "you made an amazing website",
//     },
//     {
//       id: Math.random() * 100,
//       name: "alex smith",
//       email: "alex@gmail.com",
//       phonenumber: "015545123547",
//       messgae: "great work on the project",
//     },
//     {
//       id: Math.random() * 100,
//       name: "sarah johnson",
//       email: "sarah@gmail.com",
//       phonenumber: "015545123548",
//       messgae: "excellent job, keep it up",
//     },
//     {
//       id: Math.random() * 100,
//       name: "michael brown",
//       email: "michael@gmail.com",
//       phonenumber: "015545123549",
//       messgae: "very satisfied with the website",
//     },
//     {
//       id: Math.random() * 100,
//       name: "emily wilson",
//       email: "emily@gmail.com",
//       phonenumber: "015545123550",
//       messgae: "thank you for your hard work",
//     },
//     {
//       id: Math.random() * 100,
//       name: "david thompson",
//       email: "david@gmail.com",
//       phonenumber: "015545123551",
//       messgae: "impressed with the website design",
//     },
//     {
//       id: Math.random() * 100,
//       name: "olivia jones",
//       email: "olivia@gmail.com",
//       phonenumber: "015545123552",
//       messgae: "easy to navigate and user-friendly",
//     },
//     {
//       id: Math.random() * 100,
//       name: "william davis",
//       email: "william@gmail.com",
//       phonenumber: "015545123553",
//       messgae: "highly recommend your services",
//     },
//     {
//       id: Math.random() * 100,
//       name: "ava miller",
//       email: "ava@gmail.com",
//       phonenumber: "015545123554",
//       messgae: "great customer support",
//     },
//     {
//       id: Math.random() * 100,
//       name: "james wilson",
//       email: "james@gmail.com",
//       phonenumber: "015545123555",
//       messgae: "best website I've seen",
//     },
//   ];

//   const [Feedbacks, setFeedbacks] = useState(feedbacks);
//   const [selectedFeedback, setSelectedFeedback] = useState([]);
//   const [modalState, setModalState] = useState({
//     showAdd: false,
//     showEdit: false,
//     showRemove: false,
//   });
//   const [filter, setFilter] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   function filteredFeedbacks() {
//     let filtered = Feedbacks;
//     if (filter) {
//       filtered = filtered.filter(
//         (feedback) => feedback.name.toLowerCase() === filter.toLowerCase()
//       );
//     }
//     if (searchQuery) {
//       filtered = filtered.filter((feedback) =>
//         feedback.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return filtered;
//   }

//   // function handleShowModal() {
//   //   setModalState((prevState) => ({ ...prevState, showAdd: true }));
//   // }

//   function handleShowRemoveModal(existFeedback) {
//     setModalState((prevState) => ({ ...prevState, showRemove: true }));
//     // setSelectedUser(() => existUser.id);
//     setSelectedFeedback([]);
//     // make it append to the list
//     setSelectedFeedback((prevSelectedFeedback) => [
//       ...prevSelectedFeedback,
//       existFeedback.id,
//     ]);
//   }

//   function handleCloseRemoveModal() {
//     setModalState((prevState) => ({ ...prevState, showRemove: false }));
//   }

//   function handleDelete(feedbackId) {
//     const newUsers = Feedbacks.filter((eq) => eq.id !== feedbackId);
//     setFeedbacks(() => newUsers);
//   }

//   function getCheckedUserIds() {
//     setModalState((prevState) => ({ ...prevState, showRemove: true }));

//     const checkboxes = document.querySelectorAll('tr input[type="checkbox"]');
//     setSelectedUser([]);
//     checkboxes.forEach((checkbox) => {
//       if (checkbox.checked) {
//         // checkedUserIds.push(checkbox.id);
//         setSelectedUser((prevSelectedUser) => [
//           ...prevSelectedUser,
//           parseFloat(checkbox.id),
//         ]);
//       }
//     });

//     // return checkedUserIds;

//     // console.log(selectedUser);
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 flex font-popins">
//         <AdminSidebar />
//         {/* Main content */}
//         <main className="flex-1 p-4">
//           <AdminNav
//             searchQuery={searchQuery}
//             handleSearchChange={searchUsers}
//           />
//           {/* Filter */}

//           {/* Your main content here */}
//           <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
//             {/* Table */}
//             <table className="min-w-full divide-y divide-gray-200">
//               {/* Table headers */}
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Name
//                   </th>

//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Phone Number
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Message
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     <MdDelete
//                       className="inline mr-4 text-2xl text-black cursor-pointer "
//                       // onClick={getCheckedUserIds}
//                       onClick={() => getCheckedUserIds()}
//                     />
//                   </th>
//                 </tr>
//               </thead>
//               {/* Table body */}
//               <tbody>
//                 {Feedbacks.map((feedback) => {
//                   return (
//                     <tr key={feedback.id} className="bg-white">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         <input
//                           type="checkbox"
//                           name="select"
//                           id={`${feedback.id}`}
//                           className="mr-4 selection"
//                         />
//                         {feedback.name}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {feedback.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {feedback.phonenumber}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {feedback.messgae}
//                       </td>

//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
//                         <MdDelete
//                           onClick={() => handleShowRemoveModal(feedback)}
//                           className="inline mr-4 text-2xl text-black cursor-pointer"
//                         />
//                         {modalState.showRemove && (
//                           <RemoveFeedback
//                             selectedFeedback={selectedFeedback}
//                             onRemove={handleDelete}
//                             onClose={handleCloseRemoveModal}
//                             showRemoveModal={modalState.showRemove}
//                           />
//                         )}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default FeedbacksPage;

import { useState } from "react";
import AdminSidebar from "../../components/adminSidebar";
import AdminNav from "../../components/adminNav";
import RemoveFeedback from "../../components/RemoveFeedback";
import { MdDelete } from "react-icons/md";

const FeedbacksPage = () => {
  const feedbacks = [
    {
      id: Math.random() * 100,
      name: "jane doe",
      email: "jane@gmail.com",
      phonenumber: "015545123546",
      messgae: "you made an amazing website",
    },
    {
      id: Math.random() * 100,
      name: "alex smith",
      email: "alex@gmail.com",
      phonenumber: "015545123547",
      messgae: "great work on the project",
    },
    {
      id: Math.random() * 100,
      name: "sarah johnson",
      email: "sarah@gmail.com",
      phonenumber: "015545123548",
      messgae: "excellent job, keep it up",
    },
    {
      id: Math.random() * 100,
      name: "michael brown",
      email: "michael@gmail.com",
      phonenumber: "015545123549",
      messgae: "very satisfied with the website",
    },
    {
      id: Math.random() * 100,
      name: "emily wilson",
      email: "emily@gmail.com",
      phonenumber: "015545123550",
      messgae: "thank you for your hard work",
    },
    {
      id: Math.random() * 100,
      name: "david thompson",
      email: "david@gmail.com",
      phonenumber: "015545123551",
      messgae: "impressed with the website design",
    },
    {
      id: Math.random() * 100,
      name: "olivia jones",
      email: "olivia@gmail.com",
      phonenumber: "015545123552",
      messgae: "easy to navigate and user-friendly",
    },
    {
      id: Math.random() * 100,
      name: "william davis",
      email: "william@gmail.com",
      phonenumber: "015545123553",
      messgae: "highly recommend your services",
    },
    {
      id: Math.random() * 100,
      name: "ava miller",
      email: "ava@gmail.com",
      phonenumber: "015545123554",
      messgae: "great customer support",
    },
    {
      id: Math.random() * 100,
      name: "james wilson",
      email: "james@gmail.com",
      phonenumber: "015545123555",
      messgae: "best website I've seen",
    },
  ];

  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [Feedbacks, setFeedbacks] = useState(feedbacks);
  const [selectedFeedback, setSelectedFeedback] = useState([]);
  const [modalState, setModalState] = useState({
    showAdd: false,
    showEdit: false,
    showRemove: false,
  });

  function filteredFeedbacks() {
    let filtered = Feedbacks;
    if (filter) {
      filtered = filtered.filter(
        (feedback) => feedback.name.toLowerCase() === filter.toLowerCase()
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((feedback) =>
        feedback.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }

  function handleShowRemoveModal(existFeedback) {
    setModalState((prevState) => ({ ...prevState, showRemove: true }));
    setSelectedFeedback([]);
    setSelectedFeedback((prevSelectedFeedback) => [
      ...prevSelectedFeedback,
      existFeedback.id,
    ]);
  }

  function handleCloseRemoveModal() {
    setModalState((prevState) => ({ ...prevState, showRemove: false }));
  }

  function handleDelete(feedbackId) {
    const newFeedbacks = Feedbacks.filter(
      (feedback) => feedback.id !== feedbackId
    );
    setFeedbacks(newFeedbacks);
  }

  function getCheckedFeedbackIds() {
    // Implement if needed
  }

  function searchFeedbacks(query) {
    setSearchQuery(query);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex font-popins">
        <AdminSidebar />
        {/* Main content */}
        <main className="flex-1 p-4">
          <AdminNav
            searchQuery={searchQuery}
            handleSearchChange={searchFeedbacks}
          />
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
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <MdDelete
                      className="inline mr-4 text-2xl text-black cursor-pointer "
                      onClick={getCheckedFeedbackIds}
                    />
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {filteredFeedbacks().length > 0 ? (
                  filteredFeedbacks().map((feedback) => {
                    return (
                      <tr key={feedback.id} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <input
                            type="checkbox"
                            name="select"
                            id={`${feedback.id}`}
                            className="mr-4 selection"
                          />
                          {feedback.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.phonenumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.messgae}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                          <MdDelete
                            onClick={() => handleShowRemoveModal(feedback)}
                            className="inline mr-4 text-2xl text-black cursor-pointer"
                          />
                          {modalState.showRemove && (
                            <RemoveFeedback
                              selectedFeedback={selectedFeedback}
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
                      No Feedbacks found
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

export default FeedbacksPage;
