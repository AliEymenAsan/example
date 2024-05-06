const box=document.getElementsByClassName("bottom");
const tabs=document.getElementsByClassName("kutu");
tabs[0].style.backgroundColor="white";
tabs[0].style.borderTopLeftRadius="10px";
tabs[4].style.borderTopRightRadius="10px";
function kutu1(box1){
    box[0].style.display="block";
    box[1].style.display="none";
    box[2].style.display="none";
    box[3].style.display="none";
    box[4].style.display="none";
    tabs[0].style.borderTopLeftRadius="10px";
    tabs[4].style.borderTopRightRadius="10px";
    tabs[0].style.backgroundColor="white";
    tabs[1].style.background="#d6e2fb";
    tabs[2].style.background="#d6e2fb";
    tabs[3].style.background="#d6e2fb";
    tabs[4].style.background="#d6e2fb";

}
function kutu2(box2){
    box[0].style.display="none";
    box[1].style.display="block";
    box[2].style.display="none";
    box[3].style.display="none";
    box[4].style.display="none";
    tabs[0].style.borderTopLeftRadius="10px";
    tabs[4].style.borderTopRightRadius="10px";
    tabs[0].style.background="#d6e2fb";
    tabs[1].style.background="white";
    tabs[2].style.background="#d6e2fb";
    tabs[3].style.background="#d6e2fb";
    tabs[4].style.background="#d6e2fb";
}
function kutu3(box3){
    box[0].style.display="none";
    box[1].style.display="none";
    box[2].style.display="block";
    box[3].style.display="none";
    box[4].style.display="none";
    tabs[0].style.borderTopLeftRadius="10px";
    tabs[4].style.borderTopRightRadius="10px";
    tabs[0].style.background="#d6e2fb";
    tabs[1].style.background="#d6e2fb";
    tabs[2].style.background="white";
    tabs[3].style.background="#d6e2fb";
    tabs[4].style.background="#d6e2fb";
}
function kutu4(box4){
    box[0].style.display="none";
    box[1].style.display="none";
    box[2].style.display="none";
    box[3].style.display="block";
    box[4].style.display="none";
    tabs[0].style.borderTopLeftRadius="10px";
    tabs[4].style.borderTopRightRadius="10px";
    tabs[0].style.background="#d6e2fb";
    tabs[1].style.background="#d6e2fb";
    tabs[2].style.background="#d6e2fb";
    tabs[3].style.background="white";
    tabs[4].style.background="#d6e2fb";
}
function kutu5(box5){
    box[0].style.display="none";
    box[1].style.display="none";
    box[2].style.display="none";
    box[3].style.display="none";
    box[4].style.display="block";
    tabs[0].style.borderTopLeftRadius="10px";
    tabs[4].style.borderTopRightRadius="10px";
    tabs[0].style.background="#d6e2fb";
    tabs[1].style.background="#d6e2fb";
    tabs[2].style.background="#d6e2fb";
    tabs[3].style.background="#d6e2fb";
    tabs[4].style.background="white";
}