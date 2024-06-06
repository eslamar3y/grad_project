import AdminSidebar from "../../components/adminSidebar";
import AdminNav from "../../components/adminNav";
import { useEffect, useState } from "react";
import AddDisease from "../../components/AddDisease";
import { FaPlusCircle } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner";

const DiseasesPage = () => {
  const [diseases, setDiseases] = useState([]);

  // const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [ResearchQuery, setReSearchQuery] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state for loading indicator

  const [isAdded, setIsAdded] = useState(false);
  const [modalState, setModalState] = useState({
    showAdd: false,
  });

  useEffect(() => {
    fetch("https://localhost:7289/api/Disease?PageSize=50")
      .then((response) => {
        // console.log(response.headers);
        return response.json();
      })
      .then((data) => {
        setDiseases(data);
        setIsLoading(false); // Data fetched, set isLoading to false
        console.log(diseases);
      });
  }, [isAdded, ResearchQuery]);

  function handleShowModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: true }));
  }

  function handleCloseAddModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: false }));
  }

  function handleAdd() {
    setIsAdded(true);
    handleCloseAddModal();
  }

  function searchDiseases(query) {
    if (typeof query !== "string") {
      setDiseases(query);
    }
    if (query === "") {
      setReSearchQuery(!ResearchQuery);
    }
  }

  // function searchDiseases(query) {
  //   setSearchQuery(query);
  //   console.log("searchQuery");
  //   console.log(searchQuery);
  // }

  // useEffect(() => {
  //   // Perform the search when searchQuery changes
  //   if (searchQuery !== "") {
  //     searchDiseases(searchQuery);
  //   }
  // }, [searchQuery]);

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
            forsearch={true}
          />
          {/* Your main content here */}
          <div className=" overflow-hidden  sm:rounded-lg">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 ">
              {isLoading ? ( // Check if data is loading
                <LoadingSpinner />
              ) : diseases.length > 0 ? (
                diseases.map((disease) => (
                  <div
                    className="bg-white rounded-lg shadow-md w-[230px] h-[314px]"
                    key={disease.id}
                  >
                    <img
                      src={disease.photoPath}
                      alt={disease.name}
                      className="w-full h-56 object-cover rounded-t-md p-0"
                    />
                    <h3 className="text-xl font-bold mt-2 px-4">
                      {disease.name.split(" ")[0]}...
                    </h3>
                    <p className="text-gray-500 px-4 pb-4">
                      {/* {disease.description.slice(0, 40)}... */}
                      {/* {disease.description.split(" ")[3]} */}
                      {disease.description.split(" ").slice(0, 5).join(" ")}...
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center col-span-5">
                  <h2 className="text-2xl font-bold">No diseases found</h2>
                </div>
              )}
              {/* Add new disease button */}
              <div className=" rounded-lg  w-[230px] h-[314px] flex items-center justify-center cursor-pointer">
                {isLoading ? ( // Check if data is loading
                  <div className="text-center col-span-5"></div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DiseasesPage;
