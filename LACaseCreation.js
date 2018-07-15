function myFunction(){
	if(document.getElementsByTagName('legend')[0].innerHTML=='Login to your Account'){	
		document.getElementsByName('USER')[0].value='LATest';	
		document.getElementsByName('PASSWORD')[0].value='LATest';
		document.getElementById('BUTTON_NEXT1').click();
	}
	if(document.getElementsByTagName('legend')[0].innerHTML=='Login Warning'){	
		document.getElementById('agreePolicy').checked = true;	
		document.getElementById('BUTTON_NEXT1').click();
	}
	if(document.getElementsByClassName('applicationListItem')[0].getElementsByTagName('a')[0].innerHTML=='My Applications'){		
		document.getElementsByClassName('applicationListItem')[0].getElementsByTagName('a')[0].click();
	}
	if(document.getElementsByTagName('legend')[0].innerHTML=='Apply For Benefits/Services'){	
		document.getElementById('BUTTON_NEXT1').click();
	}	
	if(document.getElementsByTagName('legend')[0].innerHTML=='Which Benefits/Services Would You Like to Apply For?'){	
		document.getElementById('requestFoodShare').checked = true;	
		document.getElementById('BUTTON_NEXT1').click(); 		
	}
	if(document.getElementsByTagName('legend')[0].innerHTML=='Import Application Data'){	
		document.getElementById('BUTTON_NEW_APPLICATION').click();
	}
	if(document.getElementsByTagName('legend')[0].innerHTML=='More About Benefits'){
		document.getElementById('agreePolicyABPPS').checked = true;			
		document.getElementById('BUTTON_NEXT1').click();
	}	
	if(document.getElementsByTagName('legend')[0].innerHTML=='Application Location'){
		document.getElementById('radioGroup1_1').checked = true;
		document.getElementById('label_7_N').checked = true;	
		document.getElementById('BUTTON_NEXT1').click();
	}
	if(document.getElementsByTagName('legend')[0].innerHTML=='Information About You'){
		document.getElementById('firstName').value = 'Joseph';
		document.getElementById('lastName').value = 'Shaw';
		document.getElementById('gender_M').checked = true;	
		document.getElementById('dateOfBirth').value = '07/22/1985';
		document.getElementById('seasonalFarmWorker').value = 'N';
		document.getElementById('jobRecentlyEnded').value = 'N';
		document.getElementById('moneyFromNewSource').value = 'N';
		document.getElementById('streetNumber_org').value = 'Richmond Circle';
		document.getElementById('streetName_org').value = '2nd Street';
		document.getElementById('city_org').value = 'New Orleans';
		document.getElementById('state_org').value = 'LA';
		document.getElementById('zipCode_org').value = '70148';
		document.getElementById('parish').value = '26';
		document.getElementById('cellPhone').value = '287';
		document.getElementById('phone2cellPhone').value = '985';
		document.getElementById('phone3cellPhone').value = '2897';
		document.getElementById('BUTTON_NEXT1').click();
	}	
	if(document.getElementsByTagName('legend')[0].innerHTML=='Basic Information Summary'){
		document.getElementById('BUTTON_NEXT1').click();	
	}
	if(document.getElementsByTagName('legend')[0].innerHTML=='People In Your Home'){
		document.getElementById('maritalStatus').value = 'MA';		
		document.getElementById('schoolDetails').value = '98';
		document.getElementById('radioGroup_otherName_N').checked = true;
		document.getElementById('requestFoodShare').checked = true;	
		document.getElementById('socialSecurity').value=Math.floor(Math.random() * 899+100);
		document.getElementById('ssn2socialSecurity').value=Math.floor(Math.random() * 99+10);
		document.getElementById('ssn3socialSecurity').value=Math.floor(Math.random() * 8999+1000);		
		document.getElementById('BUTTON_NEXT1').click();	
		document.getElementById('uSCitizen').value = '1';	
		document.getElementById('rfgeArrivalDate').value = '01/01/1930';	
		document.getElementById('state').value = 'LA';	
		document.getElementById('country').value = 'OT';	
		document.getElementById('sponsor_N').checked = true;
		document.getElementById('loopingQuestion_N').checked = true;		
		document.getElementById('BUTTON_NEXT1').click();
	}	
}myFunction()
