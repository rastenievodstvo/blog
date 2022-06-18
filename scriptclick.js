function divclick(){
	console.log('divclick');
	border();
};

function flowerclick(){
    console.log('flowerclick');
    //myfunction();
    //border();
    flowerborder();
}

function flowerborder(){
        var el = document.getElementsByClassName('flower')[1];
        el.style.border = '2px solid black';
        //this.style.border = '2px solid black';
}

function border(){
	if(isClicked){
		unsetBorder();
	}else{
		setBorder();
	}
};


	
function setBorder(){
	isClicked = true;
    var el = document.getElementsByClassName('flower')[0];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
}
	
function unsetBorder(){
	isClicked = false;
    var el = document.getElementsByClassName('flower')[0];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
};

document.addEventListener('dblclick', function (e) {
  console.log('dbclick');
	if(isClicked){
		document.location.href='https://vk.com/flower_rostov';
	}
});
