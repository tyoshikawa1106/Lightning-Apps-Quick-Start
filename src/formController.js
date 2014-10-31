({
    doInit : function(component, event, helper) {
        console.log('doInit: start');
        
        //Update expense counters
        helper.getExpenses(component);
        
        console.log('doInit: end');
    },//Delimiter for future code
    createExpense : function(component, event, helper) {
        console.log('createExpense: start');
        var amtField = component.find('amount');
        console.log(amtField);
        
        var amt = amtField.get('v.value');
        console.log(amt);
        
        if (isNaN(amt)||amt==''){
            amtField.setValid('v.value', false);
            amtField.addErrors('v.value', [{message:'Enter an expense amount.'}]);
        } else {
            amtField.setValid('v.value', true);
            var newExpense = component.get('v.newExpense');
            helper.createExpense(component, newExpense);
        }
        console.log('createExpense: end');
    }//Delimiter for future code
})