import { MdOutlineClose } from "react-icons/md";
import Modal from "./Modal";
import { useCallback, useState } from "react";

export default function AddDisease({ onAdd, onClose, showAddModal }) {
  const [newDisease, setNewDisease] = useState({
    PhotoPath: null,
    Name: "",
    Type: "",
    Description: "",
    RecommandationActions: [],
    CausativeAgents: [],
    ClinicalSigns: [],
    Diagnosis: [],
    Treatment: [],
    PreventionAndControlls: [],
    ImpactOnAquacultures: [],
  });

  const [error, setError] = useState("");

  const handleChange = useCallback((input, value) => {
    setNewDisease((prevDisease) => ({
      ...prevDisease,
      [input]: value,
    }));
    setError(""); // Clear error when input changes
  }, []);

  function validateForm() {
    if (!newDisease.PhotoPath) {
      setError("Photo Path is required.");
      return false;
    } else if (!newDisease.Name) {
      setError("Disease Name is required.");
      return false;
    } else if (!newDisease.Type) {
      setError("Type is required.");
      return false;
    } else if (!newDisease.Description) {
      setError("Description is required.");
      return false;
    } else if (newDisease.RecommandationActions.length === 0) {
      setError("Recommandation Actions is required.");
      return false;
    } else if (newDisease.CausativeAgents.length === 0) {
      setError("Causative Agents is required.");
      return false;
    } else if (newDisease.ClinicalSigns.length === 0) {
      setError("Clinical Signs is required.");
      return false;
    } else if (newDisease.Diagnosis.length === 0) {
      setError("Diagnosis is required.");
      return false;
    } else if (newDisease.Treatment.length === 0) {
      setError("Treatment is required.");
      return false;
    } else if (newDisease.PreventionAndControlls.length === 0) {
      setError("Prevention And Controlls is required.");
      return false;
    } else if (newDisease.ImpactOnAquacultures.length === 0) {
      setError("Impact On Aquacultures is required.");
      return false;
    }
    return true;
  }

  function AddDisease() {
    if (validateForm()) {
      const formData = new FormData();
      formData.append("PhotoPath", newDisease.PhotoPath);
      formData.append("Name", newDisease.Name);
      formData.append("Type", newDisease.Type);
      formData.append("Description", newDisease.Description);
      formData.append(
        "RecommandationActions",
        JSON.stringify(newDisease.RecommandationActions)
      );
      formData.append(
        "CausativeAgents",
        JSON.stringify(newDisease.CausativeAgents)
      );
      formData.append(
        "ClinicalSigns",
        JSON.stringify(newDisease.ClinicalSigns)
      );
      formData.append("Diagnosis", JSON.stringify(newDisease.Diagnosis));
      formData.append("Treatment", JSON.stringify(newDisease.Treatment));
      formData.append(
        "PreventionAndControlls",
        JSON.stringify(newDisease.PreventionAndControlls)
      );
      formData.append(
        "ImpactOnAquacultures",
        JSON.stringify(newDisease.ImpactOnAquacultures)
      );

      fetch(`https://localhost:7289/api/Disease`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
          onAdd(true);
          setNewDisease({
            PhotoPath: null,
            Name: "",
            Type: "",
            Description: "",
            RecommandationActions: [],
            CausativeAgents: [],
            ClinicalSigns: [],
            Diagnosis: [],
            Treatment: [],
            PreventionAndControlls: [],
            ImpactOnAquacultures: [],
          });
          return response.json();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <Modal open={showAddModal} onClose={onClose} width={"w-[650px]"}>
      <form className="px-6 py-6 rounded-2xl bg-mainColor relative">
        <h2 className="font-bold text-2xl mb-8 text-center">Add Disease</h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          <input
            type="file"
            id="img"
            placeholder="Photo Path"
            className="p-2 rounded w-[85%]"
            onChange={(e) => handleChange("PhotoPath", e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Disease Name"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("Name", e.target.value)}
            value={newDisease.Name}
          />
          <input
            type="text"
            placeholder="type"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("Type", e.target.value)}
            value={newDisease.Type}
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("Description", e.target.value)}
            value={newDisease.Description}
          />
          <input
            type="text"
            placeholder="RecommandationActions"
            className="p-2 rounded w-2/5"
            onChange={(e) =>
              handleChange("RecommandationActions", e.target.value)
            }
            value={newDisease.RecommandationActions}
          />
          <input
            type="text"
            placeholder="CausativeAgents"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("CausativeAgents", e.target.value)}
            value={newDisease.CausativeAgents}
          />
          <input
            type="text"
            placeholder="ClinicalSigns"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("ClinicalSigns", e.target.value)}
            value={newDisease.ClinicalSigns}
          />
          <input
            type="text"
            placeholder="Diagnosis"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("Diagnosis", e.target.value)}
            value={newDisease.Diagnosis}
          />
          <input
            type="text"
            placeholder="Treatment"
            className="p-2 rounded w-2/5"
            onChange={(e) => handleChange("Treatment", e.target.value)}
            value={newDisease.Treatment}
          />
          <input
            type="text"
            placeholder="PreventionAndControlls"
            className="p-2 rounded w-2/5"
            onChange={(e) =>
              handleChange("PreventionAndControlls", e.target.value)
            }
            value={newDisease.PreventionAndControlls}
          />
          <input
            type="text"
            placeholder="ImpactOnAquacultures"
            className="p-2 rounded w-2/5"
            onChange={(e) =>
              handleChange("ImpactOnAquacultures", e.target.value)
            }
            value={newDisease.ImpactOnAquacultures}
          />

          {/* Display errors */}

          {error && (
            <div className="text-red-500 text-sm -mb-16 text-center error w-full">
              {error}
            </div>
          )}
          <div>
            <button
              type="button"
              className="rounded-lg block mx-auto mt-8 px-5 py-2 bg-secondColor text-white font-semibold"
              onClick={AddDisease}
            >
              Add Disease
            </button>
            <MdOutlineClose
              className=" absolute top-4 right-4 font-bold text-2xl cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
