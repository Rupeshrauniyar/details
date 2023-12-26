function sendOTP() {
const email = document.getElementById('email')
const otpverify = document.getElementsByClassName('otpverify')[0];
let otp_val = Math.floor(Math.random() * 10000 );
let emailbody = `<h2>Your OTP Is</h2>${otp_val}`;



Email.send({ 
SecureToken : "77955f25-ea20-45ae-a660-b940ad7e0659", 
To : email.value, 
From : "rupeshrauniyar80@gmail.com", 
Subject : "Email OTP", 
Body : emailbody ,
}).then( 

message => {
if (message === "OK") {
 alert("OTP Sent To Your Email");

otpverify.style.display="flex";
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
