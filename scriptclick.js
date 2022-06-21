var isTreeClicked = false;
var isFirstTreeClicked = false;
var isSecondTreeClicked = false;
var isLogoClicked = false;
var isRastenieClicked = false;
var isFlowerClicked = false;
var isBegoniyaClicked = false;

function logoclick(){
	console.log('logoclick');	
	logoBorder();
}

function divclick(){
	console.log('divclick');
	//border();
};

function begoniyaClick(){
	console.log('begoniyaclick');
	begoniyaBorder();
}

function rastenieclick(){
	console.log('rastenieclick');
	rastenieborder();
}

function treeclick(){
	console.log('treeclick');
	treeborder();
}

function firstTreeClick(){
	console.log('firstTreeClick');
	firstTreeBorder();
}

function secondTreeClick(){
	console.log('secondTreeClick');
	secondTreeBorder();
}

function flowerclick(){
    console.log('flowerclick');
    //myfunction();
    //border();
    flowerborder();
}

function firstTreeBorder(){
	console.log('firstTreeBorder');
	if(isFirstTreeClicked){
		//firstTreeUnsetBorder();
	}else{
		firstTreeSetBorder();
	}
}

function firstTreeSetBorder(){
	isFirstTreeClicked = true;
    var el = document.getElementsByClassName('tree')[0];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;	
}

function firstTreeUnsetBorder(){
	isFirstTreeClicked = false;
    var el = document.getElementsByClassName('tree')[0];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;	
}

function secondTreeBorder(){
	console.log('secondTreeBorder');
	if(isSecondTreeClicked){
		//secondTreeUnsetBorder();	
	}else{
		secondTreeSetBorder()
	}
}

function secondTreeSetBorder(){
	isSecondTreeClicked = true;
    var el = document.getElementsByClassName('tree')[1];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;		
}

function secondTreeUnsetBorder(){
	isSecondTreeClicked = false;
    var el = document.getElementsByClassName('tree')[1];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;	
}

function begoniyaBorder(){
	console.log('begoniyaBorder');
	if(isBegoniyaClicked){
		//begoniyaUnsetBorder();	
	}else{
		begoniyaSetBorder();	
	}
}

function begoniyaSetBorder(){
	isBegoniyaClicked = true;
    var el = document.getElementsByClassName('begoniya')[0];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;	
}

function begoniyaUnsetBorder(){
	isBegoniyaClicked = false;
    var el = document.getElementsByClassName('begoniya')[0];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
}

function treeborder(){
	var el = document.getElementsByClassName('tree')[0];
	el.style.border = '2px solid green';
}

function rastenieborder(){
	var el = document.getElementsByClassName('rastenie')[0];
	el.style.border = '2px solid black';
}

function logoBorder(){
    if(isLogoClicked){
		//unsetLogoBorder();
	}else{
		setLogoBorder();
	}
}

function flowerborder(){
        var el = document.getElementsByClassName('flower')[1];
        el.style.border = '2px solid black';
}
	
function setLogoBorder(){
	isLogoClicked = true;
    var el = document.getElementsByClassName('flower')[0];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
}
	
function unsetLogoBorder(){
	isLogoClicked = false;
    var el = document.getElementsByClassName('flower')[0];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
};

function unsetBorderAll(){
        console.log('unsetBorderAll');
        
        if(isBegoniyaClicked){
                begoniyaUnsetBorder();
        }
}


document.addEventListener('dblclick', function (e) {
  console.log('dbclick');
	if(isLogoClicked){
		document.location.href='https://vk.com/flower_rostov';
	}
	
	if(isBegoniyaClicked){
		document.location.href='https://vk.com/flower_rostov?owner_id=-115069489&post_id=52297&w=product-198582766_120865117_8e3eb377fc5497b8d4';	
	}
});
