/* eslint-disable react/prop-types */
import Modal from "./Modal";

export default function RemoveUser({
  onClose,
  showRemoveModal,
  onRemove,
  selectedUser,
}) {
  function handleRemove() {
    console.log(selectedUser);
    selectedUser.forEach((user) => {
      onRemove(user);
    });

    onClose();
  }

  return (
    <Modal open={showRemoveModal} onClose={onClose} backdropOpacity={10}>
      <div className="px-6 py-6 rounded-2xl bg-mainColor relative">
        <h2 className=" font-semibold text-xl mb-2">Delete Message</h2>
        <p className="mb-6">Are you sure you want to remove this User</p>
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
