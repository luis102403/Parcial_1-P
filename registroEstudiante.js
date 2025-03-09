function registrarEstudiante() {
    let nombre = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    let carrera = document.getElementById("carrera").value;
    let semillero = document.getElementById("semillero").value;

    
    if (nombre === "" || codigo === "" || carrera === "" || semillero === "") {

        return;
    }

    let nuevaFila = `
        <tr>
            <td>${nombre}</td>
            <td>${codigo}</td>
            <td>${carrera}</td>
            <td>${semillero}</td>
        </tr>
    `;

    document.getElementById("lista-estudiantes").innerHTML += nuevaFila;


}