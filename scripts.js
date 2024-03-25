function gererateNumber(){

    const min= Math.ceil(document.querySelector(".input-min").value)  //arredonda o numero para cima
    const max= Math.floor(document.querySelector(".input-max").value) //arredonda o numero para baixo

    const result = Math.floor(Math.random() * (max - min + 1)) + min;  //numeros aleatorios


    alert(result)
}
