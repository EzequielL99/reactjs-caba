export default function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
  const onShowInfo = (e) => {
    e.preventDefault();

    console.log(`Explorando: ${titulo}`);
  };

  return (
    <div className="col-4">
      <div className="bg-dark border border-light py-4 rounded-2">
        <h2 className="px-3 pb-4 m-0 border-bottom border-primary">{titulo}</h2>
        <div className="p-3">
          <p>{descripcion}</p>
          <button onClick={onShowInfo} className="btn btn-primary">
            {botonTexto}
          </button>
        </div>
      </div>
    </div>
  );
}
