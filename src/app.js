class App {

    constructor() {
        this.initProps();
        this.initEvents();
    }

    initProps() {
        this.showPopupButton = document.querySelector('.show-popup-button');
        this.xPopupButton = document.querySelector('.x-button');
        this.nextPopupButton = document.querySelector('.next-button');
        this.cancelPopupButton = document.querySelector('.cancel-button');

        this.arrOfElementsOnClickHide = [this.xPopupButton, this.nextPopupButton, this.cancelPopupButton];

        this.popupContainer = document.querySelector('.popup-container');
        this.popupContent = document.querySelector('.popup > .content');
    }

    initEvents() {
        //show popup
        this.showPopupButton.addEventListener('click', (event) => {
            const req = new XMLHttpRequest();
            req.onreadystatechange = () => {
                if (req.readyState == 4 && req.status == 200) {
                    this.showPopup();
                    this.popupContent.innerHTML = req.responseText;
                    this.handleTextOverflowPositioning()
                }
            };
            req.open('GET', 'http://localhost/simplepopupajaxhandler.php', true);
            req.send();
        });

        // close popup when user clicks on x button, next button, or cancel button
        this.arrOfElementsOnClickHide.forEach((v) => v.addEventListener('click', () => this.hidePopup()));

        // on click only outside of actual popup closes the popup
        this.popupContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup-container')) {
                this.hidePopup();
            }
        });

        // TODO Need to debounce this resize handler so it doesn't fire excessively
        window.addEventListener('resize', () => this.handleTextOverflowPositioning());
    }

    showPopup() {
        this.popupContainer.classList.add('show');
    }

    hidePopup() {
        this.popupContainer.classList.remove(
            'show'
        );
    }

    handleTextOverflowPositioning() {
        if (this.popupContainer.classList.contains('show')) {
            const el = this.popupContent;
            if (el.scrollHeight > el.clientHeight) {
                // if overflown then we need display to be block so that the text starts at the beginning of the container
                this.popupContent.style.display = '';
            } else {
                // if not overflown then position content in center with flex
                this.popupContent.style.display = 'flex';
            }
        }
    }
}

window.addEventListener('load', (event) => {
    new App();
});

