<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

//include ($_SERVER['DOCUMENT_ROOT']."Cl/PHPMailer.php");
//include ($_SERVER['DOCUMENT_ROOT']."Cl/SMTP.php");
//include ($_SERVER['DOCUMENT_ROOT']."Cl/Exception.php");

require($_SERVER['DOCUMENT_ROOT']."Cl/class.phpmailer.php");
require($_SERVER['DOCUMENT_ROOT']."Cl/class.smtp.php");
require($_SERVER['DOCUMENT_ROOT']."Cl/Exception.php");

$nomeUser=filter_input(INPUT_POST,"nome",FILTER_SANITIZE_SPECIAL_CHARS);
$telUser=filter_input(INPUT_POST,"telefone",FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser=filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);
$mensagemUser=filter_input(INPUT_POST,"mensagem",FILTER_SANITIZE_SPECIAL_CHARS);

//use PHPMailer;
//use PHPMailer;
//use PHPMailer;

// Load Composer's autoloader
//require 'vendor/autoload.php';
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.sociedademonstros.com.br';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'contato@sociedademonstros.com.br';                     // SMTP username
    $mail->Password   = 'Tk3axp123E';                               // SMTP password
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($emailUser);
    $mail->addAddress('contato@sociedademonstros.com.br');     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato do site';
    $mail->Body    = "
    Nome: {$nomeUser} <br>
    Email: {$emailUser} <br>
    Telefone: {$telUser} <br>
    Mensagem: {$mensagemUser} <br>
    ";

    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Mensagem enviada';
} catch (Exception $e) {
    echo "Erro: {$mail->ErrorInfo}";
}