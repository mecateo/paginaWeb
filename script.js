(function(){
    let boton = document.getElementById('js-buttonSay');
    let cancelButton = document.getElementById('js-buttonCancelar');
    boton.addEventListener('click', function(){
        alert('Bienvenidos a mi practica de git con un proyecto real.');
    });
    cancelButton.addEventListener('click', function(){
        alert('Ha hecho click en el botón Cancelar.');
    });
})();