let themesUrl=[
  {
    'name':'galaxy',
    'class':'galaxy-theme',
    'backgroundUrl':'../../img/background/background.jpg',
    'urlImage':'./assets/img/background/nave.png',
    'iconUrl':'./assets/img/icons/theme/galaxy.jpg',
    'color':'#3C00D0'
  },
  {
    'name':'wolf',
    'class':'wolf-theme',
    'backgroundUrl':'../../img/background/bck-wolf.jpg',
    'urlImage':'./assets/img/background/moon.png',
    'iconUrl':'./assets/img/icons/theme/wolf.jpg',
    'color':'#282D31'
  },
  {
    'name':'samoyed',
    'class':'samoyed-theme',
    'backgroundUrl':'../../img/background/bck-samoyed.jpg',
    'iconUrl':'./assets/img/icons/theme/samoyed.jpg',
    'urlImage':'./assets/img/background/samoyed.png',
    'color':'#018ABA'
  },
  {
    'name':'shark',
    'class':'shark-theme',
    'backgroundUrl':'../../img/background/aquarus.jpg',
    'iconUrl':'./assets/img/icons/theme/shark.jpg',
    'urlImage':'./assets/img/background/lemon-shark.png',
    'color':'#003B8B'
  },
  {
    'name':'whale',
    'class':'whale-theme',
    'backgroundUrl':'../../img/background/bck-medusa.jpg',
    'urlImage':'./assets/img/background/whale.png',
    'iconUrl':'./assets/img/icons/theme/whale.jpg',
    'color':'#F72500'
  },
  {
    'name':'phoenix',
    'class':'phoenix-theme',
    'backgroundUrl':'../../img/background/bck-phoenix.jpg',
    'urlImage':'./assets/img/background/phoenix.png',
    'iconUrl':'./assets/img/icons/theme/phoenix.jpg',
    'color':'#CF4600'
  }
]

const themeColorHtml=document.getElementById('h-t-color');
themeColorHtml.setAttribute('content','#3C00D0');
var boxes = document.querySelectorAll('#boxes > div');
  [].forEach.call(boxes, box => {
    box.addEventListener('mousemove', e => {
      var size = parseInt(getComputedStyle(box).width);
      
      // scaling
      var x = size * .3 * .7 + .7 * e.offsetX;
      var y = size * .3 * .7 + .7 * e.offsetY;
      
      box.style.setProperty('--x', x);
      box.style.setProperty('--y', y);
      box.style.setProperty('--size', size);
    });
  }
  
  );


  
function changeTheme(name){
  for(let theme of themesUrl){
    if(theme.name==name && name!==undefined){
      document.getElementById('img-zq').setAttribute('src',theme.urlImage);
      document.getElementById('container-all').className=theme.class;
      themeColorHtml.setAttribute('content',theme.color);
    }
  }
}
function addIcon(){
  var boxes = document.querySelectorAll('#boxes > div');
  for(var camp of boxes){
    if(camp.getAttribute('camp'))
      for(let t of themesUrl){
        if(t.name)
          if(t.name==camp.getAttribute('camp')){
            camp.style.backgroundImage="url("+t.iconUrl+")";
            camp.style.backgroundSize="cover";
            break;
          }
      }
  }
}
addIcon();
