var panelLogIn=document.getElementById('container-login');
      var panelRegistro=document.getElementById('container-signup');
      var contenedor=document.getElementById('block-form');
      var componentesR=document.getElementsByClassName("oculto-nan-r");
      var componentesI=document.getElementsByClassName("oculto-nan-i");

      function activarRegistro() {
			
        panelRegistro.classList.remove('ocultar-panel');
        panelLogIn.classList.add('ocultar-panel');
        contenedor.classList.add('block-form-left');

        for(var c of componentesR){
          c.classList.add('oculto');
        }
        for(var c of componentesI){
          c.classList.remove('oculto');
        }
      }
      function activarLogIn() {

        panelLogIn.classList.remove('ocultar-panel');
        panelRegistro.classList.add('ocultar-panel');
        contenedor.classList.remove('block-form-left');

        for(var c of componentesI){

          c.classList.add('oculto');
        }
        for(var c of componentesR){
          c.classList.remove('oculto');
        }
      }