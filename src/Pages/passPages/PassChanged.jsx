import rectangleImage from "../../assets/Rectangle.png";
import rectangleImage5 from "../../assets/Rectangle_6.png";
import forgotandrew from "../../assets/undraw_completing.png";
import stars from "../../assets/Stars.png";
import { NavLink } from "react-router-dom";

export default function Forgot() {
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
            className="m-auto  md:h-[281px] pt-9 lg:h-[376px]"
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
            <NavLink to="/login">
              <button className="SignInButon  font-popins mx-auto w-[218px] h-[52px] text-white rounded-2xl p-2 mt-8">
                Back to login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
