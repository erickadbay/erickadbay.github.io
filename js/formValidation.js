function checkForm(id){
    if($("#"+id).val()==null || $("#"+id).val()==""){
        validationFalse(id);
        return false;
    }else{
        validationTrue(id);
        return true;
    }
}

function checkHuman(id){
    if($("#"+id).val()==null || $("#"+id).val()=="" ||$("#"+id).val()!=5){
        validationFalse(id);
        return false;
    }else{
        validationTrue(id);
        return true;
    }
}


function validateEmail(id) {
    var sEmail=$("#"+id).val();
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        validationTrue(id);
        return true;
    }else {
        validationFalse(id);
        return false;
    }
}

function showAlert(alertText){
    $("#formAlert").removeClass().addClass('alert alert-danger').text(alertText);
}

function validationFalse(id){
    var div=$("#"+id).closest("div");
    div.removeClass("has-success");
    $("#glypcn"+id).remove();
    div.addClass("has-error has-feedback");
    div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback"></span>');
}

function validationTrue(id){
    var div=$("#"+id).closest("div");
    div.removeClass("has-error");
    $("#glypcn"+id).remove();
    div.addClass("has-success has-feedback");
    div.append('<span id="glypcn'+id+'"class="glyphicon glyphicon-ok form-control-feedback"></span>');
}


$("document").ready(function(){
        $("#contactbtn").click(function(evt){
                if(!checkForm("inputName")){
                    evt.preventDefault();
                    showAlert("Please provide a name and submit again.");// Show the Alert
                    return false;
                }

                if(!validateEmail("inputEmail")){
                    evt.preventDefault();
                    showAlert("Please provide an email with the correct format and submit again.");// Show the Alert
                    return false;
                }

                if(!checkForm("inputMessage")){
                    evt.preventDefault("Please provide a message and submit again.");
                    showAlert("Please provide a message and submit again.");// Show the Alert
                    return false;
                }

                if(!checkHuman("human")){
                    evt.preventDefault();
                    showAlert("Please answer the security question and submit again.");// Show the Alert
                    return false;
                }

                //showAlert("true");

                $("#formAlert").slideUp(400, function () {
                });// Hide the Alert (if visible)

                $("form#contactform").submit();
        });
});
