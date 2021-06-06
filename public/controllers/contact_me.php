<?php
header("Access-Control-Allow-Origin: *");
require("class.phpmailer.php");

// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
 exit();//
//}

$name = $_POST['name'];
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "email@dominio.com"; // Add your email address inbetween the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
$subject = "Website Contact Form:  $name";
$body = "Você recebeu uma mensagem do seu site.<br>"."<br>Nome: $name <br>Email: $email <br>Telefone: $phone <br>Mensagem:<br>$message";
$header = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Reply-To: $email";	

//if(!mail($to, $subject, $body, $header))
//  http_response_code(500);

$mail = new PHPMailer();

$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "smtp.seudominio.com.br"; // Endereço do servidor SMTP
$mail->SMTPAuth = true; // Autenticação
$mail->Username = 'contato@seudominio.com.br'; // Usuário do servidor SMTP
$mail->Password = 'senha'; // Senha da caixa postal utilizada

$mail->From = "contato@seudominio.com.br"; 
$mail->FromName = "Tutti bom";

// $mail->AddAddress('destinatario@dominio.com.br', 'Nome do Destinatário');
$mail->AddAddress("contato@seudominio.com.br");
//$mail->AddCC('andreia_paim@hotmail.com', 'Copia'); 
//$mail->AddBCC('CopiaOculta@dominio.com.br', 'Copia Oculta');

$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
$mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

$mail->Subject  = "Mensagem do Site"; // Assunto da mensagem
$mail->Body = $body;
// $mail->AltBody = 'Este é o corpo da mensagem de teste, em Texto Plano! \r\n 
// <IMG src="http://seudominio.com.br/imagem.jpg" alt=5":)"  class="wp-smiley"> ';

// $mail->AddAttachment("e:\home\login\web\documento.pdf", "novo_nome.pdf");

$enviado = $mail->Send();

echo($body);
?>
