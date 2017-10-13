function validate() {
    $('#company').on('change', showHideCompany);

    $('#submit').on('click',function(ev){
        ev.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /@.*\./;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

        let valid=true;

        function validateField(selector,rgx){
            if($(selector).val().match(rgx)){
                $(selector).css('border', 'none');
            }else{
                $(selector).css('border-color', 'red');
                valid=false;
            }
        }

        validateField('#username',usernameRegex);
        validateField('#password',passwordRegex);
        validateField('#email',emailRegex);
        if($('#company').is(":checked")) {
            validateField('#companyNumber', companyNumberRegex);
        }
        if($('#confirm-password').val().localeCompare($('#password').val())==0){
            validateField('#confirm-password',passwordRegex);
        }else{
            $('#confirm-password').css('border-color', 'red');
            valid=false;
        }

        //if($('#username').val().match(usernameRegex)){
        //    $('#username').css('border', 'none');
        //}else{
        //    $('#username').css('border-color', 'red');
        //    valid=false;
        //}
//
        //if($('#password').val().match(passwordRegex)){
        //    $('#password').css('border', 'none');
        //}else{
        //    $('#password').css('border-color', 'red');
        //    valid=false;
        //}
        //
        //if($('#email').val().match(emailRegex)){
        //    $('#email').css('border', 'none');
        //}else{
        //    $('#email').css('border-color', 'red');
        //    valid=false;
        //}
        if(valid){
            $('#valid').css('display','block');
        }else{
            $('#valid').css('display','none');
        }
    });

    function showHideCompany() {
        if($(this).is(':checked')){
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}
