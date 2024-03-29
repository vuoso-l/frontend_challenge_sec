import Swal from "sweetalert2";

const SweetAlert = {
  messageError: (text) => {
    Swal.fire({
      title: "Ooops! Ocurrió un error!",
      text,
      icon: "error",
      confirmButtonColor: "#ff0000",
      confirmButtonText: "OK",
      toast: true,
    });
  },

  messageOk: (title, text) => {
    Swal.fire({
      title,
      text,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      toast: true,
    });
  },

  messageDelete: (title, callback) => {
    Swal.fire({
      title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire(
          "Eliminado!",
          "La eliminación se produjo satisfactoriamente!",
          "success",
        );
      }
    });
  },
};

export default SweetAlert;
