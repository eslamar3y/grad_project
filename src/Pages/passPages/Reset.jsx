import { useEffect, useRef } from "react";
import rectangleImage from "../../assets/Rectangle.png";
import rectangleImage5 from "../../assets/Rectangle_6.png";
import forgotandrew from "../../assets/undraw_forgot_password.png";
import { NavLink } from "react-router-dom";

export default function Reset() {
  useEffect(() => {
    checkEmail();
  }, []);

  function checkEmail() {
    const email = localStorage.getItem("emailForForgot");
    if (email) {
      document.getElementById("displayEmail").innerHTML =
        "We’ve sent a code to <span class='font-bold'>" + email + "</span>";
    } else {
      window.location.href = "/forgot";
    }
  }

  // create references for each input field
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  // define a function to handle the change event
  const handleChange = (e, nextInput) => {
    // get the value of the current input field
    const value = e.target.value;
    // if the value is one character long, focus on the next input field
    if (value.length === 1 && nextInput) {
      nextInput.current.focus();
    }
  };

  // make time count down
  var timeleft = 59;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("timefield").innerHTML = "00:00";
      // remove class disabled-link from sendCodeAgain
      document
        .getElementById("sendCodeAgain")
        .classList.remove("disabled-link");
    } else {
      document.getElementById("timefield").innerHTML =
        "00:" + timeleft.toString();
    }
    timeleft -= 1;
  }, 1000);

  function sendAgain() {
    fetch("https://localhost:7289/api/Accounts/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("emailForForgot"),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          // Handle non-successful responses
          if (response.status === 400) {
            // For 400 Bad Request errors, parse and display the response body
            return response.text().then((errorMessage) => {
              throw new Error(` ${errorMessage}`);
            });
          } else {
            // For other errors, throw a general error message
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
        // If response is successful, parse JSON or text response
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Parse JSON response
        } else {
          return response.text(); // Parse text/plain response
        }
      })
      .then((data) => {
        // Handle the response data
        console.log(data); // Output the response data to the console
        if (data === "Password reset email sent successfully.") {
          localStorage.setItem(
            "emailForForgot",
            localStorage.getItem("emailForForgot")
          );
          window.location.href = "/reset";
        }
      })
      .catch((error) => {
        // Handle fetch errors
        console.error("Fetch error:", error.message); // Output the error message to the console
        document.getElementById("error").innerHTML = error.message;
        document.getElementById("error").style.display = "block"; // Show the error message element
      });
  }

  // make function verify when click to check if the fields are filled
  function verify(e) {
    e.preventDefault();
    const error = document.getElementById("error");
    if (
      input1.current.value == "" ||
      input2.current.value == "" ||
      input3.current.value == "" ||
      input4.current.value == ""
    ) {
      error.innerHTML = "Please fill all fields";
      error.style.display = "block";
      error.style.color = "#ff0000";
    } else {
      fetch("https://localhost:7289/api/Accounts/IsCodeEnterTrue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("emailForForgot"),
          code:
            input1.current.value +
            input2.current.value +
            input3.current.value +
            input4.current.value,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            // Handle non-successful responses
            if (response.status === 400) {
              // For 400 Bad Request errors, parse and display the response body
              return response.text().then((errorMessage) => {
                throw new Error(` ${errorMessage}`);
              });
            } else {
              // For other errors, throw a general error message
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
          }
          // If response is successful, parse JSON or text response
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json(); // Parse JSON response
          } else {
            return response.text(); // Parse text/plain response
          }
        })
        .then((data) => {
          // Handle the response data
          console.log(data); // Output the response data to the console
          if (data === true) {
            console.log("true---");
            localStorage.setItem(
              "codeForReset",
              input1.current.value +
                input2.current.value +
                input3.current.value +
                input4.current.value
            );

            window.location.href = "/resetPass";
          } else {
            error.innerHTML = "Code is incorrect";
            error.style.display = "block";
            error.style.color = "#ff0000";
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error.message); // Output the error message to the console
          document.getElementById("error").innerHTML = error.message;
          document.getElementById("error").style.display = "block"; // Show the error message element
        });
      // window.location.href = "/resetPass";
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
          <h1 className="font-bold text-3xl uppercase font-popins">
            Please check your email
          </h1>
          <h2
            className="text-[#525252] text-sm font-popins font-normal px-[15%]"
            id="displayEmail"
          ></h2>
          <form action="#">
            <div className="inline-flex items-start gap-[16px] relative mt-12 ">
              <input
                type="text"
                className="relative  lg:w-[77px] lg:h-[77px] xs:w-[60px] xs:h-[60px] rounded-[15px] border text-center px-6 border-solid border-[#d8dadc] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[40px] whitespace-nowrap focus:border-[1px] focus:border-black"
                ref={input1}
                name="inp1"
                maxLength={1}
                onChange={(e) => handleChange(e, input2)} // pass the next input as an argument
              />
              <input
                type="text"
                className="relative lg:w-[77px] lg:h-[77px] w-[77px] h-[77px] xs:w-[60px] xs:h-[60px] rounded-[15px] border text-center px-6 border-solid border-[#d8dadc] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[40px] whitespace-nowrap focus:border-[1px] focus:border-black"
                ref={input2}
                name="inp2"
                maxLength={1}
                onChange={(e) => handleChange(e, input3)}
              />
              <input
                type="text"
                className="relative lg:w-[77px] lg:h-[77px] w-[77px] h-[77px] xs:w-[60px] xs:h-[60px] rounded-[15px] border text-center px-6 border-solid border-[#d8dadc] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[40px] whitespace-nowrap focus:border-[1px] focus:border-black"
                ref={input3}
                name="inp3"
                maxLength={1}
                onChange={(e) => handleChange(e, input4)}
              />
              <input
                type="text"
                className="relative lg:w-[77px] lg:h-[77px] w-[77px] h-[77px] xs:w-[60px] xs:h-[60px] rounded-[15px] border text-center px-6 border-solid border-[#d8dadc] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[40px] whitespace-nowrap focus:border-[1px] focus:border-black"
                ref={input4}
                name="inp4"
                maxLength={1}
                onChange={(e) => handleChange(e, null)} // no next input for the last one
              />
            </div>
            <div className="flex flex-col">
              <div className="error hidden text-red-500 -mb-6" id="error"></div>
              <button
                onClick={verify}
                className="SignInButon text-md font-semibold tracking-wider [font-family:'Inter-Regular',Helvetica]  mx-auto w-[124px] h-[52px] text-white rounded-2xl p-2 mt-8"
              >
                <span className="px-7 text">Verify</span>
              </button>
              <div className="h-[20px] top-0 left-[137px] mt-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#000000b2] text-[16px] tracking-[0] leading-[20px] whitespace-nowrap">
                <NavLink
                  // to="/ff"
                  className="font-semibold text-normal disabled-link sendAgain"
                  onClick={() => {
                    sendAgain();
                  }}
                  id="sendCodeAgain"
                >
                  Send code again
                </NavLink>{" "}
                <span id="timefield"></span>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
