import Swal from 'sweetalert2';

export default function AlertButton({ nombre }) {
  const showAlert = (e) => {
    e.preventDefault();

    Swal.fire({
        title: `¡Hola ${nombre}!`,
        text: 'Te damos la bienvenida al curso 🎉',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  };

  return (
    <button className="btn btn-primary btn-lg" onClick={showAlert}>
      Saludame!
    </button>
  );
}
