//Calculator

var screen_1 = document.getElementById('screen1');
var screen_2 = document.getElementById('screen2');
var sC = document.getElementById('sin_cosec');
var Cs = document.getElementById('cos_sec');
var tC = document.getElementById('tan_cot');
var lL = document.getElementById('log_ln');
var piE = document.getElementById('pi_E');
var facTr = document.getElementsByClassName('pi_fact');
function countNum(number) {
    screen_2.value += number; // = k7 + concatenation(values) klye hai 
}
function equalTo(equal) {
    screen_1.value = eval(screen_2.value); // eval performing klye hai
}
function clearTo() {
    screen_1.value = screen_2.value = "";
}
function deletedTo(){
    screen_2.value = screen_2.value.slice(0,-1);
}
function squareTo() {
    screen_1.value = screen_2.value = screen_2.value * screen_2.value;
}
function cubeTo() {
    screen_1.value = screen_2.value = screen_2.value * screen_2.value * screen_2.value;
}
function sqTo() {
    screen_1.value = screen_2.value = Math.sqrt(screen_2.value);
}
function sine_Cosec() {
    var opt1 = sC.options[sC.selectedIndex].text
    if (opt1 === "sine") {
        screen_1.value = Math.sin(screen_2.value);
    }
    else {
        screen_1.value = Math.asin(screen_2.value);
    }
}
function cos_Sec() {
    var opt2 = Cs.options[Cs.selectedIndex].text;
    if (opt2 === "cos") {
        screen_1.value = Math.cos(screen_2.value);
    }
    else {
        screen_1.value = Math.acos(screen_2.value);
    }
}
function tan_Cot() {
    var opt3 = tC.options[tC.selectedIndex].text;
    if (opt3 === "tan") {
        screen_1.value = Math.tan(screen_2.value);
    }
    else {
        screen_1.value = Math.atan(screen_2.value);
    }
}
function degreeTo() {
    var opt_1 = sC.options[sC.selectedIndex].text;
    var opt_2 = Cs.options[Cs.selectedIndex].text;
    var opt_3 = tC.options[tC.selectedIndex].text;
    if (opt_1 === "sine") {
        screen_1.value = Math.sin(screen_2.value / 180 * Math.PI)
    }
    else if (opt_3 === "tan") {
        screen_1.value = Math.tan(screen_2.value / 180 * Math.PI)
    }
    else if (opt_2 === "cos") {
        screen_1.value = Math.cos(screen_2.value / 180 * Math.PI)
    }
    console.log(screen_2.value)
}
function log_Ln() {
    var opt4 = lL.options[lL.selectedIndex].text;
    if (opt4 === "log") {
        screen_1.value = screen_2.value += Math.log10(screen_2.value);
    }
    else {
        screen_1.value = screen_2.value += Math.log(screen_2.value);
    }
}
function pi_E() {
    var opt5 = piE.options[piE.selectedIndex].text;
    console.log(opt5)
    if (opt5 === "e") {
        screen_1.value = Math.E;
    }
    else {
        screen_1.value = screen_2.value = Math.PI;
    }
}
function factoRial() {
    var num = 1;
    for (var i = 1; i <= screen_2.value; i++) {
        num = num * i;
        console.log(num);
    }
    screen_1.value = screen_2.value = num;
}
function cbrTo() {
    screen_1.value = screen_2.value = Math.cbrt(screen_2.value);
    console.log(screen_2.value)
}
function powerTo() {
    screen_1.value = screen_2.value = Math.pow(screen_2.value, parseInt(prompt('exponent')));
}

function randNum() {
    screen_1.value = screen_2.value = Math.random() * 500;
}



//Marksheet

var mM = document.getElementById('M');
var pM = document.getElementById('P');
var cM = document.getElementById('C');
var uM = document.getElementById('U');
var eM = document.getElementById('E');
var iM = document.getElementById('I');

function calNum() {
    var Percentage = (+mM.value + +pM.value + +cM.value + +uM.value + +eM.value + +iM.value) / maxNum() * 100;
    console.log(Percentage);
    if (Percentage < 0) {
        dR.innerHTML = 'Inavlid'
        alert('Invalid');
    }
    else {
        return Percentage;
    }

}

function maxNum() {
    var n1 = +document.getElementById('inp_1').value;
    var n2 = +document.getElementById('inp_2').value;
    var n3 = +document.getElementById('inp_3').value;
    var n4 = +document.getElementById('inp_4').value;
    var n5 = +document.getElementById('inp_5').value;
    var n6 = +document.getElementById('inp_6').value;
    var maxmarks = n1 + n2 + n3 + n4 + n5 + n6;
    console.log(maxmarks);
    return maxmarks;
}

var tR = document.getElementById('To');
var pR = document.getElementById('Pe');
var gR = document.getElementById('Gr');
var rR = document.getElementById('Re');
var dR = document.getElementById('summary');

function result() {
    var grade = "";
    var remarks = "";
    if (calNum() > 100) {
        dR.innerHTML = "Nikal Karwey &#128400;";
    }
    else if (calNum() >= 80) {
        grade = "A+"
        remarks = "Marvelous"
    }
    else if (calNum() < 80 && calNum() >= 70) {
        grade = "A"
        remarks = "Excellent"
    }
    else if (calNum() < 70 && calNum() >= 60) {
        grade = "B"
        remarks = "Good"
    }
    else if (calNum() < 60 && calNum() >= 50) {
        grade = "C"
        remarks = "Keep It Up"
    }
    else if (calNum() < 50 && calNum() >= 33) {
        grade = "D"
        remarks = "Need To Improve"
    }
    else {
        grade = "Failed"
        remarks = "Nulley"
    }
    console.log(calNum())

    if (mM.value == '' || pM.value == '' || cM.value == '' || uM.value == '' || eM.value == '' || iM.value == '') {
        console.log('Error')
        dR.innerHTML = 'Jahil Hi Rehna';
    }
    else {
        tR.innerHTML = 'Marks: ' + '<br>' + eval(+mM.value + +pM.value + +cM.value + +uM.value + +eM.value + +iM.value);
    }
    pR.innerHTML = 'Percentage:' + '<br>' + (eval(+mM.value + +pM.value + +cM.value + +uM.value + +eM.value + +iM.value) * 100 / maxNum()).toFixed(2) + ' %';
    gR.innerHTML = 'Status:' + '<br>' + grade;
    rR.innerHTML = 'Remarks:' + '<br>' + remarks;
    console.log(grade); console.log(remarks);
}


var unit_1 = document.getElementById('unit_1');
var unit_i = unit_1.options[unit_1.selectedIndex].text;
var unit_2 = document.getElementById('unit_2');
var unit_ii = unit_2.options[unit_2.selectedIndex].text;

function countUnit_1() {
    var unit1 = document.getElementById('unit1');
    var unit2 = document.getElementById('unit2');
    var unit_1 = document.getElementById('unit_1');
    var unit_i = unit_1.options[unit_1.selectedIndex].text;
    var unit_2 = document.getElementById('unit_2');
    var unit_ii = unit_2.options[unit_2.selectedIndex].text;

    if (unit_ii === "Milimeter" && unit_i === "Kilometer") {
        unit2.value = unit1.value * 1000000;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Kilometer") {
        unit2.value = unit1.value * 100000;
    }
    else if (unit_ii === "Meter" && unit_i === "Kilometer") {
        unit2.value = unit1.value * 1000;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Meter") {
        unit2.value = unit1.value * 1000;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Meter") {
        unit2.value = unit1.value * 100;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Centimeter") {
        unit2.value = unit1.value * 10;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 1000000;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Centimeter") {
        unit2.value = unit1.value / 100000;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Meter") {
        unit2.value = unit1.value / 1000;
    }
    else if (unit_ii === "Meter" && unit_i === "Centimeter") {
        unit2.value = unit1.value / 100;
    }
    else if (unit_ii === "Meter" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 1000;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 10;
    }
    else if (unit_ii === "Mile" && unit_i === "Kilometer") {
        unit2.value = unit1.value / 1.609344;
    }
    else if (unit_ii === "Mile" && unit_i === "Meter") {
        unit2.value = unit1.value / 1609.34;
    }
    else if (unit_ii === "Mile" && unit_i === "Centimeter") {
        unit2.value = unit1.value / 160934;
    }
    else if (unit_ii === "Mile" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 1.609e+6;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Mile") {
        unit2.value = unit1.value * 1.609344;
    }
    else if (unit_ii === "Meter" && unit_i === "Mile") {
        unit2.value = unit1.value * 1609.34;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Mile") {
        unit2.value = unit1.value * 160934;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Mile") {
        unit2.value = unit1.value * 1.609e+6;
    }
    else if (unit_ii === "Mile" && unit_i === "Inch") {
        unit2.value = unit1.value * 1.5783e-5;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Inch") {
        unit2.value = unit1.value * 2.54e-5;
    }
    else if (unit_ii === "Meter" && unit_i === "Inch") {
        unit2.value = unit1.value * 0.0254;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Inch") {
        unit2.value = unit1.value * 2.54;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Inch") {
        unit2.value = unit1.value * 25.4;
    }
    else if (unit_ii === "Inch" && unit_i === "Mile") {
        unit2.value = unit1.value / 1.5783e-5;
    }
    else if (unit_ii === "Inch" && unit_i === "Kilometer") {
        unit2.value = unit1.value / 2.54e-5;
    }
    else if (unit_ii === "Inch" && unit_i === "Meter") {
        unit2.value = unit1.value / 0.0254;
    }
    else if (unit_ii === "Inch" && unit_i === "Centimeter") {
        unit2.value = unit1.value / 2.54;
    }
    else if (unit_ii === "Inch" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 25.4;
    }
    else if (unit_ii === "Foot" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 304.8;
    }
    else if (unit_ii === "Foot" && unit_i === "Centimeter") {
        unit2.value = unit1.value / 30.48;
    }
    else if (unit_ii === "Foot" && unit_i === "Meter") {
        unit2.value = unit1.value / 0.3048;
    }
    else if (unit_ii === "Foot" && unit_i === "Kilometer") {
        unit2.value = unit1.value / 0.0003048;
    }
    else if (unit_ii === "Foot" && unit_i === "Mile") {
        unit2.value = unit1.value / 0.000189394;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Foot") {
        unit2.value = unit1.value * 304.8;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Foot") {
        unit2.value = unit1.value * 30.48;
    }
    else if (unit_ii === "Meter" && unit_i === "Foot") {
        unit2.value = unit1.value * 0.3048;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Foot") {
        unit2.value = unit1.value * 0.0003048;
    }
    else if (unit_ii === "Mile" && unit_i === "Foot") {
        unit2.value = unit1.value * 0.000189394;
    }

    else if (unit_ii === "Yard" && unit_i === "Mile") {
        unit2.value = unit1.value / 0.000568182;
    }
    else if (unit_ii === "Yard" && unit_i === "Kilometer") {
        unit2.value = unit1.value / 0.0009144;
    }
    else if (unit_ii === "Yard" && unit_i === "Meter") {
        unit2.value = unit1.value / 0.9144;
    }
    else if (unit_ii === "Yard" && unit_i === "Foot") {
        unit2.value = unit1.value / 3;
    }
    else if (unit_ii === "Yard" && unit_i === "Centimeter") {
        unit2.value = unit1.value / 91.44;
    }
    else if (unit_ii === "Yard" && unit_i === "Milimeter") {
        unit2.value = unit1.value / 914.4;
    }
    else if (unit_ii === "Yard" && unit_i === "Inch") {
        unit2.value = unit1.value / 36;
    }
    else if (unit_ii === "Mile" && unit_i === "Yard") {
        unit2.value = unit1.value * 0.000568182;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Yard") {
        unit2.value = unit1.value * 0.0009144;
    }
    else if (unit_ii === "Meter" && unit_i === "Yard") {
        unit2.value = unit1.value * 0.9144;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Yard") {
        unit2.value = unit1.value * 91.44;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Yard") {
        unit2.value = unit1.value * 914.4;
    }
    else if (unit_ii === "Foot" && unit_i === "Yard") {
        unit2.value = unit1.value * 3;
    }
    else if (unit_ii === "Inch" && unit_i === "Yard") {
        unit2.value = unit1.value * 36;
    }
    else if (unit_ii === "Fahrenheit" && unit_i === "Celsius") {
        unit2.value = unit1.value * (9 / 5) + 32;
    }
    else if (unit_ii === "Kelvin" && unit_i === "Celsius") {
        unit2.value = +unit1.value + 273.15;
    }
    else if (unit_ii === "Celsius" && unit_i === "Fahrenheit") {
        unit2.value = (unit1.value - 32) * 5 / 9;
    }
    else if (unit_ii === "Celsius" && unit_i === "Kelvin") {
        unit2.value = +unit1.value - 273.15;
    }
    else if (unit_ii === "Fahrenheit" && unit_i === "Kelvin") {
        unit2.value = (unit1.value - 273.15) * (9 / 5) + 32;
    }
    else if (unit_ii === "Kelvin" && unit_i === "Fahrenheit") {
        unit2.value = (unit1.value - 32) * (5 / 9) + 273.15;
    }


}



function countUnit_2() {
    var unit1 = document.getElementById('unit1');
    var unit2 = document.getElementById('unit2');
    var unit_1 = document.getElementById('unit_1');
    var unit_i = unit_1.options[unit_1.selectedIndex].text;
    var unit_2 = document.getElementById('unit_2');
    var unit_ii = unit_2.options[unit_2.selectedIndex].text;
    if (unit_ii === "Milimeter" && unit_i === "Kilometer") {
        unit1.value = unit2.value / 1000000;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Kilometer") {
        unit1.value = unit2.value / 100000;
    }
    else if (unit_ii === "Meter" && unit_i === "Kilometer") {
        unit1.value = unit2.value / 1000;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Meter") {
        unit1.value = unit2.value / 1000;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Meter") {
        unit1.value = unit2.value / 100;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Centimeter") {
        unit1.value = unit2.value / 10;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 1000000;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Centimeter") {
        unit1.value = unit2.value * 100000;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Meter") {
        unit1.value = unit2.value * 1000;
    }
    else if (unit_ii === "Meter" && unit_i === "Centimeter") {
        unit1.value = unit2.value * 100;
    }
    else if (unit_ii === "Meter" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 1000;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 10;
    }
    else if (unit_ii === "Mile" && unit_i === "Kilometer") {
        unit1.value = unit2.value * 1.609344;
    }
    else if (unit_ii === "Mile" && unit_i === "Meter") {
        unit1.value = unit2.value * 1609.34;
    }
    else if (unit_ii === "Mile" && unit_i === "Centimeter") {
        unit1.value = unit2.value * 160934;
    }
    else if (unit_ii === "Mile" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 1.609e+6;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Mile") {
        unit1.value = unit2.value / 1.609344;
    }
    else if (unit_ii === "Meter" && unit_i === "Mile") {
        unit1.value = unit2.value / 1609.34;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Mile") {
        unit1.value = unit2.value / 160934;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Mile") {
        unit1.value = unit2.value / 1.609e+6;
    }
    else if (unit_ii === "Mile" && unit_i === "Inch") {
        unit1.value = unit2.value / 1.5783e-5;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Inch") {
        unit1.value = unit2.value / 2.54e-5;
    }
    else if (unit_ii === "Meter" && unit_i === "Inch") {
        unit1.value = unit2.value / 0.0254;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Inch") {
        unit1.value = unit2.value / 2.54;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Inch") {
        unit1.value = unit2.value / 25.4;
    }
    else if (unit_ii === "Inch" && unit_i === "Mile") {
        unit1.value = unit2.value * 1.5783e-5;
    }
    else if (unit_ii === "Inch" && unit_i === "Kilometer") {
        unit1.value = unit2.value * 2.54e-5;
    }
    else if (unit_ii === "Inch" && unit_i === "Meter") {
        unit1.value = unit2.value * 0.0254;
    }
    else if (unit_ii === "Inch" && unit_i === "Centimeter") {
        unit1.value = unit2.value * 2.54;
    }
    else if (unit_ii === "Inch" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 25.4;
    }
    else if (unit_ii === "Foot" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 304.8;
    }
    else if (unit_ii === "Foot" && unit_i === "Centimeter") {
        unit1.value = unit2.value * 30.48;
    }
    else if (unit_ii === "Foot" && unit_i === "Meter") {
        unit1.value = unit2.value * 0.3048;
    }
    else if (unit_ii === "Foot" && unit_i === "Kilometer") {
        unit1.value = unit2.value * 0.0003048;
    }
    else if (unit_ii === "Foot" && unit_i === "Mile") {
        unit1.value = unit2.value * 0.000189394;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Foot") {
        unit1.value = unit2.value / 304.8;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Foot") {
        unit1.value = unit2.value / 30.48;
    }
    else if (unit_ii === "Meter" && unit_i === "Foot") {
        unit1.value = unit2.value / 0.3048;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Foot") {
        unit1.value = unit2.value / 0.0003048;
    }
    else if (unit_ii === "Mile" && unit_i === "Foot") {
        unit1.value = unit2.value / 0.000189394;
    }
    else if (unit_ii === "Yard" && unit_i === "Mile") {
        unit1.value = unit2.value * 0.000568182;
    }
    else if (unit_ii === "Yard" && unit_i === "Kilometer") {
        unit1.value = unit2.value * 0.0009144;
    }
    else if (unit_ii === "Yard" && unit_i === "Meter") {
        unit1.value = unit2.value * 0.9144;
    }
    else if (unit_ii === "Yard" && unit_i === "Foot") {
        unit1.value = unit2.value * 3;
    }
    else if (unit_ii === "Yard" && unit_i === "Centimeter") {
        unit1.value = unit2.value * 91.44;
    }
    else if (unit_ii === "Yard" && unit_i === "Milimeter") {
        unit1.value = unit2.value * 914.4;
    }
    else if (unit_ii === "Yard" && unit_i === "Inch") {
        unit1.value = unit2.value * 36;
    }
    else if (unit_ii === "Mile" && unit_i === "Yard") {
        unit1.value = unit2.value / 0.000568182;
    }
    else if (unit_ii === "Kilometer" && unit_i === "Yard") {
        unit1.value = unit2.value / 0.0009144;
    }
    else if (unit_ii === "Meter" && unit_i === "Yard") {
        unit1.value = unit2.value / 0.9144;
    }
    else if (unit_ii === "Centimeter" && unit_i === "Yard") {
        unit1.value = unit2.value / 91.44;
    }
    else if (unit_ii === "Milimeter" && unit_i === "Yard") {
        unit1.value = unit2.value / 914.4;
    }
    else if (unit_ii === "Foot" && unit_i === "Yard") {
        unit1.value = unit2.value / 3;
    }
    else if (unit_ii === "Inch" && unit_i === "Yard") {
        unit1.value = unit2.value / 36;
    }
    else if (unit_ii === "Fahrenheit" && unit_i === "Celsius") {
        unit1.value = (unit2.value - 32) * (5 / 9);
    }
    else if (unit_ii === "Kelvin" && unit_i === "Celsius") {
        unit1.value = +unit2.value - 273.15;
    }
    else if (unit_ii === "Celsius" && unit_i === "Fahrenheit") {
        unit1.value = unit2.value * (9 / 5) + 32;
    }
    else if (unit_ii === "Celsius" && unit_i === "Kelvin") {
        unit1.value = +unit2.value + 273.15;
    }

    else if (unit_ii === "Fahrenheit" && unit_i === "Kelvin") {
        unit1.value = (unit2.value - 32) * 5 / 9 + 273.15;
    }
    else if (unit_ii === "Kelvin" && unit_i === "Fahrenheit") {
        unit1.value = (unit2.value + 32) / (5 * 9) - 273.15;
    }

}





// var birthDate = prompt('Type Birth Date', '12 feb 2000');
// var totalTime = new Date(birthDate);
// var totalduration = totalTime.getTime();
// var completeTime = new Date();
// var completeDuration = completeTime.getTime();
// var yourAge = Math.floor((completeDuration - totalduration) / (1000 * 3600 * 24 * 30 * 12));
// console.log(yourAge);
// console.log(typeof(birthDate))




function yourAge() {
    var yrs = document.getElementById('yr');
    var mths = document.getElementById('mth');
    var days = document.getElementById('dys');
    var hbd = document.getElementById('hbd');
    console.log(typeof (hbd))
    var yrs = document.getElementById('yr');
    // var birthDate = prompt('Type Birth Date', '12 feb 2000');
    var birthDate = hbd.value;
    var totalTime = new Date(birthDate);
    var totalduration = totalTime.getTime();
    var completeTime = new Date();
    var completeDuration = completeTime.getTime();
    var yourAge1 = Math.floor((completeDuration - totalduration) / (1000 * 3600 * 24 * 30 * 12)); //years 
    var yourAge2 = Math.floor((completeDuration - totalduration) / (1000 * 60 * 60 * 24));  //days
    var yourAge3 = Math.floor((completeDuration - totalduration) / (1000 * 60 * 60));// hours

    yrs.innerHTML = yourAge1 + " " + ' years';
    mths.innerHTML = yourAge2 + " " + ' days';
    days.innerHTML = yourAge3 + " " + ' hrs';
}



// Switching
var a = document.getElementById('sub_main1');
var b = document.getElementById('sub_main2')
function click2() {
    a.style.display = "flex";
}
function click1() {
    b.style.display = "none";
}
function click_ii() {
    b.style.display = "none";
    console.log(b)
    a.style.display = "flex";
}
function click_i() {
    a.style.display = "none";
    console.log(a)
    b.style.display = "block";
}






























// var a = document.getElementById('abc');
// var b = document.getElementById('xyz');

// if(a.innerHTML==='ABC'){
//     alert('chala');
// }
// function foo(){
//     // a.innerHTML= '';
//    a.innerText = 4*5;
// }



// function foo(){
//     var x = document.getElementById('x');
// var y = x.options[x.selectedIndex].text
// console.log(y)
// if(y ==='*'){
//     alert("multiply")
// }
// else if(y==='/'){
//     alert('divide')
// }

// }
