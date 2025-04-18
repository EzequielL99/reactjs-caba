// import AlertButton from "./components/AlertButton";

import HeroesList from "./components/HeroesList";

const heroes = ['Spiderman', 'Iron Man', 'Thor', 'Hulk'];

function App() {
  return (
    <>
      <header className="bg-primary py-2">
        <div className="container text-center text-white">
          <h1 className="text-uppercase">Curso ReactJS</h1>
        </div>
      </header>

      <main className="vh-100 container d-flex justify-content-center align-items-center">
        {/** Ejercicio 1 */}
        {/* <AlertButton nombre='Ezequiel' /> */}

        {/** Ejercicio 2 */}
        <HeroesList heroes={heroes} />
      </main>
    </>
  );
}

export default App;
