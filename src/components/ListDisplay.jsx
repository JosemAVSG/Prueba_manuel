import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonpag,
  fetchPokemonEvo,
  fetchPokemonEspecie,
  setLastPage,
  setPages,
  setTotalResults,
} from "../redux/actions";
import Pagination from "./PaginationComponent";
import pokeball from "../assets/pokeball.png";
import "./ListDisplay.scss";
const ListDisplay = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const pokemonData = useSelector((state) => state.pokemon.data);
  const pokemonimg = useSelector((state) => state.pokemon.results);

  const combinedPokemonData = useMemo(() => {
    return { ...pokemonData, ...pokemonimg };
  }, [pokemonData, pokemonimg]);
  const totalResults = useSelector((state) => state.pag.totalResults);
  const pageS = useSelector((state) => state.pag.pageSize);
  const currentPage = useSelector((state) => state.pag.currentPage);

  useEffect(() => {
    if (!isLoading) {
      const total = combinedPokemonData?.data?.count;
      const pages = combinedPokemonData?.data?.results?.length;

      const last = Math.ceil(total / pages);

      if (total && currentPage + last - 1 === last) {
        dispatch(setPages(pages));
        dispatch(setTotalResults(total));
        dispatch(setLastPage(last));
      }
    }
  }, [isLoading, combinedPokemonData, currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchPokemonEvo(currentPage, pageS)),
      dispatch(fetchPokemonEspecie(currentPage, pageS)),
      dispatch(fetchPokemonpag(currentPage, pageS))
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          setIsLoading(true);
        });
  }, [dispatch, currentPage, pageS, totalResults]);

  if (isLoading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras isLoading es true
  }

  const getTypeClassName = (typeName) => {
    switch (typeName) {
      case "fire":
        return "fire-class";
      case "water":
        return "water-class";
      case "grass":
        return "grass-class";
      case "bug":
        return "bug-class";
      case "normal":
        return "normal-class";
      case "poison":
        return "poison-class";
      case "electric":
        return "electric-class";
      case "ground":
        return "ground-class";
      case "fairy":
        return "fairy-class";
      case "fighting":
        return "fighting-class";
      case "psychic":
        return "psychic-class";
      case "rock":
        return "rock-class";
      case "ghost":
        return "ghost-class";
      default:
        return "default-class";
    }
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <div className="pokemonlist">
        {combinedPokemonData.results.map((pokemon, index) => (
          <div
            className={`pokemon ${getTypeClassName(
              pokemon.types[0].type?.name
            )}`}
            key={index}
          >
            <div className={`mt-4 card`}>
              <img
                className="card-img"
                src={pokemon.sprites.other.home.front_default || pokeball}
                alt={pokemon.name}
              />
              <div className="pokemon-id">
                <p>
                  {pokemon.id < 10
                    ? `#00${pokemon.id}`
                    : pokemon.id < 100
                    ? `#0${pokemon.id}`
                    : `#${pokemon.id}`}
                </p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Nombre: {pokemon.name}</h5>
                <p className="card-text">
                  <span>Altura: {pokemon.height}</span>
                  <span>Peso: {pokemon.weight}</span>
                </p>
                <div className="stats">
                  {pokemon?.stats?.map((stat, index) => (
                    <h6 key={index} className="statItem">
                      <span className="statname">{stat.stat?.name}</span>
                      <progress
                        className="statbar"
                        value={stat.base_stat}
                        max={110}
                      ></progress>
                      <span className="statvalue">{stat.base_stat}</span>
                    </h6>
                  ))}
                </div>
                <div className="types">
                  {pokemon.types.map((type, index) => (
                    <span
                      key={index}
                      className={`tipo ${getTypeClassName(type.type?.name)}`}
                    >
                      {type.type?.name}
                    </span>
                  ))}
                </div>
          
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default ListDisplay;
