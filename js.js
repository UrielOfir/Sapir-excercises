var i = 0,images = ["images/index1.jpeg",
                    "images/index2.jpeg",
                    "images/index3.jpeg"];

         function mySlide(param){
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

         var myText = document.getElementById("comments");
         var wordCount = document.getElementById("wordCount");

      /*   myText.addEventListener("keyup",function(){
 	         var characters = myText.value.split('');
           wordCount.innerText = 200-characters.length;
         });*/

         function validateForm(){
         var name = document.forms["myForm"]["FullName"];
             var email = document.forms["myForm"]["EMail"];
             var phone = document.forms["myForm"]["Phone"];
             var gestsNum =  document.forms["myForm"]["NumberOfGuests"];
             var arrivingBy = document.forms["myForm"]["arrivingBy"];

             if (!FullName.value.match(/^[A-Za-z]+$/))
       {
           window.alert("Please enter your name correctly.");
           name.focus();
           return false;
       }

       if(phone.value.length<9||!phone.value.match(/^[0-9]+$/)) {
            window.alert("Please enter your phone correctly.");
            phone.focus();
            return false;
        }

        if(gestsNum.value<=0||!phone.value.match(/^[0-9]+$/))
        {
             window.alert("How many guests are coming?");
             gestsNum.focus();
             return false;
         }
       }
