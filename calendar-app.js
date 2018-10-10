"use strict";

searchButton.addEventListener("click",searchWeather);

function searchWeather(){
     loadingText.style.display = "block";
     calendarBox.style.display = "none";
     var countryCode = searchcountryCode.value;
     if (countryCode.trim().length==0){
      return alert("Please enter a city Name");
    }
    //
    var http = new XMLHttpRequest();
    var apiKey = 'MY-API';
    var url = "https://www.calendarindex.com/api/v1/holidays?country="+countryCode+"&year=2018&api_key="+apiKey;
    var method = "GET";
    
    http.open(method,url);

    http.onreadystatechange = function() {
      if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
         var data = JSON.parse(http.responseText);
        //console.log(data);
        //console.log(data.response.holidays[0].name);
        console.log(data['response']['holidays'][0]['name']);
        var holidayName = data.response.holidays[0].name
         var calendarData = new Holiday(countryCode,holidayName);
         calendarData.type = data.response.holidays[0].type;
         updateWeather(calendarData);
      } else if (http.readyState == XMLHttpRequest.DONE) {
        alert("Something went wrong!"); 
     }
    };
    http.send();
}

function updateWeather(calendarData){
  calendarCity.textContent = calendarData.countryCode;
  calendarholidayName.textContent = calendarData.holidayName;
  calendarTemperature.textContent = calendarData.type;

   loadingText.style.display = "none";
   calendarBox.style.display = "block";

}
