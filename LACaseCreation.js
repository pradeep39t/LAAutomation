function myFunction(){
	if(document.getElementsByTagName('legend')[0].innerHTML=='Login to your Account'){	
		document.getElementsByName('USER')[0].value='WI';	
		document.getElementsByName('PASSWORD')[0].value='WI';
		document.getElementById('BUTTON_NEXT1').click();
	}
	if(document.getElementsByClassName('required_field')[0].innerHTML=='Which Benefits/Services Would You Like to Apply For?'){	
		document.getElementById('requestFoodShare').checked = true;	
		document.getElementById('BUTTON_NEXT1').click(); 		
	}
}myFunction()
