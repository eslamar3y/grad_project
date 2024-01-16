import rectangleImage from "../../img/Rectangle.png";
import rectangleImage5 from "../../img/Rectangle_5.png";
import registerandrew from "../../img/undraw_mobile_payments.png";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";
const svgContentUsername = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#1C1C1C"/>
  </svg>
`;
const svgContentEmail = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email"><g data-name="Layer 2"><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" data-name="email"></path></g></svg>`;
// const svgContentEmail = `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email"><path fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path></svg>
// `;

const svgContentPassword = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z" fill="#1C1C1C"/>
</svg>
`;

export default function Register() {
  return (
    <div className="flex">
      <div
        className="xxs:hidden xs:hidden sm:hidden  md:block md:w-1/2 h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${rectangleImage})` }}
      >
        <div
          className="text-center md:h-[393px] md:w-[309px] md:my-44 ml:h-[393px] ml:w-[309px] ml:my-44  lg:h-[524px] lg:w-[412px] m-auto lg:my-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${rectangleImage5})` }}
        >
          <img src={registerandrew} className="m-auto pt-32" alt="" />
        </div>
      </div>
      <div className="xxs:w-full xs:w-full sm:w-full  md:w-1/2 h-screen ">
        <div className="my-[6vh] mx-[auto] w-[80%] text-center h-[80vh]">
          <h1 className="font-bold text-xl uppercase font-popins">Sign Up</h1>
          <h2 className="text-[#525252] font-popins font-normal">
            Welcome to FishShield
          </h2>
          <form action="#">
            <div className="flex flex-col relative w-fit m-auto">
              <input
                type="text"
                name="username"
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
            <div className="flex flex-col relative w-fit m-auto">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
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
            <div className="flex flex-col relative w-fit m-auto">
              <input
                type="password"
                name="password"
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
            <div className="flex flex-col relative w-fit m-auto">
              <input
                type="password"
                name="cpassword"
                id="cpassword"
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
              <button className="SignInButon text-xs font-semibold font-popins mx-auto w-[124px] h-[52px] text-white rounded-2xl p-2 mt-8">
                Sign Up
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-fit h-fit font-normal text-sm font-popins  tracking-[0.84px] mx-auto mt-8 text-end ">
                Already have an account?{" "}
                <a href="/login" className="text-[#585EC7] font-semibold">
                  Sign In
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              {/* or sign in with (google, facebook) */}
              <p className="text-sm  font-normal font-popins tracking-[0.84px] bg-white z-10 w-[30%] mx-auto mt-8 -mb-7 text-center ">
                Or sign in with
              </p>
              <div className="flex flex-col border-t-2 border-gray-200 xs:w-[260px] md:w-[364px] mx-auto pt-10 justify-center mt-4">
                <button className="flex justify-center items-center xs:w-[260px] md:w-[364px] h-[52px] border-2 border-gray-200  rounded-2xl p-2">
                  <img src={google} className="mr-2" alt="" />
                  Signup with &nbsp;<span className="font-bold"> google</span>
                </button>
                <button className="flex justify-center items-center xs:w-[260px] md:w-[364px] h-[52px] border-2 border-gray-200 mt-4 rounded-2xl p-2">
                  <img src={facebook} className="mr-2" alt="" />
                  Signup with &nbsp;<span className="font-bold">facebook</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
