"use strict";

var searchButton = document.querySelector("button"); // selecting by element type
var searchcountryCode = document.querySelector("#countryCode"); // selecting by id

var loadingText = document.querySelector("#load"); // selecting by id
var calendarBox = document.querySelector("#calendar"); // selecting by id

var calendarCity = calendarBox.firstElementChild; // ? selecting using parent node 
var calendarDescription = document.querySelector("#calendarholidayName"); // selecting by id
var calendarTemperature = calendarBox.lastElementChild; // ? selecting using parent node 


