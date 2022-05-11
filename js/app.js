const arrowUp = document.querySelectorAll('.arrowup');
const arrowDown = document.querySelectorAll('.arrowdown');
const overlay = document.querySelector('.overlay');
const lists = document.querySelectorAll('.list__item');
const close = document.querySelector('.close_menu');
const open = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const subList = document.querySelectorAll('.subList');
window.onclick = (event) => {
    if (event.target.matches('.overlay')) {
        overlay.classList.add('none');
    }
}
document.querySelector('.darkmode-toggle').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkmode');
});
open.addEventListener('click', () => {
    overlay.classList.remove('none');
    nav.style.display = 'flex';
});
close.addEventListener('click', () => {
    overlay.classList.add('none');
    nav.style.display = 'none';
});
lists.forEach(e => {
    e.addEventListener('click', () => {
        lists.forEach((e) => {
            e.classList.remove('active');
        });
        subList.forEach(e => {
            e.classList.add('none');
        });
        e.classList.add('active');
        const subL = document.querySelector(`.subList[data-sub='${e.dataset.sub}']`);
        if (subL !== null) {
            subL.classList.remove('none');

        }

        window.onclick = (event) => {
            if (
                event.target.matches('.nav') ||
                event.target.matches('header') ||
                event.target.matches('logo') ||
                event.target.matches('main') ||
                event.target.matches('.head') ||
                event.target.matches('.hero') ||
                event.target.matches('.title') ||
                event.target.matches('.overlay')

            ) {
                lists.forEach((e) => {
                    e.classList.remove('active');
                });
                subL.classList.add('none');
            }
        }

    });

});
