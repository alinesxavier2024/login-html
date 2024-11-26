alert('hello word')

var email = document.querySelect('#email')
var senha = document.querySelect('#password')

function validar(){
  if(!email){
    alert('preencher o email')
    return
  }

  if(!senha){
    alert('preencher a senha')
    return
  }
}
