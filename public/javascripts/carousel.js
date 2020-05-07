$(".center").slick({
  accessibility: true,
  autoplay: false,
  centerMode: true,
  centerPadding: "0.5%",
  slidesToShow: 3,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "5%",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
      },
    },
  ],
});
