const campoNome = document.getElementsByName("nome")[0];
const campoEmail = document.getElementsByName("email")[0];
const campoTelefone = document.getElementsByName("telefone")[0];
const campoMensagem = document.getElementsByName("mensagem")[0];

const campos = [campoNome, campoEmail, campoTelefone, campoMensagem];

const campoInvalidoTexto = document.getElementsByClassName("invalido");

campos.forEach((item, indice) => {
  item.addEventListener("change", () => {
    item.classList.add("campo-valido");
    if (item.classList.contains("campo-invalido")) {
      item.classList.remove("campo-invalido");
      campoInvalidoTexto[indice].classList.remove("visivel");
    }
  });
});

const formulario = document.getElementsByClassName("formulario")[0];

formulario.addEventListener("submit", (event) => {
  if (!verificarCampos()) {
    event.preventDefault();
  }
});

function verificarCampos() {
  let validacao = true;

  campos.forEach((item, indice) => {
    if (item.value == "") {
      item.classList.add("campo-invalido");
      campoInvalidoTexto[indice].classList.add("visivel");
      validacao = false;
    }
  });

  return validacao;
}
