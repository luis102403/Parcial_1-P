function registrarActividad() {
    let semillero = document.getElementById("semillero").value;
    let tipo = document.getElementById("tipo").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let limite = document.getElementById("limite").value;
    let resumen = document.getElementById("resumen").value;

    if (!semillero || !tipo || !fecha || !hora || !limite || !resumen) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let tabla = document.getElementById("lista-actividades");
    let nuevaFila = tabla.insertRow();

    nuevaFila.innerHTML = `
        <td>${semillero}</td>
        <td>${tipo}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${limite}</td>
        <td>${resumen}</td>
    `;

    // Limpiar el formulario después de registrar
    document.getElementById("registro-form").reset();
}