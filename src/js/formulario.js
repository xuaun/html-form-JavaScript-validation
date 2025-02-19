const campoNome = document.getElementsByName("nome")[0];
const campoEmail = document.getElementsByName("email")[0];
const campoTelefone = document.getElementsByName("telefone")[0];
const campoMensagem = document.getElementsByName("mensagem")[0];

const campoInvalidoTexto = document.getElementsByClassName("invalido");

campoNome.addEventListener("change", () => {
  campoNome.classList.add("campo-valido");
  if (campoNome.classList.contains("campo-invalido")) {
    campoNome.classList.remove("campo-invalido");
    campoInvalidoTexto[0].classList.remove("visivel");
  }
});

campoEmail.addEventListener("change", () => {
  campoEmail.classList.add("campo-valido");
  if (campoEmail.classList.contains("campo-invalido")) {
    campoEmail.classList.remove("campo-invalido");
    campoInvalidoTexto[1].classList.remove("visivel");
  }
});

campoTelefone.addEventListener("change", () => {
  campoTelefone.classList.add("campo-valido");
  if (campoTelefone.classList.contains("campo-invalido")) {
    campoTelefone.classList.remove("campo-invalido");
    campoInvalidoTexto[2].classList.remove("visivel");
  }
});

campoMensagem.addEventListener("change", () => {
  campoMensagem.classList.add("campo-valido");
  if (campoMensagem.classList.contains("campo-invalido")) {
    campoMensagem.classList.remove("campo-invalido");
    campoInvalidoTexto[3].classList.remove("visivel");
  }
});

const formulario = document.getElementsByClassName("formulario")[0];

formulario.addEventListener("submit", (event) => {
  if (!verificarCampos()) {
    event.preventDefault();
  }
});

function verificarCampos() {
  if (campoNome.value == "") {
    campoNome.classList.add("campo-invalido");
    campoInvalidoTexto[0].classList.add("visivel");
  }
  if (campoEmail.value == "") {
    campoEmail.classList.add("campo-invalido");
    campoInvalidoTexto[1].classList.add("visivel");
  }
  if (campoTelefone.value == "") {
    campoTelefone.classList.add("campo-invalido");
    campoInvalidoTexto[2].classList.add("visivel");
  }
  if (campoMensagem.value == "") {
    campoMensagem.classList.add("campo-invalido");
    campoInvalidoTexto[3].classList.add("visivel");
  }
  if (
    campoNome.value == "" ||
    campoEmail.value == "" ||
    campoTelefone.value == "" ||
    campoMensagem.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}
