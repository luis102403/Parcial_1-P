function mostrarInfo(grupo) {
    let info = "";
    if (grupo === "GIEIAM") {
        info = `
            <h2>Grupo GIEIAM</h2>
            <p><strong>Nombre:</strong> Grupo de Investigación en Ingeniería Electrónica Industrial y Ambiental.</p>
            <p><strong>Objetivos:</strong> Desarrollar proyectos de investigación en el ámbito de la ingeniería electrónica, industrial y ambiental.</p>
            <p><strong>Director:</strong> Diana Paola Bernal Suárez</p>
            <p><strong>Contacto:</strong> gieiam@universidad.edu</p>
        `;
    } else if (grupo === "COMBA") {
        info = `
            <h2>Grupo COMBA I+D</h2>
            <p><strong>Nombre:</strong> Grupo de Investigación en Computación Móvil y Banda Ancha.</p>
            <p><strong>Objetivos:</strong> - Formar y seleccionar talento humano con las competencias 
            laborales y técnicas requeridas para I+D+I de calidad en las lineas de investigación del grupo -
            </p>
            <p>Fortalecer la relación del grupo de investigación en la cuadruple helice Universidad-Empresa-
            Estado-Sociedad logrando la transferencia directa e indirecta de los productos resultado de las 
            actividades de I+D+i. </p>
            <p><strong>Director:</strong> 	Claudia Liliana Zuñiga Cañon </p>
            <p><strong>Contacto:</strong> comba@universidad.edu</p>
            <h3>Subgrupos:</h3>
            <button class="btn btn-secondary" onclick="mostrarSubgrupo('COMBA')">COMBA</button>
            <button class="btn btn-secondary" onclick="mostrarSubgrupo('INFORMAN')">Informan</button>
            <div id="info-subgrupo" class="mt-3"></div>
        `;
    }
    document.getElementById("info-grupo").innerHTML = info;
}

function mostrarSubgrupo(subgrupo) {
    let info = "";
    if (subgrupo === "COMBA") {
        info = `
            <h4>Subgrupo Comba</h4>
            <p>Informacion del grupo...</p>
        `;
    } else if (subgrupo === "INFORMAN") {
        info = `
            <h4>Subgrupo Informan</h4>
            <p>Informacion del grupo</p>
        `;
    }
    document.getElementById("info-subgrupo").innerHTML = info;
}

function verificarPassword() {
    let password = prompt("Ingrese la contraseña de administrador:");
    if (password === "admin123") {
        window.location.href = "paginaADM.html";
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.");
    }
}