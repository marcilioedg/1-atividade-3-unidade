function ImformeAprovacão(nota1, nota2){
    var total = nota1 + nota2
    var media = total / 2 
    if( media<7){
        console.log(" Reprovado")
    }else{
        console.log("Aprovado")
    }
}

ImformeAprovacão(2,3)
ImformeAprovacão(5,3)
ImformeAprovacão(7,7)
