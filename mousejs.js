document.addEventListener('mousedown', e => {
	console.log('mousedown');
	if(isClicked){
		isMoving = true;
  		x = e.offsetX;
  		y = e.offsetY;
	}/*else{
		unsetBorder();	
	}*/
});

document.addEventListener('mousemove', e => {
	console.log('mousemove');
	if(isClicked){
		if(isMoving){
    		x = e.offsetX;
    		y = e.offsetY;
            var el = document.getElementsByClassName('flower')[0];
            el.style.left = x;
            el.style.top = y;
		}
	}
});

document.addEventListener('mouseup', e => {
	console.log('mouseup');
	if(isClicked){
		isMoving = false;
    		x = 0;
    		y = 0;
	}/*else{
		unsetBorder();	
	}*/
});
