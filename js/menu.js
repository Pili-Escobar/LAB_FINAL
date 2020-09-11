var lista= document.getElementById("Prgos");
var lisProg= document.getElementById("Prog");

function desplegarProgs(){
    lista.classList.add("mostrar");
}

function ocultarProgs(){
    lista.classList.remove("mostrar");
}

lisProg.addEventListener("mouseover",desplegarProgs,true);
lisProg.addEventListener("mouseout",ocultalProgs,true);