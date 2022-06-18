function myleft(){
	console.log(Number(point.style.left));
	//square.style.left = (parseInt(square.style.left,10)+50)+'px';
	var x = (parseInt(point.style.left,10) - Number(10)) + 'px';
	//alert(x);
	point.style.left=x;
}

function myright(){
	console.log(Number(point.style.left));
	//square.style.left = (parseInt(square.style.left,10)+50)+'px';
	var x = (parseInt(point.style.left,10) + Number(10)) + 'px';
	//alert(x);
	point.style.left=x;
}	

function mytop(){
	console.log(Number(point.style.top));
	var y = (parseInt(point.style.top,10) - Number(10)) + 'px';
	point.style.top=y;
}

function mydown(){
	console.log(Number(point.style.top));
	var y = (parseInt(point.style.top,10) + Number(10)) + 'px';
	point.style.top=y;
}
