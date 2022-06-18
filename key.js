document.addEventListener('keyup', function(event){
    console.log('Key: ', event.key);
    console.log('keyCode: ', event.keyCode);
    if(event.key == 'ArrowLeft'){
        console.log('left');
	    if(isClicked){
		myleft();
	    }
    }
    if(event.key == 'ArrowRight'){
        console.log('right');
	    if(isClicked){
		myright();
	    }
    }
    if(event.key == 'ArrowDown'){
        console.log('down');
	    if(isClicked){
		mydown();
	    }
    }
    if(event.key == 'ArrowUp'){
        console.log('up');
	    if(isClicked){
		mytop();
	    }
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

