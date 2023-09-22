/*
    FILE NAME           : DESIGN.JS
    PROJECT NAME        : HONJI JAPANESE MAIN PAGE
    HTML/CSS AUTHOR     : TTUBIN(TTUBINY@GMAIL.COM)
    WRITTEN DATE        : 2023/09/19 ~
    BROWSER             : CHROME
*/
/* SIDEBAR */
var stmnLEFT = 0; // 오른쪽 여백
var stmnGAP1 = 0; // 위쪽 여백
var stmnGAP2 = 150; // 스크롤시 브라우저 위쪽과 떨어지는 거리
var stmnBASE = 150; // 스크롤 시작위치
var stmnActivateSpeed = 35; //스크롤을 인식하는 딜레이 (숫자가 클수록 느리게 인식)
var stmnScrollSpeed = 20; //스크롤 속도 (클수록 느림)
var stmnTimer;

function RefreshStaticMenu() {
    var stmnStartPoint, stmnEndPoint;
    stmnStartPoint = parseInt(document.getElementById("sidebar").style.top, 10);
    stmnEndPoint = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + stmnGAP2;
    if (stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1;
    if (stmnStartPoint != stmnEndPoint) {
        stmnScrollAmount = Math.ceil( Math.abs( stmnEndPoint - stmnStartPoint ) / 15 );
        document.getElementById("sidebar").style.top = parseInt(document.getElementById("sidebar").style.top, 10) + ( ( stmnEndPoint<stmnStartPoint ) ? -stmnScrollAmount : stmnScrollAmount ) + 'px';
        stmnRefreshTimer = stmnScrollSpeed;
    }
    stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed);
}
function InitializeStaticMenu() {
    document.getElementById("sidebar").style.right = stmnLEFT + "px";  //처음에 오른쪽에 위치. left로 바꿔도.
    document.getElementById("sidebar").style.top = document.body.scrollTop + stmnBASE + "px";
    RefreshStaticMenu();
}

let visualSwiper, subjectSwiper, honjiSwiper, youtubeSwiper;
$(function(){
    /* HEADER MOB */
    $(".head-area.mob .head-area__menu").on("click", function(){
        $(".head-area.mob .head-area__box").addClass("on");
        return false;
    });
    $(".head-area.mob .head-menu__close").on("click", function(){
        $(".head-area.mob .head-area__box").removeClass("on");
        return false;
    });
    $(".head-area.mob .depth2").slideUp();
    $(".head-area.mob .depth1").on("click", function() {
        $(this).next(".head-area.mob .depth2").stop().slideToggle(300);
        $(this).next(".head-area.mob .depth2").siblings(".head-area.mob .depth2").slideUp(300); // 1개씩 펼치기
        return false;
    });

    /* VISUAL AREA */
    visualSwiper = new Swiper(".visual-area .swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /* SUBJECT AREA */
    subjectSwiper = new Swiper(".subject-area .swiper", {
        loop: true,
        loopedSlides: 1,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 16,
    });

    /* HONJI AREA */
    honjiSwiper = new Swiper(".honji-area .swiper", {
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});