var names=document.getElementById("fullname");
var mail=document.getElementById("email");
var pass=document.getElementById("password");
var gender=document.getElementById("male");


var submit=document.getElementById("click");

var firstname=document.getElementById("fname");
var remail=document.getElementById("usermail");
var regpass=document.getElementById("userpass");
var cpass=document.getElementById("upass");


var lnames=document.getElementById("username");
var num=document.getElementById("phone");
var conpass=document.getElementById("conpassword");

var lastnames=document.getElementById("lname");
var number=document.getElementById("cell");
var copass=document.getElementById("conpass");
var gend=document.getElementById("gender");

console.log(names);
console.log(mail);
console.log(pass);
console.log(submit);
console.log(firstname);
console.log(remail);
console.log(regpass);

function validate(){
    if(names.value==""){
        firstname.innerHTML="Please enter your name";
    }
    else if(names.value!=0){
        firstname.innerHTML="";
    }
     if(mail.value==""){
        remail.innerHTML="Please enter your email";
    }
    else if(mail.value!="@"){
        remail.innerHTML="";
    }




     if(pass.value==""){
         regpass.innerHTML="Please enter your password";
    }
     else if(pass.value.length<8){
        regpass.innerHTML="Please enter atleast 8 characters";
     }
     else if(pass.value.length>=8){
        regpass.innerHTML="";
     }



   
       
    if(num.value==""){
        number.innerHTML="please enter your number"
    }
    else if(num.value.length!=10){
        number.innerHTML="please enter valid number"
    }
    else if(num.value.length==10){
        number.innerHTML="";
    }
    if(gender.value==""){
        gend.innerHTML="please any one choose";

    }


   
    
    

}