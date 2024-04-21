import SimpleNav from "../../components/SimpleNav";
import "./DiseaseInfo.css";
import { useEffect } from "react";
import { json, useLoaderData } from "react-router-dom";

const DiseaseInfo = () => {
  const diseaseDetails = useLoaderData();
  useEffect(() => {
    const firstInfoElements = document.querySelectorAll(".firstinfo");
    firstInfoElements.forEach((element, index) => {
      element.dataset.index = index + 1;
    });
  }, []);

  return (
    <div className="bg-[#d9d9d9] w-full md:min-h-screen">
      <SimpleNav />
      {/* <div className=" xs:flex-col-reverse sm:flex-col-reverse md:flex-row font-popins "> */}
      <div className="  font-popins -mb-64">
        <div className=" pt-8 ">
          <img
            src={diseaseDetails.photoPath}
            alt="disease image"
            className="m-auto w-[682px] h-[366px] md:w-[682px] md:h-[366px] xs:w-[300px] xs:h-[200px] sm:w-[500px] sm:h-[300px] mb-4"
          />
        </div>
        {/* <div className=" ml-32 mr-44 pr-0  pt-12 md:pl-28 xs:pl-8 xs:pr-8 xs:pb-10 sm:pl-8 sm:pr-8 sm:pb-10"> */}
        <div className=" lg:mx-56 pb-10  md:mx-32 sm:mx-16 xs:mx-9">
          <h1 className="text-2xl font-bold mb-3">{diseaseDetails.name}</h1>
          <p className="">{diseaseDetails.description}</p>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Causative Agents :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            {/* check the length of causativeAgents list */}
            {diseaseDetails.causativeAgents.map((causativeAgent, index) => (
              <li key={index}>{causativeAgent}</li>
            ))}
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">Treatment :</h2>
          <ul className="list-disc ml-9 text-sm">
            {diseaseDetails.treatment.map((treat, index) => (
              <li key={index}>{treat}</li>
            ))}
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Clinical Signs :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            {diseaseDetails.clinicalSigns.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">Diagnosis :</h2>
          <ul className="list-disc ml-9 text-sm">
            {diseaseDetails.diagnosis.map((diag, index) => (
              <li key={index}>{diag}</li>
            ))}
          </ul>

          <h2 className="font-medium text-lg mt-2 firstinfo">
            Prevention and Control :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            {diseaseDetails.preventionAndControlls.map((prevention, index) => (
              <li key={index}>{prevention}</li>
            ))}
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Impact on Aquaculture :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            {diseaseDetails.impactOnAquacultures.map((impact, index) => (
              <li key={index}>{impact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiseaseInfo;

export async function diseaseDetailsLoader({ params }) {
  const diseaseId = params.diseaseId;
  const response = await fetch(
    `https://localhost:7289/api/Disease/${diseaseId}`
  );

  if (!response.ok) {
    throw json({ message: "can't access expert details" }, { status: 500 });
  } else {
    const data = response.json();
    return data;
  }
}
