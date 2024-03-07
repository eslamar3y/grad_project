import SimpleNav from "../../components/SimpleNav";
import { json, useLoaderData } from "react-router-dom";

const ExpertInfo = () => {
  const expertDetails = useLoaderData();

  return (
    <div className="bg-[#d9d9d9] w-full md:h-lvh">
      <SimpleNav />
      <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row font-popins ">
        <div className="md:w-3/4 pt-20 md:pl-28 xs:pl-8 xs:pr-8 xs:pb-10 sm:pl-8 sm:pr-8 sm:pb-10">
          <h1 className="text-lg">
            <span className="font-medium">Name:</span> {expertDetails.userName}
          </h1>
          <h1 className="text-lg mt-1">
            <span className="font-medium">Age:</span> {expertDetails.birthDate}
          </h1>
          <h1 className="text-lg mt-1">
            <span className="font-medium">Mobile:</span> {expertDetails.phoneNumber}
          </h1>
          <h1 className="text-lg mt-1">
            <span className="font-medium">Email:</span> {expertDetails.email}
          </h1>
          <h1 className="text-lg mt-1 tracking-wider">
            <span className="font-medium">Professional information :</span>
          </h1>
          <p className="w-11/12 xs:text-justify sm:text-justify">
            {expertDetails.moreInfo}
          </p>
        </div>
        <div className="md:w-1/4 pt-20 ">
          <img src={expertDetails.personalPhoto} alt="doc name" className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default ExpertInfo;


export async function expertDetailsLoader({ params }) {
  const expertId = params.expertId;
  const response = await fetch(`https://localhost:7289/api/Accounts/doctor/${expertId}`);

  if (!response.ok) {
    throw json({ message: "can't access expert details" }, { status: 500 });
  }
  else {
    const data = response.json();
    return data;
  }
}
