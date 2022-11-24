let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

function hover () {

    heading.textContent = "действительно все!"
};

chooseBtn.addEventListener('mouseenter', function(){
    heading.textContent = "действительно все!"
});


receiveBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

nameInput.addEventListener('input', function(){
    text.value = `меня зовут ${nameInput.value} и я хочу спросить: `
})



















