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
<<<<<<< HEAD
         function validateForm(){
=======

>>>>>>> 5a782a541c4b087bb38e46c747fc0a851ccd3db4
         var name = document.forms["myForm"]["FullName"];
             var email = document.forms["myForm"]["EMail"];
             var phone = document.forms["myForm"]["Phone"];
             var gestsNum =  document.forms["myForm"]["NumberOfGuests"];
<<<<<<< HEAD
             var arrivingBy = document.forms["myForm"]["arrivingBy"];

             if (!FullName.value.match(/^[A-Za-z]+$/))
       {
           window.alert("Please enter your name.");
           name.focus();
           return false;
       }

          }
=======
             var arrivingBy = document.forms["myForm"]["arrivingBy"];  
>>>>>>> 5a782a541c4b087bb38e46c747fc0a851ccd3db4
