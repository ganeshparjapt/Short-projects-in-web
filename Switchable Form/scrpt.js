function openForm(evt,formName){
    document.getElementsByClassName(switchcontent).style.display= "block";
    evt.currentTarget.className += "active";
}
//declare all variables
let i, switchcontent,switchlinks;

//get all enelmnts with class
switchcontent=document.getElementsByClassName("switchcontent");
for(i = 0;i < switchcontent.length;i++){
    switchcontent[i].style.display="none";
}

//get all button elements with class ="switchlink" and remove the class "active "for loop
switchlinks=document.getElementsByClassName("switchlink");
for(i=0;i<switchlinks.length;i++){
    switchlinks[i].className=switchlinks[i].className.repeat("active","")
;}