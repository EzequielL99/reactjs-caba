export default function EquipoTalentoLab({ miembros }) {
  return (
    <div className="row">
      {miembros.map((miembro) => (
        <div className="col" key={miembro.nombre}>
          <div className="border border-primary p-4 rounded-2 bg-light text-dark">
            <div className="mx-auto d-flex border border-primary w-75 justify-content-center align-items-center rounded rounded-circle overflow-hidden mb-3">
              <img
                src={miembro.imagen}
                className="w-100"
                alt={miembro.nombre}
              />
            </div>
            <div className="text-center">
              <p className="text-uppercase text-black-50">{miembro.rol}</p>
              <h2>{miembro.nombre}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
