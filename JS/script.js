document.addEventListener('DOMContentLoaded', function(){
    const disable = document.getElementById('disable-notification');
    const toggle = document.getElementById('toggle-notification');

    toggle.addEventListener('click', function(){
        toggle.style.display = 'none'
        disable.style.display = 'block'
    })

    disable.addEventListener('click', function(){
        disable.style.display = 'none'
        toggle.style.display = 'block'
    })
})