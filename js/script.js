// Business logic

var radisson="Radisson"+" "+"Blu"+" "+"Anchorage"+" "+"Hotel"+" "+"Lagos";//5_4-6
var lagos="Lagos"+" "+"Continental"+" "+"Hotel"+" "+"Lagos";//6_8-10 
var villa="Villa"+" "+"Rosa"+" "+"Kempinski"+" "+"Nairobi";//6_4-6 
var  fairmont="Hotel"+" "+"Fairmont"+" "+"The"+" "+"Norfolk"+" "+"Nairobi";//5_8-10
var taj="Taj"+" "+"Cape"+" "+"Town";//5_4-6
var only="One" +" "+ "\&" + " " +"only"+" "+ "Cape" +" "+"Town";//6_8-10
var nile="The" +" "+ " "+"Nile"+ " "+"Ritz-Carlton" +" "+"Cairo";//5_4-6
var kemp="Kempinski"+" " +"Nile"+" "+"Hotel"+" " +"Garden" +" "+"City"+" "+"Cairo";//6_8-10

// user logic
$(document).ready(function(){
    $(".q1").hide();
    $(".q2").hide();
    $(".q3").hide();
    $(".q4").hide();
    $(".result").hide();
    $(".page-footer").hide();
$("#button1").click(function(){
$(".welcoming").toggle();
$(".q1").toggle();
});
$(".q1 .form-group").submit(function(event){
event.preventDefault();

    $(".q2").show();
    $(".q1").hide();
});
$(".q2 .form-group").submit(function(event){
    event.preventDefault();
    
        $(".q3").show();
        $(".q2").hide(); 
    });
    $(".q3 .form-group").submit(function(event){
        event.preventDefault();
        
            $(".q4").show();
            $(".q3").hide();
        });
        $(".q4 .form-group").submit(function(event){
            event.preventDefault();
            var loc=$("select#location").val();
            var price=$("input:radio[name=range]:checked").val();
            var rate=$("input:radio[name=rate]:checked").val();
            var rehotel;
            if(loc==="cairo" && price==="1" && rate==="5"){
                rehotel = nile;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();
            }
            else if(loc==="cairo" && price==="2" && rate==="6"){
                rehotel = kemp;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();

            }
            else if(loc==="cape_town" && price==="1" && rate==="5"){
                rehotel = taj;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();

            }
            else if(loc==="cape_town" && price==="2" && rate==="6"){
                rehotel =only;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();

            }
            else if(loc==="nairobi" && price==="2" && rate==="5"){
                rehotel =fairmont;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();

            }
            else if(loc==="nairobi" && price==="1" && rate==="6"){
                rehotel =villa;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();

            }
            else if(loc==="lagos" && price==="2" && rate==="6"){
                rehotel =lagos;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();

            }
            else if(loc==="lagos" && price==="1" && rate==="5"){
                rehotel =radisson;
                $("#hotel_name").empty().append(rehotel);
                $(".result").show();
                $(".page-footer").show();
                $(".q4").hide();
            }
            
               
         });





});