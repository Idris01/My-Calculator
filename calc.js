/*define the content of the input screen*/
const operand1=document.getElementById('display-oprd1');
const operand2=document.getElementById('display-oprd2');
const operator=document.getElementById('display-op');

const op=document.querySelectorAll('.op'); //make an array of all operators
const func=document.querySelectorAll('.func'); // make an array of all functions
const numb=document.querySelectorAll('.numb'); //make an array of all numbers

let hasOperator=false;

const keys=document.querySelectorAll('button'); // get all buttons 

/* add eventListener to each button*/
for(let i=0;i<keys.length; i++){
	keys[i].addEventListener('click',function(){enterNum(keys[i].value)});
}


function enterNum(keyPressed){
	
	if(numb.indexOf(keyPressed)>0){
		//keyPressed is either a number or a dot
		if(keyPressed==='.' && currentSide.indexOf('.')<0){
			if(currentSide===operand1.contentText){
				operand1.contentText=operand1.contentText + '.';
			}else{
				operand2.contentText=operand2.contentText + '.';
				
			}
		}else {
			processInput(keyPressed);
		}
	
	 
}
} 

function processInput(myInput){
	if(hasOperator){
	
		operand2.contentText=operand2.contentText + myInput;
	}else{
		operand1.contentText=operand1.contentText + myInput;	
	}
}

function currentSide(){
	if(hasOperator){
		return operand2.contentText;
	} else{
		return operand1.contentText;
	}
	
}