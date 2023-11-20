<?php
// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Extract data
$name = $data->name;
$email = $data->email;
$message = $data->message;

// Compose the email message
$to = "therimassbhadri@gmail.com";
$subject = "New Contact Form Submission";
$headers = "From: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mailBody = "Name: $name\n";
$mailBody .= "Email: $email\n";
$mailBody .= "Message:\n$message";

// Send the email
mail($to, $subject, $mailBody, $headers);
?>
