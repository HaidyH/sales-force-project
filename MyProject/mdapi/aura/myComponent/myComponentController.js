({
    myAction : function(component, event, helper) {
        var action = component.get("c.sayHello");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.message", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})