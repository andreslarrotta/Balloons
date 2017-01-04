<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];


$mail_to = 'info@balloonscolombia.com';
$subject = $field_name.', te ha escrito un mensaje desde la pagina balloonscolombia.com';

/*
$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;
*/

$body_message = '
	<table width="650px" height="auto" border="0" cellspacing="0" cellpadding="0" align="center">
		<tr>
		  <td>
		    <img src="http://balloonscolombia.com/images/logo-balloons.png" height="194" width="650" alt="">
		  </td>
		</tr>
		<tr>
			<td style="padding: 10px 30px; font-size: 18px;font-family: "quicksandregular", sans-serif; color: #011f2c;">
			    <p>
			    	<span>Hola, <b>'.$field_name.' </b>se ha contactado contigo desde <b>www.balloonscolombia.com</b><br>
			    	<hr>
			    	<span>su mensaje ha sido:<br><br>
			    		'.$field_message.'</span><br><br>
			    	<span>puedes contesatarle a este correo electrónico:<br>
			    		<b>'.$field_email.'</b></span><br>
				</p>
			</td>
		</tr>
		<tr>
		  <td>
		</tr>
	</table>';

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Gracias por tu mensaje, pronto nos contactaremos contigo.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('El mensaje no pudo ser enviado. Por favor intenta de nuevo o contactate con info@balloonscolombia.com');
		window.location = 'index.html';
	</script>
<?php
}
?>