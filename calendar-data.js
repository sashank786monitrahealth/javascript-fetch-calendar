"use strict";

function Holiday(countryCode, holidayName){
    this.countryCode = countryCode;
    this.holidayName = holidayName;
    this._holidayType = "";
}


Object.defineProperty(Holiday.prototype, "type", {
      get: function () {
           return this._holidayType;
      },
      set: function(value) {
         this._holidayType = value;
      }
});
