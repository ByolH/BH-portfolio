//라이트박스
lightGallery(document.querySelector(".lightgallery"), {
  plugins: [lgZoom],
  speed: 500,
});

//윈도우팝업
$(".window").click(function () {
  //window.open('파일명', '팝업이름', '옵션설정');
  //옵션 ㅣ left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open(
    "popup.html",
    "popup01",
    "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"
  );
});

//레이어팝업
$(".layer").click(function () {
  $("#layer").css("display", "block");
});

$("#layer .close").click(function () {
  $("#layer").css("display", "none");
});

// 탭메뉴
const $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings()
    .removeClass("active")
    .find(">ul")
    .hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

// 배너
// html 마크업 셋팅 - css 연동 - js 연동 - js 호출
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

// 갤러리
$(".gallery_img").slick({
  arrows: false,
  fade: true,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

$(".play").click(function () {
  $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function () {
  $(".gallery_img").slick("slickPause");
});

$(".prev").click(function () {
  $(".gallery_img").slick("slickPrev");
});

$(".next").click(function () {
  $(".gallery_img").slick("slickNext");
});

// 버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function () {
  //1. $('nav').css('display','block');
  //nav {display:block;} (css)
  //클릭했을 때 위로 올라간다면 preventDefault(); 해주면됨
  //2. $('nav').show();
  //3.$('nav').fadeIn();
  //4. $('nav').slideDown();
  //5. $('nav').toggle();
  //6. $('nav').fadeToggle();
  $("nav").slideToggle(200);
  $(this).toggleClass("on");
});
