$(function () {

    //alert一旦非表示
    $(".alert").hide();
    //送信 / SUBMIT btnクリック
    $(".submit_btn").click(function () {

        var sendFlag = true;

        //input
        if (!$("#name").val()) {
            $("#name_section .alert").show();
            sendFlag = false;
        } else {
            $("#name_section .alert").hide();
        }

        if (!$("#kana").val()) {
            $("#kana_section .alert").show();
            sendFlag = false;
        } else {
            $("#kana_section .alert").hide();
        }

        if (!$("#tel").val()) {
            $("#tel_section .alert").show();
            sendFlag = false;
        } else {
            $("#tel_section .alert").hide();
        }

        if (!$("#email").val()) {
            $("#email_section .alert").show();
            sendFlag = false;
        } else {
            $("#email_section .alert").hide();
        }

        if (!$("#emailchk").val()) {
            $("#emailchk_section .alert").show();
            sendFlag = false;
        } else {
            $("#emailchk_section .alert").hide();
        }

        //free text
        if (!$("textarea").val()) {
            $("#textarea_section .alert").show();
            sendFlag = false;
        } else {
            $("#textarea_section .alert").hide();
        }

        if (sendFlag == false) {
            return false;
        }

    });
});