import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  BrButton,
  BrInput,
  BrItem,
  BrList,
} from "@govbr-ds-testing/webcomponents-react";
import Dog from "../data/data";

// TODO: Implementar uso do useCallback
// TODO: Implementar uso do useMemo
const Racas = () => {
  const location = useLocation();
  const [racasDetails, setRacasDetails] = useState({} as Dog);

  const handleEditingBreeds = () => {
    setRacasDetails({ ...racasDetails, onEdit: !racasDetails.onEdit });
  };

  useEffect(() => {
    // implementar uso do useCallback
    const fetchRacas = async () => {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/${location.state.id}`
      );
      const data = await response.json();
      data.onEdit = false;

      setRacasDetails(data as Dog);
    };

    fetchRacas();
  }, [location.state.id]);

  return (
    <div>
      {!racasDetails.onEdit ? (
        <BrButton emphasis="primary" onClick={handleEditingBreeds}>
          Editar
        </BrButton>
      ) : (
        <>
          <BrButton
            emphasis="secondary"
            onClick={handleEditingBreeds}
            className="mb-2"
          >
            Cancelar Edição
          </BrButton>
          <BrButton emphasis="primary" onClick={handleEditingBreeds}>
            Salvar
          </BrButton>
        </>
      )}
      <h1>{racasDetails.name}</h1>
      <BrList>
        {racasDetails.onEdit ? (
          <BrItem>
            <strong>Grupo:</strong>{" "}
            <BrInput
              type="text"
              value={racasDetails.breed_group}
              onValueChange={(e) =>
                setRacasDetails({
                  ...racasDetails,
                  breed_group: e.target.value,
                })
              }
            />
          </BrItem>
        ) : (
          <BrItem>
            <strong>Grupo:</strong>{" "}
            {racasDetails.breed_group || "Não informado"}
          </BrItem>
        )}
        <BrItem>
          <strong>Origem:</strong> {racasDetails.origin || "Não informado"}
        </BrItem>
        <BrItem>
          <strong>Expectativa de vida:</strong>{" "}
          {racasDetails.life_span || "Não informado"}
        </BrItem>
        <BrItem>
          <strong>Temperamento:</strong>{" "}
          {racasDetails.temperament || "Não informado"}
        </BrItem>
        <BrItem>
          <strong>Finalidade:</strong>{" "}
          {racasDetails.bred_for || "Não informado"}
        </BrItem>
        <BrItem>
          <strong>Peso:</strong> {racasDetails?.weight?.metric} kg
        </BrItem>
        <BrItem>
          <strong>Altura:</strong> {racasDetails?.height?.metric} cm
        </BrItem>
      </BrList>
      <img
        src={`https://cdn2.thedogapi.com/images/${racasDetails.reference_image_id}.jpg`}
        alt={racasDetails.name}
      />
    </div>
  );
};

export default Racas;
