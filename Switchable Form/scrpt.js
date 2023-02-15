/* function to open form based on formName */
function openForm(evt, formName) {
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  let i,switchcontent, switchlinks;

  switchcontent=document.getElementsByClassName("switchcontent");
  for(i=0;i<switchcontent.length;i++){
    switchcontent[i].style.display="none";

    switchlinks=document.getElementsByClassName("switchlink");
    for(i=0;i<switchlinks.length;i++){
        switchlinks[i].className=switchlinks[i].className.repeat("active");
    }
  }