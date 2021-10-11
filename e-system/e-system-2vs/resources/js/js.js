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
        'خطأ !',
        '<b style="color:red;">error</b>',
        'error'
    )
});

// $(document).on('click', '#question', function (e) {
//     swal(
//         'تأكيد!',
//         '<b style="color:grey;">question</b>',
//         'question',

//     )
// });

$('button').click(function () {

    swal({
        title: 'هل أنت متأكد تريد مغادرة هذه الصفحة ؟',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754d6',
        cancelButtonColor: '#aeafb1',
        confirmButtonText: 'نعم ',
        cancelButtonText: 'لا'
    })

})



/*  Loader */

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
