

function agregar(){

    let checks = document.getElementsByTagName("input")
    let parrafos = document.getElementsByTagName("p")


    let sig = 0
    while ( (sig < parrafos.length) && !(parrafos[sig].innerHTML == "") && !(parrafos[sig].innerHTML.includes("<del>"))) sig++
    
    if (sig == parrafos.length) alert("Alcanzaste Maximo de Tareas!!!")   
    else {
        let tarea = prompt("Ingrese Nombre de Tarea")
        parrafos[sig].innerHTML = tarea
        checks[sig].style.display = 'block'
    }

}

function realizar(){
    let checks = document.getElementsByTagName("input")
    let parrafos = document.getElementsByTagName("p")

    let df = checks.length

    for (let i=0 ; i<df ; i++){
        if(!(parrafos[i].innerHTML == "")){
            if(checks[i].checked){
                parrafos[i].innerHTML = `<del>${parrafos[i].innerHTML}</del>`
                checks[i].checked = false 
                checks[i].style.display = `none`
            }
        }
    }
}