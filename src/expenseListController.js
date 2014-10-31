({
    update: function(component, evt, helper) {
        console.log('update: start');
        var expense = component.get('v.expense');
        console.log(expense);
        var updateEvent = $A.get('e.BarnSwallow:updateExpenseItem');
        console.log(updateEvent);
        
        updateEvent.setParams({ 'expense': expense }).fire();
        console.log('update: end');
    }
})