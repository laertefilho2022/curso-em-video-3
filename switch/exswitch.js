var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
diaSem = 2
switch(diaSem){
case 0: console.log('domingo')
break
case 1:
console.log('segunda')
break
case 2: 
console.log('terça')
break
case 3: 
console.log('quarta')
break
default:
    console.log('dia invalido!')
    break
}
