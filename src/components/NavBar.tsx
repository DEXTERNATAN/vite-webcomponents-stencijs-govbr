import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <h1>Web Componentes and api with stencil</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">Sobre</Link>
      </nav>
    </div>
  );
};

export default NavBar;
