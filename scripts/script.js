function mediaAritmetica(formulario){
    let nota1 = parseFloat(formulario.nota1.value);
    let nota2 = parseFloat(formulario.nota2.value);
    let nota3 = parseFloat(formulario.nota3.value);
    let nota4 = parseFloat(formulario.nota4.value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("resultado").textContent = media;

    if(media>=6){
        document.getElementById("resultado").textContent = `A sua media é de ${media} e você esta Aprovado`;
    }
    else if(media>=4){
        document.getElementById("resultado").textContent = `A sua media é de ${media} e você esta de IFA`;
    }
    else{
        document.getElementById("resultado").textContent = `A sua media é de ${media} e você esta Reprovado`;
    }
}