function myFunction(){
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='What action are you trying to perform?'){	
			document.getElementById('radioGroup1_1').checked = true;	
			document.getElementById('zipCode').value = 70148;
			//document.getElementById('socialSecurity').value=Math.floor(Math.random() * 899+100);
			//document.getElementById('ssn2socialSecurity').value=Math.floor(Math.random() * 99+10);
			//document.getElementById('ssn3socialSecurity').value=Math.floor(Math.random() * 8999+1000);
			//document.getElementById('dateOfBirth').value = '07/22/1985';
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('a')[6])){
		if(document.getElementsByTagName('a')[6].innerHTML=='Click here to log in!'){	
			document.getElementsByTagName('a')[6].click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Login to your Account'){	
			document.getElementsByName('USER')[0].value='LATest';	
			document.getElementsByName('PASSWORD')[0].value='LATest';
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Login Warning'){	
			document.getElementById('agreePolicy').checked = true;	
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByClassName('applicationListItem')[0])){
		if(document.getElementsByClassName('applicationListItem')[0].getElementsByTagName('a')[0].innerHTML=='My Applications'){		
			document.getElementsByClassName('applicationListItem')[0].getElementsByTagName('a')[0].click();
		}
	}
	if(!!(document.getElementsByClassName('MyAccountLargeBoxHeader')[0])){
		if(document.getElementsByClassName('MyAccountLargeBoxHeader')[0].innerHTML=='Submit an Application for Benefits/Services'){	
			document.getElementById('BUTTON_APPLYNOW').click();
		}
	}	
	if(!!(document.getElementsByTagName('legend')[1])){
		if(document.getElementsByTagName('legend')[1].innerHTML=='Apply For Benefits/Services'){	
			document.getElementById('BUTTON_NEXT1').click();
		}
	}	
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='<strong class="required_field">*</strong>Which Benefits/Services Would You Like to Apply For?'){	
			document.getElementById('requestFoodShare').checked = true;	
			//document.getElementById('BUTTON_NEXT1').click(); 		
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Import Application Data'){	
			document.getElementById('BUTTON_NEW_APPLICATION').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='More About Benefits'){
			document.getElementById('agreePolicyABPPS').checked = true;			
			document.getElementById('BUTTON_NEXT1').click();
		}
	}	
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Application Location'){
			document.getElementById('radioGroup1_1').checked = true;
			document.getElementById('label_7_N').checked = true;	
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[1])){
		if(document.getElementsByTagName('legend')[1].innerHTML=='Information About You'){
			document.getElementById('firstName').value = 'Joseph';
			document.getElementById('lastName').value = 'Shaw';
			document.getElementById('gender_M').checked = true;	
			document.getElementById('dateOfBirth').value = '07/22/1985';
			document.getElementById('seasonalFarmWorker').value = 'N';
			document.getElementById('streetNumber_org').value = 'Richmond Circle';
			document.getElementById('streetName_org').value = '2nd Street';
			document.getElementById('city_org').value = 'New Orleans';
			document.getElementById('state_org').value = 'LA';
			document.getElementById('zipCode_org').value = '70148';
			document.getElementById('parish').value = '26';
			document.getElementById('cellPhone').value = '287';
			document.getElementById('phone2cellPhone').value = '985';
			document.getElementById('phone3cellPhone').value = '2897';
			document.getElementById('understandEnglish_N').checked = true;
			document.getElementById('writeYourLettersInEnglishOrSpanish').value = 'E';
			document.getElementById('radioGroup_intprtr_N').checked = true;
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Basic Information Summary'){
			document.getElementById('BUTTON_NEXT1').click();	
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='People In Your Home'||document.getElementsByTagName('legend')[0].innerHTML=='Personal Information'){
			document.getElementById('maritalStatus').value = 'MA';		
			document.getElementById('schoolDetails').value = '98';
			document.getElementById('radioGroup_otherName_N').checked = true;
			document.getElementById('requestFoodShare').checked = true;	
			document.getElementById('socialSecurity').value=Math.floor(Math.random() * 899+100);
			document.getElementById('ssn2socialSecurity').value=Math.floor(Math.random() * 99+10);
			document.getElementById('ssn3socialSecurity').value=Math.floor(Math.random() * 8999+1000);			
			document.getElementById('uSCitizen').value = '1';
			document.getElementById('hspcInd_Y').checked = true;
			document.getElementById('blkInd_race').checked = true;
			document.getElementById('loopingQuestion_N').checked = true;
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Additional Information About People in Your Home'){
			document.getElementById('NoOne_blindDisabled').checked = true;
			document.getElementById('NoOne_fosterChildInfoRes').checked = true;
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML.indexOf('Disability')>=0){
			document.getElementById('radioGroup_ssa_Y').checked = true;
			document.getElementById('radioGroup_othIll_Y').checked = true;
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Household Members Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML.indexOf('Questions')>=0){
			document.getElementById('NoOne_fsDisqualification').checked = true;
			document.getElementById('NoOne_avdProsecution').checked = true;
			document.getElementById('NoOne_violatParole').checked = true;
			document.getElementById('NoOne_otherStateBenefit').checked = true;
			document.getElementById('NoOne_student').checked = true;
			document.getElementById('NoOne_convictions').checked = true;			
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Household Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Job Income Information'){
			document.getElementById('NoOne_RecentJob').checked = true;
			document.getElementById('NoOne_JobEnd').checked = true;
			document.getElementById('NoOne_OnStrike').checked = true;
			document.getElementById('NoOne_SelfEmp').checked = true;
			document.getElementById('NoOne_LkngWrk').checked = true;		
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML.indexOf('Job')>=0 && document.getElementsByTagName('legend')[0].innerHTML!='Job Income Summary'){
			document.getElementById('employerName').value = 'Facebook';
			document.getElementById('employerAddressLine1').value = '1 Hacker Way';
			document.getElementById('employerCity').value = 'Menlo Park';
			document.getElementById('state').value = 'CA';
			document.getElementById('zipCode').value = '94025';
			document.getElementById('cellPhone').value = '387';
			document.getElementById('phone2cellPhone').value = '289';
			document.getElementById('phone3cellPhone').value = '2893';			
			document.getElementById('workStudyProgram_N').checked = true;
			document.getElementById('dueDate_emplBeginDate').value = '01/01/2018';			
			document.getElementById('dueDate_firstPayDate').value = '01/31/2018';	
			document.getElementById('howOften').value = 'M';	
			document.getElementById('weekPaid').value = 'V';	
			document.getElementById('howMuch').value = '500';
			document.getElementById('employmentHours').value = '40';
			document.getElementById('daysPerWeek').value = '5';
			document.getElementById('earnTipsonJob_N').checked = true;
			document.getElementById('earnCommision_N').checked = true;
			document.getElementById('workOvertime_N').checked = true;
			document.getElementById('paidDirectdeposit_Y').checked = true;
			document.getElementById('bankName').value = 'Morgan Chase';
			document.getElementById('loopingQuestion_N').checked = true;
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Job Income Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Money From Other Sources'){
			document.getElementById('NoOne_SSI').checked = true;
			document.getElementById('NoOne_SSD').checked = true;
			document.getElementById('NoOne_UnEmp').checked = true;
			document.getElementById('NoOne_WorkComp').checked = true;
			document.getElementById('NoOne_ChildSupport').checked = true;		
			document.getElementById('NoOne_FriFamily').checked = true;
			document.getElementById('NoOne_VetrBnft').checked = true;		
			document.getElementById('NoOne_OtherIncome').checked = true;
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Other Income Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Housing Information'){
			document.getElementById('rentOrLotRent_1').checked = true;
			document.getElementById('housingResponse_Z').checked = true;
			document.getElementById('utilExpResponse_N').checked = true;
			document.getElementById('heatCoolPrimSrc_N').checked = true;
			document.getElementById('hudOrFmha_N').checked = true;		
			document.getElementById('energyAssistance_N').checked = true;
			document.getElementById('utilitiesInclude_N').checked = true;		
			document.getElementById('NoOne_RoomAndMeals').checked = true;
			document.getElementById('NoOne_meals').checked = true;
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Rent Bill'){
			document.getElementById('howMuch').value = '100';
			document.getElementById('pastDue_N').checked = true;
			document.getElementById('lastName_llrd').value = 'Room Owner';
			document.getElementById('addressLine1_llrd').value = 'Parkstreet Avenue';
			document.getElementById('city_llrd').value = 'Menlo Park';		
			document.getElementById('zipCode_llrd').value = '94025';
			document.getElementById('phoneNumber_llrd').value = '789';
			document.getElementById('phone2phoneNumber_llrd').value = '578';
			document.getElementById('phone3phoneNumber_llrd').value = '4578';		
			document.getElementById('radioGroup1_N').checked = true;
			document.getElementById('loopingQuestion_N').checked = true;
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Housing And Utility Bills Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Your Other Expenses'){
			document.getElementById('NoOne_DependentCareBills').checked = true;		
			document.getElementById('NoOne_SupportPayments').checked = true;
			document.getElementById('NoOne_MedBills').checked = true;
			document.getElementById('NoOne_MedTrans').checked = true;
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Other Bills Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Liquid Resources'){
			document.getElementById('NoOne_Cash').checked = true;		
			document.getElementById('NoOne_SavingsAccount').checked = true;
			document.getElementById('NoOne_CheckingAccount').checked = true;
			document.getElementById('NoOne_JointAccount').checked = true;
			document.getElementById('NoOne_LumpSum').checked = true;		
			document.getElementById('NoOne_FederalTaxRefund').checked = true;
			document.getElementById('NoOne_OtherLiquidAssets').checked = true;
			document.getElementById('NoOne_Transfer').checked = true;			
			//document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML.indexOf('Cash')>=0){
			document.getElementById('howMuch_amt').value = '70';
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Liquid Resource Summary'){
			document.getElementById('BUTTON_NEXT1').click();
		}
	}
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML.indexOf('Health')>=0){
			document.getElementById('dhhShareIndicator_N').checked = true;					
			document.getElementById('BUTTON_NEXT1').click();
		}
	}	
	if(!!(document.getElementsByTagName('legend')[0])){
		if(document.getElementsByTagName('legend')[0].innerHTML=='Signing Your Application'){
			document.getElementById('dcfsEmployee_N').checked = true;		
			document.getElementById('eSignRightsAndResp').checked = true;
			document.getElementById('electronicSignature').checked = true;
			document.getElementById('pinNumber').value = '940259';			
			document.getElementById('BUTTON_SUBMIT1').click();
		}
	}	
}myFunction()
