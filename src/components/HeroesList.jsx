export default function HeroesList({ heroes }) {
  console.log(heroes);
  return (
    <ol className="flex flex-column gap-3 justify-content-between list-unstyled ">
      {heroes.map((heroe, index) => (
        <li
          key={index}
          className="card-heroe py-3 px-5 mb-4 rounded position-relative z-0 overflow-hidden"
        >
          <span
            style={{ fontSize: "5rem", left: "-10px", transform: 'translateY(-55%)' }}
            className="fw-bold position-absolute top-50 h1 z-n1 opacity-25"
          >
            {index}
          </span>
          {heroe}
        </li>
      ))}
    </ol>
  );
}
