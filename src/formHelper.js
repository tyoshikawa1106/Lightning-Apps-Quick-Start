({
    getExpenses: function(component) {
        console.log('getExpenses: start');
        var action = component.get("c.getExpenses");
        
        var self = this;
        action.setCallback(this, function(a) {
            console.log('a.getReturnValue() = ' + a.getReturnValue());
            component.set("v.expenses", a.getReturnValue());
            self.updateTotal(component);
        });
        $A.enqueueAction(action);
        console.log('getExpenses: end');
    },
    updateTotal : function(component) {
        console.log('updateTotal: start');
        var expenses = component.get("v.expenses");
        var total = 0;
        for(var i=0; i<expenses.length; i++){
            var e = expenses[i];
            total += e.BarnSwallow__Amount__c;
            console.log('total = ' + total);
        }
        //Update counters
        component.set("v.total", total);
        component.set("v.exp", expenses.length);
        console.log('updateTotal: end');
    },//Delimiter for future code
    createExpense: function(component, expense) {
        console.log('createExpense: start');
        
        this.upsertExpense(component, expense, function(a) {
            var expenses = component.get("v.expenses");
            expenses.push(a.getReturnValue());
            component.set("v.expenses", expenses);
            this.updateTotal(component);
        });
        
        console.log('createExpense: end');
    },
    upsertExpense : function(component, expense, callback) {
        console.log('upsertExpense: start');
        
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
        
        console.log('upsertExpense: end');
    }
})