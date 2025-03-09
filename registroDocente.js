function registrarDocente() {
    let nombre = document.getElementById("nombre").value;
    let formacion = document.getElementById("formacion").value;
    let horario = document.getElementById("horario").value;
    let grupo = document.getElementById("grupo").value;

    if (!nombre || !formacion || !horario || !grupo) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let tabla = document.getElementById("lista-docentes");
    let nuevaFila = tabla.insertRow();

    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${formacion}</td>
        <td>${horario}</td>
        <td>${grupo}</td>
    `;
    document.getElementById("registro-form").reset();
}
