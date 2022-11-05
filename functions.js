const btnEstudiante = document.getElementById("btnEstudiante");
const btnTrainee = document.getElementById("btnTrainee");
const btnJunior = document.getElementById("btnJunior");
const slcCategoria = document.getElementById("slcCategoria");
const pValorTicket = document.getElementById("valorTicket");
const btnResumen = document.getElementById("btnResumen");
const btnBorrar = document.getElementById("btnBorrar");
const frmName = document.getElementById("name");
const frmSurname = document.getElementById("surname");
const frmMail = document.getElementById("mail");
const frmQty = document.getElementById("qty");

function cambiarCategoriaEstudiante() {
    slcCategoria.value=1;
}

function cambiarCategoriaTrainee() {
    slcCategoria.value=2;
}

function cambiarCategoriaJunior() {
    slcCategoria.value=3;
}

function cambiarCategoria() {
    
}

function cambiarValorTicket() {
    if(frmName.value=="" || frmSurname.value=="" || frmMail.value=="" || frmQty.value=="" || slcCategoria.value=="Elija una opción..."){
        alert("Debe completar todos los campos antes de continuar.");
    } else {
        let buffer = parseInt(slcCategoria.value);
        let cantidad = parseInt(frmQty.value);
        switch (buffer){
            case 1:
                pValorTicket.innerHTML=(200*0.2*cantidad);
                break;
            case 2:
                pValorTicket.innerHTML=(200*0.5*cantidad);
                break;
            case 3:
                pValorTicket.innerHTML=(200*0.85*cantidad);
                break;
        }
    }
}

function limpiarForm() {
    frmName.value = "";
    frmSurname.value = "";
    frmMail.value = "";
    frmQty.value = "";
    slcCategoria.value="Elija una opción...";
    pValorTicket.innerHTML=0;
}

btnEstudiante.onclick = cambiarCategoriaEstudiante;
btnTrainee.onclick = cambiarCategoriaTrainee;
btnJunior.onclick = cambiarCategoriaJunior;
btnResumen.onclick = cambiarValorTicket;
btnBorrar.onclick = limpiarForm;