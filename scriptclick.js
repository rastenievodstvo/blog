var isClicked = false;
var isTreeClicked = false;
var isFirstTreeClicked = false;
var isSecondTreeClicked = false;
var isLogoClicked = false;
var isRastenieClicked = false;
var isFlowerClicked = false;
var isBegoniyaClicked = false;
var isFikusClicked = false;

function divclick(){
	console.log('divclick');
	//border();
}

function rastenieclick(){
	console.log('rastenieclick');
	rastenieborder();
}

function treeclick(){
	console.log('treeclick');
	treeborder();
}

function logoclick(){
	console.log('logoclick');	
	logoBorder();
}

function begoniyaClick(){
	console.log('begoniyaclick');
	begoniyaBorder();
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

function fikusClick(){
	console.log('fikusClick');
	fikusBorder();
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
    if(isClicked){
            unsetBorderAll();
    }
    isClicked = true;
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
    if(isClicked){
            unsetBorderAll();
    }
    isClicked = true;
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

function fikusBorder(){
	console.log('fikusBorder');
	if(isFikusClicked){
		//
	}else{
		fikusSetBorder();	
	}
}

function begoniyaBorder(){
	console.log('begoniyaBorder');
	if(isBegoniyaClicked){
		//begoniyaUnsetBorder();	
	}else{
		begoniyaSetBorder();	
	}
}

function fikusSetBorder(){
	if(!isFikusClicked){
		unsetBorderAll();	
	}
	isClicked = true;
	isFikusClicked = true;
	var el = document.getElementsByClassName('fikus')[0];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;	
}

function unsetFikusBorder(){
	isFikusClicked = false;
    var el = document.getElementsByClassName('fikus')[0];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;	
}

function begoniyaSetBorder(){
    if(isClicked){
            unsetBorderAll();
    }
    isClicked = true;
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
    if(isClicked){
            unsetBorderAll();
    }
    isClicked = true;
	isLogoClicked = true;
    var el = document.getElementsByClassName('logo')[0];
    el.style.border = '2px solid black';
    var myx = (parseInt(el.style.left,10) - Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) - Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
}
	
function unsetLogoBorder(){
	isLogoClicked = false;
    var el = document.getElementsByClassName('logo')[0];
    el.style.border = 'none';
    var myx = (parseInt(el.style.left,10) + Number(2)) + 'px';
    var myy = (parseInt(el.style.top,10) + Number(2)) + 'px';
    el.style.left=myx;
    el.style.top=myy;
};

function unsetBorderAll(){
        console.log('unsetBorderAll');
        
            if(isLogoClicked){
                    unsetLogoBorder();
            }
            
            if(isBegoniyaClicked){
                    begoniyaUnsetBorder();
            }
            
            if(isFirstTreeClicked){
                    firstTreeUnsetBorder();
            }
            
            if(isSecondTreeClicked){
                    secondTreeUnsetBorder();
            }
	
	if(isFikusClicked){
		unsetFikusBorder();	
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
	
	if(isFirstTreeClicked){
            document.location.href='https://azbyka.ru/duxovnost';
    	}
    
	if(isSecondTreeClicked){
		document.location.href='https://vk.com/kinovrostove';
	}
	
	if(isFikusClicked){
		document.location.href='https://vk.com/flower_rostov?owner_id=-115069489&post_id=52297&w=wall-115069489_52333';	
	}
});
