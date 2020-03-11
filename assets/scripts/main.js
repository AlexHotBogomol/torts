import { ScrollScene } from 'scrollscene';
import gsap from "gsap";


$( document ).ready(function() {
  const $shopSlider = $('.shops-slider'),
        $shopSliderNav = $('.shops-slider-nav');
  $shopSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    arrows: false,
    dots: false
  });
  $shopSliderNav.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    initialSlide: 1,
    draggable: false,
    fade: true,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    nextArrow: '<button type="button" class="custom-slick-next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M10.4167 25H39.5834" stroke="#462426" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path d="M25 10.4166L39.5833 25L25 39.5833" stroke="#462426" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '</svg>\n</button>'
  });

  $shopSliderNav.find('.slider-img').on('click', function(){
    $shopSlider.slick('slickNext');
    $shopSliderNav.slick('slickNext');
  });

  $shopSliderNav.find('.custom-slick-next').on('click', function(){
    $shopSlider.slick('slickNext');
    $shopSliderNav.slick('slickNext');
  });

  //burger

  const headerBurger = document.querySelector('.header-burger');
  const overlay = document.querySelector('.overlay');
  const headerNav = document.querySelector('.header-nav');

  headerBurger.addEventListener('click', (event) => {
    headerBurger.classList.toggle('open');
    overlay.classList.toggle('open');
    headerNav.classList.toggle('open');
  });

  overlay.addEventListener('click', (event) => {
    overlay.classList.remove('open');
    headerBurger.classList.remove('open');
    headerNav.classList.remove('open');
  });

  //gsap animation


  function initHomeAnim() {
    if (window.matchMedia("(min-width: 1800px)").matches) {
      const tl = gsap.timeline();
      tl.from(".welcome-img--1", {x: -700, duration: 1});
      tl.from(".welcome-img--2", {y: -700, duration: 1}, "-=1");
      tl.from(".welcome-img--3", {x: 700, duration: 1}, "-=1");
      tl.from(".welcome-content", {x: 25, opacity: 0, duration: 1}, "-=0.5");

      const homeAboutUs = document.querySelector(".homeAboutUs");
      const tl2 = gsap.timeline({paused: true});
      tl2.from(".homeAboutUs-img--1", {x: 500, opacity: 0, duration: 1});
      tl2.from(".homeAboutUs-img--2", {y: 100, opacity: 0, duration: 0.5}, "-=0.5");
      tl2.from(".homeAboutUs-heading", {x: -50, opacity: 0, duration: 0.5}, "-=0.5");
      tl2.from(".homeAboutUs-list .listItem:nth-child(1)", {x: -100, opacity: 0, duration: 0.5});
      tl2.from(".homeAboutUs-list .listItem:nth-child(2)", {x: -100, opacity: 0, duration: 0.5});
      tl2.from(".homeAboutUs-list .listItem:nth-child(3)", {x: -100, opacity: 0, duration: 0.5});

      const scrollScene = new ScrollScene({
        triggerElement: homeAboutUs,
        triggerHook: 0.4,
        gsap: {
          timeline: tl2,
        },
      });

      const homeProduction = document.querySelector(".homeProduction");
      const tl3 = gsap.timeline({paused: true});
      tl3.from("#homeProduction-card--1", {y: 200, opacity: 0, duration: 1});
      tl3.from(".homeProduction-heading", {x: -50, opacity: 0, duration: 0.5});
      tl3.from("#homeProduction-card--2", {y: 200, opacity: 0, duration: 1}, "-=1");
      tl3.from("#homeProduction-card--3", {y: 200, opacity: 0, duration: 1}, "-=0.5");
      const scrollScene2 = new ScrollScene({
        triggerElement: homeProduction,
        triggerHook: 0.4,
        gsap: {
          timeline: tl3,
        },
      });

      const insta = document.querySelector(".insta");
      const tl4 = gsap.timeline({paused: true});
      tl4.from(".insta-info", {x: -50, opacity: 0, duration: 0.5});
      tl4.from(".insta-link", {opacity: 0, duration: 0.5}, "-=0.5");

      const scrollScene3 = new ScrollScene({
        triggerElement: insta,
        triggerHook: 0.5,
        gsap: {
          timeline: tl4,
        },
      });

      const shops = document.querySelector(".shops");
      const tl5 = gsap.timeline({paused: true});
      tl5.from(".shops-heading", {x: 50, opacity: 0, duration: 0.5});
      tl5.from(".shops-slider-nav .slider-img", {scale: 0.95, opacity: 0, duration: 0.5});
      tl5.from(".shops-slider .slider-content span", {x: 50, opacity: 0, duration: 0.5}, "-=0.5");

      const scrollScene4 = new ScrollScene({
        triggerElement: shops,
        triggerHook: 0.35,
        gsap: {
          timeline: tl5,
        },
      });


      const lastNews = document.querySelector('.lastNews');
      const tl6 = gsap.timeline({paused: true});
      tl6.from("#lastNews-card--1 .card-img", {y: -200, opacity: 0, duration: 1});
      tl6.from("#lastNews-card--2 .card-img", {y: -200, opacity: 0, duration: 1}, "-=1");
      tl6.from("#lastNews-btn", {scale: 1.1, opacity: 0, duration: 0.5}, "-=1");

      const scrollScene5 = new ScrollScene({
        triggerElement: lastNews,
        triggerHook: 0.5,
        gsap: {
          timeline: tl6,
        },
      });
    }}

  // initHomeAnim();

  // window.addEventListener('resize', initHomeAnim);
});
