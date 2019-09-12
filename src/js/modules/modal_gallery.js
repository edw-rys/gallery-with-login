var itemList=document.getElementsByClassName('gallery-item');//selected all items

for(let item of itemList){
    item.children[1].addEventListener('click', openModal);
}
var l
function openModal(e){
    var item;
    if(e.path[0].hasAttribute('src'))
        item=e.path[2]
    else
        item=e.path[1]
    document.getElementsByClassName('modal-overlay')[0].classList.remove('hidden')
    console.log(item);
    var src=item.children[1].children[0].src;
    console.log("no");
    var modal=document.getElementById('modal1');
    modal.classList.remove('hidden');   
    var content='<div class="profile">'+item.children[2].innerHTML+'</div>'+item.children[0].innerHTML
    modal.children[0].innerHTML=content
    if(e.path[0].hasAttribute('src')){
        // item.children[1].children[0].toggleAttribute('controls');
        modal.children[1].innerHTML=item.children[1].innerHTML
        console.log(modal.children[1] )
        modal.children[1].children[0].toggleAttribute('controls');
    }else
        modal.children[1].innerHTML=item.children[1].innerHTML
    
    
}
document.getElementsByClassName('modal-overlay')[0].addEventListener('click',()=>{
    var modal=document.getElementById('modal1')
    document.getElementsByClassName('modal-overlay')[0].classList.add('hidden');
    modal.children[1].innerHTML="";//children[0].removeAttribute('controls');
    modal.classList.add('hidden');
});
