function myleft(){
    var el = document.getElementsByClassName('logo')[0];
	//console.log(Number(point.style.left));
    console.log(Number(el.style.left));
	//var x = (parseInt(point.style.left,10) - Number(10)) + 'px';
	var x = (parseInt(el.style.left,10) - Number(10)) + 'px';
	//point.style.left=x;
    el.style.left=x;
}

function myright(){
    var el = document.getElementsByClassName('logo')[0];
	//console.log(Number(point.style.left));
    console.log(Number(el.style.left));
	//var x = (parseInt(point.style.left,10) + Number(10)) + 'px';
    var x = (parseInt(el.style.left,10) + Number(10)) + 'px';
	//point.style.left=x;
    el.style.left=x;
}	

function mytop(){
    var el = document.getElementsByClassName('logo')[0];
	//console.log(Number(point.style.top));
    console.log(Number(el.style.top));
	//var y = (parseInt(point.style.top,10) - Number(10)) + 'px';
    var y = (parseInt(el.style.top,10) - Number(10)) + 'px';
	//point.style.top=y;
    el.style.top=y;
}

function mydown(){
    var el = document.getElementsByClassName('logo')[0];
	//console.log(Number(point.style.top));
    console.log(Number(el.style.top));
	//var y = (parseInt(point.style.top,10) + Number(10)) + 'px';
    var y = (parseInt(el.style.top,10) + Number(10)) + 'px';
	//point.style.top=y;
    el.style.top=y;
}
