'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.initProps();
        this.initEvents();
    }

    _createClass(App, [{
        key: 'initProps',
        value: function initProps() {
            this.showPopupButton = document.querySelector('.show-popup-button');
            this.xPopupButton = document.querySelector('.x-button');
            this.nextPopupButton = document.querySelector('.next-button');
            this.cancelPopupButton = document.querySelector('.cancel-button');

            this.arrOfElementsOnClickHide = [this.xPopupButton, this.nextPopupButton, this.cancelPopupButton];

            this.popupContainer = document.querySelector('.popup-container');
            this.popupContent = document.querySelector('.popup > .content');
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this = this;

            //show popup
            this.showPopupButton.addEventListener('click', function (event) {
                var req = new XMLHttpRequest();
                req.onreadystatechange = function () {
                    if (req.readyState == 4 && req.status == 200) {
                        _this.showPopup();
                        _this.popupContent.innerHTML = req.responseText;
                        _this.handleTextOverflowPositioning();
                    }
                };
                req.open('GET', 'http://localhost/simplepopupajaxhandler.php', true);
                req.send();
            });

            // close popup when user clicks on x button, next button, or cancel button
            this.arrOfElementsOnClickHide.forEach(function (v) {
                return v.addEventListener('click', function () {
                    return _this.hidePopup();
                });
            });

            // on click only outside of actual popup closes the popup
            this.popupContainer.addEventListener('click', function (event) {
                if (event.target.classList.contains('popup-container')) {
                    _this.hidePopup();
                }
            });

            // TODO Need to debounce this resize handler so it doesn't fire excessively
            window.addEventListener('resize', function () {
                return _this.handleTextOverflowPositioning();
            });
        }
    }, {
        key: 'showPopup',
        value: function showPopup() {
            this.popupContainer.classList.add('show');
        }
    }, {
        key: 'hidePopup',
        value: function hidePopup() {
            this.popupContainer.classList.remove('show');
        }
    }, {
        key: 'handleTextOverflowPositioning',
        value: function handleTextOverflowPositioning() {
            if (this.popupContainer.classList.contains('show')) {
                var el = this.popupContent;
                if (el.scrollHeight > el.clientHeight) {
                    // if overflown then we need display to be block so that the text starts at the beginning of the container
                    this.popupContent.style.display = '';
                } else {
                    // if not overflown then position content in center with flex
                    this.popupContent.style.display = 'flex';
                }
            }
        }
    }]);

    return App;
}();

window.addEventListener('load', function (event) {
    new App();
});