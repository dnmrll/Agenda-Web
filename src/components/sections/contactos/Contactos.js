import { getContactsFromStorage } from "../../common/storage/storage.js";
import { ItemContacto } from "../../common/itemContacto/IntemContacto.js";
import { DetalleContacto } from "../detalleContacto/DetalleC.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    const listaActual = getContactsFromStorage();

    listaActual.forEach((contact) => {
        const item = ItemContacto("user.svg", contact.nombre, contact.telefono);

        item.addEventListener("click", () => {
            const container = document.getElementById("container");
            container.innerHTML = "";
            const detalle = new DetalleContacto(contact).getElemento();
            container.appendChild(detalle);
        });

        sectionContactos.appendChild(item);
    });

    return sectionContactos;
}

export { Contactos };
