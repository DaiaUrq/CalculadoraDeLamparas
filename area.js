var comedorCocina = 400;
var baño = 220;
var escaleraPasillo = 130;
var patio = 550;
var dormitorio = 250;

var w5 = 700;
var w12 = 1000;
var w15 = 2000;
var w20 = 3000;
var w30 = 4000;

function cal(){ 
    var lado1 = document.getElementById("la1").value;
    var lado2 = document.getElementById("la2").value;   
    var calarea = lado1*lado2;    
    document.getElementById("area").innerHTML = "Area :"+ calarea;
    return calarea;
}


function caldormitorio(){
    var lumen= cal()*dormitorio;
    var lampara5w = lumen/w5;   
    var lampara12w = lumen/w12;
    var lampara15w = lumen/w15;
    var lampara20w = lumen/w20;
    var lampara30w = lumen/w30;
    document.getElementById("re1").innerHTML = "Lampara de 5W :" + parseInt(lampara5w);
    document.getElementById("re2").innerHTML = "Lampara de 12W :"+ parseInt(lampara12w);
    document.getElementById("re3").innerHTML = "Lampara de 15W :"+ parseInt(lampara15w); 
    document.getElementById("re4").innerHTML = "Lampara de 20W :"+ parseInt(lampara20w);
    document.getElementById("re5").innerHTML = "Lampara de 30W :"+ parseInt(lampara30w);
}

function calpatio(){
    var lumen= cal()*patio;
    var lampara5w = lumen/w5;   
    var lampara12w = lumen/w12;
    var lampara15w = lumen/w15;
    var lampara20w = lumen/w20;
    var lampara30w = lumen/w30;
    document.getElementById("re1").innerHTML = "Lampara de 5W :" + parseInt(lampara5w);
    document.getElementById("re2").innerHTML = "Lampara de 12W :"+ parseInt(lampara12w);
    document.getElementById("re3").innerHTML = "Lampara de 15W :"+ parseInt(lampara15w); 
    document.getElementById("re4").innerHTML = "Lampara de 20W :"+ parseInt(lampara20w);
    document.getElementById("re5").innerHTML = "Lampara de 30W :"+ parseInt(lampara30w);
}

function calbaño(){
    var lumen= cal()*baño;
    var lampara5w = lumen/w5;   
    var lampara12w = lumen/w12;
    var lampara15w = lumen/w15;
    var lampara20w = lumen/w20;
    var lampara30w = lumen/w30;
    document.getElementById("re1").innerHTML = "Lampara de 5W :" + parseInt(lampara5w);
    document.getElementById("re2").innerHTML = "Lampara de 12W :"+ parseInt(lampara12w);
    document.getElementById("re3").innerHTML = "Lampara de 15W :"+ parseInt(lampara15w); 
    document.getElementById("re4").innerHTML = "Lampara de 20W :"+ parseInt(lampara20w);
    document.getElementById("re5").innerHTML = "Lampara de 30W :"+ parseInt(lampara30w);
}

function calcomedorcoci(){
    var lumen= cal()*comedorCocina;
    var lampara5w = lumen/w5;   
    var lampara12w = lumen/w12;
    var lampara15w = lumen/w15;
    var lampara20w = lumen/w20;
    var lampara30w = lumen/w30;
    document.getElementById("re1").innerHTML = "Lampara de 5W :" + parseInt(lampara5w);
    document.getElementById("re2").innerHTML = "Lampara de 12W :"+ parseInt(lampara12w);
    document.getElementById("re3").innerHTML = "Lampara de 15W :"+ parseInt(lampara15w); 
    document.getElementById("re4").innerHTML = "Lampara de 20W :"+ parseInt(lampara20w);
    document.getElementById("re5").innerHTML = "Lampara de 30W :"+ parseInt(lampara30w);
}

function calescalerapasillo(){
    var lumen= cal()*escaleraPasillo;
    var lampara5w = lumen/w5;   
    var lampara12w = lumen/w12;
    var lampara15w = lumen/w15;
    var lampara20w = lumen/w20;
    var lampara30w = lumen/w30;
    document.getElementById("re1").innerHTML = "Lampara de 5W :" + parseInt(lampara5w);
    document.getElementById("re2").innerHTML = "Lampara de 12W :"+ parseInt(lampara12w);
    document.getElementById("re3").innerHTML = "Lampara de 15W :"+ parseInt(lampara15w); 
    document.getElementById("re4").innerHTML = "Lampara de 20W :"+ parseInt(lampara20w);
    document.getElementById("re5").innerHTML = "Lampara de 30W :"+ parseInt(lampara30w);
}

function solonumeros(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { 
      return true;
    } else if(code>=48 && code<=57) { 
      return true;
    } else{ 
      return false;
    }
}


 