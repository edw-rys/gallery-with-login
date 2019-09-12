function toggleClass(element,classA){
    document.getElementById(element).classList.toggle(classA);
}

function toggleClassInnerHtml(element,classA, ob){
    document.getElementById(element).classList.toggle(classA);
    var text=ob.getAttribute('textChange');
    ob.setAttribute('textChange',ob.innerText);
    ob.innerText=text;
}


function scrollToTop() {
    var showButton = 600,
        scrollSpeed = 1000; 
    
    // var scrollPosition = window.scrollY,
    //     scrollButton = document.getElementById(element);
    // window.addEventListener("scroll", function() {
    //     scrollPosition = window.scrollY;
    //     showButton < scrollPosition ? scrollButton.classList.add("visible") : scrollButton.classList.remove("visible")
    // });
    // scrollButton.onclick = function() {
    //     scrollTop(scrollSpeed)
    // }
}
function scrollTop(b) {
    function a(d) {
        c += Math.PI / (b / (d - e));
        c >= Math.PI && window.scrollTo(0, 0);
        0 !== window.scrollY && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a))
    }
    var scrollTime = window.scrollY / 2,
        c = 0,
        e = performance.now();
    window.requestAnimationFrame(a)
}
function scrllPS(a,b,c){
    toggleClassInnerHtml(a,b,c);
    scrollTop(1000);
}