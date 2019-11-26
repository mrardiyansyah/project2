$(document).ready(function () {
    $('#form-login').submit(function () {
        let username = $("#username").val();
        let pass = $("#pass").val();

        $.ajax({
            type: "POST",
            url: "http://localhost/ppk/validation.php",
            dataType: "json",
            success: function (data) {
                console.log(data)
            },
            error: function (data) {
                console.log('asdf')
            }
        });
    });
});