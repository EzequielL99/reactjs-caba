import Swal from "sweetalert2";

export default function ChampionInfoButton({ lane }) {
  const showAlert = (e) => {
    e.preventDefault();

    const toastNotification = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });

    toastNotification.fire({
      title: `Gran opción para la línea de ${lane}`,
      icon: "info"
    });
  };

  return (
    <button onClick={showAlert} className="btn btn-outline-light text-uppercase mt-2">
      Ayuda
    </button>
  );
}
