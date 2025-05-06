import AlertButton from "../components/AlertButton";

export default function Ejercicio01Page() {
  return (
    <>
      <div className="bg-body-secondary rounded text-dark p-4 my-4">
        <h1 className="pb-4 border-bottom border-primary mb-4">Ejercicio 01</h1>
        <ul>
          <li className="mb-2">Crea una página HTML que incluya un botón estilizado con CSS.</li>
          <li className="mb-2">
            Añade interactividad al botón usando JavaScript para mostrar un
            mensaje al hacer clic.
          </li>
          <li className="mb-2">
            Configura un proyecto React con Vite e implementa un componente
            funcional que muestre un saludo personalizado.
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <AlertButton nombre="Ezequiel"></AlertButton>
      </div>
    </>
  );
}
