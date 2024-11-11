function criptografia(){
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-'
  const length = document.getElementById("length").value;
  let senha = " "

  if(length < 10 || length > 20){
    document.getElementById("mensagem").innerHTML = ("Digite um valor de 10 e 20.");
    return;
  }

  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(randomIndex);
}

  document.getElementById("senha").value = senha;
  mostrarMensagem("Senha gerada com sucesso!");

}


function copiar() {
  const valor = document.getElementById("senha").value;
  if (valor) {
      navigator.clipboard.writeText(valor);
      mostrarMensagem("Senha copiada para a área de transferência!");
  } else {
      mostrarMensagem("Nenhuma senha foi gerada");
  }
}

function mostrarMensagem(texto) {
  const mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = texto;
}