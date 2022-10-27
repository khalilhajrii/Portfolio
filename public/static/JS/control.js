
window.onload = function() {
var navbar = document.getElementById("navv")
window.onscroll = function(){
    if(window.scrollY >0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled')
    }
}
};


