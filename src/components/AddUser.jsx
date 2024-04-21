import { MdOutlineClose } from "react-icons/md";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function AddUser({ onAdd, onClose, showAddModal }) {
  const [userType, setUserType] = useState("");
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    Email: "",
    PhoneNumber: "",
    // Common fields
    Address: "",
    BirthDate: "",
    UserName: "",
    Password: "",
    ConfirmPass: "",
    // Fields specific to Specialist
    personalPhoto: null,
    moreInfo: "",
    // Fields specific to FarmOwner
    FarmAddress: "",
  });

  const handleChange = useCallback((input, value) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [input]: value,
    }));
  }, []);

  const validateFields = () => {
    const errors = {}; // Reset errors

    if (!newUser.UserName) {
      errors.UserName = "Username is Required";
    } else if (newUser.UserName.length < 3) {
      errors.UserName = "UserName must be at least 3 characters";
    }

    if (!newUser.Email) {
      errors.Email = "Email is Required";
    } else if (!newUser.Email.includes("@")) {
      errors.Email = "@ is required.";
    }

    if (!newUser.PhoneNumber) {
      errors.PhoneNumber = "The PhoneNumber field is required.";
    } else if (!/^01[0125][0-9]{8}$/.test(newUser.PhoneNumber)) {
      errors.PhoneNumber = "Invalid phone number format";
    }

    if (!newUser.BirthDate) {
      errors.BirthDate = "Birth Date is Required";
    }

    if (!newUser.Password) {
      errors.Password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/.test(
        newUser.Password
      )
    ) {
      errors.Password = `Password must include at least
          (6 chars, 1 upprecase char,
          1 lowercase char, 1 number,
          1 special char)`;
    }

    if (!newUser.ConfirmPass) {
      errors.ConfirmPass = "Confirm Pass is required.";
    } else if (newUser.ConfirmPass !== newUser.Password) {
      errors.ConfirmPass = "Confirm Password must be identical to password.";
    }

    if (userType === "Specialist") {
      if (!newUser.personalPhoto) {
        errors.personalPhoto = "Personal Photo is Required";
      } else {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(newUser.personalPhoto.name)) {
          errors.personalPhoto = "Invalid file type";
        }
      }

      if (!newUser.Address) {
        errors.Address = "Address is Required";
      }
    } else if (userType === "FarmOwner") {
      if (!newUser.FarmAddress) {
        errors.FarmAddress = "Farm Address is Required";
      }
    }

    setErrors(errors);

    const firstError = Object.values(errors)[0];
    if (firstError) {
      document.querySelector(".error").textContent = firstError;
    }
  };

  const handleAddUser = () => {
    validateFields();
    console.log("errors", errors);
    if (userType === "Specialist" && Object.keys(errors).length === 0) {
      const specialist = new FormData();
      specialist.append("personalPhoto", newUser.personalPhoto);
      specialist.append("moreInfo", newUser.moreInfo);
      specialist.append("Address", newUser.Address);
      specialist.append("BirthDate", newUser.BirthDate);
      specialist.append("Email", newUser.Email);
      specialist.append("UserName", newUser.UserName);
      specialist.append("Password", newUser.Password);
      specialist.append("ConfirmPass", newUser.ConfirmPass);
      specialist.append("PhoneNumber", newUser.PhoneNumber);
      fetch("https://localhost:7289/api/Accounts/doctor", {
        method: "POST",
        body: specialist,
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 201) {
            onAdd(true);
            const resetFields = () => {
              setNewUser({
                ...newUser,
                Email: "",
                PhoneNumber: "",
                Address: "",
                BirthDate: "",
                UserName: "",
                Password: "",
                ConfirmPass: "",
                personalPhoto: null,
                moreInfo: "",
                FarmAddress: "",
              });
            };
            resetFields();
            onClose();
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.DuplicateEmail) {
            document.querySelector(".error").textContent =
              "Email already exists";
          }
          if (data.DuplicateUserName) {
            document.querySelector(".error").textContent =
              "UserName already exists";
          }
        });
    } else if (userType === "FarmOwner" && Object.keys(errors).length === 0) {
      console.log("newUser");
      console.log(newUser);
      const FarmOwner = new FormData();
      FarmOwner.append("FarmAddress", newUser.FarmAddress);
      FarmOwner.append("Address", newUser.Address);
      FarmOwner.append("BirthDate", newUser.BirthDate);
      FarmOwner.append("Email", newUser.Email);
      FarmOwner.append("UserName", newUser.UserName);
      FarmOwner.append("Password", newUser.Password);
      FarmOwner.append("ConfirmPass", newUser.ConfirmPass);
      FarmOwner.append("PhoneNumber", newUser.PhoneNumber);
      fetch("https://localhost:7289/api/Accounts/farmOwner", {
        method: "POST",
        body: FarmOwner,
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 201) {
            onAdd(true);
            const resetFields = () => {
              setNewUser({
                ...newUser,
                Email: "",
                PhoneNumber: "",
                Address: "",
                BirthDate: "",
                UserName: "",
                Password: "",
                ConfirmPass: "",
                personalPhoto: null,
                moreInfo: "",
                FarmAddress: "",
              });
            };

            resetFields();
            onClose();
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.DuplicateEmail) {
            document.querySelector(".error").textContent =
              "Email already exists";
          }
          if (data.DuplicateUserName) {
            document.querySelector(".error").textContent =
              "UserName already exists";
          }
        });
      // .catch((errors) => {
      //   console.error("Error:", errors);
      // });
    }

    // onClose();
  };

  const handleCloseModal = () => {
    setUserType(""); // Reset user type when modal is closed
    onClose();
  };

  return (
    <Modal open={showAddModal} onClose={handleCloseModal} width={"w-[650px]"}>
      <form className="px-8 py-6 rounded-2xl bg-mainColor relative">
        {userType ? (
          <>
            <h2 className="font-bold text-2xl mb-8 text-center">
              Add {userType}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Common fields */}
              <input
                type="text"
                placeholder="User Name"
                className="p-2 rounded"
                onChange={(e) => handleChange("UserName", e.target.value)}
                value={newUser.UserName}
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded w-full"
                onChange={(e) => handleChange("Email", e.target.value)}
                value={newUser.Email}
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-2 rounded w-full"
                onChange={(e) => handleChange("PhoneNumber", e.target.value)}
                value={newUser.PhoneNumber}
              />
              <input
                type="date"
                placeholder="Birth Date"
                className="p-2 rounded"
                onChange={(e) => handleChange("BirthDate", e.target.value)}
                value={newUser.BirthDate}
              />

              <input
                type="password"
                placeholder="Password"
                className="p-2 rounded"
                onChange={(e) => handleChange("Password", e.target.value)}
                value={newUser.Password}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 rounded"
                onChange={(e) => handleChange("ConfirmPass", e.target.value)}
                value={newUser.ConfirmPass}
              />
              <input
                type="text"
                placeholder="Address"
                className="p-2 rounded"
                onChange={(e) => handleChange("Address", e.target.value)}
                value={newUser.Address}
              />
              {/* Your other input fields */}
              {userType === "Specialist" && (
                <>
                  <div>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleChange("personalPhoto", e.target.files[0])
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="More Info"
                      className="p-2 rounded w-full"
                      onChange={(e) => handleChange("moreInfo", e.target.value)}
                      value={newUser.moreInfo}
                    />
                  </div>
                </>
              )}
              {userType === "FarmOwner" && (
                <div>
                  <input
                    type="text"
                    placeholder="Farm Address"
                    className="p-2 rounded w-full"
                    onChange={(e) =>
                      handleChange("FarmAddress", e.target.value)
                    }
                    value={newUser.FarmAddress}
                  />
                </div>
              )}
            </div>
            <div className="text-red-500 text-sm text-center error"></div>
            <button
              type="button"
              className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold"
              onClick={handleAddUser}
            >
              Add User
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl mb-4 text-center">
              Choose User Type
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                className="rounded-lg px-4 py-2 bg-secondColor text-white font-semibold "
                onClick={() => setUserType("Specialist")}
              >
                Specialist
              </button>
              <button
                className="rounded-lg px-4 py-2 bg-secondColor text-white font-semibold"
                onClick={() => setUserType("FarmOwner")}
              >
                Farm Owner
              </button>
            </div>
          </div>
        )}
        <MdOutlineClose
          className="absolute top-4 right-4 font-bold text-2xl cursor-pointer"
          onClick={handleCloseModal}
        />
      </form>
    </Modal>
  );
}
