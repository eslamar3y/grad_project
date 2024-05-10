import rectangleImage from "../../assets/Rectangle.png";
import rectangleImage5 from "../../assets/Rectangle_5.png";
import loginandrew from "../../assets/undraw_login_re_4vu21.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const svgContentUsername = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#1C1C1C"/>
  </svg>
`;
const svgContentPassword = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z" fill="#1C1C1C"/>
</svg>
`;

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    Username: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});

  function handleInputData(input, value) {
    setInputData((prevData) => ({
      ...prevData,
      [input]: value,
    }));
  }


  async function onSubmit(e) {
    e.preventDefault();
    const Username = inputData.Username;
    const Password = inputData.Password;
    console.log(Username, Password);

    const errors = {};
    // username validation
    if (!Username) {
      errors.Username = "Username is required";
    } else if (Username.length < 3) {
      errors.Username = "The number of characters should be 3 at least.";
    }

    // password validation
    if (!Password) {
      errors.Password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/.test(Password)
    ) {
      errors.Password = `Password must include at least
        (6 chars, 1 upprecase char,
        1 lowercase char, 1 number,
        1 special char)`;
    }

    setErrors(errors);

    // Submit the form if there are no errors
    if (Object.keys(errors).length === 0) {
      try {
        setIsLoading(true);
        await login(Username, Password);
        const user = JSON.parse(localStorage.getItem("userData"));
        console.log(user);
        const res2 = await getDoc(doc(db, "userChats", user.id));
        // const selectedCompinedId = userChatsArr.find((userChat) => userChat[0] === compinedId);
        // console.log(selectedCompinedId);
        if (!res2.exists()) {
          await setDoc(doc(db, "userChats", user.id), {});
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err.response.status);
        if (err.response.status == 401) {
          setLoginError({
            message: "Unautherized user",
          });
          throw new Error("Unautherized user");
        }
        if (err.response.status == 500) {
          setLoginError({
            message:
              "Server error, Failed to login please try again or you should register first.",
          });
          throw new Error(
            "Server error, Failed to login please try again or you should register first."
          );
        }
        if (!err.response.ok) {
          setLoginError({
            message: "Somthing wrong happened please try again",
          });
          throw new Error("Somthing wrong happened please try again");
        }
      }
      const userData = localStorage.getItem("userData");
      const parsedUserData = JSON.parse(userData);
      const role = parsedUserData?.role;
      console.log(role);
      if (role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
  }

  return (
    <div className="flex">
      <div className="xxs:w-full xs:w-full sm:w-full  md:w-1/2 h-screen ">
        <div className="my-[20vh] mx-[auto] w-[80%] text-center h-[80vh]">
          <h1 className="font-bold text-xl uppercase font-popins">Sign in</h1>
          <h2 className="text-[#525252] font-popins font-normal">
            Welcome back to FishShield
          </h2>
          <form method="POST" onSubmit={onSubmit}>
            <div className="flex flex-col relative w-fit m-auto">
              <input
                onChange={(e) => handleInputData("Username", e.target.value)}
                value={inputData.Username}
                type="text"
                name="Username"
                id="username"
                placeholder="Username"
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
            {errors.Username && (
              <p className="text-sm text-red-600">{errors.Username}</p>
            )}
            <div className="flex flex-col relative w-fit m-auto">
              <input
                onChange={(e) => handleInputData("Password", e.target.value)}
                value={inputData.Password}
                type="password"
                name="Password"
                id="password"
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
            {loginError && (
              <p className="text-sm text-red-600">{loginError.message}</p>
            )}
            <div className="flex flex-col mt-4">
              <NavLink
                to="/forgot"
                className="text-secondColor text-sm font-popins font-semibold tracking-[0.84px] m-auto -mt-1 mb-8 xs:w-[260px] md:w-[364px] text-end "
              >
                <span>Forgot Password ?</span>
              </NavLink>
            </div>
            <div className="flex flex-col">
              <button className="SignInButon text-xs font-semibold font-popins mx-auto w-[124px] h-[52px] text-white rounded-2xl p-2" disabled={isLoading}>
                {isLoading ? "loading ..." : "Sign In"}
              </button>
            </div>
            <div className="flex flex-col">
              {/* dont have an account? sign up */}
              <div className="w-fit h-fit font-normal text-sm font-popins  tracking-[0.84px] mx-auto mt-8 text-end ">
                Don{"'"}t have an account?{" "}
                <NavLink to="/register">
                  <span className="text-secondColor font-semibold">
                    Sign Up
                  </span>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="xxs:hidden xs:hidden sm:hidden  md:block md:w-1/2 h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${rectangleImage})` }}
      >
        <div
          className="text-center md:h-[393px] md:w-[309px] md:my-44 ml:h-[393px] ml:w-[309px] ml:my-44  lg:h-[524px] lg:w-[412px] m-auto lg:my-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${rectangleImage5})` }}
        >
          <img src={loginandrew} className="m-auto pt-32" alt="" />
        </div>
      </div>
    </div>
  );
}
