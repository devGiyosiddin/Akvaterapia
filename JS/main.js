const elMenuButton = document.querySelector('.menu-button');
const elSitenav = document.querySelector('.sitenav');
if (elMenuButton) {
    elMenuButton.addEventListener('click', function () {
        elSitenav.classList.toggle('sitenav--active')
    })
}