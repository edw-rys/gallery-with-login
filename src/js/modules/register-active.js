var openBtn=document.getElementById('icon-open');
      openBtn.addEventListener('click',function(){
        container=document.getElementById('container-signup');
        content=document.getElementById('content-signup');
        icon=document.getElementById('fas');
        container.classList.toggle('container-signup-active');
        content.classList.toggle('hidden');
        icon.classList.toggle('fa-times');
      });