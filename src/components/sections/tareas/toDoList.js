import { getTareasFromStorage, saveTareasToStorage } from "../../common/storage/storage.js";
import { itemTarea } from "../../common/itemTareas/ItemTareas.js";
import { viewTareas } from "../../layout/nav/NavControllers.js";
import { formularioTareas } from "../formsTareas/FormularioTareas.js";
import { TareaEditor } from "../editTask/EditTasks.js";

let tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Tareas";
    sectionTareas.appendChild(h2);

    const listaActualTareas = getTareasFromStorage();

    const render = () => {
        sectionTareas.innerHTML = "";
        sectionTareas.appendChild(h2);

        listaActualTareas.forEach((tarea, index) => {
            const { div, btnEditar, btnEliminar } = itemTarea( 
                tarea.imgTarea,
                tarea.titulo,
                tarea.descripcion,
                tarea.estado
            );

            sectionTareas.appendChild(div);

            btnEliminar.addEventListener("click", () => {
                listaActualTareas.splice(index, 1);
                saveTareasToStorage(listaActualTareas);
                viewTareas();
            });

            btnEditar.addEventListener("click", () => {
                let form = formularioTareas();

                form.querySelector("select").value = tarea.imgTarea === "important.svg" ? "importante" : "normal";
                form.querySelector("input[type=text]").value = tarea.titulo;
                form.querySelectorAll("input")[1].value = tarea.descripcion;
                form.querySelectorAll("select")[1].value = tarea.estado ? "true" : "false";

                const editor = new TareaEditor(listaActualTareas, () => {
                    saveTareasToStorage(listaActualTareas);
                    viewTareas();
                });

                editor.editar(index, form);

                sectionTareas.innerHTML = "";
                sectionTareas.appendChild(form);
            });
        });
    };

    render();

    return sectionTareas;
};

export { tareas };
