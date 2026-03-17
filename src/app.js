import { Button } from "./components/common/button/Button.js";
import { viewContacts, viewNewContacts, viewTareas, viewNewTarea } from "./components/layout/nav/NavControllers.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";


let app = document.getElementById("app");
let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "user.svg", viewContacts));
nav.appendChild(Button("Agregar Contacto", "plus", "listAltCheck.svg", viewNewContacts));
nav.appendChild(Button("Tareas", "todoList", "agend.svg", viewTareas));
nav.appendChild(Button("Crear Tarea", "plus", "listAltCheck.svg", viewNewTarea));

let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

app.appendChild(nav);
app.appendChild(container);


