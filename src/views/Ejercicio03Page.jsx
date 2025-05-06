import EquipoTalentoLab from "../components/ejercicio-03/EquipoTalentoLab";
import GaleriaIntereses from "../components/ejercicio-03/GaleriaIntereses";
import TarjetaProyecto from "../components/ejercicio-03/TarjetaProyecto";

const miembros = [
  {
    nombre: "Silvia",
    rol: "Product Owner",
    imagen: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    nombre: "Luis",
    rol: "Diseñador UX/UI",
    imagen: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    nombre: "Matías",
    rol: "Desarrollador",
    imagen: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    nombre: "Sabrina",
    rol: "Desarrolladora",
    imagen: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const intereses = ["React", "JavaScript", "APIs", "Diseño UX", "Node.js"];

export default function Ejercicio03Page() {
  return (
    <>
      <div className="bg-body-secondary rounded text-dark p-4 my-4">
        <h1 className="pb-4 border-bottom border-primary mb-4">Ejercicio 03</h1>
        <p>Componente EquipoTalentoLab</p>
        <ul>
          <li className="mb-2">
            Este componente debe recibir como prop un array de objetos, donde
            cada objeto represente a un miembro del equipo.
          </li>
          <li className="mb-2">
            Propiedades: nombre, rol e imagen. El componente debe mostrar una
            tarjeta con su foto, nombre y rol.
          </li>
        </ul>

        <p>Componente TarjetaProyecto con las siguientes props:</p>
        <ul>
          <li>Propiedades: Titulo, Descripcion y BotonTexto</li>
        </ul>

        <p>Componente GaleriaIntereses con las siguientes props:</p>
        <ul>
          <li>
            Este componente debe recibir un array de temas como prop y mostrar
            un boton para cada uno.
          </li>
          <li>
            Interactividad: Al hacer clic en un boton, cambia su color de fondo
            dinamicamente.
          </li>
        </ul>
      </div>

      <EquipoTalentoLab miembros={miembros} />

      <div className="row my-4">
        <TarjetaProyecto
          titulo="Plataforma de Gestión"
          descripcion="Una herramienta para optimizar la gestión de equipos."
          botonTexto="Explorar proyecto"
        />
      </div>

      <GaleriaIntereses intereses={intereses} />
    </>
  );
}
