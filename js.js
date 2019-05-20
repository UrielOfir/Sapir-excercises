function validateForm(){
  var name=document.forms["myForm"]["FullName"];
  var namevalid=/^[a-zA-Z]+$/;

  var phone=document.forms["myForm"]["Phone"];
  var phonevalid=/^[0-9]{9,10}$/;

  var email=document.forms["myForm"]["InputEmail1"];

  var numOfGuest=document.forms["myForm"]["NumberOfGuests"];
  var numOfGuestvalid=/^[0-9]+$/;

  var comment=document.forms["myForm"]["comments"];
  var maxLength = 100;

  if(name.value==""){
    window.alert("Please enter your name.");
    name.focus();
    return false;
}
if(name.value.match(namevalid)){
}
else{
  window.alert("unvalid name");
  return false;
}

if(phone.value==""){
  window.alert("Please enter your phone.");
  phone.focus();
  return false;
}
if(phone.value.match(phonevalid)){
}
else{
  window.alert("unvalid phone");
  return false;
}

if(email.value==""){
  window.alert("Please enter your email.");
  email.focus();
  return false;
}
if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if(numOfGuest.value==""){
      window.alert("Please enter numOfGuest.");
      numOfGuest.focus();
      return false;
    }
    if(numOfGuest.value<=0){
      window.alert("Please enter a valid numOfGuest.");
      numOfGuest.focus();
      return false;
    }
    if(numOfGuest.value.match(numOfGuestvalid)){}
    else{
      window.alert("Please enter a valid numOfGuest.");
      numOfGuest.focus();
      return false;
    }
  }

    function countDown(obj){
    var el= getElementById('charactersRemaining');
    el.innerHTML=180-obj.value.length;

    }
  }
