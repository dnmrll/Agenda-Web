class DetalleContacto {
    constructor(contacto) {
        this.contacto = contacto;

        this.elemento = document.createElement("section");
        this.elemento.className = "detalle-contacto";

        const img = document.createElement("img");
        img.src = "./assets/icons/user.svg";

        const detalleInfo = document.createElement("div");
        detalleInfo.className = "detalle-info";

        const h2 = document.createElement("h2");
        h2.textContent = "Detalle del Contacto";

        const nombre = document.createElement("p");
        nombre.innerHTML = `<strong>Nombre:</strong> ${this.contacto.nombre}`;

        const telefono = document.createElement("p");
        telefono.innerHTML = `<strong>Teléfono:</strong> ${this.contacto.telefono}`;

        const btnVolver = document.createElement("button");
        btnVolver.textContent = "Volver";
        btnVolver.className = "btn-volver";
        btnVolver.innerHTML = "<a href='app.html' style = 'text-decoration: none; color: white;'>Regresar</a>";
        btnVolver.addEventListener("click", () => {
            const container = document.getElementById("container");
            container.innerHTML = "";
            import("../sections/contactos/Contactos.js").then(module => {
                container.appendChild(module.Contactos());
            });
        });

        detalleInfo.append(h2, nombre, telefono, btnVolver);
        this.elemento.append(img, detalleInfo);
    }

    getElemento() {
        return this.elemento;
    }
}

export { DetalleContacto };
