import { NavLink } from "react-router-dom";
import styled from "styled-components";
import pokeball from '../assets/pokebola.png'
const Navigation = () => {
  return (
    <>
      <NavContainer>
        <div>
          <img alt="pokemon" src={pokeball}></img>
        </div>
        <div className="links">
          <NavLink
            exact="true"
            to="/"
            className="navi"
            activeclassname="active"
          >
            Inicio
          </NavLink>
          <NavLink
            exact="true"
            to="/Map"
            className="navi"
            activeclassname="active"
          >
            Mapa
          </NavLink>
          <div>
            <input type="search" placeholder="Buscar"></input>
          </div>
        </div>
      </NavContainer>
    </>
  );
};
const NavContainer = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

  h2 {
    color: #ffff;
    font-weight: 800;
  }

  img{
    width: 60%;
  }

  padding: 1.1rem;
  display: flex;
  background-color: rgba(102, 49, 49, 0.767);
  justify-content: space-between;
  align-items: center;

  .navi {
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    color: #fff;
    padding: 3px;
    font-size: 20px;
    font-weight: 400;
    font-family: "Bebas Neue", sans-serif;
  }
  .links {
    display: flex;
    align-items: center;
    margin-left: 100px;
  }

  .navi:after {
    content: "";
    position: absolute;
    background-color: rgb(255, 255, 255);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: all 0.5s ease-in-out;
  }
  .navi:hover:after {
    width: 100%;
  }

  .active {
    color: rgb(17, 17, 17);
  }
`;

export default Navigation;
