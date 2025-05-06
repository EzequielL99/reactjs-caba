export default function Tarjeta({ titulo, descripcion, botonTexto }) {
  return (
    <div className="col">
      <div className="card text-bg-dark border-white">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">
            {botonTexto}
          </a>
        </div>
      </div>
    </div>
  );
}
