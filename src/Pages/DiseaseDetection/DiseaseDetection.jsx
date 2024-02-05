import SimpleNav from "../../components/SimpleNav";
import vector from "../../assets/vector.png";
import { Link } from "react-router-dom";

const DiseaseDetection = () => {
  // detect if file uploaded
  const fileUpload = (e) => {
    console.log(e.target.files[0]);
    // if uploaded file is not an image dont proceed and dont upload it
    if (e.target.files[0].type.split("/")[0] !== "image") {
      alert("Please upload an image");
      return;
    }

    // show the name of the uploaded image
    document.querySelector(".imgName").innerText = e.target.files[0].name;
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // get the name of the uploaded image
    const imgName = document.querySelector(".imgName").innerText;
    // if no image is uploaded dont proceed
    if (imgName === "") {
      alert("Please upload an image");
      return;
    }
    // if image is uploaded proceed to the next page
    window.location.href = "/disease-detection-results";
  };

  return (
    <div className="bg-[#D9D9D9] w-full h-lvh">
      <SimpleNav />
      <div className="detectBody ml-[10%] mt-[3%] rounded-xl border border-dotted border-black bg-white w-[80%] h-[60%] relative z-[0]">
        <form action="#" onSubmit={handleSubmit}>
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
              onChange={fileUpload}
            />
            <button className="SignInButon  font-popins mx-auto px-12 py-3 text-white rounded-2xl mt-4">
              Import Image
            </button>
          </p>
          <p className="text-center text-sm font-popins text-gray-500 mt-3 mb-5 imgName"></p>
          <Link to="/result">
            <button
              // type="submit"
              className="bg-[#585ec7] hover:bg-[#4d53c7]  font-popins mx-auto px-12 py-3 text-white rounded absolute -bottom-24 xs:left-[16%] md:left-[42%] "
            >
              Show results
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DiseaseDetection;
