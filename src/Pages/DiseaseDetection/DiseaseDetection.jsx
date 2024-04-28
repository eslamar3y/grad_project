import { useState, useEffect } from "react";
import SimpleNav from "../../components/SimpleNav";
import vector from "../../assets/vector.png";
import Checkmark from "../../assets/Checkmark.png";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Add event listener for paste events
    document.addEventListener("paste", handlePaste);
    return () => {
      // Cleanup: remove event listener
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  const fileUpload = (file) => {
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

  const handlePaste = (event) => {
    // Get the clipboard data
    const items = (event.clipboardData || event.originalEvent.clipboardData)
      .items;

    // Loop through clipboard items
    for (let index in items) {
      let item = items[index];

      // Check if item type is an image
      if (item.type.indexOf("image") !== -1) {
        let blob = item.getAsFile();
        fileUpload(blob);
        break; // Stop processing after handling one image
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if no image is uploaded dont proceed
    if (!selectedImage) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("ImageForDetection", selectedImage);

    const userId = JSON.parse(localStorage.getItem("userData")).id;

    fetch(`https://localhost:7289/api/${userId}/Detects`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("resultT", data.Detection);

        // Save the image, name, score, type, and recommendation in local storage
        const result = {
          image: data.fishPhoto,
          name: data.nameOfDisFromAIModel,
          score: data.score,
          type: data.disease.type,
          recommendation: data.disease.recommandationActions[0],
        };
        localStorage.setItem("result", JSON.stringify(result));

        // navigate to the result page
        window.location.href = "/Result";
        // redirect('/Result');
      })
      .catch((err) => {
        console.log("error");
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
              onChange={(e) => fileUpload(e.target.files[0])}
            />
            <button className="SignInButon font-popins mx-auto px-12 py-3 text-white rounded-2xl mt-4">
              Import Image
            </button>
          </p>
          <p className="text-center text-sm font-popins text-gray-500 mt-3 mb-5 imgName"></p>
          <button className="bg-secondColor hover:bg-secondColor/80  font-popins mx-auto px-12 py-3 text-white rounded absolute -bottom-24 xs:left-[16%] md:left-[42%] ">
            Show results
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiseaseDetection;
