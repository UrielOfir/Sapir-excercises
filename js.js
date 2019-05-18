function validateForm() {
  var x = document.forms["myForm"]["FullName"].value;
  var letters = /^[A-Za-z]+$/;
  if(x.match(letters))
    {
     return true;
    }
  else
    {
    alert("Name must be filled out with letters only");
    return false;
    }
}
