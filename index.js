window.addEventListener('load', (event) => {
    const showPopupButton = document.querySelector('.show-popup-button');
    const xPopupButton = document.querySelector('.x-button');
    const nextPopupButton = document.querySelector('.next-button');
    const cancelPopupButton = document.querySelector('.cancel-button');

    const popupContainer = document.querySelector('.popup-container');
    const popupContentArea = document.querySelector('.popup > .content');

    showPopupButton.addEventListener('click', (event) => {
        var str = 'h';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                popupContainer.classList.add('show');
                popupContentArea.innerHTML = this.responseText;
            }



        };
        xmlhttp.open("GET", "http://localhost/simplepopupajaxhandler.php?q=" + str, true);
        xmlhttp.send();
    });

    xPopupButton.addEventListener('click', (event) => {
        popupContainer.classList.remove('show');
    });

    cancelPopupButton.addEventListener('click', (event) => {
        popupContainer.classList.remove('show');
    });

    popupContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup-container')) {
            popupContainer.classList.remove('show');
        }
    });
});
