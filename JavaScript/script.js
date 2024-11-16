let profile_box = document.querySelector('.profile_box');
let profile = document.querySelector('.profile');
let moreIcone = document.querySelector('#moreIcone');

profile_box.addEventListener('click', ()=> {
    profile.classList.toggle('show');
})

moreIcone.addEventListener('click', ()=> {
    profile.classList.toggle('show');
})