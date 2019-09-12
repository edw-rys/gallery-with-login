
function modeDark() {
    let mode='dark-mode';
    let body=document.getElementById('body');
    if(body.className.indexOf(mode)!=-1)
        body.classList.remove(mode);
    else
        body.classList.add(mode);        
}