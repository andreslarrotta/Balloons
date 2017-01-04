$(function(){
     $('a[href*=#]').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 5000);
                 return false;
            }
       }
   });
});
function home(){
    document.getElementById("botonLogo").click();
}
window.onload = function(){
    home();
    var cantidadImagenes = document.images.length;
    if(document.images.length == cantidadImagenes){
        setInterval(function () {
            $("#loading").fadeOut(2000);
        }, 5000);    
    }
};
function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
    var prlx_lyr_1_2 = document.getElementById('prlx_lyr_1_2');
	var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
    var prlx_lyr_2_2 = document.getElementById('prlx_lyr_2_2');
    var prlx_lyr_3 = document.getElementById('prlx_lyr_3');
    var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
    var prlx_lyr_5 = document.getElementById('prlx_lyr_5');
    var prlx_lyr_6 = document.getElementById('prlx_lyr_6');
    var prlx_lyr_7 = document.getElementById('prlx_lyr_7');
    var prlx_lyr_8 = document.getElementById('prlx_lyr_8');
    var prlx_lyr_9 = document.getElementById('prlx_lyr_9');
    var prlx_lyr_10 = document.getElementById('prlx_lyr_10');
	prlx_lyr_1.style.top = -(window.pageYOffset / 1)+'px';
    prlx_lyr_1_2.style.top = -(window.pageYOffset / 1)+'px';
	prlx_lyr_2.style.top = -(window.pageYOffset / 2)+'px';
    prlx_lyr_2_2.style.top = -(window.pageYOffset / 2)+'px';
    prlx_lyr_3.style.top = (window.pageYOffset / 100)+'px';
    prlx_lyr_4.style.top = -(window.pageYOffset / 3)+'px';
    prlx_lyr_5.style.top = -(window.pageYOffset / 3)+'px';
    prlx_lyr_6.style.top = -(window.pageYOffset / 4)+'px';
    prlx_lyr_4.style.left = (window.pageYOffset / 90)+'px';
    prlx_lyr_5.style.right = (window.pageYOffset / 70)+'px';
    prlx_lyr_6.style.left = (window.pageYOffset / 40)+'px';
    prlx_lyr_7.style.top = -(window.pageYOffset / 3)+'px';
    prlx_lyr_8.style.left = -(window.pageYOffset / 2)+'px';
    prlx_lyr_9.style.right = -(window.pageYOffset / 2)+'px';
    prlx_lyr_10.style.left = (window.pageYOffset / 3)+'px';
    
}
window.addEventListener("scroll", parallax, false);