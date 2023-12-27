function emailSend(){

var userNameone = document.getElementById('fname').value;
var userNametwo = document.getElementById('sname').value;
var address = document.getElementById('address').value;
var phone = document.getElementById('number').value;
var email = document.getElementById('email').value;

var messageBody ="First Name -" + userNameone +
"<br/> Second Name- " + userNametwo +
"<br/> Address- " + address +
"<br/> Phone- " + phone +
"<br/> Email- " + email;
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "rupeshrauniyar80@gmail.com",
    Password : "58AA305153294CB96DBF7F0BA477958ADFAD",
    To : 'rupeshrauniyaryt@gmail.com',
    From : "rupeshrauniyar80@gmail.com",
    Subject : "Gorkhali Squats Booking",
    Body : messageBody
}).then(
  message => alert("Your Details Have Been Submitted Successfully ")
  


);
}

function sendOTP() {
const email = document.getElementById('email')
const otpverify = document.getElementsByClassName('otpverify')[0];
let otp_val = Math.floor(Math.random() * 100000 );
let emailbody = `<h2>Your OTP Is</h2>${otp_val}`;



Email.send({ 
SecureToken : "e1f19748-e352-4a6f-85c7-1468d8893194", 
To : email.value, 
From : "rupeshrauniyar80@gmail.com", 
Subject : "Email OTP", 
Body : emailbody ,
}) .then( 

message => {
if (message === "OK"){
 alert("OTP Sent To Your Email");

otpverify.style.display="grid";
const otp_inp = document.getElementById('otp_inp');
const otp_btn = document.getElementById('otp-btn');

otp_btn.addEventListener('click', () => {
if (otp_inp.value == otp_val) {
alert("Email Verified...");
}
else {
alert("Invalid Otp");
}
})
}
}
);
}
