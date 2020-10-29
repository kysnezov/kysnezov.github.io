let stpbl1 = document.getElementById("stepbl1");
let stpbrd1 = document.getElementById("stepbrbr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrd2 = document.getElementById("stepbrbr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrd3 = document.getElementById("stepbrbr3");

stpbl1.onmouseover = function() {
    stpbrd1.style.borderBottom="3px solid white";
}

stpbl1.onmouseout = function() {
    stpbrd1.style.borderBottom="3px solid black";
}
stpbl2.onmouseover = function() {
    stpbrd2.style.borderBottom="3px solid white";
}

stpbl2.onmouseout = function() {
    stpbrd2.style.borderBottom="3px solid black";
}
stpbl3.onmouseover = function() {
    stpbrd3.style.borderBottom="3px solid white";
}

stpbl3.onmouseout = function() {
    stpbrd3.style.borderBottom="3px solid black";
}