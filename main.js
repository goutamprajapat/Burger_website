const navbar = document.querySelector('.navbar'),
  menu = document.getElementById('menubtn').addEventListener('click', () => {
    navbar.classList.toggle('active');
  }),
  search = document.getElementById('search'),
  searchbtn = document.getElementById('search-btn').addEventListener('click', () => {
    search.classList.toggle('active');
  })
