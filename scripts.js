function gererateNumber(){

    const min= Math.ceil(document.querySelector(".input-min").value)  //arredonda o numero para cima
    const max= Math.floor(document.querySelector(".input-max").value) //arredonda o numero para baixo


    if(max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min  //arredonda o numero para baixo
    
        alert(result)
    }else {
        alert("Valor maximo deve ser maior que o valor minimo")
    }
}