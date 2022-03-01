$('.tabs-head > *').on('click', function () {
    var dataTabs = $(this).attr('data-tab');

    $('.tabs-head > *').removeClass('active');
    $(this).addClass('active');

    $('.tabs-cnt > *').removeClass('active');
    $('.tabs-cnt > .'+dataTabs).addClass('active');
});

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()