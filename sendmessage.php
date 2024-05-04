<?php
       // from the form
       $firstname = trim(strip_tags($_POST['first-name']));
       $lastname = trim(strip_tags($_POST['last-name']));
       $email = trim(strip_tags($_POST['email-address']));
       $message = htmlentities($_POST['message']);

       // set here
       $subject = "Your message was sent.";
       $to = 'dagbayani@network2000-hi.com';

       $body = <<<HTML
$message
HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       // redirect afterwords, if needed
       header('Location: contact.html');
?>