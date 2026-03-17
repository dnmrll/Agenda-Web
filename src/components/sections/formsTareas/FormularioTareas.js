import { getTareasFromStorage, saveTareasToStorage } from "../../common/storage/storage.js";
import { viewTareas } from "../../layout/nav/NavControllers.js";

let formularioTareas = () => {
    let form = document.createElement("form");
    form.className = "form-tareas";

    let selectImportancia = document.createElement("select");
    selectImportancia.className = "input-tarea";
    selectImportancia.add(new Option("Normal", "normal"));
    selectImportancia.add(new Option("Importante", "importante"));
    form.appendChild(selectImportancia);

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título";
    inputTitulo.className = "input-tarea";
    form.appendChild(inputTitulo);

    let inputDescripcion = document.createElement("input");
    inputDescripcion.placeholder = "Descripción detallada";
    inputDescripcion.className = "input-tarea";
    form.appendChild(inputDescripcion);

    let selectEstado = document.createElement("select");
    selectEstado.className = "input-tarea";
    selectEstado.add(new Option("Pendiente", "false"));
    selectEstado.add(new Option("Hecha", "true"));
    form.appendChild(selectEstado);

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar Tarea";
    btnSubmit.className = "btn-agregar";
    form.appendChild(btnSubmit);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nuevaTarea = {
            imgTarea: selectImportancia.value === "importante" ? "important.svg" : "listAltCheck.svg",
            titulo: inputTitulo.value.trim(),
            descripcion: inputDescripcion.value.trim(),
            estado: selectEstado.value === "true"
        };

        if (!nuevaTarea.titulo || !nuevaTarea.descripcion) return;

        const listaActualTareas = getTareasFromStorage();
        listaActualTareas.push(nuevaTarea);
        saveTareasToStorage(listaActualTareas);

        viewTareas(); 
    });

    return form;
}

export { formularioTareas };
