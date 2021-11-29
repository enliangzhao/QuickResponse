/// front logic for the report 
$('.cancel').click(function(){
    window.location.href ='/'
})


$('#place').click(function(){
    $('#address').css('visibility', 'visible')
})

$(".publish").click(function(){

    $(".publish").click(function(){
        var check = document.getElementsByTagName('input')[6];
        if(check.checked){
            alert("Successfully send the report to the police and citizen in your community");
        }else{
            alert("Successfully send the report to the police");
        } 
        window.location.href ='/'
    })
})



