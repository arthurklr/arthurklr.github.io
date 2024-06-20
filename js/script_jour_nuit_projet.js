document.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector(".icon")
    const page = document.querySelector(".page")
    const header = document.querySelector("header")



    icon.addEventListener('click', function () {
        icon.classList.toggle('nuit');
        icon.classList.toggle('jour');
        if(icon.classList.contains('jour')){
            page.classList.add('clair');
            header.classList.add('clair')
        } else{
            page.classList.remove('clair')
            header.classList.remove('clair')

        }
    })

})


