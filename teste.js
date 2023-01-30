function carregar(){
    var abc = document.getElementsByName('teste')
    if (abc[0].checked){
        img.src ='adulto.jpg'
    }else if(abc[1].checked){
        img.src = 'garota.jpg'
    }
}