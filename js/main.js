function calcular(){
    nivel = document.getElementById("nivel").value;
    classe = document.getElementById("classe").value;
    salario_base = document.getElementById("salario").value;
    salario_base = parseInt(salario_base);
    porcentagem = 0
    document.getElementById("resultado").innerHTML = ""
    switch(nivel){
        case "3":
            porcentagem = 2.5
            break
        case "2":
            porcentagem = 1
            break
        case "1":
            porcentagem = 0
            break
        default:
            document.getElementById("resultado").innerHTML += "Nivel Invalido<br>"
    }
    switch(classe){
        case "a":
        case "A":
            porcentagem += 5
            break
        case "B":
        case "b":
            porcentagem += 6
            break
        case "C":
        case "c":
            porcentagem += 7
            break
        default:
            document.getElementById("resultado").innerHTML += "Classe Invalida<br>"
    }
    aumento = (salario_base * porcentagem)/100
    salario = salario_base + aumento
    validando = document.getElementById("resultado").innerHTML;
    if (!validando){
        document.getElementById("resultado").innerHTML = `Seu salario aumentou de R$${salario_base} para R$${salario}`
    }
}