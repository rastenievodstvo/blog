document.addEventListener('keyup', function(event){
    console.log('Key: ', event.key);
    console.log('keyCode: ', event.keyCode);
    if(event.key == 'ArrowLeft'){
        console.log('left');
	    if(isLogoClicked){
            myleft();
	    }
    }
    if(event.key == 'ArrowRight'){
        console.log('right');
	    if(isLogoClicked){
            myright();
	    }
    }
    if(event.key == 'ArrowDown'){
        console.log('down');
	    if(isLogoClicked){
            mydown();
	    }
    }
    if(event.key == 'ArrowUp'){
        console.log('up');
	    if(isLogoClicked){
            mytop();
	    }
    }
    if((event.key == 'c') || (event.key == 'с')){
            console.log('c');
            unsetBorderAll()
    }
    if(event.key == 'm'){
            console.log('m');
            alert("menu");
            
    }
    if(event.key == 'i'){
            console.log('i - info');
            alert("info");
    }
});

/*
document.addEventListener('keydown', function(){
    console.log('Success onkeydown');
	
});
document.addEventListener('keypress', function(event){
    console.log('Success onkeypress');
	console.log('Key: ', event.key);
    console.log('keyCode: ', event.keyCode);
    if(event.key == 'ArrowLeft'){
        console.log('left');
	myleft();
    }
    if(event.key == 'ArrowRight'){
        console.log('right');
	myright();
    }
    if(event.key == 'ArrowDown'){
        console.log('down');
	mydown();
    }
    if(event.key == 'ArrowUp'){
        console.log('up');
	mytop();
    }
});
document.addEventListener('keyup', function(){
    console.log('Success onkeyup');
});
*/

