var btnCtt = document.querySelector('#btnCtt');
var divButton = document.querySelector('.divButton');

btnCtt.addEventListener('click', function(){

    if(divButton.style.display === 'flex'){
        divButton.style.display = 'none';
    }else{
        divButton.style.display = 'flex';
    }

});


