function main(){
    document.querySelector( "#nav-toggle" ).addEventListener( "click", menu);

    var popUp = false,
        menuItem = document.getElementsByTagName('a'),
        prev = menuItem[3];
        
        $( prev ).toggleClass( "press" );

        for(var i=0; i<5; i++)
            menuItem[i].addEventListener( "click", obj);

    function menu() {
        if(!popUp)
       {
            this.classList.toggle( "active" );
            $( "#menu" ).show();
            $( "#menu" ).fadeTo( "slow" , 0.93);
            popUp = true;
        }
        else
            hideMenu();
    }

    function obj(){
       $( this ).toggleClass( "press" );
        hideMenu();
            $( prev ).toggleClass( "press" );
        prev = this;
    }

    function hideMenu(){
        $( "#nav-toggle" ).toggleClass( "active" );
            $( "#menu" ).fadeTo( "slow" , 0, function(){
                 $( this ).hide(); 
            });
            popUp = false;
    }


}
