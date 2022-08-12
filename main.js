const navbar = document.querySelector('.navbar'),
  menu = document.getElementById('menubtn').addEventListener('click', () => {
    navbar.classList.toggle('active');
  }),
  search = document.getElementById('search'),
  searchbtn = document.getElementById('search-btn').addEventListener('click', () => {
    search.classList.toggle('active');
  });


window.onscroll = () => {
  navbar.classList.remove('active');
  search.classList.remove('active');
};


var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
