<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['emailaddress'];
$message= $_POST['message'];
$number= $_POST['mobile'];
$to = "salih@ainalanazitrading.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message." \r\n Mobile number =" . $number;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: ainalanazitrading@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>