import { saveContactsToStorage, getContactsFromStorage } from "../../common/storage/storage.js";
import { viewContacts } from "../../layout/nav/NavControllers.js";

let FormContacto = () => {
    let form = document.createElement("form");
    form.className = "form-contacto";

    let h3 = document.createElement("h3");
    h3.textContent = "Agregar Contacto";
    form.appendChild(h3);

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    inputNombre.className = "input-contacto";
    form.appendChild(inputNombre);

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "text";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.className = "input-contacto";
    form.appendChild(inputTelefono);

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar Contacto";
    btnSubmit.className = "btn-agregar";
    form.appendChild(btnSubmit);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = inputNombre.value.trim();
        const telefono = inputTelefono.value.trim();
        const icono = "user.svg";

        if (!nombre || !telefono) {
            alert("Por favor, completa todos los campos");
            return;
        }

        const listaActual = getContactsFromStorage();
        listaActual.push({ nombre, telefono });
        saveContactsToStorage(listaActual);

        inputNombre.value = "";
        inputTelefono.value = "";

        viewContacts(); 
    });

    return form;
};

export { FormContacto };
