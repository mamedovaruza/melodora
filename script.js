const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('.material-icons');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
        ? 'close'
        : 'menu';                                                                        
    mobile_menu.classList.toggle('is-open');
   
    
})

//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