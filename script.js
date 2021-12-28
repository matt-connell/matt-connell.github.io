function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    var theme = document.getElementsByTagName('link')[0]; 

    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == 'dark-theme.css') { 
        theme.setAttribute('href', 'light-theme.css'); 
    } else { 
        theme.setAttribute('href', 'dark-theme.css'); 
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
