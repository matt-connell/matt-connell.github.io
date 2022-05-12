

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


function toggleButtonIcon(){
    var iconClass = document.getElementById('iconSvg');
    var iconPath = document.getElementById('iconPath');
    console.log(iconClass.class);
    if(iconClass.getAttribute('class') == 'bi bi-arrow-down-left'){
        //this is the open, <- arrow
        iconClass.class = 'bi bi-arrow-up-right';
        iconClass.setAttribute('class', 'bi bi-arrow-up-right');
        iconPath.setAttribute('d', 'M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z');
        iconPath.d = 'M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z';
    
    } 
    
    if (iconClass.getAttribute('class' == 'bi bi-arrow-up-right')){

        iconClass.class = 'bi bi-arrow-down-left';
        iconClass.setAttribute('class', 'bi bi-arrow-down-left');
        iconPath.setAttribute('d', 'M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z');
        iconPath.class = 'M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z';

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
