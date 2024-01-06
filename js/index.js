const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },
  autoplay: {
    delay: 5000,
  },

  loop: true
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // cuando el ancho de viewport es menor a 800
    800: {
      slidesPerView: 3.5,
    },
  },
});


$('#return-to-top').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 1000);
});

window.addEventListener('scroll', function () {
  console.log("scroll");
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200); 
    $('.wsp_button').fadeIn(200);   // Fade in the arrow
    $("#nav").css({
      "background-color": "#fff",
      "outline": "2px solid rgba(209, 213, 219, 0.3)",
      "box-shadow": "rgba(0, 0, 0, 0.45) 0px 25px 20px -30px"
    });
    $(".a-links, .ul-a, .menu").css({
      "color": "#222",
      
    });
    $("#image").attr("src", "../assets/logo_black.png");
    $(".ul-ul").css({
      "background-color": "#fff"
    });
     
  } else {
    $('#return-to-top').fadeOut(200); 
    $('.wsp_button').fadeOut(200);   // Else fade out the arrow
    $("#nav").css({
      "backdrop-filter": "blur(1px) saturate(200%)",
      "-webkit-backdrop-filter": "blur(1px) saturate(200%)",
      "background-color": "rgba(0, 0, 0, 0.28)",
      "outline": "none",
      "box-shadow": "none"
    });
    $(".a-links, .ul-a, .menu").css({
      "color": "#fff"
    });
    $("#image").attr("src", "../assets/logo.png");
    $(".ul-ul").css({
      "backdrop-filter": "blur(1px) saturate(200%)",
      "-webkit-backdrop-filter": "blur(1px) saturate(200%)",
      "background-color": "rgba(0, 0, 0, 0.28)"
    });
  }
});

$("#myButton").on("click", function() {
  // Abre el menú agregando la clase 'menu-open' al menú
  $(".menu_contenedor").addClass('menu-open');
});

$(".equis").on("click", function() {
  // Cierra el menú eliminando la clase 'menu-open' del menú
  $(".menu_contenedor").removeClass('menu-open');
});

$(".btn_womens").on("click", function() {
  window.location.href = '../html/womens.html';
  
});
$(".btn_mens").on("click", function() {
  window.location.href = '../html/womens.html';
  
});
