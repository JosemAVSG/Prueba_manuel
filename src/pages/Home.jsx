import ListDisplay from "../components/ListDisplay";
import Button from "../components/Button";
import PalindromeChecker from "../components/PalindromeChecker";

const Home = () => {
  return (
    <div className="App">
      <div className="pokemonlist">
        <ListDisplay />
      </div>
      <section>
        <h1>Button Styles with Sass</h1>
        <div className="botones">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="dark">Dark Button</Button>
          <Button variant="sketch">Sketch</Button>
          <Button variant="otro">Otro</Button>
        </div>
      </section>
      <section>
        <PalindromeChecker></PalindromeChecker>
      </section>
    </div>
  );
};
export default Home;
