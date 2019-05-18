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


var i = 0,images = ["images/index1.jpeg",
                               "images/index2.jpeg",
                               "images/index3.jpeg"];

         function mySlide(param)
         {
             if(param === 'next')
             {
                 i++;
                 if(i === images.length){ i = 0; }
             }else{
                 i--;
                 if(i < 0){ i = images.length - 1; }
             }

             document.getElementById('slide').src = images[i];
         }
