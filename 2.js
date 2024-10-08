function voto (idade){
    if (idade<16 || idade > 70){
        console.log("não vota")
    }else if (idade==16 ||idade==17|| idade>=70){
        console.log("facultativo")
    }else{
        console.log("obrigatório")
    }
}
voto(40) //obr
voto(15)//nao
voto(22)//obr
voto(18)//obr
voto(16)// facu
voto(17)// facu
voto(71)// nao