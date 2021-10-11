function darkFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("dark-toggle").value = "الوضع الابيض"

}
// Alert Modal Type
$(document).on('click', '#success', function (e) {
    swal(
        'تمت عملية الحفظ بنجاح',
        '<b style="color:green;">Success</b>',
        'success',

    )
});

$(document).on('click', '#error', function (e) {
    swal(
        'Error!',
        '<b style="color:red;">error</b>',
        'error'
    )
});

$(document).on('click', '#warning', function (e) {
    swal(
        'Warning!',
        '<b style="color:coral;">warning</b>',
        'warning'
    )
});

$(document).on('click', '#info', function (e) {
    swal(
        'Info!',
        '<b style="color:cornflowerblue;">info</b>',
        'info'
    )
});

$(document).on('click', '#question', function (e) {
    swal(
        'Question!',
        '<b style="color:grey;">question</b>',
        'question',

    )
});
