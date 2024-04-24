/* eslint-disable react/prop-types */
import Modal from './Modal';

const SubscriptionPopup = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <div className="bg-cover bg-center h-40 w-full rounded-t-lg" style={{ backgroundImage: 'url(YourImageURL)' }}></div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Subscribe to Our Site</h2>
            <p className="mt-2 text-gray-600">Get the latest updates and offers!</p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors" onClick={handleClose}>Subscribe Now</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscriptionPopup;
