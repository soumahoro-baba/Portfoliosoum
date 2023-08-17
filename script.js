


//AOS
AOS.init();

//TYPED
var typed = new typed('.typed', {
   Strings:["Titulaire d'une Licence en Electronique Electrotechnique,Automatique et Informatique (EEAI) de l'UFHB., Etactuellement inscris en Licence Informatique option Développement d'Applicationsete-commerces (DAS), Réseau et SécuritéInformatique(RSI)àlUniversité VirtuelledeCote d'Ivoire (UVCI). ,Je suis à la recherche de stage afin d'acquérir del'expérience et surtout mettre en exercice lesconnaissances acquises lors de ma formation.Veuillez agréer..."],
   typeSpeed: 20,
});

//COMPTEUR LIVE
let compteur = 0;
$(window).scroll(function(){
    const top = $('.counter').offset().top = window.innerHeight;
    if (counter == 0 && $(window).scrollTop () > top) {

        $('.counter-value').each(function(){
            let $this = $(this),
            countTo = $this.attr('data-count');
         $({
            countNum: $this.text()
         }).animate({
            countNum : countTo
         },
         {
            duration : 10000,
            easing :'swing',
            stop: function(){
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);  
            }
         });
        });
        compteur = 1;
    }
});
// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

Window.addEventListener ('scroll' , function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});
