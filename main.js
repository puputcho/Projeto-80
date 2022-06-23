convidados = ["Pedro", "Ana", "Kevin", "Alex", "Jubileu", "João", "Antônio", "Toby", "Tomy", "Guilherme"]
function enviar() {
    convidados.push(document.getElementById("nomeNovo").value)
    console.log(convidados)
}
function show() {
    codigo = []
    for (let index = 0; index < convidados.length; index++) {
            codigo.push("<h4>"+convidados[index]+"<h4>")
            document.getElementById("nomes").innerHTML = codigo
    }
    var removeCommas = codigo.join(" ")
    document.getElementById("nomes").innerHTML = removeCommas
}
function search() {
    var s = document.getElementById("nomeNovo").value;
    var found=0
    for (let j = 0; j < convidados.length; j++) {
        if (s==convidados[j]) {
            found=found+1;
        } 
        document.getElementById('numero').innerHTML = "Resultado: "+found+" vez(es) encontrado" 
    }
}
