import SimpleNav from "../../components/SimpleNav";
// import DetectedImg from "../../assets/d7.png";
import { useEffect, useState } from "react";

const DiseaseDetectionResults = () => {
  // get the result and the image from local storage
  // Get the result from local storage
  const [result, setResult] = useState("");

  useEffect(() => {
    const resultFromStorage = JSON.parse(localStorage.getItem("result"));
    setResult(resultFromStorage);
    // const name = resultFromStorage.getItem("name");
    // const type = resultFromStorage.getItem("type");
    // const recommendation = resultFromStorage.getItem("recommendation");
    // const score = resultFromStorage.getItem("score");

    if (!resultFromStorage) {
      // If no result is found, navigate to the detection page
      window.location.href = "/DiseaseDetection";
    } else {
      // Set the result state
      if (resultFromStorage === "No detections") {
        setResult(null);
      } else {
        setResult(resultFromStorage);
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="bg-[#D9D9D9] w-full min-h-lvh">
      <SimpleNav />
      <div className="flex lg:flex-row xs:flex-col-reverse">
        <div className="resultsInfo lg:w-1/2  h-[90.8vh] overflow-clip md:mt-0 xs:mt-10">
          <div className="bg-secondColor rounded-full h-[1000px] lg:-ml-96 lg:-mt-40 relative ">
            {result ? (
              <div className="info absolute lg:top-[28%] lg:left-[43%] md:top-[20%] md:left-[13%] xs:top-[10%] xs:left-[13%] text-white font-popins tracking-wide">
                <h2 className="text-lg xs:w-11/12">
                  Disease Name:
                  <span className="text-sm " id="resultName">
                    {" "}
                    {result.name} ({result.score})
                  </span>
                </h2>
                <h2 className="text-lg xs:w-11/12">
                  Disease Type: <span className="text-sm">{result.type}</span>{" "}
                </h2>
                <h3 className="lg:mt-12 text-xl xs:w-11/12">
                  Recommendation action :
                </h3>
                <p className="lg:pr-24 pb-10 xs:w-11/12">
                  {result.recommendation}
                </p>
              </div>
            ) : (
              <div className="info absolute lg:top-[28%] lg:left-[43%] md:top-[20%] md:left-[13%] xs:top-[10%] xs:left-[13%] text-white font-popins tracking-wide">
                <h2 className="text-lg text-center">No Detections</h2>
              </div>
            )}
          </div>
        </div>
        <div className="upimg lg:w-1/2 lg:m-auto xs:mt-10 ">
          <img
            src={result.image}
            alt="detect"
            className="w-[50%] m-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionResults;
