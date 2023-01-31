function carregar(){
var dsem1 = document.getElementById('dsem')
var img = document.getElementById('img1')
var abc = Number(dsem1.value)

switch (abc){
    case 0 : img.src ='domingo.jpg'
    console.log('domingo')
    break
    case 1: img.src = 'segunda.jpg'
    break


    }
}