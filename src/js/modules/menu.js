var chk= document.getElementById('menu-open');
chk.addEventListener('click',FuntionResize);
function checkActive(widthBrowser){
			var nav=document.getElementById('menu');
			if(widthBrowser>=500){
				nav.classList.remove('menu-check');
				return;
			}
			var config=document.getElementById('config');
			if(chk.checked){
				config.classList.add('fond');
				nav.classList.add('menu-check');
			}else{
				config.classList.remove('fond');
				nav.classList.remove('menu-check');
			}
		}
		function FuntionResize() {
		    var widthBrowser = window.outerWidth;
		    // var heightBrowser = window.outerHeight;
		    styleMain(widthBrowser);
		    checkActive(widthBrowser);
		}

		function styleMain(widthBrowser) {
			let X=[-70,-140,-210,-280,-350,-420];
			let Y=[0,0,0,0,0,0];
			if(widthBrowser<500){
				// X=[-100,0,100,100,0,-100];
				// Y=[-50,-100,-50,50,100,50];
				X=[-100,-50,50,100];
				Y=[0,-80,-80,0];
			}
			
			let styleText="";
			for(let i=0;i<X.length;i++){
				var time=(90+(100*(i+1)));
				var translate3d=X[i]+"px,"+Y[i]+"px,0";
				styleText+=".menu-open:checked~.menu-item"+
				":nth-child("+(i+3)+"){"+
					"-webkit-transition-duration:"+time+"ms;"+
					"-o-transition-duration:"+time+"ms;"+
					"transition-duration:"+time+"ms;"+
					"-webkit-transform: translate3d("+translate3d+");"+
					"transform: translate3d("+translate3d+");}\n";
			}

			var S=document.createElement('style');	
			S.type = 'text/css';
			S.appendChild(document.createTextNode(styleText));
			document.body.appendChild(S);
		}
		FuntionResize();