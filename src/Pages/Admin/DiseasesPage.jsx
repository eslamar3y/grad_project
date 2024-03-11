import AdminSidebar from "../../components/adminSidebar";
import AdminNav from "../../components/adminNav";
import { useState } from "react";
import AddDisease from "../../components/AddDisease";
import { FaPlusCircle } from "react-icons/fa";

const DiseasesPage = () => {
  const diseases = [
    {
      id: Math.random() * 100,
      name: "Parasitic diseases",
      type: "typeOne",
      image: "https://placehold.co/250x242",
      info: "Parasitic diseases are caused by protozoa, helminths, and arthropods. These diseases are common in tropical and subtropical regions and are transmitted through contaminated food and water, as well as by insects. The most common parasitic diseases are malaria, schistosomiasis, and leishmaniasis.",
    },
    {
      id: Math.random() * 100,
      name: "ICHTHYOPHTHIRIUS",
      type: "typeTwo",
      image: "https://placehold.co/250x242",
      info: "Ichthyophthirius multifiliis, commonly known as ich, is a parasitic ciliate that causes a disease called ichthyophthiriasis in freshwater fish. It is one of the most common and persistent diseases in fish.",
    },
    {
      id: Math.random() * 100,
      name: "gill diseases",
      type: "typeThree",
      image: "https://placehold.co/250x242",
      info: "Gill diseases are caused by a variety of pathogens, including bacteria, viruses, and parasites. These diseases are common in fish farms and can cause significant economic losses. The most common gill diseases are caused by Flavobacterium columnare, Aeromonas salmonicida, and Saprolegnia.",
    },
    {
      id: Math.random() * 100,
      name: "Saprolegnia",
      type: "typeFour",
      image: "https://placehold.co/250x242",
      info: "Saprolegnia is a genus of water molds that are commonly found in freshwater environments. These molds are opportunistic pathogens that can infect a wide range of fish species. Saprolegniasis is a common disease in fish farms and can cause significant economic losses.",
    },
    {
      id: Math.random() * 100,
      name: "EUS",
      type: "typeFive",
      image: "https://placehold.co/250x242",
      info: "EUS is a parasitic disease caused by the trematode Eustrongylides sp. The disease is common in fish farms and can cause significant economic losses. The most common hosts of Eustrongylides sp. are freshwater fish, such as carp, catfish, and tilapia.",
    },
  ];

  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [Diseases, setDiseases] = useState(diseases);
  const [modalState, setModalState] = useState({
    showAdd: false,
    showEdit: false,
    showRemove: false,
  });

  function handleShowModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: true }));
  }

  function handleCloseAddModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: false }));
  }

  function handleAdd(newDisease) {
    setDiseases((prevDiseases) => [...prevDiseases, newDisease]);
  }

  function searchDiseases(query) {
    setSearchQuery(query);
  }

  function filteredDiseases() {
    let filtered = diseases;
    if (filter) {
      filtered = filtered.filter(
        (disease) => disease.type.toLowerCase() === filter.toLowerCase()
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((disease) =>
        disease.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }

  return (
    <>
      <AddDisease
        onAdd={handleAdd}
        onClose={handleCloseAddModal}
        showAddModal={modalState.showAdd}
      />

      <div className="min-h-screen bg-gray-100 flex font-popins">
        <AdminSidebar />
        {/* Main content */}
        <main className="flex-1 p-4">
          <AdminNav
            searchQuery={searchQuery}
            handleSearchChange={searchDiseases}
          />
          {/* Your main content here */}
          <div className=" overflow-hidden  sm:rounded-lg">
            <div className="grid grid-cols-5 gap-8 ">
              {filteredDiseases().map((disease) => (
                <div
                  className="bg-white rounded-lg shadow-md w-[230px] h-[314px]"
                  key={disease.id}
                >
                  <img
                    src={disease.image}
                    alt={disease.name}
                    className="w-full h-56 object-cover rounded-t-md p-0"
                  />
                  <h3 className="text-xl font-bold mt-2 px-4">
                    {disease.name}
                  </h3>
                  <p className="text-gray-500 px-4 pb-4">
                    {disease.info.slice(0, 40)}...
                  </p>
                </div>
              ))}
              {/* Add new disease button */}
              <div className=" rounded-lg  w-[230px] h-[314px] flex items-center justify-center cursor-pointer">
                <div
                  className=" rounded-lg  w-[230px] h-[314px] flex items-center justify-center"
                  onClick={handleShowModal}
                >
                  <div className="flex flex-col items-center">
                    <h3 className="text-4xl text-gray-300 hover:text-gray-600 transition-colors duration-300">
                      <FaPlusCircle />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DiseasesPage;
