//validation code

function validate(){
    let valid=false;
    // f=true;
    // let name=$(".name-field").val();
    // // console.log(name);
    // if(name=='' || name==undefined){
    //     $(".name-field-msg").html("Enter a Valid Name!!");
    // }
    let name=$('.name-field').val();
    // console.log(name);
    if(name=='' || name==undefined){
        $('.name-field-msg').html("Enter a Valid Name!!").addClass("text-danger").removeClass("text-success");
        valid=false;
    }
    else{
        $('.name-field-msg').html("OK!").removeClass("text-danger").addClass("text-success");
        valid=true;
    }

    //mail
    let mail=$('.mail-field').val();
    let exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail=='' || mail==undefined){
        $('.mail-field-msg').html("Enter Mail ID!!").addClass("text-danger").removeClass("text-success");
        valid=false;
    }
    else if(exp.test(mail)==false){
        $('.mail-field-msg').html("Enter a Vald Email-Id , mail id should be in the form of example@domain.com").removeClass("text-success").addClass("text-danger");
        valid=false;

    }
    else{
        $('.mail-field-msg').html("OK!").removeClass("text-danger").addClass("text-success");
        valid=true;
    }

    //password
    let pass=$('.pass-field').val();
    if(pass=='' || pass==undefined){
        $('.pass-field-msg').html("Password is Required!!").addClass("text-danger").removeClass("text-success");
        valid=false;
    }
    else{
        $('.pass-field-msg').html("OK!").removeClass("text-danger").addClass("text-success");
        valid=true;
    }
     //phone
    let phone=$('.phone-field').val();
    if(phone=='' || phone==undefined){
        $('.phone-field-msg').html("Enter Phone N.O!!").addClass("text-danger").removeClass("text-success");
        valid=false;
    }
    else if(phone.length!=10){
        $('.phone-field-msg').html("Phone N.O should be of length 10").addClass("text-danger").removeClass("text-success");
        valid=false;

    }
    else{
        $('.phone-field-msg').html("OK!").removeClass("text-danger").addClass("text-success");
        valid=true;
    }
    valid=false;
    return valid;
}