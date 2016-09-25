const stars = function(a) {
if(a===0){return "";} else return "*"+stars(a-1);};
const blank = function (a) {if (a===0){return "";} else return " " + blank(a-1);};
const bond = function (a,b) {if(a===0){return "";} else return blank(a)+stars(b)+"\n"+bond(a-1,b+2);};
const triangleStars = function (a){if(a===0){return "";} else console.log(bond(a,1))
};
triangleStars(5);