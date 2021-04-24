<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$address = $_POST['address'];
$email = $_POST['email'];


// Формирование modal письма
$title = "Заявка";
$body = "
<h2>Данные клиента:</h2>
<b>Имя:</b> $name<br>
<b>Номер телефона:</b> $phone<br><br>
<b>Почта:</b> $email<br>
<b>Адрес объекта:</b> $address<br>
<b>Сообщение:</b><br>$message<br><br>
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  $mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'mail.alena-web.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'alena@alena-web.ru'; // Логин на почте
  $mail->Password   = 'UriAl1998temple'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->SMTPAutoTLS = false;
  $mail->SMTPSecure = false;
  $mail->Port       = 25;
  $mail->setFrom('alena@alena-web.ru', 'alena'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('9642444600a@gmail.com');


  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if (!$mail->send()) {
    $info = 'Ошибка';
  } else {
    $info = 'Данные отправлены';
  }

  $response = ['message' => $info];

  header('Content-type: application/json');
  echo json_encode($response);
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
