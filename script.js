const questionTitle = document.querySelectorAll('.description');//.pois e uma class

questionTitle.forEach((element) => {
    element.addEventListener('click', () => {
        element.querySelector('.image__icon').classList.toggle('hidden');
        element.querySelector('.image__icon-mini').classList.toggle('hidden');
    });
});