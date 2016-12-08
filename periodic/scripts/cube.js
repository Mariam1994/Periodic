function Cube(){
    var HTML = document.body.parentElement,
        body = $(document.body),
        container = $(".cube-container"),
        cube = $('.cube'),
        matrix = document.getElementsByClassName('matrix')[0],
        cubeX,
        cubeY,
        onCube,
        width = $(window).width(),
        height = $(window).height(),
        realX,
        realY,
        zoomIn = 0,
        mIn = [false,false,false,false,false,false];


        container.css('margin-top',height*0.3);
        window.addEventListener( 'resize', onWindowResize, false );


		$(matrix.children[0]).hover(function(){
        	mIn[0] = true;
        });
        $(matrix.children[0]).mouseleave(function(){
        	mIn[0] = false;
        });
        $(matrix.children[1]).hover(function(){
        	mIn[1] = true;
        });
        $(matrix.children[1]).mouseleave(function(){
        	mIn[1] = false;
        });
        $(matrix.children[2]).hover(function(){
        	mIn[2] = true;
        });
        $(matrix.children[2]).mouseleave(function(){
        	mIn[2] = false;
        });
        $(matrix.children[3]).hover(function(){
        	mIn[3] = true;
        });
        $(matrix.children[3]).mouseleave(function(){
        	mIn[3] = false;
        });
        $(matrix.children[4]).hover(function(){
        	mIn[4] = true;
        });
        $(matrix.children[4]).mouseleave(function(){
        	mIn[4] = false;
        });
        $(matrix.children[5]).hover(function(){
        	mIn[5] = true;
        });
        $(matrix.children[5]).mouseleave(function(){
        	mIn[5] = false;
        });



    $(matrix).mousedown(function(e){
    	//cube.css('webkitAnimationPlayState', 'paused');
        cubeX = e.clientX,
        cubeY = e.clientY;
        onCube = true;

        
        document.addEventListener('mousemove',mousemove);
        return;
    });

    $(matrix).mouseup(endMove);


    $(matrix).on('contextmenu', function (e) {
        if(zoomIn == 0){
            container.attr('style', 'transform: scale(1.7);');
            container.css('margin-top',height*0.3);
            zoomIn = 1;
        }
        else if(zoomIn == 1){
            container.attr('style', 'transform: scale(.4);');
            container.css('margin-top',height*0.3);
            zoomIn = 2;
        }
        else{
            container.attr('style', 'transform: scale(1);');
            container.css('margin-top',height*0.3);
            zoomIn = 0;
        }
        e.preventDefault();
        //container.attr("style", "transform: rotateY(" + cursorX + "deg) rotateX(" + cursorY + "deg);-webkit-transform: rotateY(" + cursorX + "deg) rotateX(" + cursorY + "deg);-moz-transform: rotateY(" + cursorX + "deg) rotateX(" + cursorY + "deg);  transition: 2s;");
    });

    function onWindowResize() {
    	width = $(window).width();
        height = $(window).height();
        container.css('margin-top',height*0.3);
    }

    function mousemove(m){
            if(!onCube || m.clientX<0 || m.clientX>width || m.clientY<0 || m.clientY>height|| !(mIn[0]||mIn[1]||mIn[2]||mIn[3]||mIn[4]||mIn[5]) ){
                endMove();
            	return;
            }
            realX = m.clientX-cubeX;
            realY = m.clientY-cubeY;
            if(Math.abs(realX) < width/2 - 60)
                container.css('left',realX);
            if((-height/2*0.646<realY) && (realY<height/2*0.98))
                container.css('top',realY);
        }

    function endMove(){
    	onCube = false;
		document.removeEventListener('mousemove',mousemove);
	    container.animate({
	    	left: 0,
	    	top: 0
			},"slow");
    
    	//cube.css('webkitAnimationPlayState', 'running');
    }
}

