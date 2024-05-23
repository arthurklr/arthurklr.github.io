document.addEventListener('DOMContentLoaded', function() {
    const icon = document.querySelector('.icon');

    icon.addEventListener('click', function() {
        if (icon.classList.contains('jour')) {
            document.querySelector(".page").classList.add("clair")
            docu

        } else {
            icon.classList.remove('nuit');
            icon.classList.add('jour');
        }
    });
});

