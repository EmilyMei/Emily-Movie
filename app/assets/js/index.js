/**
 * Created by zam on 2016/8/29.
 */
var mySwiper = new Swiper('#slider', {
    autoplay: 2300,
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
    autoplayDisableOnInteraction : false,
})
setTimeout(function(){
    var swiper = new Swiper('#news', {
        autoplay: 2000,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
},2000)