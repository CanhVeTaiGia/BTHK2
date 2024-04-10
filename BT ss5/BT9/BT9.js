var myString1 = "banana";
var myString2 = "hello world";
var uniqueString1 = myString1.split('').filter(function (value, index, self) {
    return self.indexOf(value) === index;
}).join('');
var uniqueString2 = myString2.split('').filter(function (value, index, self) {
    return self.indexOf(value) === index;
}).join('');
console.log(uniqueString1);
console.log(uniqueString2);
