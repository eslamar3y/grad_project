import SimpleNav from "../../components/SimpleNav";
import DetectedImg from "../../assets/d7.png";

const DiseaseDetectionResults = () => {
  return (
    <div className="bg-[#D9D9D9] w-full h-lvh">
      <SimpleNav />
      <div className="flex">
        <div className="resultsInfo w-1/2  h-[87vh] overflow-clip">
          <div className="bg-[#585ec7] rounded-full h-[1000px] -ml-96 -mt-40 relative">
            <div className="info absolute top-[28%] left-[43%] text-white font-popins tracking-wide">
              <h2 className="text-lg">
                Disease Name: <span className="text-sm"> Aeromoniasis</span>
              </h2>
              <h2 className="text-lg">
                Disease Type: <span className="text-sm">Lorem ipsum</span>{" "}
              </h2>
              <h3 className="mt-12 text-xl">Recommendation action :</h3>
              <p className="pr-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor nisl sit amet nisi fermentum, at bibendum mauris
                pulvinar. Quisque nec nisl a elit convallis tempus. Duis
                facilisis, dolor id volutpat ultrices, quam justo interdum
                neque, vel tempus libero ligula vel libero. In hac habitasse
                platea dictumst. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Nunc vel nisi non mi
                tincidunt luctus nec nec ligula. Morbi ac efficitur justo, ut
                consectetur justo. Proin vel lacinia lacus.
              </p>
            </div>
          </div>
        </div>
        <div className="upimg w-1/2 m-auto">
          <img src={DetectedImg} alt="detect" className="w-[50%] m-auto" />
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionResults;
