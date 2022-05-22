var btn = document.querySelectorAll('.hamburger button');

btn[0].addEventListener('click', function(){
    var btn_mobile = document.getElementsByClassName('navbar');
    var menu = document.getElementsByClassName('menu');

    if(btn_mobile[0].style.display == "none"){
        btn_mobile[0].style.display = "flex";
        document.querySelectorAll('.hamburger button img')[0].src = "Icones/Mobile/Close.svg";
        menu[0].style.position = "fixed";
    }
    else{
        btn_mobile[0].style.display = "none";
        menu[0].style. position = "static";
        document.querySelectorAll('.hamburger button img')[0].src = "Icones/Mobile/Hamburger.svg";
    }
})


