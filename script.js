

function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    var theme = document.getElementsByTagName('link')[0]; 

    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == 'dark-theme.css') { 
        theme.setAttribute('href', 'light-theme.css'); 
        theme.setAttribute('style', 'background-color=#F2F2F2');
        document.getElementById('myText').innerHTML = "dark mode"
    } else if (theme.getAttribute('href') == 'light-theme.css'){ 
        theme.setAttribute('href', 'dark-theme.css'); 
        theme.setAttribute('style', 'background-color=rgb(72,72,72)');
        document.getElementById('myText').innerHTML = "light mode"

    } 
}



var topBtn = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop() > 20 || document.documentElement.scrollTop > 20){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 