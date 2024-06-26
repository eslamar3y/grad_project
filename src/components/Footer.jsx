import footerImg from "../assets/footer.png";
import logo from "../assets/siteLogo.png";
import googlePlay from "../assets/google-play.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { SendFeedback } from "../Http/expertsHttp";
import { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function Footer() {
  const [feedbackSended, setFeedbackSended] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["send-feedback"],
    mutationFn: SendFeedback,
    onSuccess: () => {
      setFeedbackSended(true);
      setTimeout(() => { setFeedbackSended(false); }, 2000);
    }
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFeedbackData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutate(feedbackData);
    setFeedbackData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  }

  return (
    <footer className="w-full overflow-x-hidden pt-80 ">
      <div className="min-h-[600px] bg-secondColor rounded-t-[50%] me-[-350px] ms-[-350px] p-6">
        <div className="container mx-auto px-2 lg:px-8 flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <section className="bg-[#F0EDED] p-7 rounded-lg relative bottom-20 w-[350px] mx-auto xl:mx-0">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {feedbackSended &&
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmarkDoneCircle className=" text-secondColor text-4xl" />
                  <p className=" font-popins font-semibold">Sended Successfully</p>
                </div>
              }
              <input
                type="text"
                name="name"
                id="userName"
                placeholder="Name"
                onChange={handleChange}
                value={feedbackData.name}
                className="border p-2 rounded outline-none"
                required
              />
              <input
                type="email"
                name="email"
                id="userMail"
                placeholder="Email"
                onChange={handleChange}
                value={feedbackData.email}
                className="border p-2 rounded outline-none"
                required
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={feedbackData.phone}
                className="border p-2 rounded outline-none"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
                onChange={handleChange}
                value={feedbackData.message}
                className="border p-2 rounded resize-none outline-none"
                required
              ></textarea>
              <div className="group-input flex gap-2">
                <input type="checkbox" name="accept" id="accept" />
                <label htmlFor="accept" className="text-sm font-semibold">
                  I have read and accept the privacy policy.
                </label>
              </div>
              <button type="submit" className=" bg-secondColor px-8 py-3 text-white rounded-md" disabled={isPending}>
                {isPending ? "loading..." : "Send Message"}
              </button>
              {isError && <p>{error.info?.message || "Faild to send feedback, please try again later."}</p>}
            </form>
          </section>
          <section className="flex flex-col items-center gap-10">
            <img className="w-[201px]" src={logo} alt="Logo" />
            <p className=" text-sm">© 2023 FishShield. All Rights Reserved.</p>
            <ul className="flex gap-5">
              <li className="w-[50px] h-[50px] border border-slate-400 rounded-xl text-white flex justify-center items-center">
                <FaFacebookF className="text-2xl" />
              </li>
              <li className="w-[50px] h-[50px] border border-slate-400 rounded-xl text-white flex justify-center items-center">
                <FaLinkedinIn className="text-2xl" />
              </li>
              <li className="w-[50px] h-[50px] border border-slate-400 rounded-xl text-white flex justify-center items-center">
                <FaTwitter className="text-2xl" />
              </li>
            </ul>
          </section>
          <section className="relative mx-auto xl:mx-0 xl:bottom-32 ">
            <img
              className=" hidden xl:block w-[300px] h-[300px] mx-auto object-contain p-5 border-transparent m-5 rounded-full shadow-blur"
              src={footerImg}
              alt="footer image"
            />
            <div className="flex flex-col md:flex-row gap-8 mt-20">
              <div className="flex gap-4 items-center bg-white px-8 py-4 rounded-2xl">
                <FaApple className="text-4xl" />
                <div>
                  <p className="text-sm">Download on the</p>
                  <h2 className="font-bold">App Store</h2>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white px-8 py-4 rounded-2xl">
                <img src={googlePlay} alt="google play" />
                <div>
                  <p className="text-sm">Download on the</p>
                  <h2 className="font-bold">App Store</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}