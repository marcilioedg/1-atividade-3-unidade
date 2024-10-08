function semaforo (cor){
    if(cor=="verde"){
        console.log("siga em frente")
    }else if(cor=="laranja"){
        console.log("desacelere")
    }else if(cor=="vermelho"){
        console.log("pare")
    }else{
        console.log("não exixte")
    }
}
semaforo("rosa")
semaforo("verde")
semaforo("vermelho")
semaforo("azul")