'use strict'

window.addEventListener('DOMContentLoaded', () => {
    
    const tabContent = document.querySelectorAll('.tabcontent'),
          allTabs = document.querySelector('.tabheader__items'),
          tab = document.querySelectorAll('.tabheader__item');

    function hideTabContent() {

        tabContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show', 'fade');
        });

        tab.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tab[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    allTabs.addEventListener('click', (element) => {
        const target = element.target;

        if(target && target.classList.contains('tabheader__item')) {
            tab.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});

