<?php

if (isset($_POST['submit'])) {
    //below creates variables from form inputs
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "stuartolive@live.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name".\n\n".$message;

    //mail function
    mail($mailTo, $subject, $txt, $headers);
    header()"Location: index.php?mailsend";
}