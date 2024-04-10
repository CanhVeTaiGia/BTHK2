"use strict";
function stringArrOrNumberArr(a) {
    if (typeof (a) === "string")
        return console.log(a);
    if (Array.isArray(a))
        return a.forEach(item => console.log(item));
}
stringArrOrNumberArr((["hai"]));
stringArrOrNumberArr((["hai", "hải"]));
