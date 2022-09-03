const btnHamb = document.querySelector('#buttonhamb');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamb.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //close hamb
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else{
        body.classList.add('noscroll')
        header.classList.add('open'); //open hamb
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
})