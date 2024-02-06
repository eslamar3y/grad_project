import SimpleNav from "../../components/SimpleNav";
import FImg from "../../assets/d1.png";

const DiseaseInfo = () => {
  return (
    <div className="bg-[#d9d9d9] w-full md:min-h-screen">
      <SimpleNav />
      <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row font-popins ">
        <div className="pr-0 md:w-3/4 pt-12 md:pl-28 xs:pl-8 xs:pr-8 xs:pb-10 sm:pl-8 sm:pr-8 sm:pb-10">
          <h1 className="text-xl font-bold text-center pl-32">Aeromoniasis</h1>
          <p className="">
            Fish Aeromoniasis, also known as Aeromonas infection, is a disease
            caused by bacteria belonging to the genus Aeromonas. Aeromonas are
            Gram-negative, rod-shaped bacteria that are widely distributed in
            aquatic environments. There are several species within the genus,
            with Aeromonas hydrophila, Aeromonas salmonicida, and Aeromonas
            veronii being commonly associated with fish infections.
          </p>
          <h2 className="font-medium text-lg mt-2 ">Causative Agents :</h2>
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
          <h2 className="font-medium text-lg mt-2 ">Transmission :</h2>
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
          <h2 className="font-medium text-lg mt-2 ">Clinical Signs :</h2>
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
          <h2 className="font-medium text-lg mt-2 ">Diagnosis :</h2>
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
          <h2 className="font-medium text-lg mt-2 ">Treatment :</h2>
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
          <h2 className="font-medium text-lg mt-2 ">
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
          <h2 className="font-medium text-lg mt-2 ">Impact on Aquaculture :</h2>
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
        <div className="md:w-1/4 pt-28 ">
          <img src={FImg} alt="" className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default DiseaseInfo;
