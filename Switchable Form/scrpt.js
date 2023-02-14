function openForm(evt,formName){
    document.getElementById(formName).style.display="block";
    evt.currentTarget.className += "active";
}