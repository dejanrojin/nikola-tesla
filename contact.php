<?php 

$username=$_POST["fname"];
$email=$_POST["email"];

echo $username;
echo $email;

$text="";

$text=$text."Ime: ".$username."\n";
$text=$text."Email: ".$email."\n";


mail("dejanpavlov91@gmail.com","Poruka Tesla sajt", $text);
header("Location:success.html?status=thanks");



?>
