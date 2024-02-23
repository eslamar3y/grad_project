import { useState } from "react";
import SimpleNav from "../../components/SimpleNav";
import vector from "../../assets/vector.png";
import Checkmark from "../../assets/Checkmark.png";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileUpload = (e) => {
    const file = e.target.files[0];
    // if uploaded file is not an image dont proceed and dont upload it
    if (!file || file.type.split("/")[0] !== "image") {
      alert("Please upload an image");
      return;
    }

    setSelectedImage(file);

    // show the name of the uploaded image
    const imgNameElement = document.querySelector(".imgName");
    imgNameElement.innerText = file.name;

    // add checkmark image beside the name of the uploaded image
    const checkmark = document.createElement("img");
    checkmark.src = Checkmark;
    checkmark.alt = "checkmark";
    checkmark.className = "h-5 inline";
    imgNameElement.appendChild(checkmark);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if no image is uploaded dont proceed
    if (!selectedImage) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    // fetch the result of the image sent with post to https://detect-disease-api.onrender.com/detectApi and display the result key "image"
    fetch("https://detect-disease-api.onrender.com/detectApi", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // display the result of the image
        // alert(data.Detection);
        // store the result and the image in local storage
        localStorage.setItem("result", data.Detection);

        // navigate to the result page
        window.location.href = "/Result";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#D9D9D9] w-full h-lvh">
      <SimpleNav />
      <div className="detectBody ml-[10%] mt-[3%] rounded-xl border border-dotted border-black bg-white w-[80%] h-[60%] relative z-[0]">
        <form onSubmit={handleSubmit}>
          <img
            src={vector}
            alt=""
            className="xs:h-[90px] xs:mt-24 md:h-[130px] mx-auto mt-[8%] hover:opacity-60"
          />
          <p className="text-center font-popins text-gray-500 mt-2">
            Drag and drop image here
          </p>
          <p className="text-center font-popins text-gray-500 mt-6">
            OR
            <br />
            <input
              type="file"
              className="opacity-0 absolute top-0 left-0 w-[100%] h-[100%] cursor-pointer"
              name="image"
              onChange={fileUpload}
            />
            <button className="SignInButon  font-popins mx-auto px-12 py-3 text-white rounded-2xl mt-4">
              Import Image
            </button>
          </p>
          <p className="text-center text-sm font-popins text-gray-500 mt-3 mb-5 imgName"></p>
          <button className="bg-[#585ec7] hover:bg-[#4d53c7]  font-popins mx-auto px-12 py-3 text-white rounded absolute -bottom-24 xs:left-[16%] md:left-[42%] ">
            Show results
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiseaseDetection;
