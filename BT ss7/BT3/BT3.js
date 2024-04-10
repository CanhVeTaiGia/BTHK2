var weekDays;
(function (weekDays) {
    weekDays[weekDays["MONDAY"] = 2] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 3] = "TUESDAY";
    weekDays[weekDays["WEDNESDAY"] = 4] = "WEDNESDAY";
    weekDays[weekDays["THURSDAY"] = 5] = "THURSDAY";
    weekDays[weekDays["FRIDAY"] = 6] = "FRIDAY";
    weekDays[weekDays["SARTUDAY"] = 7] = "SARTUDAY";
    weekDays[weekDays["SUNDAY"] = 8] = "SUNDAY";
})(weekDays || (weekDays = {}));
;
console.log(weekDays);
