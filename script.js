$(document).ready(function() {
var cityInput=""; 
var queryUrl="";

storeCities();  

 $("#citySelect").on("click", function(event) {
    event.preventDefault();
    cityInput = $("#input").val();
    console.log(citySelect, "citySelect")
    }); 

    
    function storeCities () {

     
    var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" 
    + cityInput + "&appid=" + "abf8999e7d50163f5a2249b31d6680c5";  
    console.log(queryUrl);

     
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        console.log(response.city)
         })
        } 

    
    $("#dWeather").append(

    "<div class='col s12 m6'>"
 
    +  "<h2>" + response.city + "</h2>"

    
    + "</div>"
    );  

});
