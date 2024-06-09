import rectangleImage from "../../assets/Rectangle.png";
import rectangleImage5 from "../../assets/Rectangle_5.png";
import registerandrew from "../../assets/undraw_mobile_payments.png";
import articleimg from "../../assets/articleimg.png";
import uploadImage from "../../assets/uploadImage.png";
import imgUpload from "../../assets/upload2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import phone from "../../assets/Phone.png";
import calendar from "../../assets/Calendar.png";
import { AuthContext } from "../../store/AuthContext";
import { ThreeDots } from "react-loader-spinner";

const svgContentUsername = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#1C1C1C"/>
    </svg>`;
const svgContentEmail = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email"><g data-name="Layer 2">
    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"
    data-name="email"></path></g></svg>`;
const svgContentPassword = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z" fill="#1C1C1C"/>
    </svg>`;
const svgContentLocation = `<svg viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="47.104"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill=""></path></g></svg>`;

export default function Register() {
  // check if radio button is of owner or expert, if owner then show owner input fields else show expert input fields
  const ownerRef = useRef();
  const expertRef = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [registerType, setRegisterType] = useState("owner");
  const { register } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState();

  useEffect(() => {
    ownerRef.current.checked = true;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const ownerObj = {
      farmAddress: data.FarmAddress,
      address: data.Address,
      birthDate: data.BirthDate,
      email: data.Email,
      userName: data.UserName,
      password: data.Password,
      confirmPass: data.ConfirmPass,
      phoneNumber: data.PhoneNumber,
    };
    const ownerFormData = new FormData();
    for (const key in ownerObj) {
      ownerFormData.append(key, ownerObj[key]);
    }

    const expertObj = {
      birthDate: data.BirthDate,
      email: data.Email,
      userName: data.UserName,
      password: data.Password,
      confirmPass: data.ConfirmPass,
      phoneNumber: data.PhoneNumber,
      personalPhoto: data.personalPhoto,
      certificate: data.Certificate,
      moreInfo: data.moreInfo,
      address: data.Address,
    };
    console.log(expertObj);
    const expertFormData = new FormData();
    for (const key in expertObj) {
      expertFormData.append(key, expertObj[key]);
    }

    const choosenData =
      registerType === "owner" ? ownerFormData : expertFormData;
    console.log(choosenData);

    const errors = {};
    if (!data.BirthDate) {
      errors.BirthDate = "Birth date is required.";
    }

    if (!data.Email) {
      errors.Email = "Email is required.";
    } else if (!data.Email.includes("@")) {
      errors.Email = "@ is required.";
    }

    if (!data.UserName) {
      errors.UserName = "UserName is required.";
    } else if (data.UserName.length < 3) {
      errors.UserName = "UserName must be at least 3 characters";
    }

    if (!data.Password) {
      errors.Password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/.test(
        data.Password
      )
    ) {
      errors.Password = `Password must include at least
        (6 chars, 1 upprecase char,
        1 lowercase char, 1 number,
        1 special char)`;
    }

    if (!data.ConfirmPass) {
      errors.ConfirmPass = "Confirm Pass is required.";
    } else if (data.ConfirmPass !== data.Password) {
      errors.ConfirmPass = "Confirm Password must be identical to password.";
    }

    if (!data.PhoneNumber) {
      errors.PhoneNumber = "Phone number is required.";
    } else if (data.PhoneNumber.length != 11) {
      errors.PhoneNumber = "Phone number must be exactly 11 numbers.";
    }

    if (!data.Address) {
      errors.Address = "Address is required.";
    }

    if (registerType === "owner" && !data.FarmAddress) {
      errors.FarmAddress = "Farm address is required.";
    }

    if (registerType === "expert" && !data.personalPhoto.name) {
      errors.personalPhoto = "Personal photo is required.";
    }

    if (registerType === "expert" && !data.Certificate.name) {
      errors.Certificate = "Certificate is required.";
    }

    setErrors(errors);
    if (Object.keys(errors).length == 0) {
      try {
        setIsLoading(true);
        await register(choosenData, registerType);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err.response.status == 400) {
          setLoginError({
            message: "User already registered",
          });
          throw new Error("User already registered");
        }
        if (err.response.status == 500) {
          setLoginError({
            message: "Server error, Failed to register please try again",
          });
          throw new Error("Server error, Failed to register please try again");
        }
        if (!err.response.ok) {
          setLoginError({
            message: "Somthing wrong happened please try again",
          });
          throw new Error("Somthing wrong happened please try again");
        }
      }
      navigate("/login");
    }
  };

  let isLoad;
  if (loginError) {
    isLoad = <p className="text-sm text-red-600">{loginError.message}</p>
  }
  if (isLoading) {
    isLoad = <div className="flex items-center justify-center">
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#018391"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /></div>
  }


  return (
    <div className="flex">
      <div
        className="fixed left-0 top-0 w-1/2 h-screen bg-cover bg-center xxs:hidden xs:hidden sm:hidden md:block"
        style={{ backgroundImage: `url(${rectangleImage})` }}
      >
        <div
          className="text-center md:h-[393px] md:w-[309px] md:my-44 ml:h-[393px] ml:w-[309px] ml:my-44  lg:h-[524px] lg:w-[412px] m-auto lg:my-24 bg-cover bg-center "
          style={{ backgroundImage: `url(${rectangleImage5})` }}
        >
          <img src={registerandrew} className="m-auto pt-32" alt="" />
        </div>
      </div>
      <div className="w-1/2 ml-auto xs:w-full sm:w-full  md:w-1/2">
        <div className="my-[6vh] mx-[auto] w-[80%] text-center h-[80vh]">
          <h1 className="font-bold text-xl uppercase font-popins">Sign Up</h1>
          <h2 className="text-[#525252] font-popins font-normal">
            Welcome to FishShield
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="text"
                name="UserName"
                id="UserName"
                placeholder="User name"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  px-11 mt-4 rounded-xl font-popins font-normal loginUser "
              />
              <img
                className="w-6 absolute bottom-4 left-[4%]"
                src={`data:image/svg+xml,${encodeURIComponent(
                  svgContentUsername
                )}`}
                alt="Custom SVG Image"
              />
            </div>
            {errors.UserName && (
              <p className="text-sm text-red-600">{errors.UserName}</p>
            )}
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  px-11 mt-4 rounded-xl font-popins font-normal loginUser "
              />
              <img
                className="w-6 absolute bottom-4 left-[4%]"
                src={`data:image/svg+xml,${encodeURIComponent(
                  svgContentEmail
                )}`}
                alt="Custom SVG Image"
              />
            </div>
            {errors.Email && (
              <p className="text-sm text-red-600">{errors.Email}</p>
            )}
            {registerType == "owner" ? (
              <>
                <div className="flex flex-col relative w-fit m-auto owner">
                  <input
                    type="text"
                    name="FarmAddress"
                    id="FarmAddress"
                    placeholder="Farm Address"
                    className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  px-11 mt-4 rounded-xl font-popins font-normal loginUser "
                  />
                  <img
                    className="w-6 absolute bottom-4 left-[4%]"
                    src={`data:image/svg+xml,${encodeURIComponent(
                      svgContentLocation
                    )}`}
                    alt="Custom SVG Image"
                  />
                </div>
                {errors.FarmAddress && (
                  <p className="text-sm text-red-600">{errors.FarmAddress}</p>
                )}
              </>
            ) : (
              <>
                <div className="flex flex-col relative w-fit m-auto expert">
                  <input
                    type="text"
                    name="moreInfo"
                    id="moreInfo"
                    placeholder="Professional info"
                    className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  pl-11 pr-3 mt-4 rounded-xl font-popins font-normal loginUser "
                  />
                  <img
                    className="w-6 absolute bottom-4 left-[4%]"
                    src={articleimg}
                    alt="Custom SVG Image"
                  />
                </div>
                <div className="flex flex-col relative w-fit m-auto expert">
                  <img
                    className="w-6 absolute bottom-4 left-[4%]"
                    src={uploadImage}
                    alt="Custom SVG Image"
                  />
                  <div
                    className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc] relative pl-11 pr-3 mt-4 rounded-xl font-popins font-normal loginUser "
                    placeholder="Personal Photo"
                  >
                    <p className="flex justify-start pt-4">personal image</p>
                    <div className="absolute top-4 right-10 px-1">
                      <label htmlFor="personalPhoto" className=" font-popins text-sm cursor-pointer">
                        <img src={imgUpload} alt="uploader" className="w-5" />
                      </label>
                      <input
                        className="absolute top-0 right-0 w-full h-full hidden"
                        type="file"
                        name="personalPhoto"
                        id="personalPhoto"
                      />
                    </div>
                  </div>
                </div>
                {errors.personalPhoto && (
                  <p className="text-sm text-red-600">{errors.personalPhoto}</p>
                )}
                <div className="flex flex-col relative w-fit m-auto expert">
                  <img
                    className="w-6 absolute bottom-4 left-[4%]"
                    src={uploadImage}
                    alt="Custom SVG Image"
                  />
                  <div
                    className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc] relative pl-11 pr-3 mt-4 rounded-xl font-popins font-normal loginUser "
                    placeholder="Certificate"
                  >
                    <p className="flex justify-start pt-4">Certificate</p>
                    <div className="absolute top-4 right-10 px-1">
                      <label htmlFor="Certificate" className=" font-popins text-sm cursor-pointer">
                        <img src={imgUpload} alt="uploader" className="w-5" />
                      </label>
                      <input
                        className="absolute top-0 right-0 w-full h-full hidden"
                        type="file"
                        name="Certificate"
                        id="Certificate"
                      />
                    </div>
                  </div>
                </div>
                {errors.Certificate && (
                  <p className="text-sm text-red-600">{errors.Certificate}</p>
                )}
              </>
            )}
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="datetime-local"
                name="BirthDate"
                id="BirthDate"
                placeholder="Birth Date"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  px-11 mt-4 rounded-xl font-popins font-normal loginUser "
              />
              <img
                className="w-5 absolute bottom-4 left-[4%]"
                src={calendar}
                alt="Custom SVG Image"
              />
            </div>
            {errors.BirthDate && (
              <p className="text-sm text-red-600">{errors.BirthDate}</p>
            )}
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="text"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Phone number"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  px-11 mt-4 rounded-xl font-popins font-normal loginUser "
              />
              <img
                className="w-6 absolute bottom-4 left-[4%]"
                src={phone}
                alt="Custom SVG Image"
              />
            </div>
            {errors.PhoneNumber && (
              <p className="text-sm text-red-600">{errors.PhoneNumber}</p>
            )}
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Your address"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc]  px-11 mt-4 rounded-xl font-popins font-normal loginUser "
              />
              <img
                className="w-6 absolute bottom-4 left-[4%]"
                src={`data:image/svg+xml,${encodeURIComponent(
                  svgContentLocation
                )}`}
                alt="Custom SVG Image"
              />
            </div>
            {errors.Address && (
              <p className="text-sm text-red-600">{errors.Address}</p>
            )}
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc] px-11 mt-4 rounded-xl font-popins font-normal loginPass"
              />
              <img
                className="w-6 absolute bottom-4 left-[4%]"
                src={`data:image/svg+xml,${encodeURIComponent(
                  svgContentPassword
                )}`}
                alt="Custom SVG Image"
              />
            </div>
            {errors.Password && (
              <p className="text-sm text-red-600">{errors.Password}</p>
            )}
            <div className="flex flex-col relative w-fit m-auto owner">
              <input
                type="password"
                name="ConfirmPass"
                id="ConfirmPass"
                placeholder="Confirm password"
                className="m-auto xs:w-[260px] md:w-[364px] h-[52px] text-sm border-none bg-[#f0edffcc] px-11 mt-4 rounded-xl font-popins font-normal loginPass"
              />
              <img
                className="w-6 absolute bottom-4 left-[4%]"
                src={`data:image/svg+xml,${encodeURIComponent(
                  svgContentPassword
                )}`}
                alt="Custom SVG Image"
              />
            </div>
            {errors.ConfirmPass && (
              <p className="text-sm text-red-600">{errors.ConfirmPass}</p>
            )}

            {/* make radio button to check if user is farm owner or expert */}
            <div className="flex  relative w-fit m-auto mt-6">
              <div className="flex items-center mr-16">
                <input
                  // checked
                  id="radio1"
                  ref={ownerRef}
                  type="radio"
                  value="owner"
                  name="default-radio"
                  onClick={() => setRegisterType("owner")}
                  className="w-4 h-4 text-secondColor bg-gray-100 border-gray-300 focus:ring-secondColor/90 "
                />
                <label
                  htmlFor="radio1"
                  className="ms-2 text-sm font-medium text-gray-900 "
                >
                  Farm Owner
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="radio2"
                  ref={expertRef}
                  type="radio"
                  value="expert"
                  name="default-radio"
                  onClick={() => setRegisterType("expert")}
                  className="w-4 h-4 text-secondColor bg-gray-100 border-gray-300 focus:ring-secondColor/90 "
                />
                <label
                  htmlFor="radio2"
                  className="ms-2 text-sm font-medium text-gray-900 "
                >
                  Expert
                </label>
              </div>
            </div>

            <div className="flex justify-center items-center">{isLoad}</div>
            <div className="flex flex-col">
              <button className="SignInButon text-xs font-semibold font-popins mx-auto w-[124px] h-[52px] text-white rounded-2xl p-2 mt-8" disabled={isLoading}>
                Sign Up
              </button>
            </div>
            <div className="flex flex-col pb-10">
              <div className="w-fit h-fit font-normal text-sm font-popins  tracking-[0.84px] mx-auto mt-7 text-end ">
                Already have an account?{" "}
                <NavLink to="/login">
                  <span className="text-secondColor font-semibold">
                    Sign In
                  </span>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
