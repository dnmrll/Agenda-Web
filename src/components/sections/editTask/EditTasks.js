class TareaEditor {
    constructor(listaTareas, renderCallback) {
        this.listaTareas = listaTareas; 
        this.renderCallback = renderCallback;
    }

    editar(index, form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nuevaData = {
                imgTarea: form.querySelector("select").value === "importante" ? "important.svg" : "listAltCheck.svg",
                titulo: form.querySelector("input[type=text]").value,
                descripcion: form.querySelectorAll("input")[1].value,
                estado: form.querySelectorAll("select")[1].value === "true"
            };

            this.listaTareas[index] = { ...this.listaTareas[index], ...nuevaData };

            if (this.renderCallback) this.renderCallback();
        });
    }
}

export { TareaEditor };
