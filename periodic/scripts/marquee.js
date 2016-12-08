function marque(){
	var svg = document.getElementsByTagName("svg")[0],
		on,
		element,
		prev = 0,
		welcome = true,
		inside,
		timeout;

	for(var i=0;i<118;i++){
	    var el = document.getElementsByTagName("a")[i];
	    el.addEventListener("mouseenter", hover);
	    el.addEventListener("mouseleave", out);
	}


	function hover(){	
	    clearTimeout(timeout);
		element = event.currentTarget;
		if(prev && element == prev && !welcome)
			return;
		inside = true;
		
		if(!on){
			on = true;
			clear();
			setTimeout(function() {

						// MarqueeCheck & Clear a trash

				if(prev.className == 'lanthanide')
					document.getElementsByTagName("p")[3].removeAttribute("id");
				else if(prev.className == 'actinide')
					document.getElementsByTagName("p")[4].removeAttribute("id");
				else if(prev)
					removeClass(prev, "yourTime");
				if(welcome)
					clearWelcome();
				clearClear();

						//Drawing
				setTimeout(function() {
					if(inside){
						if(element.className == 'lanthanide')
							document.getElementsByTagName("p")[3].setAttribute("id", 'lanShow');
						else if(element.className == 'actinide')
							document.getElementsByTagName("p")[4].setAttribute("id", 'actShow');
						else
							addClass(element, "yourTime");
					}
					else
						resurrectionWelcome();
					prev = element;			
					on = false;
				},5);
			},1500);
		}		
	}

	function out(){
		inside = false;
		if(!welcome){
			clearTimeout(timeout);
			timeout = setTimeout(function () {

				clear();
				prev == 0;
				setTimeout(function() {
					if(inside)
						return;
					// MarqueeCheck & Clear a trash

					if(prev.className == 'lanthanide')
						document.getElementsByTagName("p")[3].removeAttribute("id");
					else if(prev.className == 'actinide')
						document.getElementsByTagName("p")[4].removeAttribute("id");
					else if(prev)
						removeClass(prev, "yourTime");
					if(welcome)
						clearWelcome();
					clearClear();

							//Drawing

					if(inside){
						if(element.className == 'lanthanide')
							document.getElementsByTagName("p")[3].setAttribute("id", 'lanShow');
						else if(element.className == 'actinide')
							document.getElementsByTagName("p")[4].setAttribute("id", 'actShow');
						else
							addClass(element, "yourTime");
					}
					else
						setTimeout(resurrectionWelcome,5);
					prev = element;			
					on = false;
				},1500);

			}, 5000);
		}
	}





	function clearWelcome(){
		var p = document.getElementsByTagName("p");
		for (i=0; i< 3; i++)
			p[i].setAttribute("class", "per");
		welcome = false;
	}
	function resurrectionWelcome(){
		var p = document.getElementsByTagName("p");
		for (i=0; i< 3; i++)
			p[i].removeAttribute("class");
		welcome = true;
	}

	function clear(){
		svg.setAttribute("id", "clear");
	}
	function clearClear(){
		svg.removeAttribute("id");
	}




	//from Google
	function addClass(o, c){
	    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
	    if (re.test(o.className)) return
	    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
	} 
	function removeClass(o, c){
	    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
	    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
	}
}