let isMoving = false;
let x = 0;
let y = 0;

document.addEventListener('mousedown', e => {
	console.log('mousedown');
	if(isLogoClicked){
		isMoving = true;
  		x = e.offsetX;
  		y = e.offsetY;
	}/*else{
		unsetBorder();	
	}*/
});

document.addEventListener('mousemove', e => {
	console.log('mousemove');
	if(isLogoClicked){
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
	if(isLogoClicked){
		isMoving = false;
  		x = e.offsetX;
  		y = e.offsetY;
	}/*else{
		unsetBorder();	
	}*/
});
