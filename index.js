//BUTTOM HAUT DE PAGE 
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior : "smooth"
    })

})

// BUTTON DARK MODE
const checkbox = document.getElementById('checked');

checkbox.addEventListener('change', () => {
    //change the theme of cv
    document.body.classList.toggle('dark')
});

