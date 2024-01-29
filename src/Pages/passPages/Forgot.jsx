import rectangleImage from "../../img/Rectangle.png";
import rectangleImage5 from "../../img/Rectangle_6.png";
import forgotandrew from "../../img/undraw_forgot_password.png";
const svgContentEmail = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="email"><g data-name="Layer 2"><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" data-name="email"></path></g></svg>`;

// make when click on send code button go to reset password page

function sendCode(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email == "") {
    error.innerHTML = "Email cannot be empty";
    error.style.display = "block";
    error.style.color = "#ff0000";
  } else {
    if (email.match(pattern)) {
      // error.innerHTML = "Email is valid";
      // error.style.display = "block";
      // error.style.color = "#02b402";
      // store email in local storage
      localStorage.setItem("emailForForgot", email);
      window.location.href = "/reset";
    } else {
      error.innerHTML = "Please enter valid email";
      error.style.display = "block";
      error.style.color = "#ff0000";
    }
  }
}

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
            className="m-auto md:pt-28 md:h-[281px] lg:pt-36 lg:h-[375px]"
            alt=""
          />
        </div>
      </div>
      <div className="xxs:w-full xs:w-full sm:w-full  md:w-1/2 h-screen ">
        <div className="my-[27vh] mx-[auto] w-[80%] text-center h-[46vh]">
          <h1 className="font-bold text-xl uppercase font-popins">
            Forgot Password
          </h1>
          <h2 className="text-[#525252] font-popins font-normal px-[15%]">
            Don’t worry! It happens. Please enter the email associated with your
            account.
          </h2>
          <form action="#">
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
            <div className="flex flex-col">
              <div className="error hidden text-red-500 -mb-6" id="error"></div>
              <button
                onClick={sendCode}
                className="SignInButon text-xs font-semibold font-popins mx-auto w-[124px] h-[52px] text-white rounded-2xl p-2 mt-8"
              >
                Send code
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-fit h-fit font-normal text-sm font-popins  tracking-[0.84px] mx-auto mt-8 text-end ">
                Remember Password?{" "}
                <a href="/login" className="text-[#585EC7] font-semibold">
                  Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
