<?php
$toEmail = "soyebahmed@gmail.com";

$name=$_POST["full_name"];

$email=$_POST["email"];

$phone=$_POST["phone"];

$reasone_for_contact=$_POST["reasone_for_contact"];


$mailHeaders = "From: " . $_POST["full_name"] . "<". $_POST["email"] .">\r\n";

if(mail($toEmail, $name, $email, $phone, $reasone_for_contact, $mailHeaders)) {
print "<p class='success'>Contact Mail Sent.</p>";
} else {
print "<p class='Error'>Problem in Sending Mail.</p>";
}


?>