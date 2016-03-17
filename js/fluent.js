(function(){
    'use strict';
    var toggle = document.querySelectorAll("[fluent-modal]");
    for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener('click', function(e){
            var selector = e.target.getAttribute('fluent-modal').toString();
            var modal = document.querySelector(selector);
            var exit = document.querySelector(selector + ' .exit');
            exit.addEventListener('click', function () {
                modal.style.display = 'none';
            });
            if (getComputedStyle(modal).display == 'none') {
                modal.style.display = 'block';
            } else {
                modal.style.display = 'none';
            }
        }, false);
    }
}());