/*
let isMoving = false;
//let x = 0;
//let y = 0;

document.addEventListener('mousedown', e => {
	console.log('mousedown');
	if(isLogoClicked){
		isMoving = true;
  		//x = e.offsetX;
  		//y = e.offsetY;
	}
});

document.addEventListener('mousemove', e => {
	console.log('mousemove');
	if(isLogoClicked){
		if(isMoving){
            var el = document.getElementsByClassName('flower')[0];
            //x = e.offsetX;
    		//y = e.offsetY;
            //el.style.left = x;
            //el.style.top = y;
            if((e.offsetX <= 10) || (e.offsetY <= 10)){
                return false;
            }else{
                el.style.left = e.offsetX;
                el.style.top = e.offsetY;
                console.log('x = ', e.offsetX);
                console.log('y = ', e.offsetY);
            }
		}
	}
});

document.addEventListener('mouseup', e => {
	console.log('mouseup');
	if(isLogoClicked){
		isMoving = false;
  		//x = e.offsetX;
  		//y = e.offsetY;
	}
});
*/
