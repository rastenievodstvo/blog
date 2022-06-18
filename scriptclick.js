function divclick(){
	console.log('divclick');
	border();
};

function border(){
	if(isClicked){
		unsetBorder();

	}else{
		setBorder();
	}
};
	
function setBorder(){
	isClicked = true;
	point.style.border = '2px solid black';
	var myx = (parseInt(point.style.left,10) - Number(2)) + 'px';
	var myy = (parseInt(point.style.top,10) - Number(2)) + 'px';
	point.style.left=myx;
	point.style.top=myy;
}
	
function unsetBorder(){
	isClicked = false;
	point.style.border = 'none';
	var myx = (parseInt(point.style.left,10) + Number(2)) + 'px';
	var myy = (parseInt(point.style.top,10) + Number(2)) + 'px';
	point.style.left=myx;
	point.style.top=myy;	
};

document.addEventListener('dblclick', function (e) {
  console.log('dbclick');
	if(isClicked){
		document.location.href='https://vk.com/flower_rostov';
	}
});
