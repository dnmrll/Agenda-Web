let itemTarea = (imgTarea, titulo, descripcion, estado) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    if (estado === true) {
        div.classList.add("tarea-hecha");
    } 
    else if (imgTarea === "important.svg") {
        div.classList.add("tarea-importante");
    } 
    else {
        div.classList.add("tarea-pendiente");
    }

    let etiquetaImgT = document.createElement("img");
    etiquetaImgT.src = `./assets/icons/${imgTarea}`;
    etiquetaImgT.className = "icon-importancia";

    let etiquetaTitulo = document.createElement("h3");
    etiquetaTitulo.textContent = titulo;

    let etiquetaDescripcion = document.createElement("p");
    etiquetaDescripcion.textContent = descripcion;

    let divEstado = document.createElement("div");
    divEstado.className = "estado-container";

    let imgEstado = document.createElement("img");
    imgEstado.src = `./assets/icons/${estado ? "done.svg" : "inprogress.svg"}`;
    imgEstado.className = "icon-estado";

    let textoEstado = document.createElement("span");
    textoEstado.textContent = estado ? " Hecha" : " Pendiente";

    divEstado.appendChild(imgEstado);
    divEstado.appendChild(textoEstado);
 
    // Botones Editar y Eliminar
    let btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";

    btnContainer.append(btnEditar, btnEliminar);

    div.append(etiquetaImgT, etiquetaTitulo, etiquetaDescripcion, divEstado, btnContainer);

    return { div, btnEditar, btnEliminar };
};

export { itemTarea };
