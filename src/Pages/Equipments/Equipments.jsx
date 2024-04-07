import Head from "../../components/SimpleNav";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Footer from "../../components/Footer";
import { useState } from "react";
import AddEquipment from "../../components/AddEquipment";
import EditEquipments from "../../components/EditEquipments";
import RemoveEquipment from "../../components/RemoveEquipment";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEquipments } from "../../Http/equipmentsHttp";
import { Hourglass } from "react-loader-spinner";


export default function Equipments() {
  const navigate = useNavigate();
  const [selectedEquipment, setSelectedEquipment] = useState({});
  const [modalState, setModalState] = useState({
    showAdd: false,
    showEdit: false,
    showRemove: false,
  });
  const { data: Equipments, isPending, isError, error } = useQuery({
    queryKey: ["equipments"],
    queryFn: ({ signal }) => getEquipments({ signal })
  })


  function handleShowModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: true }));
  }
  function handleCloseAddModal() {
    setModalState((prevState) => ({ ...prevState, showAdd: false }));
    navigate("./")
  }

  function handleShowEditModal() {
    setModalState((prevState) => ({ ...prevState, showEdit: true }));
  }
  function handleCloseEditModal() {
    setModalState((prevState) => ({ ...prevState, showEdit: false }));
    navigate("./");
  }

  function handleShowRemoveModal(existEquipment) {
    setModalState((prevState) => ({ ...prevState, showRemove: true }));
    setSelectedEquipment(() => existEquipment);
    navigate("./");
  }
  function handleCloseRemoveModal() {
    setModalState((prevState) => ({ ...prevState, showRemove: false }));
  }


  return (
    <>
      <AddEquipment
        onClose={handleCloseAddModal}
        showAddModal={modalState.showAdd}
      />

      <main className="bg-mainColor">
        <Head />

        <section className="container mx-auto pt-10 pb-10">
          <h1 className="text-4xl text-center font-semibold mb-10">
            Farm Equipments
          </h1>
          {isError && <p className="flex justify-center items-center text-2xl text-red-500 my-3">{error.info?.message || "Failed to load equipments, please try again later"}</p>}
          {isPending ?
            <div className="flex justify-center items-center">
              <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
              /></div> :
            <article className="w-3/4 mx-auto">
              <Link
                to="/equipments/add"
                className=" w-fit px-6 py-2 bg-secondColor text-white rounded-md block ms-auto mb-3"
                onClick={handleShowModal}
              >
                Add Equipment
              </Link>
              <section className="flex flex-col gap-6 mt-10">
                {Equipments ? Equipments.map((equip) => {
                  return (
                    <div
                      key={equip.id}
                      className="bg-[#585ec7a8] rounded-md p-4 text-center xl:text-left xl:flex xl:justify-between xl:items-start"
                    >
                      <div className="xl:flex xl:items-center">
                        <div className="relative">
                          <img
                            src={equip.photoPath}
                            alt="equipment"
                            className=" w-32 mx-auto p-3 rounded-full"
                          />
                          <span className="absolute top-0 left-[-5px] w-8 h-8 p-2 bg-slate-200 rounded-full shadow-md font-bold flex justify-center items-center">
                            {equip.count}
                          </span>
                        </div>
                        <div className="p-2">
                          <h2 className="text-lg font-bold text-white">
                            {equip.name}
                          </h2>
                          <p className=" text-gray-200">{equip.description}</p>
                        </div>
                      </div>
                      <ul className="flex justify-center gap-5 mt-4">
                        <li
                          className="rounded-full p-2 cursor-pointer"
                          onClick={handleShowEditModal}
                        >
                          <Link to={`edit/${equip.id}`}>
                            <MdEdit className=" text-3xl text-white" />
                          </Link>
                        </li>
                        <li
                          className="rounded-full p-2 cursor-pointer"
                          onClick={() => handleShowRemoveModal(equip)}
                        >
                          <MdDelete className=" text-3xl text-white" />
                        </li>
                      </ul>
                    </div>
                  );
                }) : <p className="text-center text-xl my-3">There are no Equipments yet</p>}
                {modalState.showEdit && (
                  <EditEquipments
                    onClose={handleCloseEditModal}
                    showEditModal={modalState.showEdit}
                  />
                )}
                {modalState.showRemove && (
                  <RemoveEquipment
                    selectedEquipment={selectedEquipment}
                    onClose={handleCloseRemoveModal}
                    showRemoveModal={modalState.showRemove}
                  />
                )}
              </section>
            </article>
          }
        </section>

        <Footer />
      </main>
    </>
  );
}