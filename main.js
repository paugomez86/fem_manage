const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
        ? navToggle.setAttribute('aria-expanded', false) 
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
});

const slider = new A11YSlider(document.querySelector('.slider'), {
    dots: true,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    responsive: {
        600: {
            dots: false,
            slidesToShow: 2,
        },
        960: {
            dots: false,
            slidesToShow: 3
        }
      }
  });