const formulario = document.getElementById("Formulario");
const input = document.getElementById("inputItem");
const lista = document.getElementById("listaItems");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarItem(input.value);
  input.value = "";
});

function agregarItem(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = texto;

  const divActions = document.createElement("div");
  divActions.className = "actions";

  const btnEditar = document.createElement("button");
  btnEditar.innerHTML = '<i class="material-icons">edit</i>';
  btnEditar.className = "btn-edit";
  btnEditar.title = "Editar task";

  btnEditar.onclick = () => {
    const nuevoTexto = prompt("Edita tu task:", span.textContent);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      span.textContent = nuevoTexto;
    }
  };

  const btnBorrar = document.createElement("button");
  btnBorrar.innerHTML = '<i class="material-icons">delete</i>';
  btnBorrar.className = "btn-delete";
  btnBorrar.title = "Borrar task";

  btnBorrar.onclick = () => {
    li.remove();
  };

  divActions.appendChild(btnEditar);
  divActions.appendChild(btnBorrar);

  li.appendChild(span);
  li.appendChild(divActions);

  lista.appendChild(li);
}
