<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inquiry Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #4caf50;
            color: white;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
    
        // Recipient email address
        $to = "therimassbhadri@gmail.com";
    
        // Subject of the email
        $email_subject = "New Inquiry: $subject";
    
        // Email headers
        $headers = "From: $email";
    
        // Compose the email message
        $email_message = "Name: $name\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Subject: $subject\n\n";
        $email_message .= "Message:\n$message";
    
        // Use mail() function to send the email
        mail($to, $email_subject, $email_message, $headers);
    
        // Redirect back to the form with a success message
        header("Location: your_form_page.html?success=true");
        exit();
    }
    ?>
    <form action="./greet.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required>

        <label for="message">Message:</label>   
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Submit">

    </form> 
    

</body>
</html>