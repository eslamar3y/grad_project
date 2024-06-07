import { useEffect, useState } from "react";
import AdminSidebar from "../../components/adminSidebar";
import AdminNav from "../../components/adminNav";
import RemoveFeedback from "../../components/RemoveFeedback";
import { MdDelete } from "react-icons/md";

const FeedbacksPage = () => {
  // const [filter, setFilter] = useState("");
  const [Feedbacks, setFeedbacks] = useState([]);
  const [Deleted, setDeleted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState([]);
  const [modalState, setModalState] = useState({
    showAdd: false,
    showEdit: false,
    showRemove: false,
  });

  useEffect(() => {
    fetch("https://localhost:7289/api/Feedbacks?PageSize=50")
      .then((response) => {
        // console.log(response.headers);
        return response.json();
      })
      .then((data) => {
        setFeedbacks(data);
      });
  }, [Deleted]);

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
    setDeleted(!Deleted);
  }

  function getCheckedFeedbackIds() {
    const selectedCheckboxes = document.querySelectorAll(".selection");
    const selectedFeedbackIds = [];
    selectedCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedFeedbackIds.push(checkbox.id);
      }
    });
    if (selectedFeedbackIds.length > 0) {
      setModalState((prevState) => ({ ...prevState, showRemove: true }));
      setSelectedFeedback(selectedFeedbackIds);
    }
    console.log(selectedFeedback);
    // handleShowRemoveModal();
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
                      onClick={() => getCheckedFeedbackIds()}
                    />
                    {modalState.showRemove && (
                      <RemoveFeedback
                        selectedFeedback={selectedFeedback}
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
                {Feedbacks.length > 0 ? (
                  Feedbacks.map((feedback) => {
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
                          {feedback.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.message}
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
