function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
        "<br/> Phone " + phone +
        "<br/> Email " + email;

    // Ensure that Email.send is defined and properly loaded
    // if (typeof Email !== 'undefined' && typeof Email.send === 'function') {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "bhadraraj.imagecbe@gmail.com",
            Password: "DF37DF362361A0E1A389C33980F576B4EA3D",
            To: 'ragu.imagecbe@gmail.com',
            From: "bhadraraj.imagecbe@gmail.com",
            Subject: "REG : Adhira Associates Enquery ",
            Body: messageBody
        }).then(
            message => {
                if (message === 'OK') {
                    swal("Successful", "Email sent successfully!", "success");
                } else {
                    swal("Error", "Failed to send email!", "error");
                }
            }
        );
        // Email.send({
        //     Host: "smtp.elasticemail.com",
        //     Username: "bhadraraj.imagecbe@gmail.com",
        //     Password: "DF37DF362361A0E1A389C33980F576B4EA3D",
        //     To: 'therimassbhadri@gmail.com',
        //     From: "bhadraraj.imagecbe@gmail.com",
        //     Subject: "This is the subject",
        //     Body: "And this is the body"
        // }).then(
        //     message => alert(message)
        // );
    // }
    //  else {
    //     console.error('Email.send is not defined or properly loaded.');
    // }
}