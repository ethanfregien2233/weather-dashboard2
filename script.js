$(document).ready(function() {


var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
    "abf8999e7d50163f5a2249b31d6680c5";


$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
        console.log("TITLE", response.data[i]. titile);
    }
});
});

