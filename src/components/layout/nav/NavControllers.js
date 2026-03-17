import { Contactos } from "./../../sections/contactos/Contactos.js";
import { FormContacto } from "../../sections/formularioContacto/Formulario.js";
import { tareas } from "./../../sections/tareas/toDoList.js";
import { formularioTareas } from "../../sections/formsTareas/FormularioTareas.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
};

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(FormContacto());
};

let viewTareas = function () {
    container.innerHTML = "";
    container.appendChild(tareas());
};

let viewNewTarea = function () {
    container.innerHTML = "";
    container.appendChild(formularioTareas());
};

export {
    viewContacts,
    viewNewContacts,
    viewTareas,
    viewNewTarea
};
