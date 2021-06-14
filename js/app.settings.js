(function(window,OCDLA){
	
	Visualforce.remoting.buffer = false;
	
	OCDLA.profiles = {};
	
	
	var testProfile = {
		ccNum: '4111111111111111',
		ccExp: '10/2019',
		ccCode: '123',
		amount: '10.01',
		
		BillToContactId: '003j000000rU9Nv',
		BillingFirstName: 'Jose',
		BillingLastName: 'Bernal',
		BillingStreet: '1040 NW 10 AVE APT 219',
		BillingCity: 'Portland',
		BillingStateCode: 'OR',
		BillingPostalCode: '97209',
		sameShipping: true
	};
	
	
	OCDLA.authorizeDotNetWebService = "/OcdlaCCAuthorize";
	OCDLA.authNetCalloutDelegate = "OcdlaCCAuthorize";
	
	
	OCDLA.profiles['testProfile'] = testProfile;

	
	window.forceOrgType = {
		SALESFORCE_PROD_ORG: 1,
		SALESFORCE_DEV_ORG: 2
	};


	OCDLA.Checkout = {};
	
	
	
	var getPaymentProfileFormatFromContact = function(c){
		var profile = {
			FirstName: c.FirstName,
			LastName: c.LastName,
			AccountId: c.AccountId,
			ContactId: c.Id,
			BillingFirstName: c.FirstName,
			BillingLastName: c.LastName,
			BillingStreet: c.MailingStreet,
			BillingCity: c.MailingCity,
			BillingStateCode: c.MailingStateCode,
			BillingPostalCode: c.MailingPostalCode
		};
		
		return profile;
	};



	/**
	 * @method, loadProfile
	 *
	 * @param, profileObject; type, Object
	 *
	 * @description,
	 *    Helper method to preload some testing cc data.
	 *
	 */
	var loadProfile = function(profileObject){
	
		var ccData = typeof profileObject === 'string' ? OCDLA.profiles[profileObject] : profileObject;
		
		for(var i in ccData){
			if(typeof ccData[i] === 'undefined' || ccData[i] == '') continue;
			$('#'+i).val(ccData[i]);
		}
	};



	window.loadProfile = loadProfile;
	window.getPaymentProfileFormatFromContact = getPaymentProfileFormatFromContact;


})(window,OCDLA);