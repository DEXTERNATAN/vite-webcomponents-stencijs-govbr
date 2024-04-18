import { useEffect, useState } from "react";
import {
  BrItem,
  BrList,
  BrInput,
  BrButton,
} from "@govbr-ds-testing/webcomponents-react";
import { Link } from "react-router-dom";
import Dog from "../data/data";

const ListaRacas = () => {
  const [racas, setRacas] = useState([] as Dog[]);
  const [filteredRacas, setFilteredRacas] = useState([] as Dog[]);
  const [filterInputSearch, setFilterInputSearch] = useState("");

  const handleFilterBreeds = () => {
    const filteredBreeds = racas.filter(({ name }: Dog) =>
      name.includes(filterInputSearch)
    );

    setFilteredRacas(filteredBreeds);
  };

  useEffect(() => {
    const fetchRacas = async () => {
      const response = await fetch("https://api.thedogapi.com/v1/breeds");
      const data = await response.json();

      setRacas(data);
      setFilteredRacas(data);
    };

    fetchRacas();
  }, []);

  return (
    <>
      <div
        className="col-md-12"
        style={{ display: "flex", alignItems: "center" }}
      >
        <BrInput
          required
          id="raca"
          type="text"
          name="raca"
          className="mr-2"
          style={{ flexGrow: 3 }}
          value={filterInputSearch}
          placeholder="Digite o nome da raça do cachorro para pesquisar"
          onValueChange={(event) => [setFilterInputSearch(event.target.value)]}
        />
        <BrButton emphasis="primary" onClick={handleFilterBreeds}>
          Buscar
        </BrButton>
        <BrButton
          emphasis="secondary"
          onClick={() => setFilteredRacas(racas)}
          className="ml-2"
        >
          Limpar
        </BrButton>
      </div>

      <div>
        <div>
          <h2>Lista de raças de cães</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            marginRight: "5px",
          }}
        >
          {filteredRacas.length === 0 ? (
            <div>Nenhuma raça encontrada!</div>
          ) : null}
          {filteredRacas.map(({ id, name, reference_image_id }: Dog) => (
            <Link key={id} to={`/racas/${id}`} state={{ id }}>
              <div className="br-card">
                <BrList
                  className="card-content"
                  style={{ textAlign: "center", margin: "5px" }}
                >
                  <img
                    src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
                    alt={name}
                    width={200}
                    height={200}
                  />
                  <BrItem>{name}</BrItem>
                </BrList>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListaRacas;
