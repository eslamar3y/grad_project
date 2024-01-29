import rectangleImage from "../../assets/Rectangle.png";
import rectangleImage5 from "../../assets/Rectangle_6.png";
import forgotandrew from "../../assets/undraw_forgot_password.png";
import stars from "../../assets/Stars.png";
import { useEffect } from "react";

export default function Forgot() {
  useEffect(() => {
    checkEmail();
  }, []);

  function checkEmail() {
    const email = localStorage.getItem("emailForForgot");
    if (!email) {
      window.location.href = "/forgot";
    }
  }

  function backToLogin() {
    localStorage.removeItem("emailForForgot");
    window.location.href = "/login";
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
          <img src={stars} className="m-auto h-[84px] mb-[36px]" alt="" />
          <h1 className="font-bold text-3xl capitalize font-popins">
            Password changed
          </h1>
          <h2 className="text-[#525252] font-popins font-normal px-[25%] text-center  ">
            Your password has been changed succesfully
          </h2>
          <div className="flex flex-col">
            <div className="error hidden text-red-500 -mb-6" id="error"></div>
            <button
              onClick={backToLogin}
              className="SignInButon  font-popins mx-auto w-[218px] h-[52px] text-white rounded-2xl p-2 mt-8"
            >
              Back to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
