const urlImgC="./assets/img/pictures/"
let contet=[{
        'type':'img',
        'name':'post_1.jpg',
        'user':'@tim01',
        'likes':452
    }
    ,
    {
        'type':'img',
        'name':'post_2.jpg',
        'user':'@edw',
        'likes':452
    }
    ,
    {
        'type':'img',
        'name':'post_3.jpg',
        'user':'@kp',
        'likes':1256
    }
    ,
    {
        'type':'img',
        'name':'post_4.jpg',
        'user':'@tim01',
        'likes':402
    },
    {
        'type':'img',
        'name':'post_6.jpg',
        'user':'@tim01',
        'likes':563
    },
    {
        'type':'img',
        'name':'post_7.jpg',
        'user':'@karol',
        'likes':1352
    },
    {
        'type':'img',
        'name':'post_8.jpg',
        'user':'@toni',
        'likes':200
    },{
        'type':'img',
        'name':'post_9.jpg',
        'user':'@veronica',
        'likes':500
    },{
        'type':'img',
        'name':'post_10.jpg',
        'user':'@tnx',
        'likes':624
    },{
        'type':'img',
        'name':'post_11.jpg',
        'user':'@monster',
        'likes':452
    },{
        'type':'img',
        'name':'post_12.jpg',
        'user':'@nz',
        'likes':145
    },{
        'type':'img',
        'name':'post_13.jpg',
        'user':'@gif',
        'likes':256
    },{
        'type':'img',
        'name':'post_14.jpg',
        'user':'@aguacate',
        'likes':256
    },{
        'type':'img',
        'name':'post_15.jpg',
        'user':'@veronica',
        'likes':152
    },{
        'type':'img',
        'name':'post_16.gif',
        'user':'@veronica',
        'likes':1263
    }
    ,{
        'type':'video',
        'name':'post_17.mp4',
        'user':'@laila',
        'likes':1256
    }
];

function addPicturesF(){
    var domStr=""
    var gallery=document.getElementById('gallery');
    for (let element of contet){
        domStr+=
        '<div class="gallery-item">'+
            '<div class="header-gallery">'+
                '<span class="more">'+
                    '<div id="heart-reaction" class="action c-c-fuschia btn-light">'+
                        '<i class="fas fa-heart"></i><p>'+element.likes+'</p>'+
                    '</div>'+
                    '<div id="add-collecion" class="action btn-light"> '+
                        '<i class="fas fa-plus"></i>Colección<p></p>'+
                    '</div>'+
                '</span>'+
            '</div>';
            
            if(element.name.indexOf('mp4')>-1){
                domStr+='<div class="image">'+
                '<video src="'+urlImgC+element.name+'" autoplay muted>'+
                '</div>';
            }
            else{
                domStr+='<div class="image"><img src="'+urlImgC+element.name+'">'+
                '</div>';
            }
            domStr+=
        '<div class="profile_post_grid white">'+
            '<div class="img-p-p">'+
                '<a href="#">'+
                    '<div class="photo">'+
                        '<img src="'+urlImgC+'profile/icon_profile.jpg"><p>'+element.user+'</p>'+
                    '</div>'+
                '</a>'+
            '</div>'+
        '</div>'+
    '</div>';
    }
    gallery.innerHTML=domStr
}
addPicturesF();