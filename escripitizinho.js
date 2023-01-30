function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var hora = document.getElementById('hora')
abc = Number(hora.value)
msg.innerHTML = `agora são : ${abc} horas!`
if (abc > 0 && abc <= 12 ){
    img.src = 'manha.png'
    document.body.style.background = "red"
    }
if (abc > 12 && abc < 18 ){
img.src = 'tarde.png'
document.body.style.background = "blue"
}
else if (abc > 18 && abc < 24){
    img.src = 'noite.png'
    document.body.style.background = "violet"
}
 }
