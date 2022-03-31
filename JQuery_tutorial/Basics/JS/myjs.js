var fun=function(){
    console.log("In function");
} 
$(document).ready(fun());

//hide
$('#btn1').click(function(){
    $('#container').hide();
});

//show
$('#btn2').click(function(){
    $('#container').show();
});

//fade out
$('#btn3').click(function(){
    //$('#container').fadeOut();
    //we can also specify time and message
    $('#container').fadeOut(2000,function(){
        alert("Gone...");
    });
});

//fadeIn
$('#btn4').click(function(){
    // $('#container').show();
    $('#container').fadeIn();
});

//Fade Toggle
$('#btn5').click(function(){
    $('#container').fadeToggle();
});

//Fade To
$('#btn6').click(function(){
    $('#container').fadeTo(250,0.5,function(){
        alert("Faded to 0.5 Opacity")
    });
});

// SlideUp
$("#btn7").click(function(){
    $('#container').slideUp();
});

//slideDown
$('#btn8').click(function(){
    $('#container').slideDown();
});

//SlideToggle
$('#btn9').click(function(){
    $('#container').slideToggle();
});

//animate

//animate({params},speed,callBackFunction)

$("#btn10").click(function(){
    $("#container").animate({width:"600px",height:"400px"},200,function(){
        $("#container").animate({width:"200px",height:"200px"},200,function(){
            $("#container").animate({width:"100px",height:"100px",borderRadius:"10px"});
        });
    });
});

$("#btn11").click(function(){
    $("#field").val($("#content").html());
});

$("#btn12").click(function(){
    // $("#image1").src("https://media.istockphoto.com/photos/portrait-of-a-siberian-tiger-picture-id1151170153?k=20&m=1151170153&s=612x612&w=0&h=IjbRX9--iDsOVs3Be2Dqt5fDJvWt6KECna9FV_hiAVg=");
    let s=$("#image1").attr("src");
    if(s=="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"){
        $("#image1").attr("src","https://media.istockphoto.com/photos/portrait-of-a-siberian-tiger-picture-id1151170153?k=20&m=1151170153&s=612x612&w=0&h=IjbRX9--iDsOVs3Be2Dqt5fDJvWt6KECna9FV_hiAVg=");
        $("#image1").animate({width:"300px",height:"300px",borderRadius:"20px"},200);
}
    else
        $("#image1").attr("src","https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80");
})