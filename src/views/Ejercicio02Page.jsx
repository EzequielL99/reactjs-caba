import ChampionCard from "../components/ChampionCard";

const lista_campeones = [
  {
    name: 'Aatrox',
    lane: 'TOP',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/db39563458aa28c3f3aa8990f2c964a0f7645097-496x560.jpg?auto=format&fit=fill&q=80&w=415'
  },
  {
    name: 'Ahri',
    lane: 'MID',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/55e7e901b1f69d72804665cfbeb1f4f59c8fa877-496x560.jpg?auto=format&fit=fill&q=80&w=415'
  },
  {
    name: 'Akali',
    lane: 'MID',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/abbd173df157f943496abb0638add119f753e3b2-496x560.jpg?auto=format&fit=fill&q=80&w=415'
  }
];

export default function Ejercicio02Page() {
  return (
    <>
      <div className="bg-body-secondary rounded text-dark p-4 my-4">
        <h1 className="pb-4 border-bottom border-primary mb-4">Ejercicio 02</h1>
        <ul>
          <li className="mb-2">
            Crea un componente que reciba un array de productos como prop y los
            muestre en una lista ordenada.
          </li>
          <li className="mb-2">
            Crea un componente Tarjeta que reciba props para mostrar un título,
            una descripción y un botón personalizado.
          </li>
          <li className="mb-2">
            Usa el componente Boton que creamos para estilizar diferentes
            acciones en una página.
          </li>
        </ul>
      </div>

      <div className="row">
        {lista_campeones.map(champion => (
          <div key={champion.name} className="col">
            <ChampionCard titulo={champion.name} imagen={champion.img} descripcion={champion.lane} />
          </div>
        ))}
      </div>
    </>
  );
}
