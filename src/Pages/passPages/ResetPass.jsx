import { useEffect, useState } from "react";
import rectangleImage from "../../assets/Rectangle.png";
import rectangleImage5 from "../../assets/Rectangle_6.png";
import forgotandrew from "../../assets/undraw_forgot_password.png";

export default function Forgot() {
  const [valid, setValid] = useState(0);

  const svgContentPassword = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z" fill="#1C1C1C"/>
                            </svg>
                            `;

  useEffect(() => {
    checkEmail();
  }, []);

  function checkEmail() {
    const email = localStorage.getItem("emailForForgot");
    if (!email) {
      window.location.href = "/forgot";
    }
  }

  function checkPass(e) {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword");
    const error = document.getElementById("error");

    if (password.length < 8) {
      error.innerHTML = "password must be at least 8 characters";
      error.style.display = "block";
      error.style.color = "#ff0000";
      setValid(0);
      cpassword.readOnly = true;
    } else {
      cpassword.readOnly = false;
      error.style.display = "none";
    }
  }

  function checkConfirm(e) {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const error = document.getElementById("error");
    if (password === cpassword) {
      error.innerHTML = "the same";
      error.style.display = "none";
      error.style.color = "#00ff00";
      setValid(1);
      document.getElementById("resetButton").disabled = false;
    } else if (password != cpassword) {
      error.innerHTML = "Not the same";
      error.style.display = "block";
      error.style.color = "#ff0000";
      setValid(0);
      document.getElementById("resetButton").disabled = true;
    }
  }

  function resetPassword(e) {
    if (valid) {
      e.preventDefault();
      console.log("done");
      window.location.href = "/passChanged";
    } else {
      e.preventDefault();
      console.log("error");
    }
  }

  return (
    <div className="flex">
      <div
        className="xxs:hidden xs:hidden sm:hidden  md:block md:w-1/2 h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${rectangleImage})` }}
      >
        <div
          className="text-center md:h-[282px] md:w-[309px] md:my-60 ml:h-[282px] ml:w-[309px] ml:my-60  lg:h-[376px] lg:w-[412px] m-auto lg:my-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${rectangleImage5})` }}
        >
          <img
            src={forgotandrew}
            className="m-auto md:pt-28 md:h-[281px] lg:pt-36 lg:h-[375px]"
            alt=""
          />
        </div>
      </div>
      <div className="xxs:w-full xs:w-full sm:w-full  md:w-1/2 h-screen ">
        <div className="my-[27vh] mx-[auto] w-[80%] text-center h-[46vh]">
          <h1 className="font-bold text-xl uppercase font-popins">
            Reset password
          </h1>
          <h2 className="text-[#525252] font-popins font-normal px-[15%]">
            Please type something you’ll remember
          </h2>
          <form onSubmit={resetPassword}>
            <div className="flex flex-col relative w-fit m-auto">
              <input
                type="password"
                name="password"
                id="password"
                onChange={checkPass}
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
            <div className="flex flex-col relative w-fit m-auto">
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                readOnly
                onChange={checkConfirm}
                placeholder="Confirm Password"
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
            <div className="flex flex-col">
              <div className="error hidden text-red-500 -mb-6" id="error"></div>
              <button
                disabled
                id="resetButton"
                className="SignInButon  font-popins mx-auto w-[218px] h-[52px] text-white rounded-2xl p-2 mt-8"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
