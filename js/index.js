
//Mask

function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
  id('phone').onkeyup = function(){
    mascara( this, mtel );
  }
}

// 
function capturar(){
  var capturandoNome = "";
  var capturandoPhone = "";
  var capturandoEmail = "";
  var capturandoPassword = "";
  var capturandoRepeatPassword = "";

  capturandoNome = document.getElementById('name').value;
  if(capturandoNome == ""){
    window.alert("Campo First Name está vazio");
  }

  capturandoPhone = document.getElementById('phone').value;
  if(capturandoPhone == ""){
    window.alert("Campo Phone está vazio");
  }

  capturandoEmail = document.getElementById('email').value;
  if(capturandoEmail == ""){
    window.alert("Campo E-mail está vazio");
  }

  capturandoPassword = document.getElementById('password').value;
  if(capturandoPassword == ""){
    window.alert("Campo Password está vazio");
  }

  capturandoRepeatPassword = document.getElementById('repeatPassword').value;
  if(capturandoRepeatPassword == ""){
    window.alert("Campo Repeat Password está vazio");
  }

  if(capturandoPassword !== capturandoRepeatPassword){
    window.alert("A Senha de confirmação está errada");
  }

  if(capturandoPassword != "" && capturandoRepeatPassword != "" && capturandoPassword === capturandoRepeatPassword){
    window.alert("Registro Correto");
  }else{
    window.alert("Corrija sua Inscrição");
  }
  
}









