var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
	slidesPerView:3,
	spaceBetween : 16,
	navigation: {
      	nextEl: '.swiper-button-next',
      	prevEl: '.swiper-button-prev',
    },
})