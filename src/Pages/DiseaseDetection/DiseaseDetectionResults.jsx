import SimpleNav from "../../components/SimpleNav";
import DetectedImg from "../../assets/d7.png";

const DiseaseDetectionResults = () => {
  return (
    <div className="bg-[#D9D9D9] w-full min-h-lvh">
      <SimpleNav />
      <div className="flex lg:flex-row xs:flex-col-reverse">
        <div className="resultsInfo lg:w-1/2  h-[90.8vh] overflow-clip md:mt-0 xs:mt-10">
          <div className="bg-[#585ec7] rounded-full h-[1000px] lg:-ml-96 lg:-mt-40 relative ">
            <div className="info absolute lg:top-[28%] lg:left-[43%] md:top-[20%] md:left-[13%] xs:top-[10%] xs:left-[13%] text-white font-popins tracking-wide">
              <h2 className="text-lg xs:w-11/12">
                Disease Name: <span className="text-sm "> Aeromoniasis</span>
              </h2>
              <h2 className="text-lg xs:w-11/12">
                Disease Type: <span className="text-sm">Lorem ipsum</span>{" "}
              </h2>
              <h3 className="lg:mt-12 text-xl xs:w-11/12">
                Recommendation action :
              </h3>
              <p className="lg:pr-24 pb-10 xs:w-11/12">
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
        <div className="upimg lg:w-1/2 lg:m-auto xs:mt-10 ">
          <img src={DetectedImg} alt="detect" className="w-[50%] m-auto " />
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionResults;
