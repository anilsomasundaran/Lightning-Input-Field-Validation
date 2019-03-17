({
	onClick : function(component, event, helper) {
		
        let isAllValid = component.find('field').reduce(function(isValidSoFar, inputCmp){
            inputCmp.reportValidity();
            return isValidSoFar && inputCmp.checkValidity();
        },true);
	},
    
    onCustomValidationClick : function(component, event, helper) {
        //Explicitly checking the custom validation: 
        var phoneCmp = component.find('phone');
       	var phoneCmpValue = phoneCmp.get("v.value");
        var phoneRegexFormat = /^\d{10}$/;
        if(!phoneCmpValue.match(phoneRegexFormat)) {
            phoneCmp.setCustomValidity("Enter valid phone number");
        }else{
            phoneCmp.setCustomValidity("");
        }
        
        var controlAuraIds = ["firstName","lastName","email","phone"];
        let isAllValid = controlAuraIds.reduce(function(isValidSoFar, controlAuraId){
            var inputCmp = component.find(controlAuraId);
            inputCmp.reportValidity();
            return isValidSoFar && inputCmp.checkValidity();
        },true);
        
        
    }
})