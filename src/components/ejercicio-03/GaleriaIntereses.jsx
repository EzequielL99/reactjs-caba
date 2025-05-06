export default function GaleriaIntereses({intereses}) {
  
  const onChangeBgColor = e => {
    e.preventDefault();

    e.target.classList.toggle('bg-primary');
  }
    return (
    <div className="row">
        {intereses.map(interes => (
            <div key={interes} className="col d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-light" onClick={onChangeBgColor}>{interes}</button>
            </div>
        ))}
    </div>
  )
}
