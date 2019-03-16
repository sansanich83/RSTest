var demoButton = document.querySelector('.begin-demo');
var demoModal = document.querySelector('.demo-modal');

demoButton.addEventListener('click', function () {
    $('.demo-modal').hide(5000, function () {
        $(demoModal).remove();
    });
});