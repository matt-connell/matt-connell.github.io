

function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    var theme = document.getElementsByTagName('link')[0]; 
    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == 'dark-theme.css') { 
        theme.setAttribute('href', 'light-theme.css'); 
        document.getElementById('myText').innerHTML = "dark mode"

        //var navClass = document.getElementById('top').className = "navbar navbar-expand-md navbar-light bg-light sticky-top text-light";
        //var navUl = document.getElementById('navUl').className = "nav navbar-nav navbar-right bg-light";
        //var navLi = document.getElementById('navLi').className = "nav-item bg-light";

    } else if (theme.getAttribute('href') == 'light-theme.css'){ 
        theme.setAttribute('href', 'dark-theme.css'); 
        document.getElementById('myText').innerHTML = "light mode"
        //var navClass = document.getElementById('top').className = "navbar navbar-expand-md navbar-dark bg-dark sticky-top text-dark";
        //var navUl = document.getElementById('navUl').className = "nav navbar-nav navbar-right bg-dark";
        //var navLi = document.getElementById('navLi').className = "nav-item bg-dark";
        
    } 
}


function toggleButtonIcon(){
    var iconClass = document.getElementById('iconSvg');
    var iconPath = document.getElementById('iconPath');

    let classI = 'hey';
    let dIcon = 'sup';

    if(iconClass.getAttribute('class') == 'bi bi-arrow-down-left'){
        //this is the open, <- arrow
        classI = 'bi bi-arrow-up-right';
        dIcon = 'M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z';
        iconClass.setAttribute('class', classI);
        iconPath.setAttribute('d', dIcon);
        console.log(classI);
    } 
    
    if (iconClass.getAttribute('class' == 'bi bi-arrow-up-right')){

        classI = 'bi bi-arrow-down-left';
        dIcon = 'M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z';
        iconClass.setAttribute('class', classI);
        iconPath.setAttribute('d', dIcon);
        console.log(classI);
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
