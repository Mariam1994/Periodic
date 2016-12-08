var el = document.getElementsByTagName("a"),
    timeout = 0,
    crack = true,
    colorLess = true,
    newSheet = document.createElement('link'),
    audio = new Audio('content/audios/boom.mp3');


jQuery(document).ready(function(){
        // preload images
    preload([
        'content/imgs/exp.png',
        'content/imgs/g1.png'
        ]);

    function preload(images) {
        if (typeof document.body == "undefined")
            return;
        try {
            var div = document.createElement("div");
            var s = div.style;
                s.position = "absolute";
            s.top = s.left = 0;
            s.visibility = "hidden";
            document.body.appendChild(div);
            div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
            var lastImg = div.lastChild;
            lastImg.onload = function() { document.body.removeChild(document.body.lastChild); };
         }
         catch(e) {
            // Error. Do nothing.
        }
    }
});


function onLoad() {
    for(var i=1;i<=118;i++) {
        el[i].addEventListener("mouseenter", inA);
        el[i].addEventListener("mouseleave", outA);
    }
    init();
    animate();
}

function outA() {
    audio.pause();
    clearTimeout(timeout);
}

function inA() {
    audio.currentTime = 0;
    audio.play();
    if(crack) {
        timeout = setTimeout(function () {
            crack = false;
            illuminatorCrack();
        }, 1400);
    }
}


function addRemove() {
    if(colorLess) {
        addStylesheet();
        colorLess = false;
    }
    else {
        removeStylesheet();
        colorLess = true;
    }
}


function addStylesheet() {
    if(document.createStyleSheet) {
        document.createStyleSheet('content/style/css/static/color.css');
    } 
    else {                    
        newSheet.setAttribute('rel','stylesheet');
        newSheet.setAttribute('type','text/css');
        newSheet.setAttribute('href', 'content/style/css/static/color.css');
        document.getElementsByTagName('head')[0].appendChild(newSheet);
    }
}

function removeStylesheet() {
    document.getElementsByTagName('head')[0].removeChild(newSheet);               
}



function illuminatorCrack() {
    document.getElementsByClassName('illuminator')[0].setAttribute("id", 'illuminator');
}