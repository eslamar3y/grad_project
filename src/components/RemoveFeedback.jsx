/* eslint-disable react/prop-types */
import Modal from "./Modal";

export default function RemoveFeedback({
  onClose,
  showRemoveModal,
  onRemove,
  selectedFeedback,
}) {
  function handleRemove() {
    console.log(selectedFeedback);
    // selectedFeedback.forEach((feedback) => {
    //   onRemove(feedback);
    // });
    fetch(`https://localhost:7289/api/Feedbacks`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedFeedback),
    }).then((response) => {
      onRemove(true);
      return response.json();
    });

    onClose();
  }

  return (
    <Modal open={showRemoveModal} onClose={onClose} backdropOpacity={50}>
      <div className="px-6 py-6 rounded-2xl bg-mainColor relative">
        <h2 className=" font-semibold text-xl mb-2">Delete Message</h2>
        <p className="mb-6">Are you sure you want to remove this Feedback</p>
        <div className=" border-t-2 flex gap-4 justify-end pt-3">
          <button
            onClick={onClose}
            className="text-secondColor outline-none font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleRemove}
            className="text-secondColor hover:text-red-600 outline-none font-semibold"
          >
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
}
