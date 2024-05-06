
var link = document.getElementsByClassName("temadegis");

var icerik1=document.getElementsByClassName("kartprofil");
var icerik2=document.getElementsByClassName("kartprofil1");

    var kaydırmakontrol=true;
    var kutu = document.getElementById('kutu');
    link[0].addEventListener("click",function(){ 
        if(kaydırmakontrol==true){
            kutu.style.transform="translateX(40px)";
            kaydırmakontrol=false;
            icerik1[0].style.display="none";
            icerik2[0].style.display="block";
        }
        else{
            kutu.style.transform="translateX(0)";
            kaydırmakontrol=true;
            icerik1[0].style.display="block";
            icerik2[0].style.display="none";
            console.log("eymen");
        }
    });
