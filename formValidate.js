function loginValidation(){

    let emailUsuari = document.getElementById("email");
    let passwordUsuari = document.getElementById("pwd");
    let isright = true;

   if (passwordUsuari.value.trim() == ""){
       passwordUsuari.classList.add("is-invalid");
       document.getElementById("errorPassword").innerHTML = "Camp obligatori"
       isright = false;
   } 

   let patro = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
   if (emailUsuari.value.trim() == ""){
           emailUsuari.classList.add("is-invalid");
           document.getElementById("errorEmail").innerHTML = "Camp obligatori"
           isright = false;

    }else if(patro.test(emailUsuari.value)==false){
        emailUsuari.classList.add("is-invalid");
        document.getElementById("errorEmail").innerHTML = "format mail incorrecte"
        isright = false;
    }

    return isright;

}



function searchValidar(){
    
    let searchUsuari;
    let is_right = true;

    searchUsuari = document.getElementById("form1");
    let searchUsuariV = searchUsuari.value.trim();

    if (searchUsuari.value.trim() == ""){
        searchUsuari.classList.add("is-invalid");
        document.getElementById("errorSearch").innerHTML = "Camp obligatori";
        is_right = false;

    }else if(searchUsuariV.length<3){
        searchUsuari.classList.add("is-invalid");
        document.getElementById("errorSearch").innerHTML = "minim 3 caracters";
        is_right = false;
    }

    return is_right;
}



function registreValidation(){

    let nameUsuariReg;
    let cognomUsuariReg;
    let emailUsuariReg;
    let passwordUsuariReg;
    let passwordConfirm;
    let provinciaReg;
    let patroEmail;
    let patroNomUsuari;
    let patroPassword;
    let patroMinNum;
    let patroMinMayus;
    let patroMinCarac;
    let isRight = true;

    nameUsuariReg = document.getElementById("fname");
    cognomUsuariReg = document.getElementById("lname");
    emailUsuariReg = document.getElementById("emailR");
    passwordUsuariReg = document.getElementById("pwdR");
    passwordConfirm = document.getElementById("pwdConf");
    provinciaReg = document.getElementById("prov");


    patroNomUsuari = /^[a-zA-Z]((\.|_|-)?[a-zA-Z0-9]+){3}$/;
    if (nameUsuariReg.value.trim() == ""){
        nameUsuariReg.classList.add("is-invalid");
        document.getElementById("errorName").innerHTML = "Camp obligatori";
        isRight=false;
    }else if(patroNomUsuari.test(nameUsuariReg.value)==false){
        nameUsuariReg.classList.add("is-invalid");
        document.getElementById("errorName").innerHTML = "Format nom incorrecte";
        isRight=false;
    }



    if (cognomUsuariReg.value.trim() == ""){
        cognomUsuariReg.classList.add("is-invalid");
        document.getElementById("errorCognom").innerHTML = "Camp obligatori";
        isRight=false;

    }else if(patroNomUsuari.test(cognomUsuariReg.value)==false){
        cognomUsuariReg.classList.add("is-invalid");
        document.getElementById("errorCognom").innerHTML = "Format cognom incorrecte";
        isRight=false;
    }



        patroEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (emailUsuariReg.value.trim() == ""){
        emailUsuariReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "Camp obligatori";
        isRight=false;

    }else if(patroEmail.test(emailUsuariReg.value)==false){
        emailUsuariReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "format mail incorrecte"
        isRight=false;
    }


    
        patroPassword = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
        patroMinNum = /(?=.*[0-9])/;
        patroMinMayus = /(?=.*[A-Z])/;
        patroMinCarac = /^.{8,}$/;


    if (passwordUsuariReg.value.trim() == ""){
        passwordUsuariReg.classList.add("is-invalid");
        document.getElementById("errorPasswordReg").innerHTML = "Camp obligatori";
        isRight=false;
    } else if(patroPassword.test(passwordUsuariReg.value)==false){
        passwordUsuariReg.classList.add("is-invalid");
        document.getElementById("errorPasswordReg").innerHTML = "Format password incorrecte"; 
        isRight=false;  
        if (patroMinNum.test(passwordUsuariReg.value)==false){
        document.getElementById("tipoErrorPasswordNu").innerHTML = "Introduir com a minim un numero"; 
        isRight=false;
    }   
        if(patroMinMayus.test(passwordUsuariReg.value)==false){
            document.getElementById("tipoErrorPasswordLLe").innerHTML = "Introduir com a minim una lletra majuscula"; 
            isRight=false;
    }   
        if(patroMinCarac.test(passwordUsuariReg.value)==false){
            document.getElementById("tipoErrorPasswordCa").innerHTML = "Introduir com a minim 8 caracters"; 
            isRight=false;
    }
    }


    if (passwordConfirm.value.trim() == ""){
        passwordConfirm.classList.add("is-invalid");
        document.getElementById("errorPasswordConf").innerHTML = "Camp obligatori";
        isRight=false;

    }else if (passwordUsuariReg.value !== passwordConfirm.value){
        passwordConfirm.classList.add("is-invalid");
        document.getElementById("errorPasswordConf").innerHTML = "Els Passwords no coincideixen";
        isRight=false;
    }


    if (provinciaReg.value == ""){
        provinciaReg.classList.add("is-invalid");
        document.getElementById("errorProvincia").innerHTML = "Camp obligatori";
        isRight=false;
    }

    return isRight;
}