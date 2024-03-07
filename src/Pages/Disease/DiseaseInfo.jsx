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
          <p className="">
            {diseaseDetails.description}
          </p>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Causative Agents :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Aeromonas hydrophila: This species is one of the most common
              causes of Aeromoniasis in fish, particularly in warm water
              species.
            </li>
            <li>
              Aeromonas salmonicida: This bacterium is known to infect salmonids
              (such as salmon and trout) and is a major concern in aquaculture.
            </li>
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">Transmission :</h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Aeromoniasis is highly contagious among fish and can be
              transmitted through direct contact, contaminated water, or
              ingestion of infected tissues.
            </li>
            <li>
              Stressful conditions, poor water quality, and overcrowding can
              contribute to the spread of the disease.
            </li>
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Clinical Signs :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Clinical signs of Aeromoniasis vary depending on the species of
              fish, the infecting Aeromonas strain, and environmental factors.
            </li>
            <li>
              Common symptoms include skin lesions, ulcers, fin rot, swollen
              abdomen, hemorrhages, and lethargy.
            </li>
            <li>
              Fish may exhibit abnormal swimming behavior and loss of appetite.
            </li>
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">Diagnosis :</h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Diagnosis is often based on clinical signs, post-mortem
              examinations, and laboratory tests.
            </li>
            <li>
              Bacterial cultures from affected tissues, such as skin, kidney, or
              liver, can confirm the presence of Aeromonas species.
            </li>
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">Treatment :</h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Antibiotics are commonly used to treat Aeromoniasis. Common
              choices include florfenicol, oxytetracycline, and enrofloxacin.
            </li>
            <li>
              Treatment may be administered through medicated feed, bath
              treatments, or injections, depending on the severity of the
              infection.
            </li>
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Prevention and Control :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Prevention involves maintaining good water quality, avoiding
              overcrowding, and minimizing stressors.
            </li>
            <li>
              Quarantine new fish before introducing them to existing
              populations.
            </li>
            <li>
              Vaccination strategies may be employed in aquaculture settings to
              reduce the risk of Aeromonas infections.
            </li>
          </ul>
          <h2 className="font-medium text-lg mt-2 firstinfo">
            Impact on Aquaculture :
          </h2>
          <ul className="list-disc ml-9 text-sm">
            <li>
              Aeromoniasis can have significant economic impacts on aquaculture
              by causing mortality, reduced growth rates, and decreased product
              quality.
            </li>
            <li>
              The disease can spread rapidly in aquaculture facilities, leading
              to substantial losses if not properly managed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiseaseInfo;


export async function diseaseDetailsLoader({ params }) {
  const diseaseId = params.diseaseId;
  const response = await fetch(`https://localhost:7289/api/Disease/${diseaseId}`);

  if (!response.ok) {
    throw json({ message: "can't access expert details" }, { status: 500 });
  }
  else {
    const data = response.json();
    return data;
  }
}