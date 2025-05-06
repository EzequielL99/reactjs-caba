import ChampionInfoButton from "./ChampionInfoButton";

export default function ChampionCard({ titulo, imagen, descripcion }) {
  return (
    <div className="bg-light-subtle p-1 position-relative">
      <img className="mw-100" src={imagen} alt={titulo} />
      <div className="custom-card__body position-absolute bottom-0 start-0 p-4 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="custom-card__title m-0">{titulo}</h5>
          <p className="custom-card__text m-0">{descripcion}</p>
        </div>
        <ChampionInfoButton lane={descripcion} />
      </div>
    </div>
  );
}
