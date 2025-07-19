/** 
@NApiVersion 2.0
@NScriptType ClientScript
@ModuleScope Public
*/

define(["N/ui/dialog"], function(dialog) {

    function myFirstScript() {
        var message = "Hello, this is my first script";
        dialog.alert({
            title: "Message",
            message: message
        })
    }

    return {
        pageInit: myFirstScript
    }

})