// Responsive Navbar Toggle
$("#nav").click(function(){
    $("#nav").toggleClass("responsive-nav");
  });
  // Owl Carousal
  $("#owl-slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout:6000,
    responsive: {
      0: {
        items: 1
      }
    }
  });



  const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const socialIcons = document.querySelector(".social-icons");

navToggle.addEventListener("click", function () {
  console.log(links.classList);
  links.classList.toggle("show-links");
  socialIcons.classList.toggle("show-icons");
});









