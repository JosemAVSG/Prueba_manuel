// import ListDisplay from "../components/ListDisplay";
import Button from "../components/Button";
import PalindromeChecker from "../components/PalindromeChecker";
import { lazy,Suspense } from "react";
const ListDisplay = lazy(() => import("../components/ListDisplay"));
const Home = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Cargando...</div>}>
      <div className="w-full">
        <ListDisplay />
      </div>
        
      </Suspense>
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
      <section className="paldinromo" >
        <PalindromeChecker></PalindromeChecker>
      </section>
    </div>
  );
};
export default Home;
