import SimpleNav from "../../components/SimpleNav";
import DocImg from "../../assets/D111.png";

const ExpertInfo = () => {
  return (
    <div className="bg-[#d9d9d9] w-full md:h-lvh">
      <SimpleNav />
      <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row font-popins ">
        <div className="md:w-3/4 pt-20 md:pl-28 xs:pl-8 xs:pr-8 xs:pb-10 sm:pl-8 sm:pr-8 sm:pb-10">
          <h1 className="text-lg">
            <span className="font-medium">Name:</span> John
          </h1>
          <h1 className="text-lg mt-1">
            <span className="font-medium">Age:</span> 40
          </h1>
          <h1 className="text-lg mt-1">
            <span className="font-medium">Mobile:</span> +12027953213
          </h1>
          <h1 className="text-lg mt-1">
            <span className="font-medium">Email:</span> john926@gmail.com
          </h1>
          <h1 className="text-lg mt-1 tracking-wider">
            <span className="font-medium">Professional information :</span>
          </h1>
          <p className="w-11/12 xs:text-justify sm:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            nisl sit amet nisi fermentum, at bibendum mauris pulvinar. Quisque
            nec nisl a elit convallis tempus. Duis facilisis, dolor id volutpat
            ultrices, quam justo interdum neque, vel tempus libero ligula vel
            libero. In hac habitasse platea dictumst. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nunc vel nisi non mi tincidunt luctus nec nec ligula. Morbi ac
            efficitur justo, ut consectetur justo. Proin vel lacinia lacus. Sed
            vel justo hendrerit, aliquam justo et, facilisis lacus. Curabitur at
            justo vitae felis feugiat fringilla. Vivamus tempus tincidunt ex,
            non hendrerit lacus mattis ac. Sed euismod, eros in posuere
            facilisis, ex velit efficitur quam, vitae ullamcorper dolor mi in
            nisl. Quisque vel neque orci. Vivamus id pharetra libero, nec
            elementum sapien. Curabitur sed euismod ligula.
          </p>
        </div>
        <div className="md:w-1/4 pt-20 ">
          <img src={DocImg} alt="" className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default ExpertInfo;
