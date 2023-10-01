
function classIdade (){

    var idade = Number(document.getElementById('age').value)

    if(idade < 15) {
        alert("Você é uma pessoa jovem")
    } else if (idade >= 16 && idade <=64){
        alert("Você é uma pessoa adulta")
    } else {
        alert("Você é uma pessoa idosa")
    }
}