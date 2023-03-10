/* function to open form based on formName */
function openForm(evt, formName) {
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var i, switchcontent, switchlinks;

  // Get all elements with class="switchcontent" and hide them using for loop
  switchcontent = document.getElementsByClassName("switchcontent");
  for (i = 0; i < switchcontent.length; i++) {
    switchcontent[i].style.display = "none";
  }
  
  // Get all button elements with class="switchlink" and remove the class "active" for loop
  switchlinks = document.getElementsByClassName("switchlink");
  for (i = 0; i < switchlinks.length; i++) {
    switchlinks[i].className = switchlinks[i].className.replace(" active", "");
  }

  // show default form
document.getElementById("defaultOpen").click();