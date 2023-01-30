function calcularidade(){
    var data = new Date()
    var ano = data.getFullYear()
    var age1 = document.getElementById('age')
    var res1 = document.getElementById('res')
    var img1 = document.getElementById('imagem')
    //var abc = Number(age1.value)
    //res1.innerHTML = `<p>sua idade é ${abc} anos`
    if (age1.value.length == 0 || age1.value > ano ){
        window.alert('digite corretamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(age1.value)
        var genero = ''
               if(fsex[0].checked){
               genero = 'homem'
               img1.src = 'manha.png'
            
        }
        else if(fsex[1].checked){
            genero = 'mulher'
        }
        res1.innerHTML = `<p>você é ${genero} e tem ${idade} anus</p>`
    }
    
    
}