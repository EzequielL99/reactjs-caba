// import AlertButton from "./components/AlertButton";

import DarkModeButton from "./components/DarkModeButton";
import HeroesList from "./components/HeroesList";
import Tarjeta from "./components/Tarjeta";

const heroes = ["Spiderman", "Iron Man", "Thor", "Hulk"];

function App() {
  return (
    <>
      <header className="bg-primary py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="text-uppercase">Curso ReactJS</h1>
          {/* Ejercicio 2.3 */}
          <DarkModeButton />
        </div>
      </header>

      <main className="vh-100 container">
        {/** Ejercicio 1 */}
        {/* <AlertButton nombre='Ezequiel' /> */}

        {/** Ejercicio 2.1 */}
        <section
          id="ejercicio02-01"
          className="d-flex justify-content-center align-items-center my-4"
        >
          <HeroesList heroes={heroes} />
        </section>

        {/* Ejercicio 2.2 */}
        <section id="ejercicio02-02" className="row">
          <Tarjeta titulo='Oferta especial' descripcion='20% de descuento en todos los productos' botonTexto='Ver mas'/>
          <Tarjeta titulo='Figuras' descripcion='Figuras de acción especiales' botonTexto='Comprar'/>
          <Tarjeta titulo='Nuevo Mark XVII' descripcion='Nuevo set para Iron Man' botonTexto='Leer mas'/>

        </section>
      </main>
    </>
  );
}

export default App;
