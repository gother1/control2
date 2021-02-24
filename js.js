function valider(){
    var Ie=document.getElementById("Ie");
    var Ip= document.getElementById('Ip');
    var S1=document.getElementById('S1');
    var G1=document.getElementById('G1');
    var r1= document.getElementById('r1');
    var r2= document.getElementById('r2');
    var r3= document.getElementById('r3');



    var rgemail = new RegExp('^[^0-9][a-z0-9]{4,}@[a-z]{3,}\.((.ma) | (.com)){1}$','g');
    var rgpass = new RegExp('^[1-9]{2,}[a-zA-Z]+$','g');

    G1.innerHTML='<br>';

    if (Ie.value=='') {
        G1.innerHTML='Email obligatoire !<br>';
        //animerDIV();
    } else {
        if (rgemail.test(Ie.value)==false) {
            G1.innerHTML+="format d email incorrect <br>";
            //animerDIV();
        }
    }
    if (Ip.value=='') {
        G1.innerHTML+='Password obligatoire ! <br>';
        //animerDIV();
    } else {
        if (!rgpass.test(Ip.value)) {
            G1.innerHTML+='Format password incorrect <br>';
           // animerDIV();
        }
    }
   
    if (r1.checked== false && r2.checked== false && r3.checked==false) {
        G1.innerHTML+='choisir une filiere <br>';
        //animerDIV();
    }
     if (S1.seletedIndex==0) {
        G1.innerHTML+=' selectionner une ville  <br>';
        //animerDIV();
    }
}
///function animerDIV() {
 //   $("#G1").animate({left:"+=5px",backgroundColor:"red"},500).animate({left:"-=5px"},500);
//}
function envoiajax(){
var email =document.getElementById("Ie").value;
var password =document.getElementById("Ip").value;
var  rep =document.getElementById("rep");

var tdi =document.getElementById("r1");
var tri =document.getElementById("r2");
var tmi =document.getElementById("r3");

var fl ="";
if(tdi.checked==true){fl=tdi.value;}
if(tri.checked==true){fl=tri.value;}
if(tmi.checked==true){fl=tmi.value;}



var http= new XMLHttpRequest();
var url="http://localhost:81/tp1/insertollar.php?password="+password+"email="+email+"filiere="+fl;
http.onreadystatechange=function(){
 if(http.readyState==4 && http.status== 200){
      req.innerHTML=JSON.parse(http.responseText);
 }
}

http.open("GET",url,true);
http.send();

}